import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId"); // Assuming user ID is stored in local storage

  const handleContinueShopping = () => {
    localStorage.removeItem(`cart_${userId}`);
    alert("Order placed successfully");
    navigate("/");
  };

  return (
    <div className="w-full mx-auto pt-0">
      <Navbar />

      <div className="gap-6 sm:justify-self-center   sm:flex my-10  sm:w-[90%]">
        <div className="sm:w-[50%] border border-black shadow-md hover:shadow-inner transition-all hover:shadow-black cursor-pointer shadow-black  rounded-lg sm:h-96 w-[80%] h-60 mx-auto ">
          <h1 className="text-center text-base sm:text-3xl px-10 sm:mt-24 mt-5">
            {" "}
            Thank you for your order! Your order has been placed successfully.
          </h1>
          <div
            className="w-[50%] sm:w-[40%] mt-6 border border-black shadow-md  hover:p-2 transition-all   bg-black justify-self-center flex justify-center items-center rounded-lg cursor-pointer"
            onClick={handleContinueShopping}
          >
            <button className="text-white py-2 sm:text-2xl">
              Continue shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
