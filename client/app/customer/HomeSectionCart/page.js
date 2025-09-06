"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
export default function HomeSectionCart({title, products}) {
  

  return (
    <div className="bg-white mt-10 ml-3 py-10 rounded-lg">
      <div className="max-w-8xl  px-5 ">
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
        <Swiper   modules={[Navigation]} spaceBetween={20} slidesPerView={5} navigation
          pagination={{ clickable: true }} className="pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4 cursor-pointer flex flex-col items-center"
                >
                  <div className="h-[15rem] w-full overflow-hidden rounded-lg ">
                    <img
                      className="object-cover object-top w-full h-[95%] hover:scale-105 transition-transform duration-300 "
                      src={product.imageSrc}
                      alt={product.name}
                    />
                  </div>

                  <div className="mt-4 text-center">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
}

