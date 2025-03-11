import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";
import Full from "./components/Full";
import SignIn from "./components/SignIn";
import ShopNow from "./components/ShopNow"; // Import ShopNow Component
import ProductDetails from "./components/productdetails";
import Cart from "./components/Cart"; // Import Cart Component
import Checkout from "./components/checkout";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"></Link>
        <Link to="/navbar"></Link>
        <Link to="/full"></Link>
        <Link to="/signin"></Link>
      </nav>

      <Routes>
        <Route path="/" element={<FullWithNavbar />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/full" element={<Full />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/shopnow" element={<ShopNow />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart " element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

/* Wrapper component to include Navbar ONLY for Full page */
const FullWithNavbar = () => (
  <>
    <Full />
  </>
);

export default App;
