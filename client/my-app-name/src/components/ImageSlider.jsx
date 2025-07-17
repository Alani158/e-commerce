import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";

const ImageSlider = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const images = ["ImageSlider1.png", "image2.png", "image4.png"];

  return (
    <div className="relative sm:w-full    mx-auto">
      {/* Swiper Component */}
      <Swiper
        modules={[Navigation]}
        loop={true}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        className="rounded-lg shadow-lg"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              loading="lazy"
              className="h-[15rem] w-full sm:h-[400px] object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button
        className="custom-prev absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-200 transition z-10"
        onClick={() => swiperInstance?.slidePrev()}
      >
        <FaChevronLeft className="text-gray-800 text-xl" />
      </button>
      <button
        className="custom-next absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-200 transition z-10"
        onClick={() => swiperInstance?.slideNext()}
      >
        <FaChevronRight className="text-gray-800 text-xl" />
      </button>
    </div>
  );
};

export default ImageSlider;
