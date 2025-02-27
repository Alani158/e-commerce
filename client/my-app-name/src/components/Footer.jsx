import React from "react";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center md:justify-between text-center md:text-left">
          {/* Logo & Tagline */}
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-semibold">3legant.</h1>
            <span className="text-gray-400 text-sm">Gift & Decoration Store</span>
          </div>

          {/* Navigation Links */}
          <nav className="mt-4 md:mt-0 flex space-x-6 text-gray-300 text-sm">
            <a href="#" className="hover:text-white">Home</a>
            <a href="#" className="hover:text-white">Shop</a>
            <a href="#" className="hover:text-white">Product</a>
            <a href="#" className="hover:text-white">Blog</a>
            <a href="#" className="hover:text-white">Contact Us</a>
          </nav>
        </div>

        {/* Divider Line */}
        <hr className="border-gray-700 my-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-xs">
          <p>Copyright © 2023 3legant. All rights reserved</p>

          {/* Privacy & Terms */}
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaYoutube /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
