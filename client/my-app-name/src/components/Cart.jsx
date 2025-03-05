import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [shipping, setShipping] = useState(0);
  const [coupon, setCoupon] = useState("");

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log("Cart Data from LocalStorage:", storedCart); // 🔍 Debugging
    setCart(storedCart);
  }, []);
  
  
  const handleRemove = (productId) => {
    const updatedCart = cart.filter((item) => item.productId !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const subtotal = cart.reduce((acc, item) => acc + Number(item.price) * item.quantity, 0);
  const total = subtotal + shipping;


  
    
  
  
  

  const handleQuantityChange = (productId, change) => {
    const updatedCart = cart.map((item) =>
      item.productId === productId
        ? { ...item, quantity: Math.max(1, item.quantity + change) }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

 
  return (
    <div>
      <Navbar />
      <div className="w-[80%] mx-auto mt-10">
        <h2 className="text-3xl font-bold text-center mb-6">Cart</h2>

        {/* Progress Steps */}
        <div className="flex justify-center mb-8 space-x-4">
          <span className="px-4 py-2 bg-black text-white rounded-full">1</span>
          <span className="px-4 py-2 bg-gray-300 text-gray-700 rounded-full">2</span>
          <span className="px-4 py-2 bg-gray-300 text-gray-700 rounded-full">3</span>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Left Section - Cart Items */}
          <div className="col-span-2">
            <div className="border-b pb-4 font-semibold flex justify-between">
              <span>Product</span>
              <span>Quantity</span>
              <span>Price</span>
              <span>Subtotal</span>
            </div>

            {cart.length === 0 ? (
              <p className="text-center mt-6">Your cart is empty.</p>
            ) : (
              <ul className="mt-4 space-y-6">
                {cart.map((item) => (
                  <li key={item.productId} className="flex items-center justify-between border-b pb-4">
                    {/* Product Image & Info */}
                    <div className="flex items-center space-x-4 w-1/3">
                      <img src={item.img || "https://via.placeholder.com/80"} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-gray-500">Color: {item.color ||"NAN" }</p>
                        <button onClick={() => handleRemove(item.productId)} className="text-red-500 text-sm mt-1">
                          ✕ Remove
                        </button>
                      </div>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center">
                      <button onClick={() => handleQuantityChange(item.productId, -1)} className="px-2 py-1 border rounded-md">−</button>
                      <span className="mx-2">{item.quantity}</span>
                      <button onClick={() => handleQuantityChange(item.productId, 1)} className="px-2 py-1 border rounded-md">+</button>
                    </div>

                    <span className="w-1/6">${(item.price || 0)}</span>
                    <div className="flex justify-between font-semibold">
  
  
                    
                    <span className="w-1/6 font-semibold">
 ${(item.price.toFixed(2) * item.quantity.toFixed(2)).toFixed(2)}
</span>


</div>


                  </li>
                ))}
              </ul>
            )}

            {/* Coupon Section */}
            <div className="mt-6 mb-5">
              <h3 className="font-semibold mb-2">Have a coupon?</h3>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  className="border px-4 py-2 w-full rounded-l-md"
                />
                <button className="bg-black text-white px-6 rounded-r-md">Apply</button>
              </div>
            </div>
          </div>

          {/* Right Section - Cart Summary */}
          <div className="border p-6 rounded-md shadow-md h-[70vh]">
            <h3 className="text-lg font-bold mb-4">Cart Summary</h3>

             {/* Shipping Options */}
             <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="radio" name="shipping" value="0" checked={shipping === 0} onChange={() => setShipping(0)} />
                <span>Free Shipping ($0.00)</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="shipping" value="15" checked={shipping === 15} onChange={() => setShipping(15)} />
                <span>Express Shipping (+$15.00)</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="shipping" value="21" checked={shipping === 21} onChange={() => setShipping(21)} />
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


            {/* Checkout Button */}
            <button className="bg-black text-white w-full py-2 mt-4 rounded-md">Checkout</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;