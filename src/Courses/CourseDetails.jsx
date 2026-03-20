import React from "react";
import { useParams } from "react-router-dom";
import HowToCreate from "./HowToCreate";
import ImageBuy from "./ImageBuy";
import Overview from "./Overview";
import Curriculum from "./Curriculum";
import Instructor from "./Instructor";
import Reviews from "./Reviews";
import YouMayLike from "./YouMayLike";

const CourseDetail = () => {
  const { id } = useParams();

  return (
    <div className="relative">

      {/* TOP */}
      <HowToCreate id={id} />

      {/* ✅ MOBILE ImageBuy (normal flow) */}
      <div className="block lg:hidden px-5 md:px-10 mt-6">
        <ImageBuy id={id} />
      </div>

      {/* MAIN */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 px-5 md:px-10 py-10 relative">

        {/* LEFT */}
        <div className="lg:col-span-3">
          <Overview />
          <Curriculum />
          <Instructor />
          <Reviews />
          <YouMayLike />
        </div>

        {/* RIGHT (Desktop only sticky + overlap) */}
        <div className="hidden lg:block">
          <div className="sticky top-5 w-[300px] -mt-80 ml-auto">
            <ImageBuy id={id} />
          </div>
        </div>

      </div>

    </div>
  );
};

export default CourseDetail;