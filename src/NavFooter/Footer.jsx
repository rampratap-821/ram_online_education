import { Link } from "react-router-dom";
import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaFacebookF, FaPinterestP, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Footer */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

          {/* Logo + Contact */}
          <div className="space-y-5">
          <Link to={"/"}>
            <img
              src="https://eduma.thimpress.com/wp-content/uploads/2022/06/logo-white.png"
              alt="eduma"
              className="w-40"
            />
        </Link>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-yellow-500"/>
              <p>*91568789309</p>
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-yellow-500"/>
              <p>Uttar Pradesh - Moradabad</p>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-yellow-500"/>
              <p>ramt@eduma.com</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-2 text-lg">
              <FaFacebookF className="cursor-pointer hover:text-yellow-500"/>
              <FaXTwitter className="cursor-pointer hover:text-yellow-500"/>
              <FaPinterestP className="cursor-pointer hover:text-yellow-500"/>
              <FaInstagram className="cursor-pointer hover:text-yellow-500"/>
            </div>

          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-lg">Company</h3>
            <ul className="space-y-3">
              <li><Link to={"/about"}>About</Link></li>
              <li><Link to={"/blog"}>Blog</Link></li>
              <li><Link to={"/contact"}>Contact</Link></li>
              <li><Link to={"/becomeTeacher"}>Become a Teacher </Link></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-lg">Links</h3>
            <ul className="space-y-3">
              <li><Link to={"/event"}>Event</Link></li>
              <li><Link to={"/courses"}>Courses</Link></li>
              <li><Link to={"/gallery"}>Gallery</Link></li>
              <li><Link to={"/faqs"}>Faqs</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-lg">Support</h3>
            <ul className="space-y-3">
              <li>Documentation</li>
              <li>Forums</li>
              <li>Language Packs</li>
              <li>Release Status</li>
            </ul>
          </div>

          {/* Recommend */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-lg">Recommend</h3>
            <ul className="space-y-3">
              <li>WordPress</li>
              <li>LearnPress</li>
              <li>WooCommerce</li>
              <li>bbPress</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">

          <p className="text-gray-400">
            Premium LMS & Online Education WordPress Theme
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="cursor-pointer hover:text-yellow-500">Privacy</span>
            <span className="cursor-pointer hover:text-yellow-500">Terms</span>
            <span className="cursor-pointer hover:text-yellow-500">Sitemap</span>
            <span className="cursor-pointer hover:text-yellow-500">Purchase</span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;