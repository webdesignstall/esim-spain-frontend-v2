import { TfiWorld } from "react-icons/tfi";
import { CiMobile2 } from "react-icons/ci";
import { FaBorderAll } from "react-icons/fa";

const timelineData = [
  {
    title: "Choose your destination and package that suits your needs",
    description:
      "Choose the package based on your data needs for a perfect match of data usage and cost-effectiveness",
    icon: (
      <div className="rounded-full p-3 text-lg text-[#C09D5E] bg-[#5c5a58]">
        <TfiWorld />
      </div>
    ),
    link: "https://link.com",
  },
  {
    title:
      "Confirm compatibility and click on check out to complete the purchase",
    description: "Not sure if your phone is eSIM compatible?",
    icon: (
      <div className="rounded-full p-3 text-lg text-[#C09D5E] bg-[#5c5a58]">
        <CiMobile2 />
      </div>
    ),
  },
  {
    title: "Use the QR code provided to install and activate your eSIM",
    description:
      "After successful payment, activate your eSIM by scanning the QR code or check your email for the QR code sent to you.",
    icon: (
      <div className="rounded-full p-3 text-lg text-[#C09D5E] bg-[#5c5a58]">
        <FaBorderAll />
      </div>
    ),
    link: "https://link.com",
  },
];

export default timelineData;
