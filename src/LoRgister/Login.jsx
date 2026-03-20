import React, { useState } from "react";
import { FaGoogle, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = ({ isOpen, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">

      {/* Modal Box */}
      <div className="
        bg-white w-full h-full sm:h-auto sm:max-w-md
        sm:rounded-md p-6 relative overflow-y-auto
      ">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-center mb-6 mt-6 sm:mt-0">
          Login with your site account
        </h2>

        {/* Inputs */}
        <div className="space-y-4">

          <input
            type="text"
            placeholder="Username or email"
            className="w-full border border-gray-200 rounded px-3 py-2 outline-none focus:border-yellow-400"
          />

          {/* Password with Eye */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full border border-gray-200 rounded px-3 py-2 outline-none focus:border-yellow-400 pr-10"
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

        </div>

        {/* Social Login */}
        <div className="text-center mt-5 text-sm text-gray-500">
          Or login with:
        </div>

        <div className="flex justify-center gap-3 mt-4 flex-wrap">
          <button className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded text-sm">
            <FaGoogle /> Google
          </button>

          <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded text-sm">
            <FaXTwitter /> X.com
          </button>

          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded text-sm">
            <FaLinkedin /> LinkedIn
          </button>
        </div>

        {/* Remember + Forgot */}
        <div className="flex items-center justify-between mt-5 text-sm">
          <label className="flex items-center gap-2 text-gray-600">
            <input type="checkbox" />
            Remember Me
          </label>

          <span className="text-yellow-500 cursor-pointer">
            Lost your password?
          </span>
        </div>

        {/* Login Button */}
        <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 mt-6 rounded">
          LOGIN
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Not a member yet?{" "}
          <span className="text-yellow-500 cursor-pointer">
            Register now
          </span>
        </p>

        <p className="text-center text-sm text-gray-500 mt-4">
          Wanna see how Student, Instructor, or Admin look?
        </p>

        <p className="text-center text-sm text-yellow-500 cursor-pointer">
          Click here to access Demo Account
        </p>

      </div>
    </div>
  );
};

export default Login;