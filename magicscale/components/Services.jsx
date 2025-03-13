"use client";
import React from "react";
import { Utensils, FileText, Store, Camera, Megaphone } from "lucide-react";
import Title from "./Title";
import SpotLightCard from "./Testimonials/SpotLightCard";

const services = [
  {
    icon: <Utensils className="w-12 h-12 text-blue-400" />,
    title: "Menu Uploading",
  },
  {
    icon: <FileText className="w-12 h-12 text-green-400" />,
    title: "FSSAI License Apply",
  },
  {
    icon: <Store className="w-12 h-12 text-purple-400" />,
    title: "Swiggy & Zomato Registration",
  },
  {
    icon: <Camera className="w-12 h-12 text-yellow-400" />,
    title: "High-Quality Image Uploading",
  },
  {
    icon: <Megaphone className="w-12 h-12 text-red-400" />,
    title: "Sales, Ads & Offers Creation",
  },
];

export default function OurServices() {
  return (
    <div className="pt-16 bg-black text-center text-white">
      <Title preTitle={"Our"} title={"Services"} />
      <div className="grid py-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-6 md:px-16 mt-8">
        {services.map((service, index) => (
          <SpotLightCard
            key={index}
            showSvg={false}
            className="p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 flex flex-col items-center"
          >
            <div className="p-3 rounded-full flex justify-center items-center">
              {service.icon}
            </div>
            <p className="mt-4 text-lg font-semibold">{service.title}</p>
          </SpotLightCard>
        ))}
      </div>
    </div>
  );
}
