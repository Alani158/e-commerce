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

  const handlebackCart = () => {
    navigate("/cart");
  };

  return (
    <div className="w-full mx-auto pt-10">
      <Navbar />

      <div className="gap-6 justify-self-center  flex my-20   w-[90%]">
        <div className="w-[50%] border border-black shadow-md hover:shadow-inner transition-all hover:shadow-black cursor-pointer shadow-black  rounded-lg h-96 ">
          <h1 className="text-center text-base sm:text-3xl px-10 mt-24">
            {" "}
            Sure of your order?, click on the button blow to confirm
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

        <div className="w-[50%] border  border-black shadow-md hover:shadow-inner transition-all hover:shadow-black cursor-pointer shadow-black rounded-lg h-96 ">
          <h2 className="text-center text-base sm:text-3xl px-10 mt-24">
            Not sure? You can always come back to your cart and checkout anytime
          </h2>
          <div
            className="w-[50%] sm:w-[40%] mt-6 border border-black shadow-md  hover:p-2 transition-all   bg-black justify-self-center flex justify-center items-center rounded-lg cursor-pointer"
            onClick={handlebackCart}
          >
            <button className="text-white py-2 sm:text-2xl">Go to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
