import React from "react";

const products = [
  { id: 1, name: "Loveseat Sofa", price: "$199.00", originalPrice: "$600.00", image: "chair.png", discount: "-50%", rating: 5 },
  { id: 2, name: "Luxury Sofa", price: "$299.00", originalPrice: "$500.00", image: "LivingRoom.png", discount: "-50%", rating: 5 },
  { id: 3, name: "Table Lamp", price: "$19.00", originalPrice: null, image: "lamp.png", discount: "-50%", rating: 5 },
  { id: 4, name: "Cozy Sofa", price: "$299.00", originalPrice: null, image: "cozy-sofa.png", discount: "-50%", rating: 5 },
  { id: 5, name: "White Drawer Unit", price: "$89.99", originalPrice: null, image: "drawer.png", discount: "-50%", rating: 5 },
  { id: 6, name: "Black Tray Table", price: "$19.99", originalPrice: null, image: "tray-table.png", discount: "-50%", rating: 5 },
  { id: 7, name: "Table Lamp", price: "$19.00", originalPrice: null, image: "lamp2.png", discount: "-50%", rating: 5 },
  { id: 8, name: "Black Brow Side Table", price: "$16.99", originalPrice: null, image: "side-table.png", discount: "-50%", rating: 5 },
  { id: 9, name: "Light Beige Pillow", price: "$3.99", originalPrice: null, image: "pillow1.png", discount: "-50%", rating: 5 },
  { id: 10, name: "Table Lamp", price: "$39.99", originalPrice: null, image: "bulb.png", discount: "-50%", rating: 5 },
  { id: 11, name: "Bamboo Basket", price: "$9.99", originalPrice: null, image: "basket.png", discount: "-50%", rating: 5 },
  { id: 12, name: "Off-white Pillow", price: "$7.99", originalPrice: null, image: "pillow2.png", discount: "-50%", rating: 5 },
];

const ProductGrid = () => {
  return (
    <div className="w-[90vw] max-w-[1200px] mx-auto py-10">
      {/* Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center space-y-3">
            
            {/* Product Image Container */}
            <div className="relative bg-gray-100 rounded-lg p-4 flex flex-col items-center shadow hover:shadow-lg transition group w-full">
              
              {/* NEW & Discount Badges */}
              <div className="absolute top-2 left-2 flex flex-col space-y-1">
                <span className="bg-white text-black text-xs font-semibold px-2 py-1 rounded">NEW</span>
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

              {/* Add to Cart Button (Appears on Hover) */}
              <button className="absolute bottom-4 opacity-0 bg-black text-white text-xs py-2 px-4 rounded transition-all duration-300 group-hover:opacity-100">
                Add to cart
              </button>
            </div>

            {/* Star Rating (Outside the container) */}
            <div className="flex justify-center text-black text-sm">
              {"★".repeat(product.rating)}
              {"☆".repeat(5 - product.rating)}
            </div>

            {/* Product Name (Outside the container) */}
            <h3 className="text-md font-semibold text-gray-900">{product.name}</h3>

            {/* Price & Discount (Outside the container) */}
            <div className="flex items-center justify-center space-x-2 text-sm">
              <span className="font-bold">{product.price}</span>
              {product.originalPrice && (
                <span className="text-gray-500 line-through text-xs">
                  {product.originalPrice}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex justify-center mt-6">
        <button className="bg-white  hover:bg-gray-300  text-black font-semibold py-2 px-4  border-black border  rounded-lg">
          Show more
        </button>
      </div>
    </div>
  );
};

export default ProductGrid;
