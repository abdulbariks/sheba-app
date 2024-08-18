import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";

const CreateStaff = (props) => {
  const { services, users, setStaffs } = useAuth();
  const [selectedServices, setSelectedServices] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => processCreateStaff(data);

  const processCreateStaff = async (data) => {
    const imageURL = await handleImageUptoad(data.image[0]);

    const formData = {
      name: data.name,
      services: selectedServices,
      bio: data.bio,
      location: data.location,
      rate: data.rate,
      details: data.details,
      image: imageURL,
    };

    const btn = document.getElementById("create_staff_btn_admin");
    btn.innerText = "Creating Staff...";
    btn.disabled = true;

    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/staff", {
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
              const response = await fetch("http://localhost:5000/staffs");
              const result = await response.json();

              if (result) {
                setStaffs(result.staffs);
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
        document.getElementById("create_staff_form_admin").reset();
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

  const handleServiceAdd = (value) => {
    selectedServices.indexOf(value) === -1
      ? setSelectedServices([...selectedServices, value])
      : setSelectedServices(selectedServices);
  };

  const handleServiceRemove = (value) => {
    setSelectedServices(
      selectedServices.filter((service) => service !== value)
    );
  };
  return (
    <div className="">
      <h2 className="text-center text-xl my-5">Create a Staff</h2>
      {selectedServices.length > 0 && (
        <div className="p-3">
          <div className=" flex flex-wrap gap-1">
            <span>Selected Services</span>
            {selectedServices.map((service) => (
              <p
                key={service}
                onClick={() => handleServiceRemove(service)}
                className="bg-gray-500 text-white text-xs p-2 rounded truncate
                 cursor-pointer flex items-center"
              >
                {service}
              </p>
            ))}
          </div>
        </div>
      )}
      <form
        id="create_staff_form_admin"
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto flex content-center items-center lg:w-2/3 xl:2/3 w-full h-96 px-5"
      >
        <div className="w-full">
          <select
            {...register("service", { required: true })}
            onChangeCapture={(e) => handleServiceAdd(e.target.value)}
            defaultValue={``}
            className="p-2 border border-sky-700 focus:outline-sky-900 rou mt-2 w-full"
          >
            <option value="" disabled>
              Select Services
            </option>
            {services.map((service) => (
              <option key={service._id} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>

          <select
            {...register("name", { required: true })}
            defaultValue={``}
            className="p-2 border border-sky-700 focus:outline-sky-900 rou mt-2 w-full"
          >
            <option value="" disabled>
              Select Staff Name
            </option>
            {users
              .filter((user) => user.role === "staff")
              .map((staff) => (
                <option key={staff._id} value={staff.name}>
                  {staff.name}
                </option>
              ))}
          </select>
          <div className="my-2">
            <input
              type="text"
              placeholder="Bio"
              autoComplete={`bio`}
              className="w-full p-2 border-2 rounded border-sky-600 focus:outline-slate-800"
              {...register("bio", { required: true })}
            />
            {errors.name && <span className="text-rose-700">Bio Required</span>}
          </div>
          <div className="my-2">
            <input
              type="text"
              placeholder="Location"
              autoComplete={`location`}
              className="w-full p-2 border-2 rounded border-sky-600 focus:outline-slate-800"
              {...register("location", { required: true })}
            />
            {errors.location && (
              <span className="text-rose-700">Location Required</span>
            )}
          </div>
          <div className="my-2">
            <input
              type="text"
              placeholder="Rate"
              autoComplete={`rate`}
              className="w-full p-2 border-2 rounded border-sky-600 focus:outline-slate-800"
              {...register("rate", { required: true })}
            />
            {errors.rate && (
              <span className="text-rose-700">Rate Required</span>
            )}
          </div>
          <div className="my-2">
            <input
              type="text"
              placeholder="Details"
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
              <span className="text-rose-700">File Required</span>
            )}
          </div>
          <button
            id="create_staff_btn_admin"
            type="submit"
            className="bg-sky-700 hover:bg-sky-900 text-white w-full py-2 my-2 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateStaff;
