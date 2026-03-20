import React from "react";
import {
  FaThLarge, FaImage, FaList, FaTh, FaCalendarAlt, FaShoppingCart,
  FaQuestionCircle, FaDollarSign, FaBox, FaCommentDots, FaUsers,
  FaBriefcase, FaUserPlus, FaEnvelope, FaImages, FaWindowMaximize,
  FaBorderAll, FaSignInAlt, FaSignOutAlt
} from "react-icons/fa";

const layoutData = [
  { title: "Blog list", icon: <FaList /> },
  { title: "Blog details", icon: <FaImage /> },
  { title: "Event list", icon: <FaCalendarAlt /> },
  { title: "Event tab", icon: <FaTh /> },
  { title: "Event details", icon: <FaCalendarAlt /> },
  { title: "Product grid", icon: <FaThLarge /> },

  { title: "Product details", icon: <FaShoppingCart /> },
  { title: "FAQs", icon: <FaQuestionCircle /> },
  { title: "Pricing plan", icon: <FaDollarSign /> },
  { title: "Packages", icon: <FaBox /> },
  { title: "Testimonials", icon: <FaCommentDots /> },
  { title: "Our team", icon: <FaUsers /> },

  { title: "Portfolio", icon: <FaBriefcase /> },
  { title: "Register", icon: <FaUserPlus /> },
  { title: "Contact", icon: <FaEnvelope /> },
  { title: "Gallery", icon: <FaImages /> },
  { title: "Header", icon: <FaWindowMaximize /> },
  { title: "Footer", icon: <FaBorderAll /> },

  { title: "Login", icon: <FaSignInAlt /> },
  { title: "Logout", icon: <FaSignOutAlt /> },
  { title: "Client logo", icon: <FaImage /> },
  { title: "Collection", icon: <FaThLarge /> },
];

const ForLayout = () => {
  return (
    <div className=" py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            For Layout
          </h2>

          <button className="border border-gray-300 px-6 py-2 text-xs font-semibold tracking-wide rounded hover:bg-gray-200 transition">
            VIEW DOCUMENTATION
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {layoutData.map((item, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200  h-[160px] flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition cursor-pointer"
            >
              {/* Icon */}
              <div className="text-3xl  mb-3 transition duration-300 group-hover:text-yellow-500">
                {item.icon}
              </div>

              {/* Title */}
              <p className="text-sm font-medium  transition duration-300 group-hover:text-yellow-500">
                {item.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ForLayout;