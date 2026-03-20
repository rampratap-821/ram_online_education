import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center  p-10">

      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10">

        {/* Left Image */}
        <div className="flex-1">
          <img
            src="https://cdn.dribbble.com/users/1138875/screenshots/4669703/404_animation.gif"
            alt="404 error"
            className="w-full"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1">
          <h1 className="text-6xl font-bold">
            404 <span className="text-yellow-500">ERROR!</span>
          </h1>

          <p className="text-gray-600 mt-6 text-lg">
            Sorry, we can’t find the page you are looking for.
            Please go to the{" "}
            <span className="text-yellow-500 cursor-pointer">
              Home Page
            </span>
          </p>

          <button className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg">
           <Link to={"/"}> Go Home</Link>
          </button>
        </div>

      </div>

    </div>
  );
};

export default Contact;