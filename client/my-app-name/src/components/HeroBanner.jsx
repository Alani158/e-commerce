import React from "react";

const HeroBanner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center  w-full mx-auto px-6 py-12">
      {/* Left Side - Image Section */}

      <div className="w-full sm:w-[60%]">
        <img
          src="LivingRoom2.png" // Replace with actual image URL
          alt="Living Room"
          className="w-full sm:h-[330px] rounded-lg"
        />
      </div>

      {/* Right Side - Text Section */}
      <div className="sm:w-1/2 sm:h-[360px]  h-[340px] w-full md:pl-12 text-center bg-gray-50 p-14  md:text-left ">
        <p className="text-sm text-blue-600 font-semibold">
          SALE UP TO 35% OFF
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mt-2">
          HUNDREDS of <br /> New lower prices!
        </h1>
        <p className="text-gray-600 mt-4">
          It’s more affordable than ever to give every room in your home a
          stylish makeover.
        </p>

        {/* Shop Now Button */}
        <a
          href="#"
          className="inline-block mt-0 sm:mt-6 px-6 py-3  text-black text-xs  sm:text-sm font-semibold rounded-lg hover:bg-gray-800 transition"
        >
          Shop Now →
        </a>
      </div>
    </div>
  );
};

export default HeroBanner;
