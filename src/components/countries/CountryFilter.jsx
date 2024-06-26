import React, { useState } from "react";
import CountrySearchComponent from "./CountrySearchComponent";

const filterables = ["A-B", "C-E", "G-H", "I-K", "L-M", "N-S", "R-S", "T-Z"];

const CountryFilter = () => {
  const [selectedLetters, setSelectedLetters] = useState("A-B");
  return (
    <div className="py-10 mb-20">
      <h5 className="lg:text-2xl  mb-5 font-normal text-center text-[#D2D2D2]">
        Find and buy the best prepaid eSIMs online for your travels.
        <br className="lg:block hidden" /> Connect to the internet in minutes in
        more than 197 destinations around the world.
      </h5>
      <div className="lg:flex justify-center items-center gap-6  lg:bg-slate-700 lg:border lg:w-[60%]  mx-auto w-full lg:p-2 rounded-full text-white">
        <CountrySearchComponent />
      </div>
      <div className="text-white flex lg:gap-5 flex-wrap justify-center mt-5 lg:px-10">
        {filterables.map((filter) => (
          <button
            onClick={() => setSelectedLetters(filter)}
            className={`text-sm border font-medium px-4 py-1 rounded-full ${
              selectedLetters === filter
                ? "border-[#C09D5E]"
                : "border-[#1F1B17]"
            }`}
            type="button"
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CountryFilter;
