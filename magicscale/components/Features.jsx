import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Features = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h3 className="md:text-5xl text-2xl px-[10px] md:max-w-[1120px] text-center font-extrabold">
        Discover the
        <span className="text-primary">
          {" "}
          3 Essential Steps to Take
        </span> Your Restaurant Business Online
      </h3>

      <img className="w-[300px] py-7 md:py-10" src="/grow.png" />

      <div className="mb-10 flex md:flex-row w-full px-[20px] flex-col justify-evenly">
        <div className="bg-secondary border-4 md:w-[360px] p-5 border-primary rounded-2xl">
          <h3 className="font-extrabold text-xl md:text-2xl">
            First - (Get Your FSSAI License)
          </h3>
          <h4 className="flex justify-center py-5">
            <FaCheckCircle className="text-primary text-[30px] mr-5" />
            <p className="font-bold text-[18px]">
              Our team ensures all necessary documents are accurate .
            </p>
          </h4>

          <h4 className="flex justify-center py-2">
            <FaCheckCircle className="text-primary text-[30px] md:text-[36px] mr-5" />
            <p className="font-bold">
              We handle the application process and keep you updated until your
              license is approved.
            </p>
          </h4>

          <h4 className="flex justify-center py-5">
            <FaCheckCircle className="text-primary text-[30px] md:text-[36px] mr-5" />
            <p className="font-bold">
              Once approved, you’ll get your FSSAI via email, with physical
              copies available upon request.
            </p>
          </h4>
        </div>

        <div className="bg-secondary border-4 md:w-[360px] my-[20px] md:my-[0px] p-5 border-primary rounded-2xl">
          <h3 className="font-extrabold text-xl">
            Second - (Get Registered on Zomato)
          </h3>
          <h4 className="flex justify-center py-5">
            <FaCheckCircle className="text-primary text-[30px] mr-5" />
            <p className="font-bold text-[18px]">
              Provide basic restaurant details, and we’ll initiate your Zomato
              registration process swiftly.
            </p>
          </h4>

          <h4 className="flex justify-center py-2">
            <FaCheckCircle className="text-primary text-[30px] mr-5" />
            <p className="font-bold">
              We help you upload your menu and set up an attractive profile to
              stand out.
            </p>
          </h4>

          <h4 className="flex justify-center py-5">
            <FaCheckCircle className="text-primary text-[36px] mr-5" />
            <p className="font-bold">
              After verification, your restaurant goes live, ready to receive
              orders seamlessly
            </p>
          </h4>
        </div>

        <div className="bg-secondary border-4 md:w-[360px] p-5 border-primary rounded-2xl">
          <h3 className="font-extrabold text-2xl">
            Third - (Register Your Restaurant on Swiggy)
          </h3>
          <h4 className="flex justify-center py-5">
            <FaCheckCircle className="text-primary text-[36px] mr-5" />
            <p className="font-bold text-[18px]">
              Share your restaurant details, and we’ll handle the Swiggy
              registration process.
            </p>
          </h4>

          <h4 className="flex justify-center py-2">
            <FaCheckCircle className="text-primary text-[36px] mr-5" />
            <p className="font-bold">
              We will be uploading your menu and optimizing pricing to attract
              more customers.
            </p>
          </h4>

          <h4 className="flex justify-center py-5">
            <FaCheckCircle className="text-primary text-[36px] mr-5" />
            <p className="font-bold">
              Once approved, your restaurant profile goes live, ready for orders
              and delivery.
            </p>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Features;
