import React from "react";

const KenyWhite = () => {
  return (
    <>
    <div className=" p-6">
      <div className="max-w-4xl mx-auto bg-white border rounded-lg p-6 flex items-start gap-6 shadow-sm">
        
        {/* Profile Image */}
        <img
          src="https://eduma.thimpress.com/wp-content/uploads/learn-press-profile/7/e5c6a6fb8aa3864eacaec471611e0470.jpeg"
          alt="author"
          className="w-20 h-20 rounded-full object-cover"
        />

        {/* Content */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            Keny White
          </h2>

          <p className="text-sm text-gray-400 uppercase tracking-wide mt-1">
            Professor
          </p>

          <p className="text-gray-600 text-sm mt-3 leading-6">
            Sarah Salmin is a certified yoga & mobility specialist with 40
            years of experience helping students recover from pain, improve
            posture, and enjoy a freer, more comfortable movement in daily life.
          </p>
        </div>

      </div>
    </div>



     <div className=" p-6">
      <div className="max-w-4xl mx-auto grid grid-cols-2 border rounded-md overflow-hidden">
        
        {/* Previous Post */}
        <div className="bg-white p-6 border-r hover:bg-gray-50 cursor-pointer transition">
          <p className="text-sm text-gray-500 mb-2">Previous post</p>
          <h3 className="text-lg font-medium text-gray-800">
            Our Books
          </h3>
          <p className="text-sm text-gray-500 mt-2">25/03/2025</p>
        </div>

        {/* Next Post (Empty as in image) */}
        <div className="bg-white p-6"></div>

      </div>
    </div>
    </>
  );
};

export default KenyWhite;