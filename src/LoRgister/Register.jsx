import React from "react";
import { FaGoogle, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Register = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">

      {/* Modal Box */}
      <div
        className="
        bg-white w-full h-full sm:h-auto sm:max-w-md
        sm:rounded-md p-6 relative
        overflow-y-auto
        "
      >

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-center mb-6 mt-6 sm:mt-0">
          Register a new account
        </h2>

        {/* Inputs */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full border border-gray-200 rounded px-3 py-2 outline-none focus:border-yellow-400"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-200 rounded px-3 py-2 outline-none focus:border-yellow-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-200 rounded px-3 py-2 outline-none focus:border-yellow-400"
          />

          <input
            type="password"
            placeholder="Repeat Password"
            className="w-full border border-gray-200 rounded px-3 py-2 outline-none focus:border-yellow-400"
          />
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

        {/* Signup Button */}
        <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 mt-6 rounded">
          SIGN UP
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Are you a member?{" "}
          <span className="text-yellow-500 cursor-pointer">Login now</span>
        </p>

      </div>
    </div>
  );
};

export default Register;