import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BookingModal from "../Booking/BookingModal";
import useAuth from "../../hooks/useAuth";

const StaffMiniCard = ({ staff }) => {
  const navigate = useNavigate();
  const { setStaff, setSlot } = useAuth();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setStaff(staff);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setStaff({});
    setSlot({});
  };
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
          <button
            onClick={openModal}
            className="bg-green-800 hover:bg-green-950 text-white rounded-full text-xs flex items-center py-2 px-3 my-2 mx-auto"
          >
            Book Now
          </button>
          <button
            onClick={() => {
              navigate(`/staff-details/${staff._id}`);
            }}
            className="bg-sky-800 hover:bg-sky-950 text-white rounded-full text-xs flex items-center py-2 px-3 my-2 mx-auto"
          >
            View full Profile
          </button>
        </div>
      </div>
      <BookingModal isOpen={isModalOpen} onClose={closeModal}>
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
          <h3 className="text-lg font-semibold text-gray-900">
            Available Service Slots
          </h3>
          <button
            onClick={closeModal}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center"
          >
            X
          </button>
        </div>
      </BookingModal>
    </div>
  );
};

export default StaffMiniCard;
