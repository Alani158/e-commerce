import React from "react";

const HeroBanner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center  w-full mx-auto px-6 py-12">
      
      {/* Left Side - Image Section */}
      
      <div className="md:w-1/2 w-full">
        <img
          src="LivingRoom2.png" // Replace with actual image URL
          alt="Living Room"
          className="w-full  h-[50vh] rounded-lg"
        />
      </div>

      {/* Right Side - Text Section */}
      <div className="md:w-1/2 w-full md:pl-12 text-center bg-gray-50 p-20 md:text-left mt-6 md:mt-0">
        <p className="text-sm text-blue-600 font-semibold">SALE UP TO 35% OFF</p>
        <h1 className="text-3xl md:text-4xl font-bold mt-2">HUNDREDS of <br /> New lower prices!</h1>
        <p className="text-gray-600 mt-4">
          It’s more affordable than ever to give every room in your home a stylish makeover.
        </p>
        
        {/* Shop Now Button */}
        <a href="#" className="inline-block mt-6 px-6 py-3  text-black text-sm font-semibold rounded-lg hover:bg-gray-800 transition">
          Shop Now →
        </a>
      </div>
      </div>
    
  );
};

export default HeroBanner;
