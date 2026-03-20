
import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

const news = [
  { 
    id:1,
    img: "https://eduma.thimpress.com/wp-content/uploads/2022/06/courses-1-370x230.jpg",
    title: "Admin earns scholarship",
    date: "20/03/2025",
    author: "Keny White"
  },
  {
    id:2,
    img: "https://eduma.thimpress.com/wp-content/uploads/2022/06/courses-2-370x230.jpg",
    title: "Becoming a better designer",
    date: "18/03/2025",
    author: "Keny White"
  },
  {
    id:3,
    img: "https://eduma.thimpress.com/wp-content/uploads/2022/06/courses-8-370x230.jpg",
    title: "Education WP – Eduma",
    date: "25/03/2025",
    author: "Keny White"
  },
  {
    id:4,
    img: "https://eduma.thimpress.com/wp-content/uploads/2022/06/courses-13-300x173.jpg",
    title: "Education Programs",
    date: "22/03/2025",
    author: "Keny White"
  },
  {
    id:5,
    img: "https://eduma.thimpress.com/wp-content/uploads/2022/06/courses-19-370x230.jpg",
    title: "Best Online Courses",
    date: "28/03/2025",
    author: "Keny White"
  }
];

const LatestNews = () => {

  const [index, setIndex] = useState(0);

  const visibleCards = 3;
  const maxIndex = news.length - visibleCards;

  return (
    <div
      className="relative py-10 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url(https://eduma.thimpress.com/wp-content/uploads/2022/06/bg-last-new.jpg)"
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-6xl mx-auto px-6">

        <h2 className="text-3xl text-white font-semibold mb-12">
          Latest News
        </h2>

        {/* slider */}
        <div className="overflow-hidden">

          <div
            className="flex gap-6 transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${index * (100 / visibleCards)}%)`
            }}
          >

            {news.map((item) => (

              <div
                key={item.id}
                className="min-w-full sm:min-w-[50%] lg:min-w-[33.33%]"
              >

                {/* Card */}
                <div className="relative group overflow-hidden rounded">

                  {/* Image */}
                  <img
                    src={item.img}
                    className="w-full h-[220px] object-cover transition duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300">
                    
                    <Link to={`/latestNewsDetails/${item.id}`}>
                      <div className="border border-white p-3 hover:bg-white/20 transition">
                        <FiExternalLink className="text-white text-xl" />
                      </div>
                    </Link>

                  </div>

                  {/* Badge */}
                  <div className="absolute bottom-3 left-3 z-20 bg-yellow-400 text-black text-xs px-3 py-1 rounded">
                    {item.author} - {item.date}
                  </div>

                </div>

                {/* Title */}
                <p className="text-white text-center mt-6 font-semibold">
                  {item.title}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* 🔥 Small Dots */}
        <div className="flex justify-center mt-16 gap-2">

          {Array.from({ length: maxIndex + 1 }).map((_, i) => (

            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-300 ${
                index === i
                  ? "bg-yellow-400 scale-125"
                  : "bg-gray-400 hover:bg-gray-300"
              }`}
            ></div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default LatestNews;