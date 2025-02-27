import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import SignUp from "./components/SignUp";
import Full from "./components/Full"; 
import SignIn from "./components/SignIn";
import ShopNow from "./components/ShopNow"; // Import ShopNow Component

function App() {
  return (
    <Router>
      <Routes>
        {/* Full Page (Home) */}
        <Route path="/" element={<FullWithNavbar />} />

        {/* Other Pages */}
        <Route path="/signup" element={<SignUp />} />
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
