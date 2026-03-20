import React from "react";

const courseData = [
  {
    title: "Course list",
    img: "https://eduma.thimpress.com/wp-content/uploads/2025/07/elements-course-list.png",
  },
  {
    title: "Course grid",
    img: "https://eduma.thimpress.com/wp-content/uploads/2025/07/elements-course-grid.png",
  },
  {
    title: "Course detail",
    img: "https://eduma.thimpress.com/wp-content/uploads/2025/07/elements-course-single.png",
  },
  {
    title: "Course categories",
    img: "https://eduma.thimpress.com/wp-content/uploads/2025/07/elements-course-category.png",
  },
  {
    title: "Instructor",
    img: "https://eduma.thimpress.com/wp-content/uploads/2025/07/elements-instructor.png",
  },
];

const ForCourse = () => {
  return (
    <div className=" py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            For Course
          </h2>

          <button className="border px-5 py-2 text-sm font-medium rounded-md hover:bg-gray-100 transition">
            VIEW DOCUMENTATION
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-center">
          {courseData.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              
              {/* Image */}
              <div className="bg-white rounded-xl shadow-sm p-4 transition duration-300 group-hover:shadow-md">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="mt-5 text-gray-800 font-medium text-sm md:text-base">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ForCourse;