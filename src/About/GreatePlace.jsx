import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const GreatPlace = () => {

  const images = [
    "https://eduma.thimpress.com/wp-content/uploads/2022/06/courses-14.jpg",
    "https://eduma.thimpress.com/wp-content/uploads/2022/06/courses-19.jpg",
    "https://eduma.thimpress.com/wp-content/uploads/2022/06/courses-5.jpg",
    "https://eduma.thimpress.com/wp-content/uploads/2022/06/courses-3.jpg",
    "https://eduma.thimpress.com/wp-content/uploads/2022/06/blog-18.jpg",
  ];

  return (
    <div className=" py-16">
      <div className="max-w-6xl mx-auto px-4">

        {/* Title */}
        <h2 className="text-3xl font-semibold text-center mb-10">
          A Great Place to Grow
        </h2>

        {/* Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={25}
          slidesPerView={4}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center">
                <img
                  src={img}
                  alt="slider"
                  className="w-56 h-36 object-cover rounded-lg hover:scale-105 transition duration-500"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}
        <div className="custom-pagination flex justify-center mt-8"></div>

      </div>
    </div>
  );
};

export default GreatPlace;