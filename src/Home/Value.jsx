import React, { useEffect, useRef, useState } from 'react';
import { FaUsers, FaGlobe, FaGraduationCap, FaBookOpen, FaLayerGroup } from 'react-icons/fa';

const Values = () => {

  const stats = [
    { id: 1, value: 94532, label: 'Learners', icon: <FaUsers /> },
    { id: 2, value: 1223, label: 'Inter-level education', icon: <FaLayerGroup /> },
    { id: 3, value: 60483, label: 'Graduates', icon: <FaGraduationCap /> },
    { id: 4, value: 35, label: 'Countries Reached', icon: <FaGlobe /> },
    { id: 5, value: 1560, label: 'Courses Published', icon: <FaBookOpen /> },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;

          stats.forEach((stat, index) => {
            let start = 0;
            const end = stat.value;
            const duration = 2000;
            const stepTime = Math.max(Math.floor(duration / end), 10);

            const counter = setInterval(() => {
              start += Math.ceil(end / 100);

              setCounts((prev) => {
                const newCounts = [...prev];
                newCounts[index] = start > end ? end : start;
                return newCounts;
              });

              if (start >= end) {
                clearInterval(counter);
              }
            }, stepTime);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full bg-cover bg-center bg-no-repeat relative py-20 px-5"
      style={{
        backgroundImage:
          "url('https://eduma.thimpress.com/wp-content/uploads/2022/11/counterbox-new-2.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-85"></div>

      {/* Content */}
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className={`relative flex flex-col items-center justify-center text-white 
                py-8 px-4 min-h-[200px]
                ${index < stats.length - 1 ? 'md:border-r-2 border-white/20' : ''}`}
            >
              {/* Icon */}
              <div className="text-6xl text-white mb-4">{stat.icon}</div>

              {/* Value and Label */}
              <div className="text-center">
                <span className="text-2xl font-bold block leading-tight mb-2">
                  {counts[index]}
                </span>

                <span className="uppercase tracking-wider opacity-90 block max-w-[150px] mx-auto">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Values;