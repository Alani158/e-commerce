import React from "react";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* ✅ Logo & Store Info (Always Centered) */}
        <div className="text-center">
          <h1 className="text-xl font-semibold">3legant.</h1>
          <p className="text-gray-400 text-sm mt-1">Gift & Decoration Store</p>
        </div>

        {/* ✅ Navigation Links (Vertical on Small Screens) */}
        <nav className="mt-6 flex flex-col space-y-2 text-gray-300 text-sm text-center md:hidden">
          <a href="/" className="hover:text-white">Home</a>
          <a href="/" className="hover:text-white">Shop</a>
          <a href="/" className="hover:text-white">Product</a>
          <a href="/" className="hover:text-white">Blog</a>
          <a href="/" className="hover:text-white">Contact Us</a>
        </nav>

        {/* ✅ Navigation Links (Horizontal on Large Screens) */}
        <nav className="hidden md:flex justify-center space-x-6 text-gray-300 text-sm mt-4">
          <a href="/" className="hover:text-white">Home</a>
          <a href="/" className="hover:text-white">Shop</a>
          <a href="/" className="hover:text-white">Product</a>
          <a href="/" className="hover:text-white">Blog</a>
          <a href="/" className="hover:text-white">Contact Us</a>
        </nav>

        {/* ✅ Divider */}
        <hr className="border-gray-700 my-6 w-[90%] mx-auto" />

        {/* ✅ Bottom Section */}
        <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-between text-gray-400 text-xs">
          
          {/* ✅ Social Icons (Centered on Mobile) */}
          <div className="flex space-x-4">
            <a href="/" className="hover:text-white"><FaInstagram /></a>
            <a href="/" className="hover:text-white"><FaFacebookF /></a>
            <a href="/" className="hover:text-white"><FaYoutube /></a>
          </div>

          {/* ✅ Privacy & Terms */}
          <div className="flex space-x-4">
            <a href="/" className="hover:text-white">Privacy Policy</a>
            <a href="/" className="hover:text-white">Terms of Use</a>
          </div>

          {/* ✅ Copyright */}
          <p className="text-center md:text-left">© 2023 3legant. All rights reserved</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
