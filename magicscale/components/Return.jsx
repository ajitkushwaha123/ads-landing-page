import React from "react";
import Title from "./Title";
import Image from "next/image";

const Return = () => {
  return (
    <div className="w-full py-20">
      <Title preTitle={"100% Money"} title={"Back Guarantee"} />

      <div className="flex flex-col justify-center items-center">
        <div className="max-w-[1120px] justify-center items-center flex flex-col px-10">
          <Image
            src={'/money-back.png'}
            width={300}
            height={300}
            alt="money-back-gurantee"
          />

          <p className="md:text-[28px] text-[20px] pt-[15px] text-center font-bold">
            If You are Not Satisfied with Our Services, We will Refund 100% of Your
            Money. No Questions Asked. Guaranteed!
            <span className="font-extrabold"> Promise! </span>
          </p>

          <button className="w-full bg-yellow-400 font-extrabold md:text-4xl text-2xl p-8 rounded-xl mt-20 animate-bounce">
            Book a Call Now
          </button>
        </div>
      </div>
    </div>
  )
};

export default Return;
