import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/pirateLogo.svg";
import Link from "next/link";
import Image from "next/image";
import { FaUser, FaAngleDown } from "react-icons/fa";
import { LiaFlagUsaSolid } from "react-icons/lia";
import useHandlePropagation from "@/hooks/useHandlePropagation";

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

const Navbar = () => {
  const [selectedCountry, setSelectedCountry] = useState(items[0]);
  const [dropdown, setDropdown] = useState(false);
  const closeDropDownModal = useHandlePropagation();
  const dropDownRef = useRef(null);

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    setDropdown(false);
  };

  useEffect(() => {
    closeDropDownModal(dropDownRef, setDropdown);
  }, []);

  return (
    <nav className="flex justify-between items-center text-white px-10 py-4">
      <div>
        <Image src={logo} alt="Logo" />
      </div>
      <div>
        <ul className="flex items-center gap-5 font-normal text-[18px]">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/about"}>About us</Link>
          </li>
          <li>
            <Link href={"/packages"}>Packages</Link>
          </li>
          <li>
            <Link href={"/logs"}>Blog</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact us</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-5">
        <div className="relative">
          <button
            onClick={() => setDropdown((prev) => !prev)}
            className="flex items-center gap-2"
            type="button"
          >
            <span className="text-2xl rounded-full">
              {selectedCountry.icon}
            </span>
            <span>{selectedCountry.label}</span>
            <span>
              <FaAngleDown />
            </span>
          </button>
          {dropdown && (
            <div
              ref={dropDownRef}
              className="absolute top-8 bg-white text-black  rounded-md"
            >
              {items.map((item) => (
                <button
                  key={Math.random()}
                  onClick={() => handleSelectCountry(item)}
                  className="flex items-center py-2 px-5 gap-2 hover:bg-gray-100 hover:rounded-md"
                  type="button"
                >
                  <span className="text-2xl rounded-full">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <div>
          <button className="bg-[#C09D5E] rounded-full font-medium px-6 py-3 flex gap-2 items-center">
            <FaUser />
            <span>login/Register</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
