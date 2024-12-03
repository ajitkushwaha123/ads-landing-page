import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-black w-full text-center text-white p-8">
      <p className="font-medium text-[14px] md:text-[18px]">
        <span className="hover:text-primary">
          <Link href={"/contact-us"}>Contact Us </Link>
        </span>
        |
        <Link href={"/terms-of-service"} className="hover:text-primary">
          {" "}
          Term of Service {""}
        </Link>
        |
        <Link href={"/privacy-policy"} className="hover:text-primary">
          {""} Privacy Policy {""}
        </Link>
        |
        <Link href={"/shipping-and-delivery"} className="hover:text-primary">
          {""} Shipping and Delivery {""}
        </Link>
        |
        <Link href={"/cancellation-and-refund"} className="hover:text-primary">
          {""} Cancellation and Refund {""}
        </Link>
      </p>

      <p className="md:text-[16px] text-[12px] font-normal pt-3">
        Copyright 2024 Magicscale - Technologies Private Limited. All rights
        reserved.
      </p>
    </div>
  );
};

export default Footer;
