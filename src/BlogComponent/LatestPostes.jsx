import React from "react";

const courses = [
  {
    id: 1,
    title: "Introduction LearnPress – LMS Plugin",
    image:
      "https://eduma.thimpress.com/wp-content/uploads/2022/06/course-20-400x300.jpg",
    price: "Free",
  },
  {
    id: 2,
    title: "Create an LMS Website with LearnPress",
    image:
      "https://eduma.thimpress.com/wp-content/uploads/2022/06/course-15-400x300.jpg",
    price: "Free",
  },
  {
    id: 3,
    title: "How To Teach Online Courses Effectively",
    image:
      "https://eduma.thimpress.com/wp-content/uploads/2022/06/course-19-400x300.jpg",
    price: "Free",
  },
];

const LatestPostes = () => {
  return (
    <>
    <div className="w-[260px] p-4 bg-white">
      <h2 className="text-sm font-semibold text-gray-800 mb-4">
       Latest Postes
      </h2>

      <div className="space-y-4">
        {courses.map((course) => (
          <div key={course.id} className="flex gap-3 items-start">
            
            {/* Image */}
            <img
              src={course.image}
              alt={course.title}
              className="w-14 h-14 object-cover"
            />

            {/* Text */}
            <div>
              <h3 className="text-sm text-gray-800 leading-4 hover:text-yellow-600 cursor-pointer">
                {course.title}
              </h3>

              <p className="text-green-600 text-sm mt-1 font-medium">
                {course.price}
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
    <div className="w-full object-cover">
        <img src="https://eduma.thimpress.com/wp-content/uploads/2022/11/ads-sidebar-276x300.jpg"/>
    </div>
    </>
  );
};

export default LatestPostes;