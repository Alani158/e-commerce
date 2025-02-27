import React from "react";

const Shop1 = () => {
  return (
    <div className="relative w-[90vw] max-w-[1200px] h-[300px] mx-auto flex flex-col items-center justify-center bg-cover bg-center rounded-lg shadow-md" 
      style={{ backgroundImage: "url('shopimg1.png')" }}> 
      
      {/* Overlay */}
      <div className="inset-0 bg-white bg-opacity-70 rounded-lg"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Breadcrumb Navigation */}
        <nav className="text-gray-600 text-sm mb-2">
          <span className="hover:underline cursor-pointer">Home</span> 
          <span className="mx-2"> &gt; </span>
          <span className="text-gray-900 font-medium">Shop</span>
        </nav>

        {/* Page Title */}
        <h1 className="text-4xl font-bold text-gray-900">Shop Page</h1>

        {/* Subtitle */}
        <p className="text-gray-700 mt-2">
          Let's design the place you always imagined.
        </p>
      </div>
    </div>
  );
};

export default Shop1;
