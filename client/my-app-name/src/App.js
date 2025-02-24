import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";
import Full from "./components/Full";
import SignIn from "./components/SignIn";

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
        <Route path="/signup" element={<SignUp />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/full" element={<Full />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
