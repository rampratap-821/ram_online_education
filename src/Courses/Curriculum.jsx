import React, { useState } from "react";
import { ChevronDown, ChevronUp, FileText, Lock } from "lucide-react";

const Curriculum = () => {
  const [open, setOpen] = useState(true);

  const lessons = [
    "How to setup and configure a domain name",
    "How to setup and configure a hosting account",
    "How to install and setup WordPress",
    "How to customize WordPress into a fully functional website",
    "How to use Plugins in WordPress to enhance your sites capabilities",
    "How to thoroughly test your new WordPress site and fix issues",
    "Going Live with WordPress and your site",
  ];

  return (
    <div className="bg-white border border-gray-300 p-6 md:p-8 ">
      
      {/* Header */}
      <h2 className="text-lg font-bold uppercase text-gray-800 mb-4">
        Curriculum
      </h2>
      <hr className="mb-6 border-gray-300" />

      {/* Top Info */}
      <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
        <p>1 Section • 7 Lessons • 10 Weeks</p>
        <button className="uppercase text-gray-700 font-medium hover:text-black">
          Collapse All Sections
        </button>
      </div>

      {/* Section */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer py-3 border-t border-gray-200"
          onClick={() => setOpen(!open)}
        >
          <div className="flex items-center gap-2 font-semibold text-gray-800">
            {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            <span>Course Content</span>
          </div>
          <span className="text-yellow-500 font-semibold">7</span>
        </div>

        {/* Lessons */}
        {open && (
          <div className="divide-y">
            {lessons.map((lesson, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-3 text-gray-600"
              >
                <div className="flex items-center gap-3">
                  <FileText size={16} className="text-yellow-500" />
                  <span>
                    {`2.${index + 1}`} &nbsp; {lesson}
                  </span>
                </div>
                <Lock size={16} className="text-gray-400" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Curriculum;