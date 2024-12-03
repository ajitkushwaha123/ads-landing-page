"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Video from "./Video";
import Link from "next/link";

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
            Potential with MagicScale -{" "}
            <span className="text-orange-400">Swiggy</span> ,
            <span className="text-red-400"> Zomato</span> Onboarding & FSSAI{" "}
            {""}
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

          <div className="flex justify-center text-[18px] font-semibold pt-[18px] mt-[30px] items-center">
            <Link href="https://api.whatsapp.com/send?phone=919311330885&text=Could%20you%20provide%20more%20details%20about%20Magicscale%27s%20services%3F%20%F0%9F%9A%80%F0%9F%92%A1">
              <button className="bg-primary animate-bounce flex justify-between text-[16px] md:text-[23px] items-center hover:bg-white hover:border-primary border-2 border-primary hover:text-primary px-[12px] md:px-[20px] py-2 md:py-4 rounded-lg text-white">
                <img
                  className="md:w-[40px] w-[20px] mr-2 md:mr-3"
                  src="/whatsapp.png"
                />
                <span className="hidden md:block">Chat On </span>
                <span> Whatsapp</span>
              </button>
            </Link>
            <Link href={"/call-request"}>
              <button className="flex hover:text-[#363636] font-bold animate-bounce md:ml-5 ml-3 justify-between text-[16px] md:text-[23px] bg-white items-center text-primary border-primary hover:bg-white hover:border-primary border-2 px-[12px] md:px-[20px] py-2 md:py-4 rounded-lg">
                <img
                  className="md:w-[40px] w-[20px] mr-2 md:mr-3"
                  src="/customer-service.png"
                />
                Request Call
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
