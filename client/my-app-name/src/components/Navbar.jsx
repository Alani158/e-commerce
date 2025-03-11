import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CgShoppingBag } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { FiMenu, FiX } from "react-icons/fi";
import elegant from "../images/elegant.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const updateCartCount = () => {
      const totalItems = parseInt(localStorage.getItem("cartCount")) || 0;
      setCartCount(totalItems);
    };

    // Load cart count on mount
    updateCartCount();

    // Listen for cart updates
    window.addEventListener("storage", updateCartCount);

    return () => {
      window.removeEventListener("storage", updateCartCount);
    };
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  return (
    <>
  <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50 h-[80px]  items-center">
        <div className="w-full ">
          <div className="w-[50vh] justify-self-center space-x-6 flex  ">
            <div className=" flex space-x-2 ">
              <img src="cut.png" alt="" className="w-4 h-4 relative top-1 " />
              <div className=" space-x-1 flex text-lg ">
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





    
          {/* ✅ Icons */}
          <div className="hidden md:flex items-center space-x-4 relative">
            {/* 🛒 Cart Icon */}
            <Link to="/cart" className="relative">
              <CgShoppingBag className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs font-bold rounded-full px-1">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* ❤️ Wishlist Icon */}
            <Link to="/wishlist" className="relative">
              <AiOutlineHeart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs font-bold rounded-full px-1">
                2
              </span>
            </Link>

            {/* 🔑 Authentication Button */}
            {isAuthenticated ? (
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("userId");
                  setIsAuthenticated(false);
                  navigate("/signin");
                }}
                className="bg-black text-white px-4 py-1 rounded-md text-sm"
              >
                Sign Out
              </button>
            ) : (
              <Link to="/signin" className="bg-black text-white px-4 py-1 rounded-md text-sm">
                Sign In
              </Link>
            )}
          </div>

          {/* ✅ Mobile Menu Button */}
          <button className="md:hidden text-black" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* 🔹 Prevent Content from Hiding Behind Navbar */}
      <div className="h-[72px]"></div>

      {/* 🔹 Mobile Menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-40 transition-transform duration-300">
          <div className="p-6">
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-6 text-black">
              <FiX className="w-6 h-6" />
            </button>

            {/* 🔹 Mobile Links */}
            <nav className="flex flex-col relative sm:top-0 top-5   space-y-12  mt-10">
              <Link to="/" className="sm:text-lg  text-4xl font-medium" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/shop" className="sm:text-lg text-4xl  font-medium" onClick={() => setIsOpen(false)}>Shop</Link>
              <Link to="/product" className="sm:text-lg  text-4xl font-medium" onClick={() => setIsOpen(false)}>Product</Link>
              <Link to="/contact" className="sm:text-lg  text-4xl font-medium" onClick={() => setIsOpen(false)}>Contact Us</Link>

              {/* 🔹 Cart & Wishlist */}
              <div className="space-y-10 ">
                <Link to="/cart" className="flex justify-between items-center  text-4xl  sm:text-lg" onClick={() => setIsOpen(false)}>
                  Cart
                  <span className="bg-black text-white text-xs rounded-full px-2">{cartCount}</span>
                </Link>
                <Link to="/wishlist" className="flex justify-between items-center  text-4xl  sm:text-lg" onClick={() => setIsOpen(false)}>
                  Wishlist
                  <span className="bg-black text-white text-xs rounded-full px-2">2</span>
                </Link>
              </div>

              {/* 🔑 Authentication Button */}
              {isAuthenticated ? (
                <button
                  onClick={() => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("userId");
                    setIsAuthenticated(false);
                    navigate("/signin");
                  }}
                  className="w-full bg-black text-white py-2 rounded-md mt-4 text-4xl sm:text-lg"
                >
                  Sign Out
                </button>
              ) : (
                <Link
                  to="/signin"
                  className="w-full text-center bg-black text-white py-2 rounded-md mt-4 text-4xl  sm:text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Sign In
                </Link>
              )}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
