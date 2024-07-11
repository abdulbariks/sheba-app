import React from "react";

const StaffMiniCard = ({ staff }) => {
  return (
    <div className="bg-gray-50 border hover:border-sky-800 rounded-md shadow-md p-2">
      <div className="items-center">
        <img
          src={staff.image}
          alt={staff.name}
          className="w-16 mx-auto rounded-full"
        />
        <div className="mt-3">
          <h2 className="text-center font-bold">{staff.name}</h2>
          <h2 className="text-center text-xs py-1 line-clamp-1">{staff.bio}</h2>
          <h3 className="text-center text-sm text=gray-800">
            ${Number(staff.rate).toLocaleString()}
          </h3>
        </div>
        <div className="flex lg:block xl:flex items-center justify-between mt-3">
          <button className="bg-green-800 hover:bg-green-950 text-white rounded-full text-xs flex items-center py-2 px-3 my-2 mx-auto">
            Book Now
          </button>
          <button className="bg-sky-800 hover:bg-sky-950 text-white rounded-full text-xs flex items-center py-2 px-3 my-2 mx-auto">
            View full Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default StaffMiniCard;
