import React, { useState } from "react";
import useAuth from "./../../hooks/useAuth";

const BookingModal = ({ isOpen, onClose, children }) => {
  const [bookingError, setBookingError] = useState("");
  const { slots } = useAuth();

  function formatTime(timeString) {
    const [hours, minutes] = timeString.split(":");
    const formattedHours = hours % 12 || 12;
    const period = hours < 12 ? "AM" : "PM";
    return `${formattedHours}:${minutes} ${period}`;
  }

  return (
    <div
      className={`fixed inset-0 z-10 items-center justify-center overflow-x-hidden overflow-y-auto transition-opacity duration-300 ease-in-out
    ${isOpen ? "flex" : "hidden"}`}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white rounded-lg w-96">
        {children}
        <div className="p-4 md:p-5">
          <p className="text-gray-500">Select Your Desired Slot:</p>
          <p className="text-rose-300 text-sm">{bookingError}</p>
          <ul className="space-y-4 mb-4 max-h-80 overflow-auto px-2">
            {slots.length > 0 &&
              slots.map((slot) => (
                <li key={slot._id}>
                  <input
                    onChangeCapture={() => {}}
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
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
