import React from "react";

const Overview = () => {
  return (
    <div className="bg-white border border-gray-300 p-6 md:p-10  ">
      
      {/* OVERVIEW */}
      <h2 className="text-lg font-bold tracking-wide text-gray-800 uppercase mb-4">
        Overview
      </h2>
      <hr className="mb-6 border-gray-300" />

      {/* COURSE DESCRIPTION */}
      <div className="mb-8">
        <h3 className="text-md font-bold text-gray-800 uppercase mb-3">
          Course Description
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>

      {/* CERTIFICATION */}
      <div className="mb-8">
        <h3 className="text-md font-bold text-gray-800 uppercase mb-3">
          Certification
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>

      {/* LEARNING OUTCOMES */}
      <div>
        <h3 className="text-md font-bold text-gray-800 uppercase mb-4">
          Learning Outcomes
        </h3>

        <ul className="space-y-2">
          {[
            "Over 37 lectures and 55.5 hours of content!",
            "LIVE PROJECT End to End Software Testing Training Included.",
            "Learn Software Testing and Automation basics from a professional trainer from your own desk.",
            "Information packed practical training starting from basics to advanced testing techniques.",
            "Best suitable for beginners to advanced level users and who learn faster when demonstrated.",
            "Course content designed by considering current software testing technology and the job market.",
            "Practical assignments at the end of every session.",
            "Practical learning experience with live project work and examples.",
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-600">
              <span className="text-yellow-500 mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Overview;