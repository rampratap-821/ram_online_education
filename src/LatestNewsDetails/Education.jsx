import React from "react";

const Education = ({filterData}) => {
  return (
    <div className=" min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-sm">
        
        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
         {filterData[0].title}
        </h1>

        {/* Meta Info */}
        <div className="grid grid-cols-4 gap-4 text-sm text-gray-500 mb-6">
          <div>
            <p className="font-medium text-gray-700">Posted by</p>
            <p className="text-blue-600">Keny White</p>
          </div>
          <div>
            <p className="font-medium text-gray-700">Categories</p>
            <p>Design / Branding</p>
          </div>
          <div>
            <p className="font-medium text-gray-700">Date</p>
            <p>25/03/2025</p>
          </div>
          <div>
            <p className="font-medium text-gray-700">Comments</p>
            <p>0 Comment</p>
          </div>
        </div>

        {/* Content */}
        <div className="text-gray-600 leading-7 space-y-4 text-sm">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s.
          </p>

          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>

          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>

          <p>
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text.
          </p>

          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>

          <p>
            If you are going to use a passage of Lorem Ipsum, you need to be sure
            there isn’t anything embarrassing hidden in the middle of text.
          </p>

          <p>
            It uses a dictionary of over 200 Latin words, combined with a
            handful of model sentence structures.
          </p>

          <p>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested.
          </p>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-10 border-t pt-4">
          <p className="text-sm text-gray-600">
            Tag: <span className="text-blue-600">Designer, ThimPress</span>
          </p>

          {/* Share Icons */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600">Share:</span>

            <div className="flex gap-2">
              <div className="w-8 h-8 flex items-center justify-center border rounded-full text-gray-500 cursor-pointer hover:bg-gray-200">
                f
              </div>
              <div className="w-8 h-8 flex items-center justify-center border rounded-full text-gray-500 cursor-pointer hover:bg-gray-200">
                x
              </div>
              <div className="w-8 h-8 flex items-center justify-center border rounded-full text-gray-500 cursor-pointer hover:bg-gray-200">
                p
              </div>
              <div className="w-8 h-8 flex items-center justify-center border rounded-full text-gray-500 cursor-pointer hover:bg-gray-200">
                in
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Education;