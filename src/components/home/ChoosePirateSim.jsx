import React from "react";
import pirateSimImage from "../../assets/choosingEsimSection.png";
import Image from "next/image";

const ChoosePirateSim = () => {
  return (
    <div className="lg:block hidden">
      <div className="p-10 mt-20 bg-black 2xl:max-w-[70%] lg:max-w-[90%] mx-auto">
        <div className="flex justify-center items-center">
          <Image src={pirateSimImage} alt="choose pirate mobile e-sim" />
        </div>
      </div>
    </div>
  );
};

export default ChoosePirateSim;
