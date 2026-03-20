import { 
  FaFacebookF, 
  FaPinterestP, 
  FaLinkedinIn,
  FaFileAlt,
  FaQuestionCircle,
  FaClock,
  FaSignal,
  FaGlobe,
  FaUserGraduate,
  FaCheckCircle
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import { courses } from "../DummyData/HomeJson";

const ImageBuy = ({ id }) => {

  const filterData = courses.filter((item) => item.id === Number(id));

  return (
    <div className="border bg-white">

      {/* Image */}
      <img
        src={filterData[0].img}
        alt="course"
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-5">

        {/* Price */}
        <p className="text-orange-500 text-xl font-semibold mb-4">
          $39
        </p>

        {/* Button */}
        <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded mb-6">
          BUY NOW
        </button>

        {/* Features Title */}
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Course Features
        </h3>

        {/* Features List */}
        <ul className="space-y-3 text-sm text-gray-600">
          <li className="flex items-center gap-2">
            <FaFileAlt /> Lectures: 7
          </li>
          <li className="flex items-center gap-2">
            <FaQuestionCircle /> Quiz: 0
          </li>
          <li className="flex items-center gap-2">
            <FaClock /> Duration: 1 hour
          </li>
          <li className="flex items-center gap-2">
            <FaSignal /> Skill level: All levels
          </li>
          <li className="flex items-center gap-2">
            <FaGlobe /> Language: English
          </li>
          <li className="flex items-center gap-2">
            <FaUserGraduate /> Students: 2
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle /> Assessments: Yes
          </li>
        </ul>

        {/* Divider */}
        <div className="border-t my-6"></div>

        {/* Social Icons */}
        <div className="flex justify-center gap-3 text-gray-600">
          <div className="w-8 h-8 flex items-center justify-center border rounded-full hover:bg-gray-100 cursor-pointer">
            <FaFacebookF />
          </div>
          <div className="w-8 h-8 flex items-center justify-center border rounded-full hover:bg-gray-100 cursor-pointer">
            <FaXTwitter />
          </div>
          <div className="w-8 h-8 flex items-center justify-center border rounded-full hover:bg-gray-100 cursor-pointer">
            <FaPinterestP />
          </div>
          <div className="w-8 h-8 flex items-center justify-center border rounded-full hover:bg-gray-100 cursor-pointer">
            <FaLinkedinIn />
          </div>
        </div>

      </div>
    </div>
  );
};

export default ImageBuy;