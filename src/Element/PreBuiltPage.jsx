import React from "react";

const pagesData = [
  {
    title: "Main",
    img: "https://eduma.thimpress.com/wp-content/uploads/2024/03/demo-main.webp",
  },
  {
    title: "Online Learning",
    img: "https://eduma.thimpress.com/wp-content/uploads/2024/10/online-learning-landing.jpg",
  },
  {
    title: "Yoga Coaching",
    img: "https://eduma.thimpress.com/wp-content/uploads/2025/11/demo-yoga-1.jpg",
  },
  {
    title: "Marketplace",
    img: "https://eduma.thimpress.com/wp-content/uploads/2024/03/Marketplace.webp",
  },
  {
    title: "Learning Platform",
    img: "https://eduma.thimpress.com/wp-content/uploads/2025/03/demo-education-news-landing.jpg",
  },
  {
    title: "eCommerce",
    img: "https://eduma.thimpress.com/wp-content/uploads/2024/03/ECommerce.webp",
  },
  {
    title: "Classic",
    img: "https://eduma.thimpress.com/wp-content/uploads/2024/03/classic.webp",
  },
  {
    title: "Elegant",
    img: "https://eduma.thimpress.com/wp-content/uploads/2024/03/Elegant.webp",
  },
  {
    title: "Udemy",
    img: "https://eduma.thimpress.com/wp-content/uploads/2024/04/Home-Demo-Udemy-1_11zon.webp",
  },
  {
    title: "RTL",
    img: "https://eduma.thimpress.com/wp-content/uploads/2024/03/RTL.webp",
  },

  // 🔥 Dummy extra (same pattern ke liye)
  {
    title: "University",
    img: "https://eduma.thimpress.com/wp-content/uploads/2024/04/Tech-Camp_11zon.webp",
  },
  {
    title: "Modern University",
    img: "https://eduma.thimpress.com/wp-content/uploads/2024/03/React.webp",
  },
  {
    title: "Course Hub",
    img: "https://eduma.thimpress.com/wp-content/uploads/2024/03/kindergarten.webp",
  },
  {
    title: "Tech Camp",
    img: "https://eduma.thimpress.com/wp-content/uploads/2024/03/Ivy-League.webp",
  },
  {
    title: "Language School",
    img: "https://eduma.thimpress.com/wp-content/uploads/2024/03/New-Art.webp",
  },
  {
    title: "Kindergarten",
    img: "https://eduma.thimpress.com/wp-content/uploads/2024/03/landing-for-offline.webp",
  },
];

const PrebuiltPages = () => {
  return (
    <div className=" py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Prebuilt Pages
          </h2>

          <button className="border border-gray-300 px-6 py-2 text-xs font-semibold tracking-wide rounded hover:bg-gray-200 transition">
            VIEW DOCUMENTATION
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {pagesData.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              
              {/* Image Card */}
              <div className="bg-white border border-gray-200  overflow-hidden shadow-sm hover:shadow-md transition">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[120px] object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              {/* Title */}
              <p className="mt-3 text-center text-sm font-medium text-gray-700 transition duration-300 group-hover:text-yellow-500">
                {item.title}
              </p>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default PrebuiltPages;