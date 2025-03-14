"use client";

import { cn } from "../../lib/utils";
import React, { useEffect, useState } from "react";
import TweetComponent from "../Testimonials/TweetComponent";
import ClientSlide from "../Testimonials/ClientSlide";

export const InfiniteMovingCards = ({
  items = [],
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  clientCarousel=false,
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
        {items.map((item, idx) => (
          <li key={item.title}>
            <blockquote className="w-[320px] md:w-auto">
              {clientCarousel === false ? (
                <TweetComponent
                  avatar={item.imgSrc}
                  title={item.title}
                  designation={item.designation}
                  review={item.review}
                />
              ) : (
                <div>
                  <ClientSlide img={item.imgSrc}/>
                </div>
              )}
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
