import { MdEmail } from "react-icons/md";

const Subscribe = () => {
  return (
    <div className="bg-gray-150 py-16 px-6 shadow-lg">
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Background glowing letters */}
        <img
          src="https://cdn-icons-png.flaticon.com/128/2593/2593634.png"
          alt="letters"
          className="absolute left-0 top-1/2 -translate-y-1/2 w-32 opacity-5 "
        />

        {/* Left text */}
        <div className="max-w-xl z-10">
          <p className="text-gray-600 text-lg leading-relaxed">
            Subscribe now and receive weekly newsletter with educational
            materials, new courses, interesting posts, popular books and much
            more!
          </p>
        </div>

        {/* Right email input */}
        <div className="flex items-center bg-white border border-gray-200 rounded-md shadow-md overflow-hidden z-10">
          
          <div className="flex items-center px-4 text-gray-400">
            <MdEmail/>
          </div>

          <input
            type="email"
            placeholder="Your email here"
            className="px-2 py-3 w-50 outline-none"
          />

          <button className="bg-yellow-500 hover:bg-yellow-600 font-semibold px-6 py-3">
            SUBSCRIBE
          </button>

        </div>

      </div>
    </div>
  );
};

export default Subscribe;