"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
export default function HomeSlider() {
  return (
    <section className="w-full mt-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        // navigation (this  shows arrow)
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-[300px] md:h-[400px] rounded-lg shadow-lg"
      >
        
        <SwiperSlide>
          <img
            src="/banner1.jpg"
            alt="Banner 1"
            width={1200}
            height={400}
            className="w-full h-full object-cover rounded-lg"
          />
        </SwiperSlide>

       
        <SwiperSlide>
          <img
            src="/banner2.jpg"
            alt="Banner 2"
            width={1200}
            height={400}
            className="w-full h-full object-cover rounded-lg"
          />
        </SwiperSlide>

        
        <SwiperSlide>
          <img
            src="/banner3.jpg"
            alt="Banner 3"
            width={1200}
            height={400}
            className="w-full h-full object-cover rounded-lg"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
