import { useState } from "react";

const testimonials = [
  {
    name: "John",
    role: "Developer",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "LearnPress is a comprehensive LMS solution for WordPress. This WordPress LMS Plugin can be used to easily create & sell courses online.",
  },
  {
    name: "David",
    role: "Instructor",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "Each course curriculum can be made with lessons & quizzes which can be managed with easy-to-use user interface.",
  },
  {
    name: "Manuel",
    role: "Designer",
    img: "https://randomuser.me/api/portraits/men/67.jpg",
    text: "LearnPress is a comprehensive LMS solution for WordPress. This WordPress LMS Plugin can be used to easily create & sell courses online.",
  },
  {
    name: "Alex",
    role: "Developer",
    img: "https://randomuser.me/api/portraits/men/12.jpg",
    text: "It never gets easier with LearnPress. The UI is simple and very flexible for online education websites.",
  },
  {
    name: "Sofia",
    role: "Student",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Amazing LMS theme with powerful features. Highly recommended for anyone building online courses.",
  },
];

const WhatPeopleSay = () => {

  const [active, setActive] = useState(2);
  const [direction, setDirection] = useState("right");

  const handleClick = (index) => {

    if (index > active) {
      setDirection("right");
    } else {
      setDirection("left");
    }

    setActive(index);
  };

  const current = testimonials[active];

  return (

    <div className=" py-12 md:py-16 px-4 text-center">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          What People Say
        </h2>

        <p className="text-gray-500 mt-2">
          How real people said about Education WordPress Theme
        </p>

        {/* Avatars */}

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-10">

          {testimonials.map((item, index) => (

            <img
              key={index}
              src={item.img}
              alt={item.name}
              onClick={() => handleClick(index)}
              className={`w-12 h-12 md:w-16 md:h-16 rounded-full cursor-pointer transition-all duration-300
              
              ${
                active === index
                  ? "ring-4 ring-yellow-400 scale-110 shadow-lg"
                  : "opacity-60 hover:opacity-100 hover:scale-105"
              }
              
              `}
            />

          ))}

        </div>

        {/* Content */}

        <div className="mt-10 overflow-hidden">

          <div
            key={active}
            className={`transition-all duration-500 transform
            ${
              direction === "right"
                ? "translate-x-10 opacity-0 animate-[slideRight_0.5s_forwards]"
                : "-translate-x-10 opacity-0 animate-[slideLeft_0.5s_forwards]"
            }
            `}
          >

            <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
              {current.name}
            </h3>

            <p className="text-gray-500 mt-1">
              {current.role}
            </p>

            <div className="max-w-3xl mx-auto mt-6">
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                “ {current.text} ”
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Animation */}

      <style>
        {`
        @keyframes slideRight {
          from { opacity:0; transform: translateX(80px); }
          to { opacity:1; transform: translateX(0); }
        }

        @keyframes slideLeft {
          from { opacity:0; transform: translateX(-80px); }
          to { opacity:1; transform: translateX(0); }
        }
        `}
      </style>

    </div>

  );
};

export default WhatPeopleSay;