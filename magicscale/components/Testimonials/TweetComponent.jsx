import React from "react";
import SpotLightCard from "./SpotLightCard";

const TweetComponent = ({ avatar, title, designation, review }) => {
  return (
    <SpotLightCard
      className="custom-spotlight-card h-[260px]"
      spotlightColor="rgba(0, 229, 255, 0.2)"
    >
      <p className="py-6">{review}</p>

      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={avatar}
            alt="avatar"
            className="rounded-full border-2 p-[2px] border-indigo-600 w-12 h-12"
          />
          <button className="ml-4 flex flex-col justify-start items-start">
            <h3 className="font-semibold">{title}</h3>
           
            <p className="text-medium text-[#dfdfdf]">{designation}</p>
          </button>
        </div>

        <div className="flex items-start">
          <img
            className="block mr-1.5"
            src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg"
            alt="star.svg"
          />
          <img
            className="block mr-1.5"
            src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg"
            alt="star.svg"
          />
          <img
            className="block mr-1.5"
            src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg"
            alt="star.svg"
          />
          <img
            className="block mr-1.5"
            src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg"
            alt="star.svg"
          />
          <img
            className="block mr-1.5"
            src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg"
            alt="star.svg"
          />
        </div>
      </div>
    </SpotLightCard>
  );
};

export default TweetComponent;
