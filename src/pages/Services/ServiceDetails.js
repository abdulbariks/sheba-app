import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import { useParams } from "react-router-dom";
import StaffMiniCard from "../../components/Staffs/StaffMiniCard";
import useAuth from "../../hooks/useAuth";

const ServiceDetails = (props) => {
  const { id } = useParams();
  const { service, staffs, setService } = useAuth();

  // const service = services.find((service) => service._id === id);
  useEffect(() => {
    if (!service.name) {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:5000/service/${id}`);
          const result = await response.json();

          if (result.status) {
            setService(result.service);
          } else {
            console.log(result);
          }
        } catch (err) {
          fetchData();
        }
      };
      fetchData();
    }
  }, [service.name, id, setService]);
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
              {staffs.filter((staff) => staff.services.includes(service.name))
                .length > 0 ? (
                staffs
                  .filter((staff) => staff.services.includes(service.name))
                  .map((staff) => (
                    <StaffMiniCard key={staff._id} staff={staff} />
                  ))
              ) : (
                <p>No Service Providers Found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
