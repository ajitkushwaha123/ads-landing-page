"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Video from "./Video";

const Hero = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="">
      <div className="bg-primary text-white p-0.5 sm:text-[16px] md:text-[1.8rem] text-center w-full">
        <p className="font-bold">
          MAGICSCALE'S ULTIMATE RESTAURANT CONSULTANCY EXPERIENCE
        </p>
      </div>

      {/* Main */}
      <div className="w-full px-[10px] bg-backy bg-cover bg-no-repeat justify-center flex items-center">
        <div className="md:max-w-[1120px] w-full py-[25px] md:py-[50px]">
          <h2 className="md:text-7xl text-[#3f3f3f] text-2xl text-center font-extrabold">
            <span className="text-primary">Unlock Your Restaurant’s </span>
            Potential with MagicScale - Swiggy, Zomato Onboarding & FSSAI {""}
            <span className="underline">Licensing !</span>
          </h2>

          <p className="text-[14px] md:text-[28px] text-center py-[20px] text-[#404040] font-black">
            ( No Expertise Needed – We Handle Everything for You! )
          </p>

          <div className="justify-center flex w-full my-[10px] items-center">
            <div className="border-4 border-primary flex justify-center py-1 px-2 md:px-20 md:py-2 bg-secondary rounded-3xl items-center border-dotted">
              <Image
                src="/star.png"
                width={100}
                height={8}
                alt="magicscale-rating"
              />
              <p className="text-primary ml-3 font-extrabold text-[12px] md:text-[23px]">
                Rating: 4.9 | 2,478 Reviews
              </p>
            </div>
          </div>

          <div className="flex w-full justify-center md:pt-10 pt-5 items-center">
            <div className="px-[20px] hidden md:block">
              <Video width={810} />
            </div>
            {/* Ensure that windowWidth is only used after mounting */}
            <div className="px-[20px] md:hidden">
              {windowWidth > 0 && <Video width={windowWidth - 40} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
