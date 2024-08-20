import React from "react";
import Navbar from "./../../components/Navbar";
import StaffCard from "../../components/Staffs/StaffCard";
import useAuth from "../../hooks/useAuth";

const Staffs = (props) => {
  const { staffs } = useAuth();

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-2 grid lg:grid-cols-2 gap-3">
        {staffs.map((staff) => (
          <StaffCard key={staff._id} staff={staff} />
        ))}
      </div>
    </div>
  );
};

export default Staffs;
