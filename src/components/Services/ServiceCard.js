import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const ServiceCard = ({ service }) => {
  const { setService } = useAuth();
  return (
    <Link
      to={`/service-details/${service._id}`}
      onClick={() => setService(service)}
    >
      <img
        src={service.image}
        alt={service.name}
        className="w-60 h-60  rounded  shadow mx-auto"
      />
      <h3 className="text-center w-3/4 mx-auto font-bold text-base mt-3">
        {service.name}
      </h3>
    </Link>
  );
};

export default ServiceCard;
