import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

const Features = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h3 className="md:text-5xl text-2xl px-[10px] md:max-w-[1120px] text-center font-extrabold">
        Learn <span className="text-primary">3 Stages to Start Profitable</span>{" "}
        Indian E-commerce Store
      </h3>

      <img className="w-[300px] py-7 md:py-10" src="/grow.png" />

      <div className="mb-10 flex md:flex-row w-full px-[20px] flex-col justify-evenly">
        <div className="bg-secondary border-4 md:w-[360px] p-5 border-primary rounded-2xl">
          <h3 className="font-extrabold text-xl md:text-2xl">
            Start (Identify Winning Products)
          </h3>
          <h4 className="flex justify-center py-5">
            <FaCheckCircle className="text-primary text-[30px] md:text-[36px] mr-5" />
            <p className="font-bold text-[18px]">
              Find winning products using the latest and free methods.
            </p>
          </h4>

          <h4 className="flex justify-center py-2">
            <FaCheckCircle className="text-primary text-[30px] md:text-[36px] mr-5" />
            <p className="font-bold">
              Utilize free ad materials instead of creating them from scratch.
            </p>
          </h4>

          <h4 className="flex justify-center py-5">
            <FaCheckCircle className="text-primary text-[30px] md:text-[36px] mr-5" />
            <p className="font-bold">
              Create Compelling, High-Converting Ads Powered by AI
            </p>
          </h4>
        </div>

        <div className="bg-secondary border-4 md:w-[360px] my-[20px] md:my-[0px] p-5 border-primary rounded-2xl">
          <h3 className="font-extrabold text-xl">
            Start (Identify Winning Products)
          </h3>
          <h4 className="flex justify-center py-5">
            <FaCheckCircle className="text-primary text-[30px] mr-5" />
            <p className="font-bold text-[18px]">
              Find winning products using the latest and free methods.
            </p>
          </h4>

          <h4 className="flex justify-center py-2">
            <FaCheckCircle className="text-primary text-[30px] mr-5" />
            <p className="font-bold">
              Utilize free ad materials instead of creating them from scratch.
            </p>
          </h4>

          <h4 className="flex justify-center py-5">
            <FaCheckCircle className="text-primary text-[36px] mr-5" />
            <p className="font-bold">
              Create Compelling, High-Converting Ads Powered by AI
            </p>
          </h4>
        </div>

        <div className="bg-secondary border-4 md:w-[360px] p-5 border-primary rounded-2xl">
          <h3 className="font-extrabold text-2xl">
            Start (Identify Winning Products)
          </h3>
          <h4 className="flex justify-center py-5">
            <FaCheckCircle className="text-primary text-[36px] mr-5" />
            <p className="font-bold text-[18px]">
              Find winning products using the latest and free methods.
            </p>
          </h4>

          <h4 className="flex justify-center py-2">
            <FaCheckCircle className="text-primary text-[36px] mr-5" />
            <p className="font-bold">
              Utilize free ad materials instead of creating them from scratch.
            </p>
          </h4>

          <h4 className="flex justify-center py-5">
            <FaCheckCircle className="text-primary text-[36px] mr-5" />
            <p className="font-bold">
              Create Compelling, High-Converting Ads Powered by AI
            </p>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Features
