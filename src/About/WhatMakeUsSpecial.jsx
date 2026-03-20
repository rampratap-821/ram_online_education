import { Link } from "react-router-dom";

const WhatMakeUsSpecial = () => {
  return (

    <div className=" py-16 px-6">

      {/* Heading */}

      <div className="text-center max-w-3xl mx-auto">

        <h2 className="text-3xl font-bold text-gray-800">
          What Make Us Special?
        </h2>

        <p className="text-gray-500 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisc ing elit.
        </p>

      </div>

      {/* Cards */}

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mt-12">

        {/* Card 1 */}

        <div className="  overflow-hidden  transition">

          <img
            src="https://eduma.thimpress.com/wp-content/uploads/2022/06/courses-7.jpg"
            className="w-full h-52 object-cover"
          />

          <div className="p-6">

            <h3 className="text-xl font-semibold text-gray-800">
              Who we are
            </h3>

            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <Link
              to={"/about"}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="mt-4 text-sm font-semibold text-gray-800 hover:text-yellow-500">
              READ MORE
            </Link>
          </div>

        </div>

        {/* Card 2 */}

        <div className="  overflow-hidden  transition">

          <img
            src="https://eduma.thimpress.com/wp-content/uploads/2022/06/courses-4.jpg"
            className="w-full h-52 object-cover"
          />

          <div className="p-6">

            <h3 className="text-xl font-semibold text-gray-800">
              Who we do
            </h3>

            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <Link
              to={"/about"}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="mt-4 text-sm font-semibold text-gray-800 hover:text-yellow-500">
              READ MORE
            </Link>

          </div>

        </div>

        {/* Card 3 */}

        <div className="  overflow-hidden  transition">

          <img
            src="https://eduma.thimpress.com/wp-content/uploads/2022/06/courses-8.jpg"
            className="w-full h-52 object-cover"
          />

          <div className="p-6">

            <h3 className="text-xl font-semibold text-gray-800">
              How it work
            </h3>

            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <Link
              to={"/about"}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="mt-4 text-sm font-semibold text-gray-800 hover:text-yellow-500">
              READ MORE
            </Link>

          </div>

        </div>

      </div>

    </div>

  );
};

export default WhatMakeUsSpecial;