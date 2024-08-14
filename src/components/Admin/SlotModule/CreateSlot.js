import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useAuth from "../../../hooks/useAuth";

const CreateSlot = (props) => {
  const { setSlots } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => processCreateSlot(data);

  const processCreateSlot = (data) => {
    const formData = {
      label: data.label,
      start_time: data.start_time,
      end_time: data.end_time,
    };

    const btn = document.getElementById("slot_btn_admin");
    btn.innerText = "Processing Create Slot...";
    btn.disabled = true;

    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/slot", {
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
              const response = await fetch("http://localhost:5000/slots");
              const result = await response.json();

              if (result) {
                setSlots(result.slots);
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
        document.getElementById("slot_form_admin").reset();
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
      id="slot_form_admin"
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto flex content-center items-center lg:w-2/3 xl:2/3 w-full h-96 px-5"
    >
      <div className="w-full">
        <h1 className="text-center text-xl my-5">Create an Slot</h1>
        <div className="my-2">
          <input
            type="text"
            placeholder="Enter Label Name"
            autoComplete={`label`}
            className="w-full p-2 border-2 rounded border-sky-600 focus:outline-slate-800"
            {...register("label", { required: true })}
          />
          {errors.email && (
            <span className="text-rose-700">Label is Required</span>
          )}
        </div>
        <div className="my-2">
          <input
            type="time"
            className="w-full p-2 border-2 rounded border-sky-600 focus:outline-slate-800"
            {...register("start_time", { required: true })}
          />
          {errors.start_time && (
            <span className="text-rose-700">Starting Time Required</span>
          )}
        </div>
        <div className="my-2">
          <input
            type="time"
            className="w-full p-2 border-2 rounded border-sky-600 focus:outline-slate-800"
            {...register("end_time", { required: true })}
          />
          {errors.end_time && (
            <span className="text-rose-700">Endding Time Required</span>
          )}
        </div>
        <button
          id="slot_btn_admin"
          type="submit"
          className="bg-sky-700 hover:bg-sky-900 text-white w-full py-2 my-2 rounded-md"
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default CreateSlot;
