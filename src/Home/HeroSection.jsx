import React, { useEffect, useRef, useState } from 'react';
import video from '../assets/Image/video.mp4';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const leftContentRef = useRef(null);
  const rightCardRef = useRef(null);

  useEffect(() => {
    // Trigger animations after component mounts
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[400px] md:min-h-[400px] lg:min-h-[400px] flex items-center py-8 px-4 md:px-10 lg:px-16 overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Dark Overlay for better text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* Main Content Container — flex row on larger screens */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* LEFT SIDE: Animated content */}
        <div 
          ref={leftContentRef}
          className={`
            text-white max-w-lg text-center lg:text-left
            transition-all duration-700 ease-out
            ${isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-16'
            }
          `}
        >
          <h2 className="text-xl md:text-3xl lg:text-2xl font-semibold leading-tight">
            THE BEST THEME FOR
          </h2>
          <p className="text-xl md:text-5xl lg:text-3xl font-black mt-2 md:mt-3">
            EDUCATION
          </p>

          {/* BUY EDUMA NOW button — with hover animation */}
          <button className="mt-6 md:mt-8 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold p-1 px-2 md:py-1 md:px-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            BUY EDUMA NOW
          </button>
        </div>

        {/* RIGHT SIDE: Animated white card with form */}
        <div 
          ref={rightCardRef}
          className={`
            w-full max-w-[320px] sm:max-w-[340px] md:max-w-[360px] 
            transition-all duration-700 delay-300 ease-out
            ${isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-16'
            }
          `}
        >
          <div className="bg-white shadow-xl overflow-hidden rounded-2xl">
            {/* TOP YELLOW SECTION */}
            <div className="bg-yellow-500 text-white text-center px-4 sm:px-6 pt-8 sm:pt-10 md:pt-12 pb-6 sm:pb-8 md:pb-10">
              <p className="text-sm sm:text-base md:text-lg font-semibold leading-relaxed sm:leading-7">
                Create your free account now
                <br />
                and immediately get access to
                <br />
                100s of online courses.
              </p>
            </div>

            {/* Decorative curve */}
            <div className="bg-yellow-500 rounded-b-full pb-8 sm:pb-10 md:pb-12"></div>

            {/* FORM AREA WITH NEGATIVE MARGIN TO OVERLAP THE CURVE */}
            <div className="px-4 sm:px-6 pb-6 sm:pb-8 -mt-8 sm:-mt-10">
              <div className="space-y-3 sm:space-y-4">
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                />
                <input
                  type="email"
                  placeholder="Email *"
                  className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                />
                <input
                  type="tel"
                  placeholder="Phone *"
                  className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              <button className="w-full mt-5 sm:mt-6 bg-yellow-500 hover:bg-yellow-600 text-white py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                GET IT NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom keyframes for additional animations if needed */}
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;