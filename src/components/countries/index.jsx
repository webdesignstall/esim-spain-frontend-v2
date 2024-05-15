import React from "react";
import CountryContainer from "../containers/CountryContainer";
import CountryFilter from "./CountryFilter";

const CountryList = () => {
  return (
    <div
      style={{
        zIndex: 1,
        boxShadow: "0px -10px 100px 0px rgba(0, 0, 0, 0.8)",
      }}
      className="2xl:max-w-[70%] lg:max-w-[85%]  mx-auto xl:px-20 lg:py-10 p-5 bg-[#1F1B17] lg:-mt-96 -mt-20 lg:rounded-3xl relative"
    >
      <CountryFilter />
      <CountryContainer />
    </div>
  );
};

export default CountryList;
