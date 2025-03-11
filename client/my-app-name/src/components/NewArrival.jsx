import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { newAarrival } from "../index/products";
// import products from "../index/products";
const NewArrivals = () => {
  const handleAddToCart = (product) => {
    const val = 1; // Default quantity value
    const userId = localStorage.getItem("userId") || "guest"; // Fallback for non-logged-in users
    const cartKey = `cart_${userId}`;

    let cart = JSON.parse(localStorage.getItem(cartKey)) || [];

    const existingProductIndex = cart.findIndex(
      (item) => item.productId === product.id
    );

    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += val;
    } else {
      cart.push({
        productId: product.id,
        quantity: Number(val),
        name: product.name,
        img: product.image,
        price: Number(product.price),
      });
    }

    localStorage.setItem(cartKey, JSON.stringify(cart));
    alert("Product added to cart");
  };
  return (
    <div className=" sm:w-[90%]  w-[90%] mx-auto px-4  py-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="">
          <h2 className="text-2xl font-bold">New </h2>
          <h2 className="text-2xl font-bold">Arrivals </h2>
        </div>
        <a href="/" className="text-gray-500 hover:text-gray-800 text-sm">
          More Products →
        </a>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="flex space-x-6 overflow-x-auto hide-scrollbar    ">
        {newAarrival.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center min-w-[250px]"
          >
            {/* Product Image Container */}
            <div className="relative bg-gray-100 rounded-lg p-4 flex flex-col justify-center items-center w-full">
              {/* NEW Badge */}
              <span className="absolute top-4 left-4 bg-white text-black text-xs font-semibold px-2 py-1 rounded">
                NEW
              </span>

              {/* Discount Badge */}
              <span className="absolute top-10 left-4 bg-green-300 text-green-900 text-xs font-semibold px-2 py-1 rounded">
                {product.discount}
              </span>

              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-[40vh] h-52 object-contain rounded-lg"
              />

              {/* Add to Cart Button Inside Box */}
              <Link to="/cart">
                <div
                  className="w-full px-2 mt-6 bg-black  justify-self-center flex justify-center items-center border-2 border-black rounded-lg cursor-pointer"
                  onClick={() => handleAddToCart(product)}
                >
                  {" "}
                  <button className="text-white py-2">Add to Cart</button>
                </div>
              </Link>
            </div>

            {/* Product Info - Outside Image Container */}
            <div className="mt-3 text-center w-full">
              {/* Star Rating */}
              <div className="flex justify-center text-black text-xs mb-1">
                {"★".repeat(product.rating)}
                {"☆".repeat(5 - product.rating)}
              </div>

              {/* Product Name */}
              <h3 className="text-sm font-semibold">{product.name}</h3>

              {/* Price & Discount */}
              <div className="flex items-center justify-center space-x-2 text-sm mt-1">
                <span className="font-bold">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-gray-500 line-through text-xs">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
