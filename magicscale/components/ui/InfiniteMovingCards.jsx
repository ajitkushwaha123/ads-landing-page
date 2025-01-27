"use client";

import { cn } from "../../lib/utils";
import React, { useEffect, useState } from "react";
import TweetComponent from "../Testimonials/TweetComponent";

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

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {testimonials.map((item, idx) => (
          <li key={item.title}>
            <blockquote className="md:w-max">
              <TweetComponent
                avatar={item.imgSrc}
                title={item.title}
                designation={item.designation}
                review={item.review}
              />
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
