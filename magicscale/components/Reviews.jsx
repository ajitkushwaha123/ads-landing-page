import React from "react";
import Title from "./Title";
import ReviewSlider from "./ReviewSlider";

const Reviews = () => {
  return (
    <div className="bg-secondary flex w-full justify-center flex-col items-center pt-12 pb-10">
      <div className="w-full flex">
        <ReviewSlider />
      </div>
    </div>
  );
};

export default Reviews;
