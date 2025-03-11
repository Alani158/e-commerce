import React from "react";
import { Link } from "react-router-dom";

const CategoryGrid = () => {
  return (
    <div className="w-[90%] mx-auto  px-4 py-10">
      {/* Parent Grid Layout */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Living Room - Full Width on Mobile */}
        <div className="relative bg-gray-100 rounded-lg p-6 flex flex-col items-center">
          <img
            src="LivingRoom.png"
            alt="Living Room"
            className="w-full max-w-xs h-auto object-contain rounded-lg"
          />
          <div className="absolute top-4 left-4">
            <h3 className="text-lg font-semibold">Living Room</h3>
            <Link
              to="/shopnow"
              className="text-gray-600 text-sm hover:underline"
            >
              Shop Now →
            </Link>
          </div>
        </div>

        {/* Bedroom & Kitchen - Stacked in One Column */}

        {/* Bedroom & Kitchen - Stacked in One Column */}
        <div className="grid grid-rows-2 gap-4">
          {/* Bedroom */}
          <div className="relative bg-gray-100 rounded-lg p-4 flex flex-col items-center">
            <img
              src="image3.png"
              alt="Bedroom"
              className="w-full max-w-xs h-auto object-contain rounded-lg"
            />
            <div className="absolute top-4 left-4">
              <h3 className="text-sm font-semibold">Bedroom</h3>
              <Link
                to="/shopnow"
                className="text-gray-600 text-xs hover:underline"
              >
                Shop Now →
              </Link>
            </div>
          </div>

          <div className="relative bg-gray-100 rounded-lg p-4 flex flex-col items-center border border-gray-300">
            <img
              src="Kitchen.png"
              alt="Kitchen"
              className="w-full max-w-xs h-auto object-contain rounded-lg"
            />
            <div className="absolute top-4 left-4">
              <h3 className="text-sm font-semibold">Kitchen</h3>
              <Link
                to="/shopnow"
                className="text-gray-600 text-xs hover:underline"
              >
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
