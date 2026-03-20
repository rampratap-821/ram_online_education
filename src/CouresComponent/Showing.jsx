import React from "react";
import { FiFileText, FiAward, FiArrowUpRight } from "react-icons/fi";
import { courses } from "../DummyData/HomeJson";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { coursesData } from "../DummyData/Coursesjson";

const Showing = ()=> {
  return (
    <div className="max-w-7xl mx-auto  px-4">
  
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {coursesData.map((course, index) => (
          <div
            key={course.id}
            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition"
          >
            {/* Image */}
            <div className="relative group">
              <img
                src={course.img}
                alt={course.title}
                className="h-48 w-full object-cover"
              />

              {/* Hover Arrow */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="">
                  <FaArrowUpRightFromSquare className="text-white text-xl" />
                </div>
              </div>

              {/* Circle Image */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                <img 
                  src={index === 0 
                    ? "https://eduma.thimpress.com/wp-content/uploads/learn-press-profile/7/e5c6a6fb8aa3864eacaec471611e0470.jpeg"
                    : "https://eduma.thimpress.com/wp-content/uploads/learn-press-profile/11/857ac32a16eb5a1975e1fab50a026882.png"
                  }
                  alt={course.instructor}
                  className="w-16 h-16 rounded-full border-4 border-white object-cover shadow-lg"
                />
              </div>
            </div>

            <div className="p-4 mt-8">
              <Link className="text-sm text-gray-500 text-center hover:underline flex justify-center hover:text-yellow-600">
                {course.instructor}
              </Link>

              <h3 className="font-semibold mt-2 mb-3 line-clamp-2 text-center">
                {course.title}
              </h3>

              <div className="flex justify-between items-center text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <FiFileText /> 7
                </span>

                <span className="flex items-center gap-1">
                  <FiAward /> 8
                </span>

                <span className="text-orange-500 font-bold">
                  {course.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Showing;