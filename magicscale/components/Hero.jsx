"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Video from "./Video";
import Link from "next/link";
import { SpotlightBackground } from "./ui/SpotlightBackground";
import { motion } from "framer-motion";
import CustomerReview from "./Testimonials/CustomerReview";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

const testimonials = [
  {
    imgSrc:
      "https://lh3.googleusercontent.com/a-/ALV-UjWdiqLds-TdHl8_IltN1R1NAkPV2ruWgJ-q2Ib7GFn_J_mavalzHw=s64-c-rp-mo-ba2-br100",
    title: "Rakesh Verma",
    designation: "Professional Plan",
    review:
      "MagicScale ne hamari restaurant listing Swiggy aur Zomato pe asaan bana di. Ab zyada orders aa rahe hain aur sales mein bhi boost mila hai! 🙌",
  },
  {
    imgSrc:
      "https://lh3.googleusercontent.com/a-/ALV-UjWXTAq088nCnDe2NDDV-2aYi4AWFUDh5jT-PRZwWEWrOvSePZUM5Q=s64-c-rp-mo-br100",
    title: "Anita Sharma",
    designation: "Starter Plan",
    review:
      "I didn’t expect the process to be this smooth. FSSAI license bhi jaldi mil gaya aur team kaafi supportive thi. ⭐⭐⭐⭐⭐",
  },
  {
    imgSrc:
      "https://lh3.googleusercontent.com/a-/ALV-UjXfTasUMn1X7Qq0v-na3akIRjk7GwAh5oiRJ-rF2c3Ux9hxt1cm=s64-c-rp-mo-br100",
    title: "Yuvraj Gupta",
    designation: "Cloud Kitchen Plan",
    review:
      "Cloud kitchen setup ke liye MagicScale ki team ne har step par madad ki. Ab hamari kitchen fully operational hai aur response amazing hai! 🥳",
  },
  {
    imgSrc:
      "https://lh3.googleusercontent.com/a-/ALV-UjXgtOUx8BecYSBcOpnAydef8lYuVvqRoD-FXMMlnhDGNgxcNEKA=s64-c-rp-mo-br100",
    title: "Priya Singh",
    designation: "Business Plan",
    review:
      "Swiggy onboarding mein jo speed MagicScale ne dikhayi, wo lajawab thi. Highly recommend for anyone starting out. 🚀",
  },
  {
    imgSrc:
      "https://lh3.googleusercontent.com/a-/ALV-UjUR7ugHwsrlxcrn5e85YdzWpmlpabCwJ6UXBqOfnaBgjKLABMJF=s64-c-rp-mo-br100",
    title: "Sahil Mehra",
    designation: "Starter Plan",
    review:
      "MagicScale saved me so much hassle. Ab mujhe khud apply karne ki tension nahi hai. Awesome service! 😄",
  },
  {
    imgSrc:
      "https://lh3.googleusercontent.com/a/ACg8ocJ3txaxojeg_rpiFqN_0sH7uQZWTyMGTkjLYjGFu4_U_iaOSKiK=s64-c-rp-mo-ba2-br100",
    title: "Sunil Bhardwaj",
    designation: "Professional Plan",
    review:
      "FSSAI license application itna smooth hoga socha bhi nahi tha. Thank you, MagicScale! 🌟",
  },
  {
    imgSrc:
      "https://lh3.googleusercontent.com/a-/ALV-UjVCKob18zoOwXEJ5EUSjUVAIExROGyOX3AhAAYydQaont3jwInm=s64-c-rp-mo-ba4-br100",
    title: "Meena Rathore",
    designation: "Business Plan",
    review:
      "Ab meri restaurant listing Swiggy aur Zomato dono par hai, aur customers bhi increase ho gaye hain. MagicScale kaafi helpful raha! 🙏",
  },
];

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
          <div className=" p-4 md:my-16 my-6 text-white max-w-8xl md:mx-[100px] relative z-10 w-full pt-12 md:pt-0">
            <h2 className="md:text-7xl text-2xl text-center font-extrabold">
              <span className="text-primary">Unlock Your Restaurant’s </span>
              Potential with MagicScale -{" "}
              <span className="text-orange-600">Swiggy</span> ,
              <span className="text-red-600"> Zomato</span> Onboarding & Professional{" "}
              {""}
              <span className="underline">Account Setup !</span>
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

            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
              clientCarousel={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
