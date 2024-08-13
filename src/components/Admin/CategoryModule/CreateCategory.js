import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useAuth from "../../../hooks/useAuth";

const CreateCategory = (props) => {
  const { setCategories } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => processCreateCategoty(data);

  const processCreateCategoty = (data) => {
    const formData = {
      name: data.name,
    };

    const btn = document.getElementById("categoty_btn_admin");
    btn.innerText = "Processing Create Category...";
    btn.disabled = true;

    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/category", {
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
              const response = await fetch("http://localhost:5000/categories");
              const result = await response.json();

              if (result) {
                setCategories(result.categories);
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
        document.getElementById("categoty_form_admin").reset();
        btn.innerText = "Register";
        btn.disabled = false;
      } catch (err) {
        fetchData();
      }
    };
    fetchData();
  };
  return (
    <form
      id="categoty_form_admin"
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto flex content-center items-center lg:w-2/3 xl:2/3 w-full h-96 px-5"
    >
      <div className="w-full">
        <h1 className="text-center text-xl my-5">Create Category</h1>
        <div className="my-2">
          <input
            type="text"
            placeholder="Enter Full Name"
            autoComplete={`name`}
            className="w-full p-2 border-2 rounded border-sky-600 focus:outline-slate-800"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-rose-700">Name is Required</span>
          )}
        </div>

        <button
          id="categoty_btn_admin"
          type="submit"
          className="bg-sky-700 hover:bg-sky-900 text-white w-full py-2 my-2 rounded-md"
        >
          Create Categoty
        </button>
      </div>
    </form>
  );
};

export default CreateCategory;
