import React from "react";
import "../index.css";

const NewArrivals = () => {
  const products = [
    { id: 1, name: "Loveseat Sofa", price: "$199.00", originalPrice: "$249.00", image: "chair.png", discount: "-30%", rating: 5 },
    { id: 2, name: "Table Lamp", price: "$24.99", originalPrice: null, image: "bulb.png", discount: "-50%", rating: 4 },
    { id: 3, name: "Beige Table Lamp", price: "$32.99", originalPrice: null, image: "basket.png", discount: "-50%", rating: 5 },
    { id: 4, name: "Bamboo Basket", price: "$21.00", originalPrice: null, image: "lamp.png", discount: "-50%", rating: 5 },
    { id: 5, name: "Toaster", price: "$29.99", originalPrice: null, image: "image3.png", discount: "-50%", rating: 5 },
    { id: 6, name: "Beige Table Lamp", price: "$32.99", originalPrice: null, image: "basket.png", discount: "-50%", rating: 5 },
    { id: 7, name: "Beige Table Lamp", price: "$32.99", originalPrice: null, image: "Kitchen.png", discount: "-50%", rating: 5 },
  ];

  return (
    <div className="w-[190vh]  mx-auto px-4  py-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="">
        <h2 className="text-2xl font-bold">New </h2>
        <h2 className="text-2xl font-bold">Arrivals </h2>
        </div>
        <a href="#" className="text-gray-500 hover:text-gray-800 text-sm">More Products →</a>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="flex space-x-6 overflow-x-auto hide-scrollbar    ">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center min-w-[250px]">
            
            {/* Product Image Container */}
            <div className="relative bg-gray-100 rounded-lg p-4 flex flex-col justify-center items-center w-full">
              {/* NEW Badge */}
              <span className="absolute top-4 left-4 bg-white text-black text-xs font-semibold px-2 py-1 rounded">NEW</span>
              
              {/* Discount Badge */}
              <span className="absolute top-10 left-4 bg-green-300 text-green-900 text-xs font-semibold px-2 py-1 rounded">
                {product.discount}
              </span>

              {/* Product Image */}
              <img src={product.image} alt={product.name} className="w-[40vh] h-52 object-contain rounded-lg" />

              {/* Add to Cart Button Inside Box */}
              <button className="w-full mt-3 bg-black text-white text-sm py-2 rounded hover:bg-gray-800">
                Add to cart
              </button>
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
                <span className="font-bold">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-gray-500 line-through text-xs">
                    {product.originalPrice}
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
