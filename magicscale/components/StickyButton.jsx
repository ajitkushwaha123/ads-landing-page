import React from "react";
import Link from "next/link";

const StickyButton = () => {
  return (
    <div className="w-full flex z-100">
      <button className="bg-primary w-[50%] h-[50px] flex justify-between text-[16px] md:text-[23px] items-center hover:bg-white hover:border-primary border-2 border-primary hover:text-primary px-[12px] md:px-[20px] py-2 md:py-4 text-white">
        <div className="flex justify-center items-center">
          <img
            className="md:w-[40px] w-[20px] mr-2 md:mr-3"
            src="/whatsapp.png"
          />
          <span className="hidden md:block">Chat On </span>
          <span className="ml-2"> Whatsapp</span>
        </div>
      </button>
      <button className="w-[50%] bg-white items-center text-primary border-primary hover:bg-white hover:border-primary border-2 px-[12px] md:px-[20px] py-2 md:py-4">
        <a
          href="tel:8826073117"
          className="flex hover:text-[#363636] font-bold md:ml-5 ml-3 justify-center text-[16px] md:text-[23px] "
          aria-label="Request Call"
        >
          <img
            className="md:w-[40px] w-[20px] mr-2 md:mr-3"
            src="/customer-service.png"
            alt="Customer Service"
          />
          Call Us
        </a>
      </button>
      {/* <div className="flex justify-center text-[18px] font-semibold pt-[18px] mt-[36px] items-center">
        <Link href="https://api.whatsapp.com/send?phone=919311330885&text=Could%20you%20provide%20more%20details%20about%20Magicscale%27s%20services%3F%20%F0%9F%9A%80%F0%9F%92%A1">
          <button className="bg-primary animate-bounce flex justify-between text-[16px] md:text-[23px] items-center hover:bg-white hover:border-primary border-2 border-primary hover:text-primary px-[12px] md:px-[20px] py-2 md:py-4 rounded-lg text-white">
            <img
              className="md:w-[40px] w-[20px] mr-2 md:mr-3"
              src="/whatsapp.png"
            />
            <span className="hidden md:block">Chat On </span>
            <span> Whatsapp</span>
          </button>
        </Link>
        <a
          href="tel:8826073117"
          className="flex hover:text-[#363636] font-bold animate-bounce md:ml-5 ml-3 justify-between text-[16px] md:text-[23px] bg-white items-center text-primary border-primary hover:bg-white hover:border-primary border-2 px-[12px] md:px-[20px] py-2 md:py-4 rounded-lg"
          aria-label="Request Call"
        >
          <img
            className="md:w-[40px] w-[20px] mr-2 md:mr-3"
            src="/customer-service.png"
            alt="Customer Service"
          />
          Connect Call
        </a>
      </div> */}
    </div>
  );
};

export default StickyButton;
