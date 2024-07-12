import React from "react";
import Navbar from "./../../components/Navbar";
import StaffCard from "../../components/Staffs/StaffCard";

const Staffs = (props) => {
  const staffs = [
    {
      _id: "1",
      name: "Barik",
      bio: "10 years experience",
      location: "Dhaka",
      rate: "1500",
      details:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      services: ["AC Service", "TV Service"],
      image: "https://i.ibb.co/NW2qjLd/barik-removebg-preview.jpg",
    },
    {
      _id: "2",
      name: " Abdul Barik",
      bio: "5 years experience",
      location: "Dhaka",
      rate: "1200",
      details:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      services: ["AC Service", "TV Service", "Beauty Service", "Salon Service"],
      image: "https://i.ibb.co/gZ6nDR9/Abdul-Barik.jpg",
    },
  ];
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
