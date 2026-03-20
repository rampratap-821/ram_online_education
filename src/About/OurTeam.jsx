import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const team = [
  {
    name: "Owen Christ",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    desc: "After working as a software developer and...",
  },
  {
    name: "Namrata Parmar",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    desc: "I came to Eduma ten years ago",
  },
  {
    name: "George Clinton",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    desc: "After working as a software developer and...",
  },
  {
    name: "George Richards",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    desc: "After working as a software developer and...",
  },
  {
    name: "Betty Milner",
    img: "https://randomuser.me/api/portraits/men/67.jpg",
    desc: "After working as a software developer and...",
  },
];

const OurTeam = ()=> {
  return (
    <div className=" py-16">
      <div className="max-w-7xl mx-auto text-center px-10">
        
        <h2 className="text-3xl font-semibold mb-2">Meet Our Team</h2>
        <p className="text-gray-500 mb-12">
          Plugins your themes with even more features.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              
              {/* Image */}
              <div className="relative w-40 h-40 mx-auto rounded-full border-2 border-dashed border-blue-300 p-2">
                <div className="relative w-full h-full rounded-full overflow-hidden">

                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full group-hover:brightness-50 transition"
                  />

                  {/* Hover Icons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition text-white text-lg">
                    <FaFacebookF />
                    <FaTwitter />
                    <FaYoutube />
                    <FaLinkedinIn />
                  </div>

                </div>
              </div>

              {/* Name */}
              <h3 className="mt-4 font-semibold">{member.name}</h3>

              {/* Description */}
              <p className="text-gray-500 text-sm mt-2">
                {member.desc}
              </p>

            </div>
          ))}
        </div>

        {/* Button */}
        <button className="mt-12 bg-yellow-400 hover:bg-yellow-500 px-6 py-3 font-semibold rounded
        transition duration-500 ">
         <Link
          to={"/about"}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
         > VIEW OUR TEAM </Link>
        </button>

      </div>
    </div>
  );
}

export default OurTeam;