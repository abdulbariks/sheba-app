import React from "react";
import useAuth from "./../../hooks/useAuth";

const StaffAbout = ({ staff }) => {
  const { slots, services } = useAuth();

  const categories = [
    ...new Set(
      staff.services.map(
        (staffServiceName) =>
          services.find((service) => service.name === staffServiceName).category
      )
    ),
  ];
  function formatTime(timeString) {
    const [hours, minutes] = timeString.split(":");
    const formattedHours = hours % 12 || 12;
    const period = hours < 12 ? "AM" : "PM";
    return `${formattedHours}:${minutes} ${period}`;
  }

  return (
    <div className="py-10 bg-[#f9f8f8]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="">
          <div className="bg-white border rounded-md p-5 w-full md-w-11/12">
            <h2 className="text-xl font-bold ">Policies</h2>
            <div className="ms-3 mt-3">
              <p className="text-xs text-gray-600">From</p>
              <p className="text-xs mt-1">{staff.location}</p>
            </div>
            <div className="ms-3 mt-3">
              <p className="text-xs text-gray-600">Service Rate</p>
              <p className="text-xs mt-1">
                {Number(staff.rate).toLocaleString()}
              </p>
            </div>
          </div>
          <div className="bg-white border rounded-md p-5 w-full md-w-11/12 mt-5">
            <h1 className="text-xl font-bold">Service Slots</h1>
            <div className="divide-y divide-slate-200 mt-5">
              {slots.map((slot) => (
                <div
                  key={slot._id}
                  className="grid grid-cols-2 items-center content-between"
                >
                  <div className="text-sm py-2 text-gray-600">{slot.label}</div>
                  <div className="text-sm py-2 text-end text-gray-600">
                    {formatTime(slot.start_time)} - {formatTime(slot.end_time)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-5 md:pt-0">
          <h2 className="text-xl font-bold">Staff Information</h2>
          <p className="text-justify text-sm leading-5 text-gray-700 mt-3">
            {staff.details}
          </p>
          <div className="bg-white border rounded-md p-5 mt-5">
            <h2 className="text-xl font-bold">Categories</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {categories.map((category) => (
                <p
                  className="text-sm mr-2 p-2 rounded-full border  border-gray-300"
                  key={category}
                >
                  {category}
                </p>
              ))}
            </div>
          </div>
          <div className="bg-white border rounded-md p-5 mt-5">
            <h2 className="text-xl font-bold">Services</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {staff.services.map((service) => (
                <p
                  className="text-sm mr-2 p-2 rounded-full border  border-gray-300"
                  key={service}
                >
                  {service}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffAbout;
