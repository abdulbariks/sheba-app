import React, { useState } from "react";
import Navbar from "./../../components/Navbar";
import { useParams } from "react-router-dom";
import StaffAbout from "../../components/Staffs/StaffAbout";
import StaffReview from "../../components/Staffs/StaffReview";
import useAuth from "../../hooks/useAuth";

const StaffDetails = (props) => {
  const { id } = useParams();
  const { staffs } = useAuth();

  const staff = staffs.find((staff) => staff._id === id);

  const [toggle, setToggle] = useState(false);
  const [tab, setTab] = useState("About");
  const handleTabChange = (tabName) => {
    if (tab !== tabName) {
      setToggle((curr) => !curr);
      setTab(tabName);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-2">
        <div className="md:flex items-center mt-3 h-40">
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
        <div className="">
          <button
            onClick={() => handleTabChange("About")}
            className={`text-lg font-bold tracking-wide border-b-2 p-2 ${
              toggle ? "text-sky-950" : "text-sky-500"
            } ${toggle ? "hover:border-sky-800" : "border-sky-800"}`}
          >
            About
          </button>
          <button
            onClick={() => handleTabChange("Review")}
            className={`text-lg font-bold tracking-wide border-b-2 p-2 ms-5 ${
              toggle ? "text-sky-500" : "text-sky-900"
            } ${toggle ? "border-sky-800" : "hover:border-sky-800"}`}
          >
            Ratings and Reviews
          </button>
        </div>
        {tab === "About" && <StaffAbout key={staff._id} staff={staff} />}
        {tab === "Review" && <StaffReview />}
      </div>
    </div>
  );
};

export default StaffDetails;
