import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function Checkout() {
  return (
    <div className="w-full mx-auto pt-10">
      <Navbar />

      <div className="gap-6 my-40 justify-self-center w-full">
        <div className="justify-self-center justify-items-center w-[100%]">
          {" "}
          <h1 className="text-xl sm:text-4xl">Order made succesfully </h1>
          <p className="text-center text-base sm:text-3xl px-10 w-[80%] mt-4">
            Thank you for Shopping
            <br /> with us,
            <br /> Hope to see you again{" "}
          </p>
        </div>
        <Link to="/">
          <div className="w-[50%] sm:w-[30%] mt-6 bg-black  justify-self-center flex justify-center items-center border-2 border-black rounded-lg cursor-pointer">
            {" "}
            <button className="text-white py-2 sm:text-2xl">
              Continue shopping{" "}
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}
