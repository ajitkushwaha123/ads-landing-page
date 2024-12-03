"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Title from "./Title";

const Review = () => {
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

  return (
    <div
      id="our-customers"
      className="px-[20px] md:mx-[80px] overflow-x-hidden"
    >
      <Title preTitle="Our" title="Customers" />

      <div className="pt-[20px] md:pt-[40px]">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          slidesPerView={
            window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 4
          }
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="mx-[15px] -z-10">
              <div className="w-full max-w-sm -z-10 flex justify-center items-center flex-shrink-0">
                <div className="p-6 relative overflow-hidden bg-white rounded-md shadow-indigo-500/40 h-[330px] w-[300px] shadow-lg">
                  <div className="flex flex-col mb-6 items-start">
                    <img
                      className="block w-15 h-15 items-start rounded-full"
                      src={testimonial.imgSrc}
                      alt={testimonial.title}
                    />

                    <div className="absolute top-[-100px] right-[-102px]">
                      <img className="w-[200px]" src="pattern1.png" />
                    </div>

                    <p className="text-sm text-gray-500 my-6 text-[16px] mb-6">
                      {testimonial.review}
                    </p>
                    <div className="flex items-center">
                      <img
                        className="block mr-1.5"
                        src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg"
                        alt="star.svg"
                        data-config-id="auto-img-22-3"
                      />
                      <img
                        className="block mr-1.5"
                        src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg"
                        alt="star.svg"
                        data-config-id="auto-img-23-3"
                      />
                      <img
                        className="block mr-1.5"
                        src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg"
                        alt="star.svg"
                        data-config-id="auto-img-24-3"
                      />
                      <img
                        className="block mr-1.5"
                        src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg"
                        alt="star.svg"
                        data-config-id="auto-img-25-3"
                      />
                      <img
                        className="block mr-1.5"
                        src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg"
                        alt="star.svg"
                        data-config-id="auto-img-26-3"
                      />
                    </div>

                    <div className="absolute bottom-[-60px] right-[-80px]">
                      <img src="/pattern3.png" />
                    </div>

                    <div className="py-5">
                      <span className="block text-xl font-semibold leading-none">
                        {testimonial.title}
                      </span>
                      <span className="block text-sm text-gray-500">
                        {testimonial.designation}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <a
          target="_blank"
          href="https://www.google.com/search?q=pizza+9&sca_esv=991ca55629cb7d36&sca_upv=1&sxsrf=ADLYWIJawqPXysUKNMbXfQQ0bpmahyDxDA%3A1715700502747&ei=FoNDZq2ULdn3seMPz8yV8Ak&ved=0ahUKEwit94a4uo2GAxXZe2wGHU9mBZ4Q4dUDCBA&uact=5&oq=pizza+9&gs_lp=Egxnd3Mtd2l6LXNlcnAiB3BpenphIDkyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyDRAAGIAEGLADGEMYigUyDRAAGIAEGLADGEMYigUyDRAAGIAEGLADGEMYigUyDRAAGIAEGLADGEMYigUyDRAAGIAEGLADGEMYigUyDRAAGIAEGLADGEMYigUyDRAAGIAEGLADGEMYigUyDhAAGLADGOQCGNYE2AEBMg4QABiwAxjkAhjWBNgBATIZEC4YgAQYsAMY0QMYQxjHARjIAxiKBdgBAjIZEC4YgAQYsAMYQxjHARjIAxiKBRivAdgBAjIZEC4YgAQYsAMYQxjHARjIAxiKBRivAdgBAjIZEC4YgAQYsAMYQxjHARjIAxiKBRivAdgBAkhKUABYAHABeAGQAQCYAQCgAQCqAQC4AQPIAQCYAgGgAgiYAwCIBgGQBhK6BgYIARABGAm6BgYIAhABGAiSBwExoAcA&sclient=gws-wiz-serp&lqi=CgdwaXp6YSA5IgOIAQFInNSQ3I25gIAIWhkQABABGAAYASIHcGl6emEgOSoGCAIQABABkgEKcmVzdGF1cmFudKoBPBABKgsiB3BpenphIDkoADIeEAEiGg0MiP2ZdX1q265b377HjhFa_Xz71bAll1W5MgsQAiIHcGl6emEgOQ#lkt=LocalPoiReviews&rlimm=12997184429820642054"
          className="flex justify-center items-center pt-[60px]"
        >
          {/* <Button
            title={"More Reviews"}
            hoverColor={"white"}
            bgColor={"primary"}
            borderColor={"white"}
            textColor={"white"}
            hoverText={"primary"}
            bgHover={"white"}
            hoverBorder={"primary"}
          /> */}
        </a>
      </div>
    </div>
  );
};

export default Review;
