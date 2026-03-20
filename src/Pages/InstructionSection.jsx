import React, { useState } from "react";
import { FaCheckCircle, FaUserPlus, FaListUl, FaBook } from "react-icons/fa";

const InstructorSection = () => {
  const [activeTab, setActiveTab] = useState("become");

  const tabs = [
    {
      id: "become",
      label: "Become an Instructor",
      icon: <FaUserPlus />,
    },
    {
      id: "rules",
      label: "Instructor Rules",
      icon: <FaListUl />,
    },
    {
      id: "courses",
      label: "Start with courses",
      icon: <FaBook />,
    },
  ];

  return (
    <div className=" py-10 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Top Alert */}
        <div className="bg-green-100 text-green-700 px-4 py-3 rounded-md flex items-center gap-2 mb-6">
          <FaCheckCircle className="text-green-600" />
          <span>
            Please{" "}
            <a href="#" className="text-blue-600 underline">
              login
            </a>{" "}
            to send your request!
          </span>
        </div>

        {/* Tabs */}
        <div className="border bg-white rounded-md">
          <div className="flex border-b">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 text-sm font-medium border-r last:border-r-0
                ${
                  activeTab === tab.id
                    ? "border-t-2 border-yellow-500 bg-white text-black"
                    : "bg-gray-50 text-gray-600"
                }`}
              >
                <span className="text-yellow-500">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="p-6 text-gray-600 text-sm leading-relaxed">
            {activeTab === "become" && (
              <>
                <p className="mb-4">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
                <p>
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy.
                </p>
              </>
            )}

            {activeTab === "rules" && (
              <p>
                Instructor rules content goes here. You can define guidelines,
                policies, and requirements for instructors.
              </p>
            )}

            {activeTab === "courses" && (
              <p>
                Start with courses content goes here. Guide users on how to begin
                creating and publishing courses.
              </p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default InstructorSection;