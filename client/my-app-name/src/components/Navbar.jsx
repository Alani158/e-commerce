import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CgShoppingBag } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { FiMenu, FiX } from "react-icons/fi";
import elegant from "../images/elegant.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
      const totalItems = storedCart.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
      setCartCount(totalItems);
    };

    updateCartCount();
    window.addEventListener("storage", updateCartCount);
    return () => {
      window.removeEventListener("storage", updateCartCount);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      {/* ✅ Top Announcement Bar (Ensures No Overlap) */}
      {/* ✅ Navbar with Fixed Position & No Overlap */}
      <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50 h-[80px]  items-center">
        <div className="w-full ">
          <div className="w-[50vh] justify-self-center space-x-6 flex  ">
            <div className=" flex space-x-2 ">
              <img src="cut.png" alt="" className="w-4 h-4 relative top-1 " />
              <div className=" space-x-1 flex">
                <p>30% storewide</p>
                <p>-Limited</p>
              </div>
            </div>
            <div className="">
              <a href="/" className="text-sm text-blue-500  hover:underline">
                Shop Now →
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <img src={elegant} alt="Logo" className="w-16 h-8" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-sm">
            <Link to="/" className="hover:text-gray-500">
              Home
            </Link>
            <Link to="/shop" className="hover:text-gray-500">
              Shop
            </Link>
            <Link to="/product" className="hover:text-gray-500">
              Product
            </Link>
            <Link to="/contact" className="hover:text-gray-500">
              Contact Us
            </Link>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/cart" className="relative">
              <CgShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full px-1">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link to="/wishlist" className="relative">
              <AiOutlineHeart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full px-1">
                2
              </span>
            </Link>
            <Link
              to="/signin"
              className="bg-black text-white px-3 py-1 rounded-md text-xs"
            >
              Sign In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <FiX className="w-5 h-5" />
            ) : (
              <FiMenu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>
      {/* ✅ Prevent Page Content from Being Hidden */}
      <div className="h-[82px]"></div>{" "}
      {/* Prevents content from hiding behind navbar */}
      {/* ✅ Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="py-5 px-6 space-y-4">
          <Link
            to="/"
            className="block text-base hover:text-gray-500"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="block text-base hover:text-gray-500"
            onClick={() => setIsOpen(false)}
          >
            Shop
          </Link>
          <Link
            to="/product"
            className="block text-base hover:text-gray-500"
            onClick={() => setIsOpen(false)}
          >
            Product
          </Link>
          <Link
            to="/contact"
            className="block text-base hover:text-gray-500"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>

          {/* Cart & Wishlist */}
          <div className="space-y-3">
            <Link
              to="/cart"
              className="flex items-center justify-between text-base hover:text-gray-500"
              onClick={() => setIsOpen(false)}
            >
              Cart{" "}
              <span className="bg-black text-white text-xs rounded-full px-2">
                {cartCount}
              </span>
            </Link>
            <Link
              to="/wishlist"
              className="flex items-center justify-between text-base hover:text-gray-500"
              onClick={() => setIsOpen(false)}
            >
              Wishlist{" "}
              <span className="bg-black text-white text-xs rounded-full px-2">
                2
              </span>
            </Link>
          </div>

          {/* Sign In Button */}
          <Link
            to="/signin"
            className="block bg-black text-white text-center py-1 rounded-md text-sm"
            onClick={() => setIsOpen(false)}
          >
            Sign In
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
