import React from "react";

const Categories = () => {
  return (
    <>
    <div className=" bg-white border rounded-md p-4 shadow-sm">
      {/* Categories */}
      <div className="mb-6">
        <h2 className="font-semibold mb-3">Categories</h2>

        {[
          ["Photography", 2],
          ["Online Business", 3],
          ["Teacher Training", 1],
          ["Arts & Crafts", 3],
          ["Coaching", 3],
        ].map(([name, count]) => (
          <label key={name} className="flex justify-between items-center mb-2 text-sm cursor-pointer">
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              {name}
            </div>
            <span className="text-gray-500">{count}</span>
          </label>
        ))}

        {/* Nested */}
        <div className="ml-5 mt-1">
          <label className="flex justify-between items-center mb-2 text-sm cursor-pointer">
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              Passive Income
            </div>
            <span className="text-gray-500">4</span>
          </label>
        </div>

        {[
          ["Video Creation", 1],
          ["Teaching Online", 4],
          ["Technology", 2],
        ].map(([name, count]) => (
          <label key={name} className="flex justify-between items-center mb-2 text-sm cursor-pointer">
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              {name}
            </div>
            <span className="text-gray-500">{count}</span>
          </label>
        ))}
      </div>

      {/* Author */}
      <div className="mb-6">
        <h2 className="font-semibold mb-3">Author</h2>

        {[
          ["John Doe", 3],
          ["Keny White", 18],
        ].map(([name, count]) => (
          <label key={name} className="flex justify-between items-center mb-2 text-sm cursor-pointer">
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              {name}
            </div>
            <span className="text-gray-500">{count}</span>
          </label>
        ))}
      </div>

      {/* Price */}
      <div className="mb-6">
        <h2 className="font-semibold mb-3">Price</h2>

        {[
          ["Free", 6],
          ["Paid", 15],
        ].map(([name, count]) => (
          <label key={name} className="flex justify-between items-center mb-2 text-sm cursor-pointer">
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              {name}
            </div>
            <span className="text-gray-500">{count}</span>
          </label>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-2">
        <button className="bg-yellow-500 text-black font-semibold px-4 py-2 rounded-md w-full">
          APPLY
        </button>
        <button className="border px-4 py-2 rounded-md w-full">
          RESET
        </button>
      </div>
    </div>

    <div className="w-full object-cover">
        <img src="https://eduma.thimpress.com/wp-content/uploads/2022/11/ads-sidebar-276x300.jpg"/>
    </div>
    </>
  );
};

export default Categories;