"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Video from "./Video";
import Link from "next/link";
import { SpotlightBackground } from "./ui/SpotlightBackground";

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
      <div className="bg-primary text-white border-b-4 border-primary sm:text-[18px] md:text-[1.8rem] text-center w-full">
        <p className="font-bold">
          MAGICSCALE'S ULTIMATE RESTAURANT CONSULTANCY EXPERIENCE
        </p>

        <div className="w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
          <SpotlightBackground />
          <div className=" p-4 md:my-16 my-3 text-white max-w-8xl md:mx-[100px] relative z-10 w-full pt-6 md:pt-0">
            <h2 className="md:text-7xl hidden md:block text-md text-center font-extrabold">
              <span className="text-primary">Unlock Your Restaurant’s </span>
              Potential with MagicScale -{" "}
              <span className="text-orange-600">Swiggy</span> ,
              <span className="text-red-600"> Zomato</span> Onboarding &
              Professional {""}
              <span className="underline">Account Setup !</span>
            </h2>

            <h2 className="text-4xl text-center font-bold">
               Go Online on <span className="text-orange-600">Swiggy</span> &
              <span className="text-red-600"> Zomato</span> Today! 🍽️
            </h2>

            <p className="text-[15px] md:text-[28px] text-center py-[24px] text-[#bebebe] font-black">
              ( No Expertise Needed – We Handle Everything for You! )
            </p>

            <div className="justify-center flex w-full my-[10px] items-center">
              <div className="border-4 border-primary flex justify-center py-1 px-2 md:px-20 md:py-2 bg-white rounded-3xl items-center border-dotted">
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
                {windowWidth > 0 && <Video width={360 - 40} />}
              </div>
            </div>

            <div className="flex justify-center text-[18px] font-semibold pt-[18px] mt-[36px] items-center">
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
              <a
                href="tel:8826073117"
                className="flex hover:text-[#363636] font-bold animate-bounce md:ml-5 ml-3 justify-between text-[16px] md:text-[23px] bg-white items-center text-primary border-primary hover:bg-white hover:border-primary border-2 px-[12px] md:px-[20px] py-2 md:py-4 rounded-lg"
                aria-label="Request Call"
              >
                <img
                  className="md:w-[40px] w-[20px] mr-2 md:mr-3"
                  src="/customer-service.png"
                  alt="Customer Service"
                />
                Connect Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
