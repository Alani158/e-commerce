import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import { IoPersonCircleSharp } from "react-icons/io5";
import { CgShoppingBag } from "react-icons/cg";
import two from "../images/two.png";
import elegant from "../images/elegant.png";
function Navbar() {
  return (
    <div className="w-full flex">
      <div className="flex w-full">
        <img src={elegant} alt="Logo" className="w-20 relative left-20 h-10" />

      
        <div className="space-x-10 relative left-14 text-sm mx-auto text-center">
      
          <Link to="/" className="hover:text-gray-500">
            Home
          </Link>
          <button>Shop</button>
          <button>Product</button>
          <button>Contact Us</button>
        </div>

        <div className="flex w-[30vh] space-x-4 relative ">
          <Link
            to="/signup"
            className="relative  text-black hover:text-gray-600"
          >
            Sign Up
          </Link>
        <Link 
        to="/cart"  >
        <CgShoppingBag className="w-5 h-5" />
        </Link>

          <IoPersonCircleSharp className="w-5 h-5" />
          <img src={two} alt="User Icon" className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;