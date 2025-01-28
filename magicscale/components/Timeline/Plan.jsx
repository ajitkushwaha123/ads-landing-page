"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { SpotlightBackground } from "../../components/ui/SpotlightBackground";
import Title from "../Title";
import SpotLightCard from "../Testimonials/SpotLightCard";

const Plan = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(data.length * 150 + 300);
  console.log(data.length * 150 + 300);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="bg-pattern2 text-white py-12 bg-primary border-b-4 border-primary rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center">
      {/* <SpotlightBackground /> */}
      <div className="pb-8 mt-5">
        <Title preTitle={"SCALE YOUR"} title={"RESTAURANT BUISNESS"} />
      </div>

      <div className="flex justify-center h-screen w-full">
        <div
          style={{
            height: height + "px",
          }}
          className="w-[2px] relative bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>

        {data.map((item, index) => {
          const margin = 100; // Define margin
          return (
            <div
              key={index}
              className={`md:absolute flex justify-center items-center`}
              style={{
                marginTop: `${margin * (index + 1) + 50 * (index)}px`,
                left: "48.7%",
                right: "49%",
              }}
            >
              <div className="h-10 relative w-10 rounded-full dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <div
                className={`text-white absolute flex flex-col justify-center items-center text-7xl font-poppins font-bold ${
                  index % 2 === 0 ? "left-16" : "right-16"
                }`}
              >
                {item.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Plan;
