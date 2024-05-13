import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import paymentMethods from "../../assets/paymentMethods.png";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import logo from "../../assets/footerLogo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" bg-[#1F1B17] py-10">
      <div className="max-w-[1320px] w-full mx-auto -mt-44">
        <div>
          <Image src={logo} alt="Logo" />
        </div>
        <div className="flex justify-between items-center gap-20 py-5">
          <div className="w-2/5">
            <h3 className="text-lg font-medium text-white mb-4">
              Pirate Mobile Limited
            </h3>
            <p className="text-xs text-[#BDBAC1]">
              Pirate Mobile Limited, a company incorporated under the laws of
              Guernsey, whose company number is 71908 and whose registered
              office is at Avenue House, St. Julians Avenue, ST. Peters Port,
              Guernsey, GY11WA
            </p>
          </div>
          <div className="w-3/5 flex justify-between items-center gap-20">
            <div>
              <h3 className="text-sm font-medium text-white  mb-4">
                Contact us
              </h3>
              <ul className="text-xs text-[#C09D5E]">
                <li>info@piratemobile.gg</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm text-white  mb-4">Social Media</h3>
              <ul className="flex gap-3">
                <li className="p-2 bg-gray-600 text-white rounded-full">
                  <AiFillInstagram className="h-[48px] w-[48px] " />
                </li>
                <li className="p-2 bg-[#C09D5E] text-white rounded-full">
                  <RiWhatsappFill className="h-[48px] w-[48px] " />
                </li>
                <li className="p-2 bg-gray-600 text-white rounded-full">
                  <FaLinkedinIn className="h-[48px] w-[48px] p-2" />
                </li>
                <li className="p-2 bg-gray-600 text-white rounded-full">
                  <FaXTwitter className="h-[48px] w-[48px] p-2" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-4 text-[#FFFFFF2B]" />
        <div className="flex justify-between items-center pt-10">
          <ul className="text-xs text-white flex justify-between items-center gap-10">
            <li>
              &copy; {new Date().getFullYear()}, eSIM Powered by Pirate Mobile
            </li>
            <li>Privacy Policy</li>
            <li>Term Of Use</li>
          </ul>
          <div>
            <Image src={paymentMethods} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
