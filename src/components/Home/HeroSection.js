import React from "react";

const HeroSection = (props) => {
  return (
    <div className=" flex content-normal items-center bg-hero-bg bg-center bg-no-repeat bg-cover h-[450px] w-full">
      <div className="w-full ">
        <div className="py-2">
          <h1 className=" text-white text-center text-6xl py-2">
            Your personal Assistant
          </h1>
          <h2 className="text-white text-center text-2xl font-bold py-2">
            one stop solution for services. Order any service, anytime
          </h2>
        </div>
        <div className="my-2 w-full xl:w-1/3 lg:w-1/2 md:w-2/3 mx-auto px-2">
          <input
            type="search"
            className="p-3 rounded w-full focus:outline-none"
            placeholder="find your service here e.g. AC, Car, Facial...."
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
