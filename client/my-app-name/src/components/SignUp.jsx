<<<<<<< HEAD
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import axios from "axios";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // Frontend validation
  const validateInputs = () => {
    if (!/^(?=.*[A-Z])(?=.*\d).{6,}$/.test(password)) {
      setError(
        "Password must be at least 6 characters long, contain at least one uppercase letter, and one number."
      );
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear errors before validation

    if (!validateInputs()) return;

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/signup",
        {
          name,
          email,
          password,
        }
      );

      alert(response.data.message); // Success message
      navigate("/signin"); // Redirect user to Sign In page
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong.");
    }
=======
import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { FaRegEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const navigate = useNavigate(); // Initialize navigation function

  const handleSignUp = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    navigate("/"); // Redirect to Full page ("/")
>>>>>>> remi
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white flex flex-col min-h-screen  md:flex-row w-full max-w-4xl shadow-lg rounded-lg overflow-hidden">
        <div className="w-full md:w-1/2 flex justify-center items-center bg-gray-200">
          <img
            src="signup.png"
            alt="Sign Up"
            className="object-cover w-full h-64 md:h-full"
          />
        </div>

<<<<<<< HEAD
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-gray-900">Sign up</h2>
          <p className="text-gray-600 text-sm mt-2">
            Already have an account?{" "}
            <Link to="/signin" className="text-green-500 font-medium">
              Sign In
            </Link>
          </p>

          {error && <p className="text-red-500 mt-2">{error}</p>}

          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
=======
        {/* Right Side - Form Section */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-gray-900">Sign Up</h2>
          <p className="text-gray-600 text-sm mt-2">
            Already have an account?{" "}
            <Link to="/signin" className="text-green-500 font-medium">Sign In</Link>
          </p>

          <form className="mt-6" onSubmit={handleSignUp}>
            {/* Your Name Field */}
            <div className="mt-4">
              <input type="text" placeholder="Your Name" className="w-full px-2 py-2 border rounded-md" required />
              <hr className="mt-2 border-gray-400" />
>>>>>>> remi
            </div>

            <div className="mt-4">
<<<<<<< HEAD
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="mt-4 relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 pr-10"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-3 text-gray-500"
              >
                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </button>
            </div>

=======
              <input type="text" placeholder="Username" className="w-full px-2 py-2 border rounded-md" required />
              <hr className="mt-2 border-gray-400" />
            </div>

            {/* Email Address Field */}
            <div className="mt-4">
              <input type="email" placeholder="Email Address" className="w-full px-2 py-2 border rounded-md" required />
              <hr className="mt-2 border-gray-400" />
            </div>

            {/* Password Field */}
            <div className="mt-4">
              <div className="flex items-center">
                <input type="password" placeholder="Password" className="w-full px-2 py-2 border rounded-md" required />
                <FaRegEyeSlash className="text-gray-500 ml-2 cursor-pointer" />
              </div>
              <hr className="mt-2 border-gray-400" />
            </div>

            {/* Checkbox */}
>>>>>>> remi
            <div className="flex items-center mt-4">
              <input type="checkbox" className="mr-2" required />
              <span className="text-gray-600 text-sm">
                I agree with{" "}
                <a href="/" className="text-green-500">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="/" className="text-green-500">
                  Terms of Use
                </a>
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white px-4 py-2 mt-4 rounded-lg hover:bg-gray-800 transition"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
