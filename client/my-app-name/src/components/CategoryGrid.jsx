import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const CategoryGrid = () => {
  return (
    <div className="w-[160vh] mx-auto px-4 py-10">
      {/* Parent Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Side - Living Room (Large Section) */}
        <div className="relative bg-gray-100 rounded-lg p-6 flex justify-center items-center">
          <img
            src="LivingRoom.png" // Replace with actual image
            alt="Living Room"
            className="w-full h-auto object-cover rounded-lg"
          />
          <div className="absolute top-4 left-4">
            <h3 className="text-lg font-semibold">Living Room</h3>
            {/* Fix: Use Link instead of <a href="#"> */}
            <Link to="/shopnow" className="text-gray-600 text-sm hover:underline">
              Shop Now →
            </Link>
          </div>
        </div>

        {/* Right Side - Bedroom & Kitchen (Stacked Grid) */}
        <div className="grid grid-rows-2 gap-4">
          {/* Bedroom */}
          <div className="relative bg-gray-100 rounded-lg p-4 flex justify-center items-center">
            <img
              src="image3.png" // Replace with actual image
              alt="Bedroom"
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute top-4 left-4">
              <h3 className="text-sm font-semibold">Bedroom</h3>
              <Link to="/shopnow" className="text-gray-600 text-xs hover:underline">
                Shop Now →
              </Link>
            </div>
          </div>

          {/* Kitchen */}
          <div className="relative bg-gray-100 rounded-lg p-4 flex justify-center items-center border border-gray-300">
            <img
              src="Kitchen.png" // Replace with actual image
              alt="Kitchen"
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute top-4 left-4">
              <h3 className="text-sm font-semibold">Kitchen</h3>
              <Link to="/shopnow" className="text-gray-600 text-xs hover:underline">
                Shop Now →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryGrid;
