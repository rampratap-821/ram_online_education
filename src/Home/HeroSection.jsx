import React from 'react';
import video from '../assets/Image/video.mp4';

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center py-0 px-4 md:px-10 lg:px-16 overflow-hidden">
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

      {/* Dark Purple Overlay - exact match */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/0"></div>

      {/* Main Content Container — flex row on larger screens */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">

        {/* LEFT SIDE: "THE BEST THEME FOR EDUCATION" + BUY BUTTON */}
        <div className="text-white max-w-lg text-center lg:text-left">
          <h2 className=" font-semibold leading-tight">
            THE BEST THEME FOR
          </h2>
          <p className="text-4xl md:text-4xl font-black mt-2">EDUCATION</p>

          {/* BUY EDUMA NOW button — styled as a bright callout */}
          <button className="mt-8 bg-yellow-700 text-gray-900  font-bold py-1 px-4 rounded shadow-lg hover:bg-yellow-800 transition duration-300">
            BUY EDUMA NOW
          </button>
        </div>

        {/* RIGHT SIDE: white card with form (exactly as before) */}
<div className="w-full max-w-[360px] bg-white shadow-xl overflow-hidden rounded-2xl">
  {/* TOP YELLOW CURVE - LARGER BOTTOM BORDER RADIUS FOR CURVED EFFECT */}
  <div className="bg-yellow-600 text-white text-center px-6 pt-12 pb-10 ">
    <p className="text-lg font-semibold leading-7">
      Create your free account now
      <br />
      and immediately get access to
      <br />
      100s of online courses.
    </p>
  </div>

 <div className="bg-yellow-600  rounded-b-full pb-10">
   
  </div>




  {/* FORM AREA WITH NEGATIVE MARGIN TO OVERLAP THE CURVE */}
  <div className="px-6 pb-8 -mt-10">
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Your Name *"
        className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[#f9b81b] focus:border-transparent"
      />
      <input
        type="email"
        placeholder="Email *"
        className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[#f9b81b] focus:border-transparent"
      />
      <input
        type="tel"
        placeholder="Phone *"
        className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[#f9b81b] focus:border-transparent"
      />
    </div>

    <button className="w-full mt-6 bg-yellow-600 text-white py-3 rounded-lg font-semibold hover:bg-[#e5a617] transition duration-300 shadow-md">
      GET IT NOW
    </button>
  </div>
</div>
      </div>
    </section>
  );
};

export default HeroSection;