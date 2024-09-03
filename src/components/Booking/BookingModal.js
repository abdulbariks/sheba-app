import React, { useState } from "react";
import useAuth from "./../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const BookingModal = ({ isOpen, onClose, children }) => {
  const [bookingError, setBookingErrror] = useState("");
  const { slots, user, service, staff, slot, setSlot } = useAuth();
  const navigate = useNavigate();

  function formatTime(timeString) {
    const [hours, minutes] = timeString.split(":");
    const formattedHours = hours % 12 || 12;
    const period = hours < 12 ? "AM" : "PM";
    return `${formattedHours}:${minutes} ${period}`;
  }

  // console.log(slot);

  const bookNow = async () => {
    if (user.email) {
      if (slot.label) {
        const btn = document.getElementById("pay_now");
        btn.innerText = "Processing Payment...";
        btn.disabled = true;

        const trx_id = await generateTransactionId();

        const formData = {
          date: new Date().toISOString().split("T")[0],
          email: user.email,
          name: user.name,
          service,
          staff,
          slot,
          trx_id,
          status: "Pending",
        };

        console.log(formData);

        const ferchData = async () => {
          try {
            const response = await fetch("http://localhost:5000/booking", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            });
            const result = await response.json();
            if (result.status) {
              console.log(result);
              toast.success(`${result.message}`);
              btn.innerText = "Pay Now";
              btn.disabled = false;
            } else {
              setBookingErrror(result.message);
              btn.innerText = "Pay Now";
              btn.disabled = false;
            }
          } catch (err) {
            ferchData();
          }
        };
        ferchData();
      }
    } else {
      navigate("/login");
    }
  };

  async function generateTransactionId(prefix = "TX") {
    const timeStamp = Date.now();
    const randomNumber = Math.floor(Math.random() * 9000) + 100;
    const transactionId = `${prefix}-${timeStamp}-${randomNumber}`;
    return transactionId;
  }

  return (
    <div
      className={`fixed inset-0 z-10 items-center justify-center overflow-x-hidden overflow-y-auto transition-opacity duration-300 ease-in-out
    ${isOpen ? "flex" : "hidden"}`}
    >
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="relative bg-white rounded-lg w-96">
        {children}
        <div className="p-4 md:p-5">
          <p className="text-gray-500">Select Your Desired Slot:</p>
          <p className="text-rose-300 text-sm">{bookingError}</p>
          <ul className="space-y-4 mb-4 max-h-80 overflow-auto px-2 mt-5">
            {slots.length > 0 &&
              slots.map((slot) => (
                <li key={slot._id}>
                  <input
                    onClick={() => {
                      setBookingErrror("");
                      setSlot(slot);
                    }}
                    // onChangeCapture={(e) => {
                    //   setSlot(slot);
                    // }}
                    type="'radio"
                    id={`slot-${slot._id}`}
                    name="slot"
                    value={`${slot.label}`}
                    className="hidden peer"
                    required
                  />
                  <label
                    htmlFor={`slot-${slot._id}`}
                    className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 
                  rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-700 hover:text-gray-800 hover:bg-gray-100"
                  >
                    <div className="block">
                      <div className="w-full text-lg font-semibold">
                        {slot.label}
                      </div>
                      <div className="w-full text-gray-500">
                        {formatTime(slot.start_time)} -{" "}
                        {formatTime(slot.end_time)}
                      </div>
                    </div>
                    <p>{`-->`}</p>
                  </label>
                </li>
              ))}
          </ul>
          <button
            type="submit"
            id="pay_now"
            onClick={bookNow}
            className="text-white inline-flex  w-full justify-center bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-400 
          font-medium rounded-lg text-sm px-5 py-3 text-center"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
