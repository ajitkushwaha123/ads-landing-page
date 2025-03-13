"use client";
import React from "react";
import { InfiniteMovingCards } from "../ui/InfiniteMovingCards";
import Title from "../Title";
import { SpotlightBackground } from "../ui/SpotlightBackground";
import LaptopMockup from "./LaptopMockup";
import { AnimatedTooltip } from "../ui/AnimatedTooltip";


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

const CustomerReview = () => {
  return (
    <div className="pt-8 border-b-4 rounded-md flex flex-col antialiased p-1 bg-black bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      {/* <SpotlightBackground /> */}
      <div className="my-8 text-white">
        <Title preTitle={"Our"} title={"Customers"} />
      </div>

      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />

      <div className="my-10">
        <AnimatedTooltip items={testimonials} />
      </div>

{/*       <div className="w-full flex flex-col mt-12 justify-center items-center">
        <LaptopMockup />
      </div> */}

      {/* <div className="w-full max-h-screen overflow-hidden flex justify-center items-center px-[50px]">
        <div className="w-[60%] mr-12">
          <FeaturedComponent />
        </div>
        <div className="w-[40%] ml-12">
          <div className="relative my-12 flex h-[610px] w-[280px] border-4 shadow-indigo-500/40 shadow-md border-[#282828] rounded-2xl bg-gray-50">
            <div className="w-[148px] h-[18px] bg-[#282828] top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute" />
            <div className="h-[32px] w-[3px] bg-[#282828] absolute -left-[17px] top-[72px] rounded-l-lg" />
            <div className="h-[46px] w-[3px] bg-[#282828] absolute -left-[17px] top-[124px] rounded-l-lg" />
            <div className="h-[46px] w-[3px] bg-[#282828] absolute -left-[17px] top-[178px] rounded-l-lg" />
            <div className="h-[64px] w-[3px] bg-[#282828] absolute -right-[17px] top-[142px] rounded-r-lg" />

            <span className="absolute -right-2 top-20 border-4 border-[#282828] h-10 rounded-md"></span>
            <span className="absolute -right-2 top-44 border-4 border-[#282828] h-24 rounded-md"></span>

            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              loop={true}
              className="absolute top-0 left-0 w-full h-full"
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
            >
              {img.map((images, index) => (
                <SwiperSlide key={index}>
                  <img
                    className="object-cover rounded-xl w-full h-full"
                    src={images.image}
                    alt={`Slide ${index + 1}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default CustomerReview;
