import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Education from "./Education";
import KenyWhite from "./KenyWhite";
import YouMayAlsoLike from "./YouMayAlsoLike";


const news = [
  { 
    id:1,
    img: "https://eduma.thimpress.com/wp-content/uploads/2022/06/courses-1-370x230.jpg",
    title: "Admin earns scholarship",
    date: "20/03/2025",
    author: "Keny White"
  },
  {
    id:2,
    img: "https://eduma.thimpress.com/wp-content/uploads/2022/06/courses-2-370x230.jpg",
    title: "Becoming a better designer",
    date: "18/03/2025",
    author: "Keny White"
  },
  {
    id:3,
    img: "https://eduma.thimpress.com/wp-content/uploads/2022/06/courses-8-370x230.jpg",
    title: "Education WP – Eduma",
    date: "25/03/2025",
    author: "Keny White"
  },
  {
    id:4,
    img: "https://eduma.thimpress.com/wp-content/uploads/2022/06/courses-13-300x173.jpg",
    title: "Education Programs",
    date: "22/03/2025",
    author: "Keny White"
  },
  {
    id:5,
    img: "https://eduma.thimpress.com/wp-content/uploads/2022/06/courses-19-370x230.jpg",
    title: "Best Online Courses",
    date: "28/03/2025",
    author: "Keny White"
  }
];


const Latest1 = ({id})=> {
    console.log("rampratap",id)
  const [current, setCurrent] = useState(0);

  const filterData = news.filter((item)=>{
    return item.id ===Number(id)
  })



  return (
    <div className="max-w-3xl mx-auto bg-white ">
      {/* SMOOTH IMAGE SLIDER */}
      <div className="relative group overflow-hidden">
        <div className="relative h-[500px]">
          {filterData.map((item, index) => (
            <img
              key={index}
              src={item.img}
              alt=""
              className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                index === current ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
              }`}
              style={{
                transform: index === current 
                  ? 'translateX(0)' 
                  : index < current 
                    ? 'translateX(-100%)' 
                    : 'translateX(100%)'
              }}
            />
          ))}
        </div>

        {/* LEFT ARROW */}
     
      </div>

      {/* EXACT TEST CONTENT - FIXED */}
       <div>
        <Education filterData = {filterData}/>
        <KenyWhite/>
        <YouMayAlsoLike/>
       </div>
    </div>
  );
}
export default Latest1;