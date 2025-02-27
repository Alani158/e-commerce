import React from "react";
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";
import Full from "./components/Full";
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import SignUp from "./components/SignUp";
import Full from "./components/Full"; 
>>>>>>> remi
import SignIn from "./components/SignIn";
import ShopNow from "./components/ShopNow"; // Import ShopNow Component

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <nav>
        <Link to="/"></Link>
        <Link to="/navbar"></Link>
        <Link to="/full"></Link>
        <Link to="/signin"></Link>
      </nav>

      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/full" element={<Full />} />
=======
      <Routes>
        {/* Full Page (Home) */}
        <Route path="/" element={<FullWithNavbar />} />

        {/* Other Pages */}
        <Route path="/signup" element={<SignUp />} />
>>>>>>> remi
        <Route path="/signin" element={<SignIn />} />
        <Route path="/shopnow" element={<ShopNow />} /> {/* Fixing the ShopNow route */}
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
