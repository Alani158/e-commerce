import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Newsletter from "./Newsletter";

const Cart = () => {
  const userId = localStorage.getItem("userId") || "guest";
  const [cart, setCart] = useState([]);
  const [shipping, setShipping] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem(`cart_${userId}`)) || [];
    setCart(storedCart);
  }, [userId]);

  const updateCartCount = (updatedCart) => {
    const totalItems = updatedCart.reduce((acc, item) => acc + item.quantity, 0);
    localStorage.setItem(`cart_${userId}`, JSON.stringify(updatedCart));
    localStorage.setItem("cartCount", totalItems);
    window.dispatchEvent(new Event("storage"));
  };

  const handleRemove = (productId) => {
    const updatedCart = cart.filter((item) => item.productId !== productId);
    setCart(updatedCart);
    updateCartCount(updatedCart);
  };

  const handleQuantityChange = (productId, change) => {
    const updatedCart = cart.map((item) =>
      item.productId === productId
        ? { ...item, quantity: Math.max(1, item.quantity + change) }
        : item
    );
    setCart(updatedCart);
    updateCartCount(updatedCart);
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const handleBackToShop = () => {
    navigate("/shopnow");
  };

  const subtotal = cart.reduce((acc, item) => acc + Number(item.price) * item.quantity, 0);
  const total = subtotal + shipping;

  return (
    <div>
      <Navbar />

      <div className="w-[90%] max-w-[1400px] mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-6">Cart</h2>

        {/* ✅ Back to Shop Button */}
        <button 
          onClick={handleBackToShop} 
          className=" text-black px-4 py-2 rounded-md mb-6  transition"
        >
          ← Back to Shop
        </button>

        {cart.length === 0 ? (
          <p className="text-center mt-6">Your cart is empty.</p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* ✅ Left Section - Cart Items */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-semibold border-b pb-2 mb-4">Product</h3>

              <div className="hidden lg:grid grid-cols-5 gap-4 font-semibold text-gray-700 mb-4">
                <span className="col-span-2">Product</span>
                <span className="text-center">Quantity</span>
                <span className="text-right">Price</span>
                <span className="text-right hidden lg:block">Subtotal</span>
              </div>

              <div className="space-y-6">
                {cart.map((item) => (
                  <div 
                    key={item.productId} 
                    className="grid grid-cols-1 lg:grid-cols-5 items-center border-b pb-4"
                  >
                    {/* ✅ Product Image & Details */}
                    <div className="col-span-2 flex items-center">
                      <img
                        src={item.img || "https://via.placeholder.com/80"}
                        alt={item.name}
                        className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-md"
                      />
                      <div className="ml-4 w-full">
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-gray-500">Color: {item.color}</p>

                        {/* ✅ Remove Button (Large Screens) - Under Color */}
                        <button
                          onClick={() => handleRemove(item.productId)}
                          className="text-red-500 hidden lg:block mt-2"
                        >
                          ✕ Remove
                        </button>

                        {/* ✅ Quantity below color for small screens */}
                        <div className="flex justify-start mt-2 lg:hidden">
                          <button
                            onClick={() => handleQuantityChange(item.productId, -1)}
                            className="px-3 py-1 border rounded-md"
                          >
                            −
                          </button>
                          <span className="mx-2">{item.quantity}</span>
                          <button
                            onClick={() => handleQuantityChange(item.productId, 1)}
                            className="px-3 py-1 border rounded-md"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* ✅ Quantity Selector for Large Screens */}
                    <div className="hidden lg:flex justify-center">
                      <button
                        onClick={() => handleQuantityChange(item.productId, -1)}
                        className="px-3 py-1 border rounded-md"
                      >
                        −
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.productId, 1)}
                        className="px-3 py-1 border rounded-md"
                      >
                        +
                      </button>
                    </div>

                    {/* ✅ Price (Above Remove Button on Mobile) */}
                    <div className="text-right relative sm:top-0 -top-20">
                      <p className="text-md font-semibold">${Number(item.price).toFixed(2)}</p>
                      <button
                        onClick={() => handleRemove(item.productId)}
                        className="text-gray-400 hover:text-red-500 text-sm lg:hidden mt-1"
                      >
                        ✕
                      </button>
                    </div>

                    {/* ✅ Subtotal (Hidden on Mobile) */}
                    <p className="text-md font-semibold text-right hidden lg:block">
                      ${(Number(item.price) * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ✅ Right Section - Cart Summary */}
            <div className="border p-6 rounded-md shadow-md h-fit">
              <h3 className="text-lg font-bold mb-4">Cart Summary</h3>

              {/* ✅ Shipping Options */}
              <div className="space-y-3">
              <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="shipping"
                    value="0"
                    checked={shipping === 0}
                    onChange={() => setShipping(0)}
                  />
                  <span>Free Shipping ($0.00)</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="shipping"
                    value="15"
                    checked={shipping === 15}
                    onChange={() => setShipping(15)}
                  />
                  <span>Express Shipping (+$15.00)</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="shipping"
                    value="21"
                    checked={shipping === 21}
                    onChange={() => setShipping(21)}
                  />
                  <span>Pick Up ($21.00)</span>
                </label>
              </div>

              {/* ✅ Total */}
              <div className="mt-4">
                <div className="flex justify-between font-semibold">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xl font-bold mt-2">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                className="bg-black text-white w-full py-2 mt-4 rounded-md"
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
      <Newsletter/>
    </div>
  );
};

export default Cart;
