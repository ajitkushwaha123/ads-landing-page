import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const img = [
  {
    image: "./ss.png",
  },
  {
    image: "./image.png",
  },
  {
    image:
      "https://i.pinimg.com/736x/bb/88/1f/bb881f2fc7c38e53bca241b20202b7a8.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/bb/88/1f/bb881f2fc7c38e53bca241b20202b7a8.jpg",
  },
];

const LaptopMockup = () => {
  return (
    <div className="flex mb-12 items-center justify-center px-4 sm:px-8">
      <div className="w-full max-w-5xl">
        {/* Laptop Screen */}
        <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[168.75px] sm:h-[300px] md:h-[400px] lg:h-[500px] w-[300px] sm:w-[500px] md:w-[700px] lg:w-[900px]">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            className="absolute top-0 left-0 w-full h-full"
            autoplay={{
              delay: 3000*20*60,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            {img.map((images, index) => (
              <SwiperSlide key={index}>
                <iframe
                  className="rounded-md w-full h-full"
                  src="https://www.youtube.com/embed/j8cPFeu8fQQ?si=8-Yev8PSUEr9Fb-X"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Laptop Base */}
        <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[20px] sm:h-[30px] md:h-[40px] w-[340px] sm:w-[500px] md:w-[700px] lg:w-[900px]">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[60px] sm:w-[90px] md:w-[120px] h-[6px] sm:h-[10px] md:h-[15px] bg-gray-800"></div>
        </div> 
      </div>
    </div>
  );
};

export default LaptopMockup;
