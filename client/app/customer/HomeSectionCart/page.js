"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HomeSectionCart() {
  const products = [
    { id: 1, name: "Kurta 1", price: 1200, imageSrc: "/kurta1.jpg" },
    { id: 2, name: "Kurta 2", price: 1500, imageSrc: "/kurta2.jpg" },
    { id: 3, name: "Kurta 3", price: 999, imageSrc: "/kurta3.jpg" },
    { id: 4, name: "Kurta 4", price: 1800, imageSrc: "/kurta4.jpg" },
    { id: 5, name: "Kurta 5", price: 2000, imageSrc: "/kurta5.jpg" },
    { id: 6, name: "Kurta 6", price: 1700, imageSrc: "/kurta6.jpg" },
    { id: 7, name: "Kurta 7", price: 2200, imageSrc: "/kurta7.jpg" },
  ];

  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6">✨ Trending Kurtas</h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={5}
         
          loop={true}
          navigation
          
          className="pb-10"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4 cursor-pointer flex flex-col items-center">
                <div className="h-[15rem] w-full overflow-hidden rounded-lg">
                  <img
                    className="object-cover object-top w-full h-full hover:scale-105 transition-transform duration-300"
                    src={product.imageSrc}
                    alt={product.name}
                  />
                </div>

                <div className="mt-4 text-center">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-500 mt-1">₹{product.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
