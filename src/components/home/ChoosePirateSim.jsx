import React from "react";
import pirateSimImage from "../../assets/choosingEsimSection.png";
import Image from "next/image";

const ChoosePirateSim = () => {
  return (
    <div className="lg:block hidden">
      <div className="max-w-[1920px] w-full mx-auto  p-10 mt-20 bg-black">
        <div className="flex justify-center items-center">
          <Image src={pirateSimImage} alt="choose pirate mobile e-sim" />
        </div>
      </div>
    </div>
  );
};

export default ChoosePirateSim;
