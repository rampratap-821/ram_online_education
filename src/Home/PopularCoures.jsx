import React from "react";
import { FiFileText, FiAward, FiArrowUpRight } from "react-icons/fi";
import { courses } from "../DummyData/HomeJson";
import { Link } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Courses = ()=> {
  return (
    <div className="max-w-7xl mx-auto py-5 px-4">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold">Popular Courses</h2>
          <p className="text-gray-500">Limitless learning, more possibilities</p>
        </div>

        <button className="border px-4 py-2 text-sm hover:border-yellow-400">
         <Link to={"/courses"}> VIEW ALL</Link>
        </button>
      </div>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
        {courses.map((course, index) => (
          <div
            key={course.id}
            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
          >
            {/* Image with scale effect */}
            <div className="relative group overflow-hidden">
              <img
                src={course.img}
                alt={course.title}
                className="h-48 w-full object-cover transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110"
              />

              {/* Hover Arrow */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] bg-black/40">
                <Link to={`/courseDetails/${course.id}`} className="">
                  <FaArrowUpRightFromSquare className="text-white text-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" />
                </Link>
              </div>

              {/* Circle Image */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                <img 
                  src={index === 0 
                    ? "https://eduma.thimpress.com/wp-content/uploads/learn-press-profile/7/e5c6a6fb8aa3864eacaec471611e0470.jpeg"
                    : "https://eduma.thimpress.com/wp-content/uploads/learn-press-profile/11/857ac32a16eb5a1975e1fab50a026882.png"
                  }
                  alt={course.instructor}
                  className="w-16 h-16 rounded-full border-4 border-white object-cover shadow-lg transition-all duration-300 group-hover:scale-110"
                />
              </div>
            </div>

            <div className="p-4 mt-8">
              <Link className="text-sm text-gray-500 text-center hover:underline flex justify-center hover:text-yellow-600 transition-all duration-300">
                {course.instructor}
              </Link>

              <h3 className="font-semibold mt-2 mb-3 line-clamp-2 text-center hover:text-yellow-500 transition-all duration-300">
                {course.title}
              </h3>

              <div className="flex justify-between items-center text-sm text-gray-500">
                <span className="flex items-center gap-1 hover:text-yellow-500 transition-all duration-300">
                  <FiFileText /> 7
                </span>

                <span className="flex items-center gap-1 hover:text-yellow-500 transition-all duration-300">
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

export default Courses;