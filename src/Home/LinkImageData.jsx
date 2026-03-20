import React, { useState, useEffect, useRef } from "react";
import { ImageData } from "../../src/DummyData/HomeJson";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const LinkImageData = () => {
  const [current, setCurrent] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(5);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const autoPlayRef = useRef();

  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 640) setCardsPerSlide(2);
      else if (window.innerWidth < 768) setCardsPerSlide(3);
      else if (window.innerWidth < 1024) setCardsPerSlide(4);
      else setCardsPerSlide(5);
    };

    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  const totalSlides = Math.ceil(ImageData.length / cardsPerSlide);

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrent((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
      }, 4000);
    }
    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlaying, totalSlides]);

  useEffect(() => {
    if (current >= totalSlides) setCurrent(0);
  }, [cardsPerSlide, totalSlides, current]);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;

    if (Math.abs(distance) < 50) return;

    if (distance > 0 && current < totalSlides - 1) {
      setCurrent((prev) => prev + 1);
    } else if (distance < 0 && current > 0) {
      setCurrent((prev) => prev - 1);
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const goToSlide = (index) => {
    setCurrent(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white py-6 md:pt-10">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
            Explore Categories
          </h2>

          {/* Buttons with React Icons */}
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow border hover:bg-gray-100 transition"
            >
              <FaChevronLeft className="text-gray-600 text-sm" />
            </button>

            <button
              onClick={nextSlide}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow border hover:bg-gray-100 transition"
            >
              <FaChevronRight className="text-gray-600 text-sm" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          className="relative overflow-hidden rounded-2xl"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-700"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="flex w-full flex-shrink-0 gap-2">
                {ImageData.slice(
                  slideIndex * cardsPerSlide,
                  slideIndex * cardsPerSlide + cardsPerSlide
                ).map((item, index) => (
                  <div
                    key={index}
                    className="px-1"
                    style={{ width: `${100 / cardsPerSlide}%` }}
                  >
                    <div className="group overflow-hidden rounded-2xl shadow hover:shadow-lg transition">

                      {/* Image */}
                      <div className="relative h-[110px] sm:h-[130px] md:h-[150px] lg:h-[170px] overflow-hidden rounded-2xl">
                        <img
                          src={item.imgSrc}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/40"></div>

                        {/* Center Content */}
                        <div className="absolute inset-0 flex items-center justify-center text-center px-2">
                          <h3 className="text-white text-xs sm:text-sm md:text-base font-semibold">
                            <Link to={`exploreCourseDetails/${item.id}`}>
                              {item.title}
                            </Link>
                          </h3>
                        </div>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

         
        </div>

      </div>
    </div>
  );
};

export default LinkImageData;