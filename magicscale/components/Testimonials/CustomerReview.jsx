"use client";
import React from "react";
import { InfiniteMovingCards } from "../ui/InfiniteMovingCards";
import Title from "../Title";
import { SpotlightBackground } from "../ui/SpotlightBackground";
import LaptopMockup from "./LaptopMockup";
import { AnimatedTooltip } from "../ui/AnimatedTooltip";

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

const img = [
  {
    image:
      "https://i.pinimg.com/736x/bb/88/1f/bb881f2fc7c38e53bca241b20202b7a8.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/bb/88/1f/bb881f2fc7c38e53bca241b20202b7a8.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/bb/88/1f/bb881f2fc7c38e53bca241b20202b7a8.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/bb/88/1f/bb881f2fc7c38e53bca241b20202b7a8.jpg",
  },
];
const CustomerReview = () => {
  return (
    <div className="pt-8 bg-primary border-b-4 border-primary  rounded-md flex flex-col antialiased p-1 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <SpotlightBackground />
      <div className="my-8 text-white">
        <Title preTitle={"Our"} title={"Customers"} />
      </div>

      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />

      <div className="mt-10">
        <AnimatedTooltip items={people} />
      </div>

      <div className="w-full flex flex-col mt-12 justify-center items-center">
        <LaptopMockup />
      </div>

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
