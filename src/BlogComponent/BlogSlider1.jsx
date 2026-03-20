import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://eduma.thimpress.com/wp-content/uploads/2022/06/blog-18.jpg",
  "https://eduma.thimpress.com/wp-content/uploads/2022/06/courses-6.jpg",
  "https://eduma.thimpress.com/wp-content/uploads/2022/06/courses-4.jpg",
  "https://eduma.thimpress.com/wp-content/uploads/2022/06/courses-16.jpg"
];

const BlogSlider1 = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="max-w-3xl mx-auto bg-white">
      
      {/* SLIDER */}
      <div className="relative group overflow-hidden">
        <div className="relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-700 ease-in-out rounded ${
                index === current
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-full"
              }`}
              style={{
                transform:
                  index === current
                    ? "translateX(0)"
                    : index < current
                    ? "translateX(-100%)"
                    : "translateX(100%)",
              }}
            />
          ))}
        </div>

        {/* LEFT ARROW */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 
          bg-white/80 p-1.5 sm:p-2 rounded-full opacity-0 
          group-hover:opacity-100 transition z-10"
        >
          <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 
          bg-white/80 p-1.5 sm:p-2 rounded-full opacity-0 
          group-hover:opacity-100 transition z-10"
        >
          <ChevronRight size={20} className="sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col sm:flex-row p-4 sm:p-6 gap-4 sm:gap-6">
        
        {/* DATE */}
        <div className="text-center sm:text-left">
          <p className="text-3xl sm:text-4xl font-bold text-yellow-500">12</p>
          <p className="text-xs sm:text-sm text-gray-500">APRIL</p>
        </div>

        {/* TEXT */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold mb-2">
            Learning React Basics
          </h2>

          <div className="text-xs sm:text-sm text-gray-500 flex flex-col sm:flex-row sm:gap-4 mb-3">
            <span>Posted by <b>John Doe</b></span>
            <span>Categories Development</span>
            <span>5 Comments</span>
          </div>

          <p className="text-gray-600 text-sm mb-4">
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>

          <button className="bg-yellow-500 text-white px-4 py-2 text-xs sm:text-sm">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogSlider1;