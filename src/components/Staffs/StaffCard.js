import React from "react";
import { useNavigate } from "react-router-dom";

const StaffCard = ({ staff }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 border hover:border-sky-800 rounded-md shadow-md p-5">
      <div className="md:flex items-center h-40">
        <div className="">
          <img
            src={staff.image}
            alt={staff.name}
            className=" w-24 rounded-full mx-auto"
          />
        </div>
        <div className="md:pl-5 md:m-0 mt-5">
          <h2 className="font-bold text-xl">{staff.name}</h2>
          <h3 className="text-sm font-bold">{staff.bio}</h3>
          <h3 className="text-gray-800 text-xs">{staff.location}</h3>
          <h4 className="text-sm text-gray-800">
            ${Number(staff.rate).toLocaleString()}
          </h4>
        </div>
      </div>
      <p className="mt-5 text-justify text-sm text-gray-700 line-clamp-2">
        {staff.details}
      </p>

      <div className="flex flex-wrap gap-1 my-2 text-xs items-center h-32 lg:h-20">
        {staff.services.length > 3 ? (
          <>
            {staff.services.slice(0, 3).map((service) => (
              <p className="mr-2 p-2 border border-gray-800 rounded-full">
                {service}
              </p>
            ))}
            <p className="pl-2">and {staff.services.length - 3} more.....</p>
          </>
        ) : (
          staff.services.map((service) => (
            <p className="mr-2 p-2 border border-gray-800 rounded-full">
              {service}
            </p>
          ))
        )}
      </div>
      <button
        onClick={() => {
          navigate(`/staff-details/${staff._id}`);
        }}
        className="bg-sky-800 hover:bg-sky-950 text-white rounded-full text-xs  py-2 px-3 my-2 mx-auto"
      >
        See Profile
      </button>
    </div>
  );
};

export default StaffCard;
