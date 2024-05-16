import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

const CountryCard = () => {
  const country = "Bangladesh";
  return (
    <div className="bg-[#343230] lg:h-[218px] h-[170px] lg:pt-0 pt-10 rounded-xl group hover:border-[1px] hover:border-[#8E8E8E] border-[1px] border-[#343230] flex flex-col items-center justify-center px-2 lg:py-7 text-center mb-16 relative">
      <div className="absolute lg:-top-28 -top-20 left-0 w-full h-full flex items-center justify-center">
        <img
          className="2xl:w-[53%] 2xl:h-[55%] lg:w-[45%] lg:h-[40%] w-[60%] h-[50%] rounded-full border-[8px] border-[#1F1B17]"
          src="https://i.ibb.co/5WNh9wm/bd-Country-Flag.png"
          alt="country flag"
        />
      </div>
      <div className="mb-5 lg:mt-10">
        <h4 className="lg:text-2xl text-white mb-1">Bangladesh</h4>
        <h6 className="lg:text-xl text-[#FFFFFF]">Starts at $3.5</h6>
      </div>
      <Link href={`/packages/${country}`}>
        <button className="bg-[#FFFFFF69] group-hover:bg-white p-2 rounded-full">
          <FaChevronRight />
        </button>
      </Link>
    </div>
  );
};

export default CountryCard;
