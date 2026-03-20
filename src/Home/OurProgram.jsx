import React from "react";
import { FaAtom, FaUserGraduate } from "react-icons/fa";
import { MdSatelliteAlt } from "react-icons/md";
import { TbMath } from "react-icons/tb";
import { Link } from "react-router-dom";

const OurPrograms = () => {

  const programs = [
    {
      icon: <FaAtom />,
      title: "Social Sciences",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    },
    {
      icon: <FaUserGraduate />,
      title: "Personal Education",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    },
    {
      icon: <MdSatelliteAlt />,
      title: "Natural Sciences & ICT",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    },
    {
      icon: <TbMath />,
      title: "Maths",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    }
  ];

  return (
    <div className=" py-16">

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold">Our Programs</h2>
        <p className="text-gray-500 mt-2">
          Explore undergrad and grad programs offered online and on-campus
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">

        {programs.map((item, index) => (
          <div
            key={index}
            className="bg-white p-8 text-center rounded-md shadow-sm hover:shadow-md transition"
          >
            <div className="text-5xl text-yellow-500 flex justify-center mb-6">
              {item.icon}
            </div>

            <h3 className="font-semibold text-lg mb-3 hover:text-yellow-400" >
              <Link
                to={"/"}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                {item.title}
              </Link>
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}

      </div>

      {/* Button */}
      <div className="flex justify-center mt-12">
        <Link
          to={"/"}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-yellow-500 text-white px-8 py-3 rounded hover:bg-yellow-600">
          LEARN MORE
        </Link>
      </div>

    </div>
  );
};

export default OurPrograms;