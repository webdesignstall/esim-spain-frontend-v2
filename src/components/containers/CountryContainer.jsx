import React from "react";
import CountryCard from "../cards/CountryCard";

const CountryContainer = () => {
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 lg:gap-7 gap-3">
      {Array.from({ length: 15 }).map((item, index) => (
        <CountryCard key={index} />
      ))}
    </div>
  );
};

export default CountryContainer;
