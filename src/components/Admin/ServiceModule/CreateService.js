import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";

const CreateService = (props) => {
  const { setServices, categories } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => processCreateService(data);

  const processCreateService = async (data) => {
    const imageURL = await handleImageUptoad(data.image[0]);

    const formData = {
      name: data.name,
      category: data.category,
      details: data.details,
      image: imageURL,
    };

    const btn = document.getElementById("create_service_btn_admin");
    btn.innerText = "Creating Service...";
    btn.disabled = true;

    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/service", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const result = await response.json();

        if (result.status) {
          toast.success(`${result.message}`);
          const fetchData = async () => {
            try {
              const response = await fetch("http://localhost:5000/services");
              const result = await response.json();

              if (result) {
                setServices(result.services);
              } else {
                toast.error(`${result.message}`);
              }
            } catch (err) {
              toast.error(`${err}`);
            }
          };
          fetchData();
        } else {
          toast.error(`${result.message}`);
        }
        document.getElementById("create_service_form_admin").reset();
        btn.innerText = "Register";
        btn.disabled = false;
      } catch (err) {
        fetchData();
      }
    };
    fetchData();
  };

  const handleImageUptoad = async (imageFile) => {
    try {
      const imageData = new FormData();
      imageData.set("key", "5bab1808b424b799ff4ee00f950785cb");
      imageData.append("image", imageFile);

      const response = await axios.post(
        "https://api.imgbb.com/1/upload",
        imageData
      );
      return response.data.data.display_url;
    } catch (err) {
      toast.error(err.message);
      return null;
    }
  };
  return (
    <form
      id="create_service_form_admin"
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto flex content-center items-center lg:w-2/3 xl:2/3 w-full h-96 px-5"
    >
      <div className="w-full">
        <h2 className="text-center text-xl my-5">Create an Service</h2>
        <select
          {...register("category", { required: true })}
          defaultValue={``}
          className="p-2 border border-sky-700 focus:outline-sky-900 rou mt-2 w-full"
        >
          <option value="" disabled>
            Select Category
          </option>
          {categories.map((category) => (
            <option key={category._id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        <div className="my-2">
          <input
            type="text"
            placeholder="Enter Service Name"
            autoComplete={`name`}
            className="w-full p-2 border-2 rounded border-sky-600 focus:outline-slate-800"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-rose-700">Name is Required</span>
          )}
        </div>
        <div className="my-2">
          <input
            type="text"
            placeholder="Enter Service Details"
            autoComplete={`details`}
            className="w-full p-2 border-2 rounded border-sky-600 focus:outline-slate-800"
            {...register("details", { required: true })}
          />
          {errors.details && (
            <span className="text-rose-700">Details Required</span>
          )}
        </div>
        <div className="my-2">
          <input
            type="file"
            accept="image"
            className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 
          file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold
           file:bg-sky-600 file:text-sky-700 hover:file:bg-sky-900 hover:file:text-white"
            {...register("image", { required: true })}
          />
          {errors.image && (
            <span className="text-rose-700">Details Required</span>
          )}
        </div>
        <button
          id="create_service_btn_admin"
          type="submit"
          className="bg-sky-700 hover:bg-sky-900 text-white w-full py-2 my-2 rounded-md"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CreateService;
