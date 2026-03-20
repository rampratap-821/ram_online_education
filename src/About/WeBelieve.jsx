import React from "react";

const WeBelieve = ()=> {
  return (
    <div className=" py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-start gap-6">
          
          {/* Quote Icon */}
          <div className="text-yellow-500 text-5xl font-bold leading-none">
            “
          </div>

          {/* Text */}
          <div>
            <p className="text-gray-700 text-xl leading-relaxed font-medium">
              We believe that learning should be accessible, engaging, and
              transformative. Our mission is to empower you to reach your
              fullest potential, no matter where you start. Together, let’s
              unlock new possibilities and inspire lifelong learning.
            </p>

            <p className="mt-6 text-gray-600 text-base">
              Tony Nguyen,{" "}
              <span className="text-blue-600 font-medium">Co-Founder</span>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mt-12"></div>
      </div>
    </div>
  );
}

export default WeBelieve;