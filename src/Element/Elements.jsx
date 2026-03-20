import React from "react";

const Elements = () => {
  return (
    <div className=" py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          <span className="hover:text-black cursor-pointer">Home</span>
          <span className="mx-2">{">"}</span>
          <span className="text-gray-400">Eduma Elements</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-6">
          Eduma Elements
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
          Eduma Elements, powered by Elementor, offers a streamlined page builder
          using a drag-and-drop editor and a vast library of pre-designed section
          templates. Transform your vision into reality effortlessly.
        </p>

      </div>
    </div>
  );
};

export default Elements;