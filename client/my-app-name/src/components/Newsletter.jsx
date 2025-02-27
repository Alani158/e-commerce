import React from "react";

function Newsletter() {
  return (
    <div className="relative w-full h-[300px]">
      <img 
        src="newsletter.png" 
        alt="Newsletter Background"
        className="w-full h-full "
      />
      <div className="absolute inset-0  bg-opacity-80"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center">
          Join Our Newsletter
        </h2>
        <p className="text-gray-600 mt-2 text-center">
          Sign up for deals, new products, and promotions
        </p>
        <div className="mt-4 flex items-center border-b border-gray-400 py-2 w-full max-w-md">
          <span className="text-gray-500 pr-2">📧</span>
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 bg-transparent border-none focus:outline-none text-gray-800 placeholder-gray-500"
          />
          <button className="text-gray-700 font-medium hover:text-black transition">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
