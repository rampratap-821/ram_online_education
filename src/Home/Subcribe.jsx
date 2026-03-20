import { MdEmail } from "react-icons/md";

const Subscribe = () => {
  return (
    <div className="bg-gray-100 py-10 sm:py-14 md:py-16 px-4 sm:px-6">
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">

        {/* Background Icon */}
        <img
          src="https://cdn-icons-png.flaticon.com/128/2593/2593634.png"
          alt="letters"
          className="absolute left-0 top-1/2 -translate-y-1/2 w-20 sm:w-28 md:w-32 opacity-5 pointer-events-none"
        />

        {/* Left Text */}
        <div className="max-w-xl text-center md:text-left z-10">
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Subscribe now and receive weekly newsletter with educational
            materials, new courses, interesting posts, popular books and much
            more!
          </p>
        </div>

        {/* Right Input */}
        <div className="w-full md:w-auto flex flex-col sm:flex-row items-stretch sm:items-center bg-white border border-gray-200 rounded-md shadow-md overflow-hidden z-10">

          {/* Icon */}
          <div className="flex items-center justify-center px-4 text-gray-400 border-b sm:border-b-0 sm:border-r">
            <MdEmail />
          </div>

          {/* Input */}
          <input
            type="email"
            placeholder="Your email here"
            className="px-3 py-3 w-full sm:w-56 md:w-64 outline-none text-sm"
          />

          {/* Button */}
          <button className="bg-yellow-500 hover:bg-yellow-600 font-semibold px-6 py-3 text-sm">
            SUBSCRIBE
          </button>

        </div>

      </div>
    </div>
  );
};

export default Subscribe;