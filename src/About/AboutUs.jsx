import { useState, useEffect } from "react";
import {
  FaGlobe,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaGraduationCap,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaGlobe size={45} />,
    number: 94532,
    label: "Foreign Followers",
    color: "text-green-500",
    border: "hover:border-green-500",
  },
  {
    icon: <FaChalkboardTeacher size={45} />,
    number: 11223,
    label: "Classes Complete",
    color: "text-blue-500",
    border: "hover:border-blue-500",
  },
  {
    icon: <FaUserGraduate size={45} />,
    number: 25678,
    label: "Students Enrolled",
    color: "text-yellow-500",
    border: "hover:border-yellow-500",
  },
  {
    icon: <FaGraduationCap size={45} />,
    number: 2678,
    label: "Certified Teachers",
    color: "text-red-500",
    border: "hover:border-red-500",
  },
];

const AboutUs = () => {
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const intervals = stats.map((stat, i) => {
      let start = 0;
      const end = stat.number;
      const step = Math.ceil(end / 100);

      return setInterval(() => {
        start += step;

        if (start >= end) {
          start = end;
          clearInterval(intervals[i]);
        }

        setCounts((prev) => {
          const updated = [...prev];
          updated[i] = start;
          return updated;
        });
      }, 20);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <>
      {/* Breadcrumb */}
      <div className="p-3 bg-gray-100 pl-6">
        <span>Home</span>
        <span className="text-gray-400"> {" > "} </span>
        <span className="text-gray-400">About</span>
      </div>

      <div className="py-20 px-6">
        {/* Heading */}
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            About Us
          </h2>

          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Learn with passion to live with purpose.
          </h3>

          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Neque convallis a cras semper auctor. Libero id faucibus nisl tincidunt
            egetnvallis a cras semper auctonvallis a cras semper aucto.
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`
                bg-white rounded shadow-lg
                py-14 px-6 text-center
                border-b-4 border-transparent
                transition-all duration-300
                ${item.border}
                ${index === 1 || index === 2 ? "lg:-translate-y-12" : ""}
              `}
            >
              {/* Icon */}
              <div className={`flex justify-center ${item.color}`}>
                {item.icon}
              </div>

              {/* Number */}
              <h3 className={`text-4xl font-bold mt-6 ${item.color}`}>
                {counts[index]}
              </h3>

              {/* Label */}
              <p className="text-gray-500 mt-3 text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutUs;