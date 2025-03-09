import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Cart = () => {
  const userId = localStorage.getItem("userId") || "guest";
  const [cart, setCart] = useState([]);
  const [shipping, setShipping] = useState(0);
  const navigate = useNavigate();

  // ✅ Load cart from localStorage when the component mounts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem(`cart_${userId}`)) || [];
    setCart(storedCart);
  }, [userId]);

  // ✅ Update cart in localStorage and state
  const updateCartCount = (updatedCart) => {
    const totalItems = updatedCart.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    localStorage.setItem(`cart_${userId}`, JSON.stringify(updatedCart));
    localStorage.setItem("cartCount", totalItems);

    // 🔄 Notify Navbar about cart update
    window.dispatchEvent(new Event("storage"));
  };

  // ✅ Remove item from cart
  const handleRemove = (productId) => {
    const updatedCart = cart.filter((item) => item.productId !== productId);
    setCart(updatedCart);
    updateCartCount(updatedCart);
  };

  // ✅ Handle quantity change
  const handleQuantityChange = (productId, change) => {
    const updatedCart = cart.map((item) =>
      item.productId === productId
        ? { ...item, quantity: Math.max(1, item.quantity + change) }
        : item
    );
    setCart(updatedCart);
    updateCartCount(updatedCart);
  };

  // ✅ Reset cart on checkout
  const handleCheckout = () => {
    navigate("/checkout");
  };

  // ✅ Calculate subtotal and total
  const subtotal = cart.reduce(
    (acc, item) => acc + Number(item.price) * item.quantity,
    0
  );
  const total = subtotal + shipping;

  return (

    <div>
      <Navbar />
      
      
              <a href="/shopnow" className="text-sm text-blue-500  hover:underline">
                Back 
              </a>
      <div className="w-[80%] mx-auto mt-10">
        <h2 className="text-3xl font-bold text-center mb-6"> Cart</h2>

        <div className="sm:flex w-full justify-self-center gap-8">
          {/* Left Section - Cart Items */}
          <div className="col-span-2 w-[70%]">
            {cart.length === 0 ? (
              <p className="text-center mt-6">Your cart is empty.</p>
            ) : (
              <div>
                {/* ✅ Cart Headers */}
                <div className="flex justify-between items-center font-semibold bg-white gap-8  px-1 py-2 rounded-md">
                  <span className="sm:w-1/3">Product</span>
                  <span className="sm:w-1/6 text-center">Quantity</span>
                  <span className="sm:w-1/6 text-center">Price</span>
                  <span className="sm:w-1/6 text-right">Subtotal</span>
                </div>

                <ul className="mt-4 space-y-6">
                  {cart.map((item) => (
                    <li
                      key={item.productId}
                      className="flex items-center gap-10 justify-between border-b pb-4"
                    >
                      {/* ✅ Product Info */}
                      <div className="flex items-center space-x-4 w-1/3">
                        <img
                          src={item.img || "https://via.placeholder.com/80"}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-md"
                        />
                        <div>
                          <p className="font-semibold">{item.name}</p>
                          <button
                            onClick={() => handleRemove(item.productId)}
                            className="text-red-500 text-sm mt-20 sm:mt-1"
                          >
                            ✕ Remove
                          </button>
                        </div>
                      </div>

                      {/* ✅ Quantity Selector */}
                      <div className="flex items-center w-1/6 justify-center">
                        <button
                          onClick={() =>
                            handleQuantityChange(item.productId, -1)
                          }
                          className="px-2 py-1 border rounded-md"
                        >
                          −
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button
                          onClick={() =>
                            handleQuantityChange(item.productId, 1)
                          }
                          className="px-2 py-1 border rounded-md"
                        >
                          +
                        </button>
                      </div>

                      {/* ✅ Price */}
                      <span className="w-1/6 text-center">
                        ${Number(item.price).toFixed(2)}
                      </span>

                      {/* ✅ Subtotal */}
                      <span className="w-1/6 font-semibold text-right">
                        ${Number(item.price * item.quantity).toFixed(2)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Section - Cart Summary */}
          <div className="border p-6 rounded-md shadow-md h-[50vh]">
            <h3 className="text-lg font-bold mb-4">Cart Summary</h3>

            {/* Shipping Options */}
            <div className="space-y-2">
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

            {/* Subtotal & Total */}
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
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
