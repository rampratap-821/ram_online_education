import React, { useState } from "react";

const galleryData = [
  { id: 1, category: "design", img: "https://eduma.thimpress.com/wp-content/uploads/2022/06/blog-12-440x440.jpg" },
  { id: 2, category: "design", img: "https://eduma.thimpress.com/wp-content/uploads/2022/06/blog-18-440x440.jpg" },
  { id: 3, category: "branding", img: "https://eduma.thimpress.com/wp-content/uploads/2022/06/courses-5-300x173.jpg" },
  { id: 4, category: "branding", img: "https://eduma.thimpress.com/wp-content/uploads/2022/06/courses-6-440x440.jpg" },
  { id: 5, category: "business", img: "https://eduma.thimpress.com/wp-content/uploads/2022/06/courses-7-300x173.jpg" },
  { id: 6, category: "business", img: "https://eduma.thimpress.com/wp-content/uploads/2022/06/courses-9-440x440.jpg" },
  { id: 7, category: "blog", img: "https://eduma.thimpress.com/wp-content/uploads/2022/06/courses-13-300x173.jpg" },
  { id: 8, category: "blog", img: "https://eduma.thimpress.com/wp-content/uploads/2022/06/courses-16-440x440.jpg" },
  { id: 9, category: "design", img: "https://eduma.thimpress.com/wp-content/uploads/2022/06/courses-19-440x440.jpg" },
  { id: 10, category: "business", img: "https://eduma.thimpress.com/wp-content/uploads/2022/06/courses-20-440x440.jpg" },
];

const Gallery = () => {
  const [filter, setFilter] = useState("all");

  const filteredImages =
    filter === "all"
      ? galleryData
      : galleryData.filter((item) => item.category === filter);

  return (
    <>
      {/* Breadcrumb */}
      <div className="p-3 bg-gray-100 pl-4 sm:pl-6">
        <span>Home</span>
        <span className="text-gray-400">{" > "}</span>
        <span className="text-gray-400">Gallery</span>
      </div>

      <div className="py-10 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
            Gallery
          </h2>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 sm:gap-6 mb-8 sm:mb-10 text-xs sm:text-sm">
            {["all", "design", "branding", "business", "blog"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`capitalize pb-1 ${
                  filter === cat
                    ? "text-yellow-500 border-b-2 border-yellow-500"
                    : "hover:text-yellow-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {filteredImages.map((item) => (
              <div key={item.id} className="overflow-hidden rounded-lg">
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-[200px] sm:h-[240px] md:h-[260px] object-cover hover:scale-110 transition duration-300"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default Gallery;