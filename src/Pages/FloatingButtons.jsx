import React from "react";
import { FaLayerGroup, FaShoppingCart, FaChevronUp } from "react-icons/fa";

const FloatingButtons = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {/* CENTER BUTTONS (HIDDEN ON MOBILE) */}
      <div className="hidden sm:flex fixed right-0 top-1/2 -translate-y-1/2 z-50 flex-col">

        {/* DEMOS */}
        <div className="bg-white shadow-md w-14 h-14 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 border-b">
          <FaLayerGroup className="text-gray-700" />
          <span className="text-[10px] mt-1">Demos</span>
        </div>

        {/* BUY NOW */}
        <div className="bg-white shadow-md w-14 h-14 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100">
          <FaShoppingCart className="text-gray-700" />
          <span className="text-[10px] mt-1">Buy Now</span>
        </div>

      </div>

      {/* ARROW (HIDDEN ON MOBILE) */}
      <div
        onClick={scrollToTop}
        className="hidden sm:flex fixed right-0 bottom-5 z-50 bg-gray-800 text-white w-10 h-10 items-center justify-center cursor-pointer hover:bg-black transition"
      >
        <FaChevronUp />
      </div>
    </>
  );
};

export default FloatingButtons;