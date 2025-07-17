import React from "react";
import newsletter from "../images/newsletter.webp";

function Newsletter() {
  return (
    <>
      {/* ✅ Large Screen Version (with Image) */}
      <div className="relative w-full h-[300px] hidden md:block">
        <img
          src={newsletter}
          alt="Newsletter Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <h2 className="text-3xl font-semibold text-gray-900 text-center">
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

      {/* ✅ Mobile Version (Text-Only) */}
      <div className="bg-gray-100 py-10 px-4 w-full flex flex-col items-center  md:hidden">
        <h2 className="text-xl font-semibold text-gray-900 text-center">
          Join Our Newsletter
        </h2>
        <p className="text-gray-600 text-sm mt-1 text-center">
          Sign up for deals, new products and promotions
        </p>
        <div className="flex items-center border-b border-gray-400 mt-4 w-full max-w-xs sm:max-w-md py-1 px-2">
          <span className="text-gray-500 text-lg">📧</span>
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 bg-transparent border-none focus:outline-none text-gray-800 placeholder-gray-500 px-2"
          />
          <button className="text-gray-700 font-medium hover:text-black transition">
            Signup
          </button>
        </div>
      </div>
    </>
  );
}

export default Newsletter;
