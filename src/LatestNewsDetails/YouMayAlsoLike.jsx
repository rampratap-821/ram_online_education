import React from 'react';

const YouMayAlsoLike = () => {
  const posts = [
    {
      id: 1,
      image: "https://eduma.thimpress.com/wp-content/uploads/2022/06/courses-1-300x200.jpg",
      title: "Becoming a better designer",
      date: "18/03/2025"
    },
    {
      id: 2,
      image: "https://eduma.thimpress.com/wp-content/uploads/2022/06/courses-16-300x200.jpg",
      title: "Our Classes",
      date: "17/03/2025"
    },
    {
      id: 3,
      image: "https://eduma.thimpress.com/wp-content/uploads/2022/06/courses-6-300x200.jpg",
      title: "Learning",
      date: "07/03/2025"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white font-sans">
      
      {/* Section Header */}
      <h2 className="text-3xl font-bold text-[#222] mb-10" style={{ fontFamily: 'Georgia, serif' }}>
        You may also like
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {posts.map((post) => (
          <article key={post.id} className="group cursor-pointer">
            
            {/* Image */}
            <div className="relative aspect-[3/2] overflow-hidden rounded-md mb-4 bg-gray-100">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Title (smaller) */}
            <h3 className="text-lg font-bold text-[#333] mb-2 leading-tight hover:text-blue-600 transition-colors">
              {post.title}
            </h3>

            {/* Date (smaller) */}
            <p className="text-xs text-gray-500 font-medium">
              {post.date}
            </p>
            
          </article>
        ))}
      </div>

      {/* Divider */}
      <hr className="border-gray-200 mb-12" />

      {/* Leave Reply */}
      <div className="max-w-4xl">
        <h3 className="text-2xl font-bold text-[#222] mb-6" style={{ fontFamily: 'Georgia, serif' }}>
          Leave A Reply
        </h3>

        <p className="text-gray-600 text-base">
          You must be{" "}
          <a
            href="#"
            className="text-[#333] font-semibold hover:text-blue-600 transition-colors"
          >
            logged in
          </a>{" "}
          to post a comment.
        </p>
      </div>

    </div>
  );
};

export default YouMayAlsoLike;