import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const logos = [
  "https://eduma.thimpress.com/wp-content/uploads/2022/06/banner4.png",
  "https://eduma.thimpress.com/wp-content/uploads/2022/06/banner6.png",
  "https://eduma.thimpress.com/wp-content/uploads/2022/06/banner2.png",
  "https://eduma.thimpress.com/wp-content/uploads/2022/06/banner6.png",
  "https://eduma.thimpress.com/wp-content/uploads/2022/06/banner3.png",
];

const Logo = ()=> {
  

  return (
    <div className="w-full  py-8 flex items-center justify-center">
      
    
      {/* Logos */}
      <div className="flex overflow-hidden w-[80%] justify-between items-center px-6">
        {logos.map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt="university"
            className="h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
          />
        ))}
      </div>

      
    </div>
  );
}

export default Logo;