import React from "react";
import Navbar from "../../components/Navbar";
import { useParams } from "react-router-dom";
import StaffMiniCard from "../../components/Staffs/StaffMiniCard";

const ServiceDetails = (props) => {
  const { id } = useParams();

  const services = [
    {
      _id: "1",
      name: "AC Service",
      category: "AC",
      details:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      image: "https://i.ibb.co/vd5PntG/hero.jpg",
    },
    {
      _id: "2",
      name: "TV Service",
      category: "TV",
      details:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      image: "https://i.ibb.co/k9WMhM0/download-1.jpg",
    },
    {
      _id: "3",
      name: "AC Service",
      category: "AC",
      details:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      image: "https://i.ibb.co/XYtnvvN/download.jpg",
    },
    {
      _id: "4",
      name: "Beauty Service",
      category: "Beauty",
      details:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      image: "https://i.ibb.co/9VH1nVr/download-3.jpg",
    },
    {
      _id: "5",
      name: "Salon Service",
      category: "Salon",
      details:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      image: "https://i.ibb.co/xHL3Wxw/download-2.jpg",
    },
    {
      _id: "6",
      name: "TV Service",
      category: "TV",
      details:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      image: "https://i.ibb.co/k9WMhM0/download-1.jpg",
    },
    {
      _id: "7",
      name: "AC Service",
      category: "AC",
      details:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      image: "https://i.ibb.co/XYtnvvN/download.jpg",
    },
    {
      _id: "8",
      name: "Beauty Service",
      category: "Beauty",
      details:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      image: "https://i.ibb.co/9VH1nVr/download-3.jpg",
    },
    {
      _id: "9",
      name: "Salon Service",
      category: "Salon",
      details:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      image: "https://i.ibb.co/xHL3Wxw/download-2.jpg",
    },
    {
      _id: "10",
      name: "TV Service",
      category: "TV",
      details:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      image: "https://i.ibb.co/k9WMhM0/download-1.jpg",
    },
  ];

  const service = services.find((service) => service._id === id);
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
      <div className="container mx-auto p-2">
        <h1 className="text-xl lg:text-3xl my-5 lg:my-10 font-bold">
          {service.name}
        </h1>
        <div className="grid  grid-cols-1 lg:grid-cols-2">
          <div className="w-full p-5 order-last lg:order-first">
            <img
              src={service.image}
              alt={service.name}
              className="max-w-full mx-auto rounded-xl shadow"
            />
            <h2 className="font-bold text-xl mt-10 my-2">{service.name}</h2>
            <p className="text-justify">{service.details}</p>
          </div>
          <div className="">
            <h2 className="font-bold">Service Providers</h2>
            <div className="grid lg:grid-cols-2 gap-3">
              {staffs
                .filter((staff) => staff.services.includes(service.name))
                .map((staff) => (
                  <StaffMiniCard key={staff._id} staff={staff} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
