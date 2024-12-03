import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Features = () => {
  return (
    <div className="w-full bg-backy bg-cover bg-repeat-none flex flex-col py-6 items-center justify-center">
      <h3 className="md:text-5xl text-2xl px-[10px] md:max-w-[1120px] text-center font-extrabold">
        Discover the
        <span className="text-primary"> 3 Essential Steps to Take</span> Your
        Restaurant Business Online
      </h3>

      <img className="w-[300px] py-7 md:py-10" src="/grow.png" />

      <div className="mb-10 flex md:flex-row w-full px-[20px] flex-col justify-evenly">
        <div className="bg-secondary border-4 md:w-[360px] p-5 border-primary rounded-2xl">
          <h3 className="font-extrabold text-xl md:text-2xl">
            First - (Get Your FSSAI License)
          </h3>
          <h4 className="flex justify-center py-5">
            <p className="font-bold text-[#363636] text-[15px]">
              <span className="font-extrabold text-black">1.</span> Our team
              ensures all necessary documents are accurate .
            </p>
          </h4>

          <h4 className="flex justify-center py-2">
            <p className="font-bold text-[#363636] text-[15px]">
              <span className="font-extrabold text-black">2.</span> We handle
              the application process and keep you updated until your license is
              approved.
            </p>
          </h4>

          <h4 className="flex justify-center py-5">
            <p className="font-bold text-[#363636] text-[15px]">
              <span className="font-extrabold text-black">3.</span> Once
              approved, you’ll get your FSSAI via email, with physical copies
              available upon request.
            </p>
          </h4>
        </div>

        <div className="bg-secondary border-4 md:w-[360px] my-[20px] md:my-[0px] p-5 border-primary rounded-2xl">
          <h3 className="font-extrabold text-xl">
            Second - (Get Registered on Zomato)
          </h3>
          <h4 className="flex justify-center py-5">
            <p className="font-bold text-[#363636] text-[15px]">
              <span className="font-extrabold text-black">1.</span> Provide
              basic restaurant details, and we’ll initiate your Zomato
              registration process swiftly.
            </p>
          </h4>

          <h4 className="flex justify-center py-2">
            <p className="font-bold text-[#363636] text-[15px]">
              <span className="font-extrabold text-black">2.</span> We help you
              upload your menu and set up an attractive profile to stand out.
            </p>
          </h4>

          <h4 className="flex justify-center py-5">
            <p className="font-bold text-[#363636] text-[15px]">
              <span className="font-extrabold text-black">3.</span> After
              verification, your restaurant goes live, ready to receive orders
              seamlessly
            </p>
          </h4>
        </div>

        <div className="bg-secondary border-4 md:w-[360px] p-5 border-primary rounded-2xl">
          <h3 className="font-extrabold text-2xl">
            Third - (Register Your Restaurant on Swiggy)
          </h3>
          <h4 className="flex justify-center py-5">
            <p className="font-bold text-[15px] text-[#363636]">
              <span className="font-extrabold text-black">1.</span> Share your
              restaurant details, and we’ll handle the Swiggy registration
              process.
            </p>
          </h4>

          <h4 className="flex justify-center py-2">
            <p className="font-bold text-[#363636] text-[15px]">
              <span className="font-extrabold text-black">2.</span> We will be
              uploading your menu and optimizing pricing to attract more
              customers.
            </p>
          </h4>

          <h4 className="flex justify-center py-5">
            <p className="font-bold text-[#363636] text-[15px]">
              <span className="font-extrabold text-black">3.</span> Once
              approved, your restaurant profile goes live, ready for orders and
              delivery.
            </p>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Features;
