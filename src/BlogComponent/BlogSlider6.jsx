import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://eduma.thimpress.com/wp-content/uploads/2022/06/courses-6.jpg",
  "https://eduma.thimpress.com/wp-content/uploads/2022/06/courses-15.jpg",
];

const BlogSlider6 = ()=> {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="max-w-3xl mx-auto bg-white ">
      {/* SMOOTH IMAGE SLIDER */}
      <div className="relative group overflow-hidden">
        <div className="relative h-[500px]">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                index === current ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
              }`}
              style={{
                transform: index === current 
                  ? 'translateX(0)' 
                  : index < current 
                    ? 'translateX(-100%)' 
                    : 'translateX(100%)'
              }}
            />
          ))}
        </div>

        {/* LEFT ARROW */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 
          bg-white/80 p-2 rounded-full opacity-0 
          group-hover:opacity-100 transition z-10"
        >
          <ChevronLeft size={24} />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 
          bg-white/80 p-2 rounded-full opacity-0 
          group-hover:opacity-100 transition z-10"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* EXACT TEST CONTENT - FIXED */}
      <div className="flex p-6 gap-6">
        {/* DATE */}
        <div className="text-center">
          <p className="text-4xl font-bold text-yellow-500">12</p>
          <p className="text-sm text-gray-500">APRIL</p>
        </div>

        {/* TEXT */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Learning React Basics</h2>

          <div className="text-sm text-gray-500 flex gap-4 mb-3">
            <span>Posted by <b>John Doe</b></span>
            <span>Categories Development</span>
            <span>5 Comments</span>
          </div>

          <p className="text-gray-600 text-sm mb-4">
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>

          <button className="bg-yellow-500 text-white px-4 py-2 text-sm">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
}
export default BlogSlider6;