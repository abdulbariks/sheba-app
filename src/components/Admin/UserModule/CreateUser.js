import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useAuth from "../../../hooks/useAuth";

const CreateUser = (props) => {
  const { setUsers } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => processSignUp(data);

  const processSignUp = (data) => {
    const formData = {
      name: data.name,
      email: data.email,
      password: data.password,
      role: data.role,
    };

    const btn = document.getElementById("sign_up_btn_admin");
    btn.innerText = "Processing Registration...";
    btn.disabled = true;

    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/user", {
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
              const response = await fetch("http://localhost:5000/users");
              const result = await response.json();

              if (result) {
                setUsers(result.users);
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
        document.getElementById("sign_up_form_admin").reset();
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
      id="sign_up_form_admin"
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto flex content-center items-center lg:w-2/3 xl:2/3 w-full h-96 px-5"
    >
      <div className="w-full">
        <h1 className="text-center text-xl my-5">Create an Account</h1>
        <div className="my-2">
          <input
            type="text"
            placeholder="Enter Full Name"
            autoComplete={`name`}
            className="w-full p-2 border-2 rounded border-sky-600 focus:outline-slate-800"
            {...register("name", { required: true })}
          />
          {errors.email && (
            <span className="text-rose-700">Name is Required</span>
          )}
        </div>
        <div className="my-2">
          <input
            type="email"
            placeholder="Enter Email"
            autoComplete={`email`}
            className="w-full p-2 border-2 rounded border-sky-600 focus:outline-slate-800"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-rose-700">Email Required</span>
          )}
        </div>
        <div className="my-2">
          <input
            type="password"
            placeholder="Enter Password"
            autoComplete={`current-password`}
            className="w-full p-2 border-2 rounded border-sky-600 focus:outline-slate-800"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-rose-700">Password Required</span>
          )}
        </div>
        <select
          {...register("role", { required: true })}
          defaultValue={``}
          className="p-2 border border-sky-700 focus:outline-sky-900 rou mt-2 w-full"
        >
          <option value="" disabled>
            Select User Role
          </option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="staff">Staff</option>
        </select>

        <button
          id="sign_up_btn_admin"
          type="submit"
          className="bg-sky-700 hover:bg-sky-900 text-white w-full py-2 my-2 rounded-md"
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default CreateUser;
