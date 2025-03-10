import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Custom Icons
import "swiper/css";
import "swiper/css/navigation";

const ImageSlider = () => {
  const [swiperInstance, setSwiperInstance] = useState(null); // Store Swiper instance

  const images = [
    "ImageSlider1.png",
    "image2.png",
    "image4.png",
  ];

  return (

    <div className="relative sm:w-[150vh]  mx-auto   w-[150vh] sm:mx-auto">
      {/* Swiper Component */}
      <Swiper
        modules={[Navigation]}
        loop={true}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        onSwiper={(swiper) => setSwiperInstance(swiper)} // Capture Swiper instance
        className="rounded-lg shadow-lg"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="sm:w-full h-80 mx-auto   object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button
        className="custom-prev absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-200 transition z-10"
        onClick={() => swiperInstance?.slidePrev()} // Manually trigger previous slide
      >
        <FaChevronLeft className="text-gray-800 text-xl" />
      </button>
      <button
        className="custom-next absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-200 transition z-10"
        onClick={() => swiperInstance?.slideNext()} // Manually trigger next slide
      >
        <FaChevronRight className="text-gray-800 text-xl" />
      </button>
    </div>
  );
};

export default ImageSlider;
