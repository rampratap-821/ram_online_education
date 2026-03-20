import React from "react";
import InstructorSection from "./InstructionSection";

const BecomeTeacher = () => {
  return (
    <>
    <div className=" py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-semibold mb-6">
          Become a Teacher
        </h1>

        {/* Subtitle */}
        <h2 className="text-lg font-medium mb-2">
          Apply As Instructor
        </h2>

        {/* Small text */}
        <p className="text-gray-500 text-sm mb-4">
          Lorem ipsum dolor sit amet, consectetur
        </p>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-2xl mx-auto">
          Lid est laborum dolo rumes fugats untras. Ethums ser quidem rerum facilis dolores nemis omnis
          fugats vitae nemo minima rerum sers adipis amets. Sed ut perspiciatis unde omnis iste natus
          error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
        </p>

        {/* Image */}
        <div className="rounded-md overflow-hidden shadow-sm mb-10">
          <img
            src="https://eduma.thimpress.com/wp-content/uploads/2015/11/become-teacher.jpg"
            alt="Become Teacher"
            className="w-full object-cover"
          />
        </div>

        {/* Bottom Section */}
        <h3 className="text-lg font-semibold mb-2">
          How to become a teacher
        </h3>

        <p className="text-gray-500 text-sm">
          Lorem ipsum dolor sit amet, consectetur
        </p>

      </div>
    </div>
    <div>
        <InstructorSection/>
    </div>
    </>
  );
};

export default BecomeTeacher;