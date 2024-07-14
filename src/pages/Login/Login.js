import React from "react";
import Navbar from "./../../components/Navbar";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <Navbar />
      <form
        id="login_form"
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto flex content-center items-center lg:w-1/3 xl:1/2 w-full h-96 px-5"
      >
        <div className="w-full">
          <h1 className="text-center text-xl my-5">Sign In</h1>
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
          <p className="my-4 text-sky-800">
            Don't have an Account?{" "}
            <Link to="/sign-up" className="underline">
              Register as User
            </Link>
          </p>
          <button
            id="login_btn"
            type="submit"
            className="bg-sky-700 hover:bg-sky-900 text-white w-full py-2 rounded-md"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
