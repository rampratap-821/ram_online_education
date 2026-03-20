import { FaFacebookF, FaXTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa6";

const Instructor =()=> {
  return (
    <div className=" p-6   border">
      {/* Header */}
      <h2 className="text-sm font-semibold tracking-wide text-gray-700 border-b pb-2 mb-6">
        INSTRUCTOR
      </h2>

      {/* Content */}
      <div className="flex items-start gap-6">
        {/* Image */}
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="John Doe"
          className="w-24 h-24 rounded-full object-cover"
        />

        {/* Info */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900">
            John Doe
          </h3>

          <p className="text-sm text-gray-500 uppercase tracking-wide mb-3">
            Bachelor
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 text-gray-700 mb-4">
            <FaFacebookF className="cursor-pointer hover:text-blue-600" />
            <FaXTwitter className="cursor-pointer hover:text-black" />
            <FaYoutube className="cursor-pointer hover:text-red-600" />
            <FaLinkedinIn className="cursor-pointer hover:text-blue-700" />
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed">
            After working as a software developer and contractor for over 8 years
            for a whole bunch of companies including ABX, Proit, SACC and AT&T
            in the US, He decided to work full-time as a private software trainer.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Instructor;