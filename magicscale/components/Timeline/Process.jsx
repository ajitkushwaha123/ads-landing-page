import React from "react";
import { Timeline } from "@/components/ui/Timeline";
import SpotLightCard from "../Testimonials/SpotLightCard";
import Plan from "./Plan";
import Title from "../Title";
// import { SpotlightBackground } from "../ui/SpotlightBackground"

export function Process() {
  const data = [
    {
      content: "2024",
      title: (
        <div>
          <SpotLightCard className="w-full md:min-w-[500px]">
            <h2 className="font-semibold text-primary mt-2 py-1 text-lg">
              1. Get Your FSSAI License In Just 24hrs
            </h2>
            <p className="text-sm mt-2 font-medium">
              Fast-track your licensing process with MagicScale's expert
              guidance, at just ₹499!
            </p>
            {/* <button className="mt-5 text-sm font-medium rounded-lg border-2 px-2.5 py-1.5">
              Get Quote
            </button> */}
          </SpotLightCard>
        </div>
      ),
    },
    {
      content: "2024",
      title: (
        <div>
          <SpotLightCard className="w-full md:min-w-[500px]">
            <h2 className="font-semibold text-primary mt-2 py-1 text-lg">
              2. Get Listed on Zomato & Swiggy
            </h2>
            <p className="text-sm mt-2 font-medium">
              Simplify your Zomato and Swiggy registration and start reaching
              thousands of customers today!
            </p>
            {/* <button className="mt-4 rounded-lg text-sm font-medium border-2 px-2.5 py-1.5">
              Get Quote
            </button> */}
          </SpotLightCard>
        </div>
      ),
    },
    {
      content: "2024",
      title: (
        <div>
          <SpotLightCard className="w-full md:min-w-[500px]">
            <h2 className="font-medium text-primary py-1 text-lg">
              3. Professional Menu Listing on All Platforms
            </h2>
            <p className="text-sm mt-2 font-medium">
              We List your products on Zomato and Swiggy with professional
              photos and setup! .
            </p>
          </SpotLightCard>
        </div>
      ),
    },

    {
      content: "2024",
      title: (
        <div>
          <SpotLightCard className="w-full md:min-w-[500px]">
            <h2 className="font-medium text-primary py-1 text-lg">
              4.Scale Up Your Business 
            </h2>
            <p className="text-sm mt-2 font-medium">
              Magicscale helps scale your business by efficiently managing your
              accounts and optimizing offers.
            </p>
          </SpotLightCard>
        </div>
      ),
    },
  ];
  return (
    <div className="">
      <div className="hidden md:block">
        <Plan data={data} />
      </div>
      <div className="md:hidden text-white py-6 border-b-4 rounded-md flex flex-col antialiased bg-black items-center justify-center">
        <div className="pb-8 mt-5">
          <Title preTitle={"SCALE UP YOUR"} title={"RESTAURANT"} />
        </div>
        {/* <SpotlightBackground /> */}
        {data.map((item, index) => {
          return (
            <div
              className="flex mb-6 px-[10px] justify-center items-center"
              key={index}
            >
              {item.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}
