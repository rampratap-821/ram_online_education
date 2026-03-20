import React from "react";

const partners = [
  "https://eduma.thimpress.com/wp-content/uploads/2022/08/icon-partner-5.png",
  "https://eduma.thimpress.com/wp-content/uploads/2022/08/icon-partner-4.png",
  "https://eduma.thimpress.com/wp-content/uploads/2022/08/icon-partner-3.png",
  "https://eduma.thimpress.com/wp-content/uploads/2022/08/icon-partner-2.png",
  "https://eduma.thimpress.com/wp-content/uploads/2022/08/icon-partner-1.png",
];

const Logo = () => {
  return (
    <div className=" py-12">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Logo Row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
          {partners.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`partner-${index}`}
              className="h-[130px] object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300 rounded-full"
            />
          ))}
        </div>

        {/* Bottom Divider */}
        <div className="border-t border-gray-300 mt-12"></div>

      </div>
    </div>
  );
};

export default Logo;