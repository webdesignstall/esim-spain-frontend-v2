import React, { useState } from "react";
import PackageFilterable from "./PackageFilterable";
import PackageCard from "../cards/PackageCard";
import Link from "next/link";

const PackageList = ({ country }) => {
  const [packageType, setPackageType] = useState("Daily");
  return (
    <div
      style={{
        zIndex: 1,
        boxShadow: "0px -10px 100px 0px rgba(0, 0, 0, 0.8)",
      }}
      className="2xl:max-w-[70%] lg:max-w-[85%]  mx-auto xl:px-20 lg:py-10 p-5 bg-[#1F1B17] lg:-mt-24 mt-28 lg:rounded-3xl relative"
    >
      <div className="flex items-center lg:gap-5 gap-3 justify-center">
        <img
          className="lg:w-16 w-10 lg:h-10 h-8 rounded-lg"
          src="https://i.ibb.co/5WNh9wm/bd-Country-Flag.png"
          alt="country flag"
        />
        <h3 className="text-white lg:text-5xl text-3xl">{country}</h3>
      </div>
      <div className="md:w-[70%] w-full mx-auto my-10">
        <PackageFilterable setPackageType={setPackageType} />
      </div>
      <div className="md:block hidden">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-10 pb-10">
          {Array.from({ length: 6 }).map((pkg) => (
            <PackageCard packageType={packageType} />
          ))}
        </div>
      </div>
      <div className="md:hidden block overflow-hidden pb-10">
        <div className="flex gap-5">
          {Array.from({ length: 6 }).map((pkg) => (
            <PackageCard packageType={packageType} fixedWidth="250px" />
          ))}
        </div>
        <div>
          <h3 className="text-white my-5 text-center">
            Slider navigator will be added
          </h3>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Link href={"/countries"}>
          <button className="bg-[#C09D5E] rounded-full font-medium mb-10 -mt-5 px-6 py-3 flex gap-2 items-center text-white">
            Explore More Packages
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PackageList;
