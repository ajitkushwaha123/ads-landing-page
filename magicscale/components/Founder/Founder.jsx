"use client";
import React from "react";
import { SpotlightBackground } from "../ui/SpotlightBackground";
import SpotLightCard from "../Testimonials/SpotLightCard";
import Title from "../Title";

const Founder = () => {
  return (
    <div className="min-h-screen lg:h-screen bg-backy relative text-white pt-6 md:pt-10 border-b-4 border-primary rounded-lg flex flex-col antialiased bg-black items-center justify-center overflow-hidden">
      <SpotlightBackground />
      <div className="pb-6 md:mt-0 mt-6">
        <Title preTitle={"MEET"} title={"OUR FOUNDERS"} />
      </div>
      <div className="w-full mt-10 flex-col lg:mt-0 overflow-hidden flex justify-center items-center px-[50px]">
        <div className="rounded-xl border-4-primary flex justify-center items-center w-[340px] lg:w-[400px]">
          <img
            className="w-[80%] md:w-[100%] md:h-[100%] rounded-full border-4 border-primary  h-[80%]"
            src="https://media.licdn.com/dms/image/v2/D5603AQFfU9WY43Ajcg/profile-displayphoto-shrink_800_800/B56ZNoPla8GwAk-/0/1732620736917?e=1747267200&v=beta&t=eC7Hn420LDUnqiveS7Djt9I5vx8ElEY_rfKCCYfpVF0"
          />
        </div>
        <div className="text-white top-28 lg:top-48 right-3 lg:right-48 absolute flex flex-col justify-center items-center text-3xl lg:text-7xl font-poppins font-bold">
          <h2>Akash</h2>
          <div className="text-primary border-2 rounded-full border-dashed px-7 py-2 border-primary">
            <h3>Verma</h3>
          </div>
        </div>

        <div className="lg:absolute my-10 lg:my-0 lg:left-20 lg:bottom-36">
          <SpotLightCard
            className="custom-spotlight-card w-[320px] md:w-[auto] h-[260px] md:h-[auto]"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <i size={40} className="fa fa-lock text-large"></i>
            <h2 className="font-medium py-1 text-lg">
              3+ years of experience in restaurants.
            </h2>
            <p className="text-sm">
              Expert in brand setup, sales growth, and business scaling with 3+
              years' experience serving 500+ restaurants.
            </p>
            <button className="mt-4 rounded-lg border-2 px-2.5 py-1.5">
              Experience
            </button>
          </SpotLightCard>
        </div>

        <div className="lg:absolute mb-16 lg:mb-0 lg:right-32 lg:bottom-10">
          <SpotLightCard
            className="custom-spotlight-card w-[320px] md:w-[auto] h-[260px] md:h-[auto]"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <i size={40} className="fa fa-lock text-large"></i>
            <h2 className="font-medium py-1 text-lg">
              Worked with over 500+ Restaurants
            </h2>
            <p className="text-sm">
              We automate menu management, pricing, and listings, reducing
              upload time and effort.
            </p>
            <button className="mt-4 rounded-lg border-2 px-2.5 py-1.5">
              Experience
            </button>
          </SpotLightCard>
        </div>

        {/* <div className="w-[120px] left-32 top-0 absolute h-[120px] rounded-full bg-primary"></div> */}
        <div className="w-[120px] left-[-60px] bottom-[-70px] absolute h-[120px] rounded-full bg-primary"></div>
        <div className="w-[120px] right-[-60px] bottom-[-70px] absolute h-[120px] rounded-full bg-primary"></div>
        <div className="w-[120px] left-[-60px] top-[-70px] absolute h-[120px] rounded-full bg-primary"></div>
        <div className="w-[120px] right-[-60px] top-[-70px] absolute h-[120px] rounded-full bg-primary"></div>

        {/* <div className="absolute flex justify-center items-center left-40 top-20">
          <div>
            <img width={65} className="rounded-lg" src="./zomato.png" />
          </div>
          <div className="ml-5">
            <img width={65} className="rounded-lg" src="./zomato.png" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Founder;
