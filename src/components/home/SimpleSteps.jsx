import React from "react";
import Image from "next/image";
import Image5G from "../../assets/5G_Internet.png";
import VerticalUITimeline from "./VerticalUITimeline";

const SimpleSteps = () => {
  return (
    <div className="lg:block hidden">
      <div className=" bg-[#1F1B17] py-20">
        <div className="max-w-[1920px] w-full mx-auto p-10 flex flex-col">
          <div className="text-center">
            <h2 className="text-[45px] text-[#FFFFFF] mb-2">3 Simple Steps</h2>
            <p className="text-lg text-[#D2D2D2]">To Active Your eSims</p>
          </div>
          <div className="flex lg:flex-row flex-col-reverse max-w-[1920px] w-full mx-auto justify-center mt-10 gap-10">
            <div className="w-[633.83px]">
              <VerticalUITimeline />
            </div>
            <div className="w-[589.02px]">
              <Image src={Image5G} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleSteps;
