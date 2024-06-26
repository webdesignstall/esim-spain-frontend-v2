import { TfiWorld } from "react-icons/tfi";
import bannerBgImage from "../../assets/images/bannerBgImage.png";
import { BiTransfer } from "react-icons/bi";
import { BiSolidCalendar } from "react-icons/bi";
import { IoIosPricetag } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";
import Image from "next/image";

const PackageCard = ({ packageType, pack }) => {
  return (
    <div
      className={`text-white
      } border-slate-500 rounded-lg bg-[#454545]`}
    >
      <div className="overflow-hidden h-[80px] relative">
        <h4 className="absolute z-50 p-4 text-2xl font-medium">
          {packageType} Pack
        </h4>
        <Image
          src={bannerBgImage}
          alt="package card banner image"
          layout="fill"
          className="rounded-t-lg"
          objectFit="cover"
        />
      </div>
      <div className="p-4 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TfiWorld className="text-xl" />
            <span>Coverage</span>
          </div>
          <div className="flex items-center gap-2 font-medium">
            <img
              className="w-6 h-6 rounded-full"
              src={pack?.flag}
              alt="country flag"
            />
            <span>{pack?.country}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BiTransfer className="rotate-90 text-xl" />
            <span>Data</span>
          </div>
          <div className="flex items-center gap-2 font-medium">
            <span>{pack?.data}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BiSolidCalendar className="text-xl" />
            <span>Validity</span>
          </div>
          <div className="font-medium">
            <span>{pack?.validity}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <IoIosPricetag className="text-xl" />
            <span>Price</span>
          </div>
          <div className="font-medium">
            <span>US ${pack?.price}</span>
          </div>
        </div>

        <div className="flex items-center flex-wrap justify-between">
          {pack?.facilities?.map((item) => (
            <div className="flex items-center gap-1">
              <IoMdCheckmark className="text-[#C09D5E] font-bold" />
              <span className="text-[#DFDFDF]">{item}</span>
            </div>
          ))}
        </div>
        <div>
          <button className="border-2 w-full rounded-full py-2">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;

export const PackageCardMobile = ({ packageType, pack }) => {
  return (
    <div className="text-white mb-10 mr-3 w-[250px]  border-slate-500 rounded-lg bg-[#454545]">
      <div className="overflow-hidden h-[80px] relative">
        <h4 className="absolute z-50 p-4 text-2xl font-medium">
          {packageType} Pack
        </h4>
        <Image
          src={bannerBgImage}
          alt="package card banner image"
          layout="fill"
          className="rounded-t-lg"
          objectFit="cover"
        />
      </div>
      <div className="p-4 flex flex-col gap-4 w-[250px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TfiWorld className="text-xl" />
            <span>Coverage</span>
          </div>
          <div className="flex items-center gap-2 font-medium">
            <img
              className="w-6 h-6 rounded-full"
              src={pack?.flag}
              alt="country flag"
            />
            <span>{pack?.country}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BiTransfer className="rotate-90 text-xl" />
            <span>Data</span>
          </div>
          <div className="flex items-center gap-2 font-medium">
            <span>{pack?.data}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BiSolidCalendar className="text-xl" />
            <span>Validity</span>
          </div>
          <div className="font-medium">
            <span>{pack?.validity}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <IoIosPricetag className="text-xl" />
            <span>Price</span>
          </div>
          <div className="font-medium">
            <span>US ${pack?.price}</span>
          </div>
        </div>

        <div className="flex items-center flex-wrap justify-between">
          {pack?.facilities?.map((item) => (
            <div className="flex items-center gap-1">
              <IoMdCheckmark className="text-[#C09D5E] font-bold" />
              <span className="text-[#DFDFDF]">{item}</span>
            </div>
          ))}
        </div>
        <div>
          <button className="border-2 w-full rounded-full py-2">Buy Now</button>
        </div>
      </div>
    </div>
  );
};
