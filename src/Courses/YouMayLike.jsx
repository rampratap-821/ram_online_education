import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const YouMayLike = () => {
  const courses = [
    {
      id: 1,
      image: "https://eduma.thimpress.com/wp-content/uploads/2022/10/Introduction-learnpress-lms-plugin-1-400x300.jpg",
      instructor: "Keny White",
      title: "Introduction LearnPress – LMS plugin",
      lessons: 15,
      students: 294,
      price: "Free",
      avatar: "https://i.pravatar.cc/150?u=keny1"
    },
    {
      id: 2,
      image: "https://eduma.thimpress.com/wp-content/uploads/2022/11/create-an-lms-website-with-learnpress-3-400x300.jpg",
      instructor: "Keny White",
      title: "Create an LMS Website with LearnPress",
      lessons: 14,
      students: 78,
      price: "Free",
      avatar: "https://i.pravatar.cc/150?u=keny2"
    },
    {
      id: 3,
      image: "https://eduma.thimpress.com/wp-content/uploads/2022/10/eduma-learnpress-lms-1-400x300.jpg",
      instructor: "Keny White",
      title: "How To Sell In-Person Course With LearnPress",
      lessons: 0,
      students: 0,
      price: "$80",
      isPaid: true,
      avatar: "https://i.pravatar.cc/150?u=keny3"
    },
    {
      id: 4,
      image: "https://eduma.thimpress.com/wp-content/uploads/2024/03/f7aad5d3f7e5c9cf37b0c24a9d075887-1-400x300.png",
      instructor: "Keny White",
      title: "Advanced LMS Customization Guide",
      lessons: 20,
      students: 150,
      price: "Free",
      avatar: "https://i.pravatar.cc/150?u=keny4"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-16 px-4 bg-white">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl font-bold text-slate-800 uppercase tracking-tight border-b-2 border-yellow-500 pb-1">
          You May Like
        </h2>
      </div>

      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mySwiper !pb-14"
      >
        {courses.map((course) => (
          <SwiperSlide key={course.id}>
            <div className="bg-white rounded-lg overflow-hidden border border-gray-200 group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Avatar */}
                <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 z-10">
                  <img 
                    src={course.avatar} 
                    alt="instructor" 
                    className="w-14 h-14 rounded-full border-4 border-white shadow-md object-cover" 
                  />
                </div>
              </div>

              {/* Content */}
              <div className="pt-10 pb-6 px-6 text-center">
                <p className="text-gray-400 text-sm font-medium hover:text-yellow-600 cursor-pointer transition-colors">
                  {course.instructor}
                </p>

                <h3 className="text-lg font-bold text-slate-800 mt-2 mb-4 hover:text-yellow-600 cursor-pointer line-clamp-2 min-h-[3.5rem]">
                  {course.title}
                </h3>

                <div className="w-12 h-0.5 bg-yellow-500 mx-auto mb-6 opacity-60"></div>

                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-4 text-gray-500 text-sm">
                    <span>{course.lessons} Lessons</span>
                    <span>{course.students} Students</span>
                  </div>

                  <div className="text-[15px] font-bold">
                    {course.isPaid ? (
                      <span className="text-gray-400">
                        Only <span className="text-orange-500 font-extrabold">{course.price}</span>
                      </span>
                    ) : (
                      <span className="text-green-500 uppercase tracking-tighter">
                        Free
                      </span>
                    )}
                  </div>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Only dots styling */}
      <style jsx global>{`
        .swiper-pagination-bullet { 
          width: 10px;
          height: 10px;
          background: #d1d5db !important; 
          opacity: 1; 
          cursor: pointer;
        }

        .swiper-pagination-bullet-active { 
          background: #ffb606 !important; 
          width: 24px;
          border-radius: 5px;
          
        }
      `}</style>

    </div>
  );
};

export default YouMayLike;