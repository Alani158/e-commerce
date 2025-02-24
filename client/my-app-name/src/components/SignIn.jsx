import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate(); // Initialize navigate
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear errors before validation

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login", // Added endpoint
        { email, password }
      );

      alert(response.data.message); // Success message
      navigate("/dashboard"); // Redirect to dashboard or home
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      {/* Container */}
      <div className="bg-white flex flex-col md:flex-row w-full max-w-4xl shadow-lg rounded-lg overflow-hidden">
        {/* Left Side - Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center bg-gray-200">
          <img
            src="signup.png" // Replace with actual image
            alt="Sign In"
            className="object-cover w-full h-72 md:h-full"
          />
        </div>

        {/* Right Side - Form Section */}
        <div className="w-full md:w-1/2 p-10 ">
          <h2 className="text-3xl font-semibold text-gray-900">Sign In</h2>
          <p className="text-gray-600 text-sm mt-2">
            Don't have an account yet?{" "}
            <Link to="/signup" className="text-green-500 font-medium">
              Sign Up
            </Link>
          </p>

          {error && <p className="text-red-500 mt-2">{error}</p>}

          <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
            {/* Email Section */}
            <div className="mt-4">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Password Section */}
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

            {/* Remember Me and Forgot Password */}
            <div className="flex justify-between items-center mt-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-gray-600 text-sm">Remember me</span>
              </label>
              <a href="/" className="text-sm text-black font-medium">
                Forgot password?
              </a>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-black text-white px-4 py-3 mt-6 rounded-lg hover:bg-gray-800 transition font-medium"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
