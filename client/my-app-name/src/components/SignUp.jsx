import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { FaRegEyeSlash } from "react-icons/fa";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      {/* Container */}
      <div className="bg-white flex flex-col md:flex-row w-full max-w-4xl shadow-lg rounded-lg overflow-hidden">
        
        {/* Left Side - Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center bg-gray-200">
          <img
            src="signup.png" // Replace with actual image URL
            alt="Chair"
            className="object-cover w-full h-64 md:h-full"
          />
        </div>

        {/* Right Side - Form Section */}
        <div className=" w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-gray-900">Sign up</h2>
          <p className="text-gray-600 text-sm mt-2">
          Already have an account?{" "}
             <Link to="/signin" className="text-green-500 font-medium">Sign In</Link>
             </p>

          <form className="mt-6">
            {/* Your Name Field */}
            <div className="mt-4">
            <input type="text" placeholder="Your Name" />
              <hr className="mt-2 border-gray-400" />
            </div>

            {/* Username Field */}
            <div className="mt-4">
             <input type="text" placeholder="Username" />
              <hr className="mt-2 border-gray-400" />
            </div>

            {/* Email Address Field */}
            <div className="mt-4">
            <input type="text" placeholder="Email Address" />
              <hr className="mt-2 border-gray-400" />
            </div>

            {/* Password Field */}
              <div className="mt-4">
                <div className="flex">
                  <input type="text" placeholder="Password" />
                  <FaRegEyeSlash className=" text-gray-500 relative  sm:left-24 lg:left-44" />
                </div>
              <hr className="mt-2 border-gray-400" />
            </div>

            {/* Checkbox */}
            <div className="flex items-center mt-4">
              <input type="checkbox" className="mr-2" />
              <span className="text-gray-600 text-sm">
                I agree with <a href="#" className="text-green-500">Privacy Policy</a> and <a href="#" className="text-green-500">Terms of Use</a>
              </span>
            </div>

            {/* Sign Up Button */}
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
