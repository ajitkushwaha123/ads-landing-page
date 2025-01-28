import React from "react";
import Title from "./Title";
import Image from "next/image";
import { SpotlightBackground } from "./ui/SpotlightBackground";

const Return = () => {
  return (
    <div className="w-full py-8 text-white bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden md:py-20">
      {/* <SpotlightBackground /> */}
      <Title preTitle={"100% Money"} title={"Back Guarantee"} />

      <div className="flex flex-col justify-center items-center">
        <div className="max-w-[1120px] justify-center items-center flex flex-col px-10">
          <Image
            src={"/money-back.png"}
            width={300}
            height={300}
            alt="money-back-gurantee"
          />

          <p className="md:text-[28px] text-[16px] pt-[15px] text-center font-bold">
            If You&#39;re Not Satisfied with Our Services, We will Refund 100%
            of Your Money. No Questions Asked. Guaranteed!
            <span className="font-extrabold"> Promise! </span>
          </p>

          <button className="w-full bg-yellow-400 font-extrabold md:text-4xl text-xl p-4 md:p-8 rounded-xl mt-10 md:mt-20 animate-bounce">
            Book a Call Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Return;
