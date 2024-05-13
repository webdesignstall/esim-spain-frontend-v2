import React from "react";
import { FaChevronRight } from "react-icons/fa";

const CountrySection = () => {
  return (
    <div
      style={{
        zIndex: 1,
        boxShadow: "0px -20px 20px rgba(0, 0, 10, 0.2)",
      }}
      className="max-w-[1920px] w-full mx-auto p-10 bg-[#1F1B17] -mt-28 rounded-3xl relative"
    >
      <h2 className="text-5xl font-medium text-white text-center py-10 mb-20">
        Explore Our Range of <br /> Data eSIMs for 190+ Destinations
      </h2>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-6">
        {Array.from({ length: 15 }).map((item) => (
          <div
            className="bg-[#343230] rounded-xl flex flex-col gap-2 items-center px-2 py-7 text-center mb-16"
            key={Math.random()}
          >
            <div className="flex justify-center items-center -mt-24 border-[8px] rounded-full border-[#1F1B17]">
              <img
                className="w-28 h-28 rounded-full "
                src="https://i.ibb.co/5WNh9wm/bd-Country-Flag.png"
                alt="country flag"
              />
            </div>
            <h4 className="text-2xl text-white">Bangladesh</h4>
            <h6 className="text-xl text-[#FFFFFF]">Starts at $3.5</h6>
            <button className="bg-white p-2 rounded-full">
              <FaChevronRight className="" />
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-[#C09D5E] rounded-full font-medium px-6 py-3 flex gap-2 items-center text-white">
          Show 150+ countries
        </button>
      </div>
    </div>
  );
};

export default CountrySection;
