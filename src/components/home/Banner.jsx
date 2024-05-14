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
    <div className="lg:block hidden">
      <div className="max-w-[1920px] w-full mx-auto flex flex-col gap-3 p-10">
        <p>
          <button className="text-[#C09D5E]  border border-[#C09D5E] rounded-full px-10 py-2">
            For One eSim
          </button>
        </p>
        <h1 className="text-white text-7xl font-bold my-5">
          Working Seamlessly <br /> Across Many Type <br /> of Devices
        </h1>
        <div className="flex items-center gap-3  border lg:w-1/2 p-2 rounded-full text-white">
          <div className="w-1/4  border-r-2 p-2 relative">
            <button
              onClick={() => setDropdown((prev) => !prev)}
              className="flex items-center gap-2"
            >
              <span>Select Country</span>
              <span>
                <FaAngleDown />
              </span>
            </button>
            {dropdown && (
              <div
                ref={dropDownRef}
                style={{ zIndex: 1 }}
                className="absolute top-10 bg-white w-36  shadow-lg text-black  rounded-md"
              >
                {items.map((item) => (
                  <button
                    key={Math.random()}
                    onClick={() => handleSelectCountry(item)}
                    className="flex items-center w-full py-2 px-5 gap-2 hover:bg-gray-100 hover:rounded-md"
                    type="button"
                  >
                    <span className="text-2xl rounded-full">{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="w-3/4 flex gap-2 justify-between items-center">
            <input
              type="text"
              placeholder="Where do you need data for?"
              name="search"
              onChange={(e) => setSearchValue(e.target.value)}
              id=""
              className="bg-gray-900 text-white w-3/5 p-2 rounded-md"
            />
            <button
              onClick={handleSearchCountry}
              className={`w-2/5 bg-[#C09D5E] px-5 py-2 rounded-full ${
                !searchValue && "cursor-not-allowed"
              }`}
              disabled={!searchValue}
            >
              Search Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
