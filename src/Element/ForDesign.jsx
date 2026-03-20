import React from "react";
import {
  FaSlidersH, FaList, FaMousePointer, FaSortNumericUp, FaStar,
  FaClock, FaSearch, FaFolder, FaSlidersH as FaSlider,
  FaWpforms, FaHeading, FaMapSigns, FaBoxOpen, FaMapMarkedAlt,
  FaBars, FaStream, FaEllipsisH, FaTable, FaImage,
  FaImages, FaShareAlt, FaTasks, FaShoppingCart, FaMoon
} from "react-icons/fa";

const designData = [
  { title: "Carousel", icon: <FaSlidersH /> },
  { title: "Accordion", icon: <FaList /> },
  { title: "Button", icon: <FaMousePointer /> },
  { title: "Counters box", icon: <FaSortNumericUp /> },
  { title: "Icon box", icon: <FaStar /> },
  { title: "Countdown", icon: <FaClock /> },

  { title: "Search", icon: <FaSearch /> },
  { title: "Tab", icon: <FaFolder /> },
  { title: "Slider", icon: <FaSlider /> },
  { title: "Form", icon: <FaWpforms /> },
  { title: "Heading", icon: <FaHeading /> },
  { title: "Breadcrumbs", icon: <FaMapSigns /> },

  { title: "Content boxes", icon: <FaBoxOpen /> },
  { title: "Google map", icon: <FaMapMarkedAlt /> },
  { title: "Menu", icon: <FaBars /> },
  { title: "Scroll progress", icon: <FaStream /> },
  { title: "Pagination", icon: <FaEllipsisH /> },
  { title: "Table", icon: <FaTable /> },

  { title: "Image box", icon: <FaImage /> },
  { title: "Single images", icon: <FaImages /> },
  { title: "Social", icon: <FaShareAlt /> },
  { title: "Progress tracker", icon: <FaTasks /> },
  { title: "Mini cart", icon: <FaShoppingCart /> },
  { title: "Dark mode switch", icon: <FaMoon /> },
];

const ForDesign = () => {
  return (
    <div className=" py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            For Design
          </h2>

          <button className="border border-gray-300 px-6 py-2 text-xs font-semibold tracking-wide rounded hover:bg-gray-200 transition">
            VIEW DOCUMENTATION
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {designData.map((item, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200  h-[160px] flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition cursor-pointer"
            >
              {/* Icon */}
              <div className="text-3xl mb-3 transition duration-300 group-hover:text-yellow-500">
                {item.icon}
              </div>

              {/* Title */}
              <p className="text-sm font-medium transition duration-300 group-hover:text-yellow-500">
                {item.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ForDesign;