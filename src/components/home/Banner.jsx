import useHandlePropagation from "@/hooks/useHandlePropagation";
import React, { useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { LiaFlagUsaSolid } from "react-icons/lia";

const items = [
  {
    key: "1",
    label: "USD",
    icon: <LiaFlagUsaSolid />,
  },
  {
    key: "2",
    label: "THB",
    icon: <LiaFlagUsaSolid />,
  },
  {
    key: "3",
    label: "VND",
    icon: <LiaFlagUsaSolid />,
  },
  {
    key: "4",
    label: "CAD",
    icon: <LiaFlagUsaSolid />,
  },
  {
    key: "5",
    label: "EUR",
    icon: <LiaFlagUsaSolid />,
  },
];

const Banner = () => {
  const [selectedCountry, setSelectedCountry] = useState();
  const [dropdown, setDropdown] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const closeDropDownModal = useHandlePropagation();
  const dropDownRef = useRef(null);

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    setDropdown(false);
  };

  const handleSearchCountry = () => {
    console.log("Search for", searchValue);
  };

  useEffect(() => {
    closeDropDownModal(dropDownRef, setDropdown);
  }, []);

  return (
    <header className="flex flex-col lg:justify-start justify-center lg:items-start items-center gap-3 2xl:p-20 p-5">
      <p>
        <button className="text-[#C09D5E] bg-slate-700 text-[20px] font-medium  border border-[#C09D5E] rounded-full px-10 py-2">
          For One eSim
        </button>
      </p>
      <h1 className="text-white lg:text-7xl text-2xl lg:text-start text-center font-bold my-5">
        Working Seamlessly <br /> Across Many Type <br /> of Devices
      </h1>
      <div className="lg:flex justify-between items-center gap-6  lg:bg-slate-700 lg:border lg:w-[45%] w-full lg:p-2 rounded-full text-white">
        {/* for larges devices  */}
        <div className="lg:w-4/6 w-full">
          <input
            type="text"
            placeholder="Where do you need data for?"
            name="search"
            onChange={(e) => setSearchValue(e.target.value)}
            id="search"
            className="bg-slate-700 w-full text-white lg:mx-3  lg:p-2 px-4 py-2 mb-3 lg:mb-0 lg:rounded-md rounded-full lg:border-0"
          />
        </div>
        <div className="lg:w-2/6 w-full">
          <button
            onClick={handleSearchCountry}
            className={`w-full bg-[#C09D5E] py-2 rounded-full ${
              !searchValue && "cursor-not-allowed"
            }`}
            disabled={!searchValue}
          >
            Search Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Banner;
