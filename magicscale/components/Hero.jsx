import React from "react";
import Image from "next/image";
import Video from "./Video";

const Hero = () => {
  return (
    <div className="">
      {/* Header */}
      <div className="bg-primary text-white p-0.5 sm:text-[20px] md:text-[2rem] text-center w-full">
        <p className="font-bold">
          INDIA’S MOST COMPREHENSIVE E-COMMERCE WORKSHOP
        </p>
      </div>

      {/* Main */}
      <div className="w-full bg-backy bg-cover bg-no-repeat justify-center flex items-center">
        <div className="md:max-w-[1120px] w-full py-[50px]">
          <h2 className="md:text-[78px] text-[28px] leading-none text-center font-extrabold">
            <span className="text-primary">Learn the Strategies</span> Behind My
            Successful Indian E-Commerce Stores In My
            <br />
            <span className="underline">Live Workshop</span>
          </h2>

          <p className="text-[14px] md:text-[28px] text-center py-[20px] font-extrabold">
            (No Prior Knowledge or Technical Experience Required)
          </p>

          <div className="justify-center flex w-full my-[10px] items-center">
            <div className="border-4 border-primary flex justify-center py-1 px-2 md:px-20 md:py-2 bg-secondary rounded-3xl items-center border-dotted">
              <Image
                src="/star.png"
                width={120}
                height={8}
                alt="magicscale-rating"
              />
              <p className="text-primary ml-3 font-extrabold text-[14px] md:text-[23px]">
                Rating: 4.9 | 2,478 Reviews
              </p>
            </div>
          </div>

          <div className="flex w-full justify-center md:pt-10 pt-5 items-center">
            <div className="px-[20px] hidden md:block">
              <Video width={"810"} />
            </div>
            <div className="px-[20px] md:hidden">
              {typeof window !== "undefined" && window.innerWidth > 768 ? (
                <Video width={810} />
              ) : (
                <Video
                  width={
                    typeof window !== "undefined" ? window.innerWidth - 40 : 320
                  }
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
