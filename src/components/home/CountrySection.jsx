import React from "react";
import { FaChevronRight } from "react-icons/fa";

const CountrySection = () => {
  return (
    <div
      style={{
        zIndex: 1,
        boxShadow: "0px -10px 100px 0px rgba(0, 0, 0, 0.8)",
      }}
      className="2xl:max-w-[70%] lg:max-w-[85%]  mx-auto xl:px-20 lg:py-10 p-5 bg-[#1F1B17] lg:-mt-24 mt-28 lg:rounded-3xl relative"
    >
      <h2 className="lg:text-5xl text-3xl lg:leading-[60px] font-medium text-white text-center py-10 mb-20">
        Explore Our Range of <br /> Data eSIMs for 190+ Destinations
      </h2>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 lg:gap-7 gap-3">
        {Array.from({ length: 15 }).map((item, index) => (
          <div
            className="bg-[#343230] lg:h-[218px] h-[170px] lg:pt-0 pt-10 rounded-xl group hover:border-[1px] hover:border-[#8E8E8E] border-[1px] border-[#343230] flex flex-col items-center justify-center px-2 lg:py-7 text-center mb-16 relative"
            key={index}
          >
            <div className="absolute lg:-top-28 -top-20 left-0 w-full h-full flex items-center justify-center">
              <img
                className="2xl:w-[53%] 2xl:h-[55%] lg:w-[45%] lg:h-[40%] w-[60%] h-[50%] rounded-full border-[8px] border-[#1F1B17]"
                src="https://i.ibb.co/5WNh9wm/bd-Country-Flag.png"
                alt="country flag"
              />
            </div>
            <div className="mb-5 lg:mt-10">
              <h4 className="lg:text-2xl text-white mb-1">Bangladesh</h4>
              <h6 className="lg:text-xl text-[#FFFFFF]">Starts at $3.5</h6>
            </div>
            <button className="bg-[#FFFFFF69] group-hover:bg-white p-2 rounded-full">
              <FaChevronRight />
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center">
        <button className="bg-[#C09D5E] rounded-full font-medium mb-10 -mt-5 px-6 py-3 flex gap-2 items-center text-white">
          Show 150+ countries
        </button>
      </div>
    </div>
  );
};

export default CountrySection;
