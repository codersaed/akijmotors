import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";

const Banner = ({ isOpen }) => {
  const className = `h-screen relative left-0 transition-all ${
    isOpen && "md:ml-64"
  }`;

  return (
    <>
      <div className={className}>
        <Swiper
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="w-full h-screen"
        >
          <SwiperSlide>
            <img className="w-full h-full" src="/images/banner1.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-full" src="/images/banner1.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-full" src="/images/banner1.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
