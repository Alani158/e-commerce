import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import NewArrivals from "./NewArrival";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

const ProductDetails = () => {
  const [val, setVal] = useState(1);

  const { id } = useParams(); // Get the product ID from the URL
  const location = useLocation();
  const product = location.state; // Get product data from navigation state
  const [activeSection, setActiveSection] = useState(null);
  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const increament = () => {
    setVal(val + 1);
  };
  const decreament = () => {
    setVal(val - 1);
  };

  if (!product) {
    return <div className="text-center text-red-500">Product not found</div>;
  }

  return (
    <div className="w-full mx-auto pt-10">
      <div>
        {" "}
        <Navbar />
      </div>
      <div className="flex gap-6 mt-4 justify-self-center w-[90%]">
        <div className="w-[50%]  grid grid-rows-2 grid-cols-2 gap-6">
          <img
            key={id}
            src={`/${product.image}`}
            alt={product.name}
            className="w-full h-80 "
          />
          <img
            src={`/${product.subimg}`}
            alt={product.name}
            className="w-full h-80"
          />
          <img
            src={`/${product.image}`}
            alt={product.name}
            className="w-full h-80 "
          />
          <img
            src={`/${product.subimg}`}
            alt={product.name}
            className="w-full h-80"
          />
          <img
            src={`/${product.image}`}
            alt={product.name}
            className="w-full h-80 "
          />
          <img
            src={`/${product.subimg}`}
            alt={product.name}
            className="w-full h-80"
          />
        </div>

        <div className="ml-6 w-[50%] ">
          <p className="mt-4">{product.reviewcount} reviews</p>
          <h2 className="text-3xl font-bold mt-4">{product.name}</h2>
          <p className="mt-4 font-normal ">{product.message}</p>
          <div className="mt-4 flex gap-4  font-medium text-xl ">
            {" "}
            <p className="text-black">{product.price}</p>
            {product.originalPrice && (
              <p className="line-through text-gray-600">
                {product.originalPrice}
              </p>
            )}
          </div>
          <p className="mt-6">
            measurements: <br />
            {product.measurement}
          </p>
          <p className="mt-2">choose color {">"}</p>
          <p className="mt-6">black</p>
          <div className="mt-8 flex gap-4">
            {" "}
            <img
              key={id}
              src={`/${product.tinyimg1}`}
              alt={product.name}
              className="w-20 h-20 hover:border-2 border-black cursor-pointer"
            />{" "}
            <img
              src={`/${product.tinyimg2}`}
              alt={product.name}
              className="w-20 h-20 hover:border-2 border-black cursor-pointer"
            />{" "}
            <img
              src={`/${product.tinyimg3}`}
              alt={product.name}
              className="w-20 h-20 hover:border-2 border-black cursor-pointer"
            />{" "}
            <img
              src={`/${product.tinyimg4}`}
              alt={product.name}
              className="w-20 h-20 hover:border-2 border-black cursor-pointer"
            />
          </div>
          <div className="mt-8 flex w-full gap-4">
            <div className="bg-[#F5F5F5] flex rounded-lg ">
              <div className="justify-iten-center w-[30%] flex ">
                {" "}
                <button
                  className=" px-4 py-2 rounded-lg text-center "
                  onClick={decreament}
                >
                  -
                </button>
                <input
                  type="text"
                  className="w-12 h-10 text-center"
                  value={val}
                  onChange={(e) => setVal(e.target.value)}
                />
                <button
                  className=" w-full px-4 py-2 rounded-lg"
                  onClick={increament}
                >
                  +
                </button>
              </div>
            </div>

            <div className="w-[70%] flex justify-center items-center border-2 border-black rounded-lg cursor-pointer">
              {" "}
              <button className="">wishlist</button>
            </div>
          </div>
          <div className="w-full mt-6 bg-black  justify-self-center flex justify-center items-center border-2 border-black rounded-lg cursor-pointer">
            {" "}
            <button className="text-white py-2">Add to Cart</button>
          </div>
          <div className="mt-6">
            {" "}
            <p className="text-[#807E7E] ">
              SKU :<span className="text-black"> {product.SKU}</span>{" "}
            </p>
            <p className="text-[#807E7E]  mt-2">
              Category : <span className="text-black">{product.category}</span>{" "}
            </p>
          </div>

          <div className="mt-4 w-full">
            <div
              className="w-full flex justify-between gap-4 cursor-pointer"
              onClick={() => toggleSection("info")}
            >
              <p>Additional info</p>
              <button className="text-lg font-bold transition-transform duration-300">
                {activeSection === "info" ? "˄" : "˅"}
              </button>
            </div>
            <hr className="bg-black border-b-1 border-black" />
            {activeSection === "info" && (
              <div>
                <h1 className="mt-2">Details</h1>
                <p className="mt-3">{product.details}</p>
                <h2 className="mt-4">Packaging</h2>
                <p className="w-[50%] mt-3">{product.packaging}</p>
              </div>
            )}
          </div>

          <div className="mt-4 w-full">
            <div
              className="w-full flex justify-between gap-4 cursor-pointer"
              onClick={() => toggleSection("questions")}
            >
              <p>Questions</p>
              <button className="text-lg font-bold transition-transform duration-300">
                {activeSection === "questions" ? "˄" : "˅"}
              </button>
            </div>
            <hr className="bg-black border-b-1 border-black" />
            {activeSection === "questions" && (
              <div>
                <h1 className="mt-2">Details</h1>
                <p className="mt-3">{product.details}</p>
              </div>
            )}
          </div>

          <div className="mt-4 w-full">
            <div
              className="w-full flex justify-between gap-4 cursor-pointer"
              onClick={() => toggleSection("reviews")}
            >
              <p>Reviews</p>
              <button className="text-lg font-bold transition-transform duration-300">
                {activeSection === "reviews" ? "˄" : "˅"}
              </button>
            </div>
            <hr className="bg-black border-b-1 border-black" />
            {activeSection === "reviews" && (
              <div>
                <h1 className="mt-2">Reviews</h1>
                <p className="mt-3">{product.details}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <NewArrivals />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductDetails;
