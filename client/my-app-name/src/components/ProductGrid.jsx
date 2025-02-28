import React from "react";
import { Link } from "react-router-dom";
import { products } from "../index/products";

const ProductGrid = () => {
  return (
    <div className="w-[90vw] max-w-[1200px] mx-auto py-10">
      {/* Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link
            to={`/product/${product.id}`}
            state={product}
            key={product.id}
            className="flex flex-col items-center space-y-3"
          >
            {/* Product Image Container */}
            <div className="relative bg-gray-100 rounded-lg p-4 flex flex-col items-center shadow hover:shadow-lg transition group w-full">
              {/* NEW & Discount Badges */}
              <div className="absolute top-2 left-2 flex flex-col space-y-1">
                <span className="bg-white text-black text-xs font-semibold px-2 py-1 rounded">
                  NEW
                </span>
                <span className="bg-green-400 text-green-900 text-xs font-semibold px-2 py-1 rounded">
                  {product.discount}
                </span>
              </div>

              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[200px] object-contain rounded-lg"
              />
            </div>

            {/* Star Rating */}
            <div className="flex justify-center text-black text-sm">
              {"★".repeat(product.rating)}
              {"☆".repeat(5 - product.rating)}
            </div>

            {/* Product Name */}
            <h3 className="text-md font-semibold text-gray-900">
              {product.name}
            </h3>

            {/* Price & Discount */}
            <div className="flex items-center justify-center space-x-2 text-sm">
              <span className="font-bold">{product.price}</span>
              {product.originalPrice && (
                <span className="text-gray-500 line-through text-xs">
                  {product.originalPrice}
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex justify-center mt-6">
        <button className="bg-white hover:bg-gray-300 text-black font-semibold py-2 px-4 border-black border rounded-lg">
          Show more
        </button>
      </div>
    </div>
  );
};

export default ProductGrid;
