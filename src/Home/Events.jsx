import React from "react";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";

const Events = () => {
  return (
    <div className="w-full   py-20 px-5">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-semibold">Events</h2>
          <p className="text-gray-500">
            Upcoming Education Events to feed your brain.
          </p>
        </div>

        <button className="border px-5 py-2 text-sm hover:border-yellow-400">
          VIEW ALL
        </button>
      </div>

      {/* Event Card */}
      <div className="flex  flex-wrap items-center gap-8 border-t pt-8 ">

        {/* Date */}
        <div className="text-center min-w-[90px]">
          <h1 className="text-6xl font-bold text-yellow-500 leading-none">
            23
          </h1>
          <p className="text-gray-500 mt-2">DEC</p>
        </div>

        {/* Event Info */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-3">
            Elegant Light Box Paper Cut Dioramas
          </h3>

          <div className="flex gap-6 text-gray-500 text-sm mb-3">
            <span className="flex items-center gap-2">
              <FaClock /> 08:00 - 17:00
            </span>

            <span className="flex items-center gap-2">
              <FaMapMarkerAlt /> Vancouver, Canada
            </span>
          </div>

          <p className="text-gray-500 leading-relaxed">
            Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt
            auctor a ornare odio. Sed non mauris vitae erat consequat
            auctor eu in elit.
          </p>
        </div>

        {/* Bigger Image */}
        <div className="w-[420px] h-[220px] ">
          <img
            src="https://eduma.thimpress.com/wp-content/uploads/2022/06/course-20-400x300.jpg"
            alt="event"
            className="w-full h-full object-cover rounded"
          />
        </div>

      </div>

    </div>
  );
};

export default Events;