import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { FaRegEyeSlash } from "react-icons/fa";

const SignIn = () => {
  const navigate = useNavigate(); // Initialize navigation function

  const handleSignIn = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    navigate("/"); // Redirect to Full page ("/")
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      {/* Container */}
      <div className="bg-white flex flex-col md:flex-row w-full max-w-4xl shadow-lg rounded-lg overflow-hidden">
        
        {/* Left Side - Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center bg-gray-200">
          <img
            src="signup.png" // Replace with actual image
            alt="Chair"
            className="object-cover w-full h-72 md:h-full"
          />
        </div>

        {/* Right Side - Form Section */}
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-3xl font-semibold text-gray-900">Sign In</h2>
          <p className="text-gray-600 text-sm mt-2">
            Don't have an account yet?{" "}
            <Link to="/signup" className="text-green-500 font-medium">Sign Up</Link>
          </p>

          <form className="mt-6 space-y-6" onSubmit={handleSignIn}>
            {/* Username Section */}
            <div className="mt-4">
              <input type="text" placeholder="Your Username or Email Address" className="w-72" required />
              <hr className="mt-2 border-gray-400" />
            </div>

            {/* Password Section */}
            <div className="mt-6">
              <div className="flex">
                <input type="password" placeholder="Password" className="w-72" required />
                <FaRegEyeSlash className="text-gray-500 relative sm:left-10 lg:left-12" />
              </div>
              <hr className="mt-2 border-gray-400" />
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex justify-between items-center mt-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-gray-600 text-sm">Remember me</span>
              </label>
              <a href="#" className="text-sm text-black font-medium">Forgot password?</a>
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
