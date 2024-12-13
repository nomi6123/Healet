import React from 'react';
import { FaAnglesRight, FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { PiMapPinFill } from "react-icons/pi";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaYoutube,
} from "react-icons/fa6";

const links = [
  {
    name: "Healet",
    path: "/",
  },
  {
    name: "Home",
    path: "/home",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Shop",
    path: "/shop",
  },
  {
    name: "Blog",
    path: "/blog",
  },
];

const Footer = () => {
  return (
    <footer className="w-full p-3 bg-[#160E0B] mt-10 flex flex-col items-center">
      {/* Input and Social Links */}
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-5 p-3">
        {/* Input for Email */}
        <div className="w-full md:w-1/2 flex items-center">
          <input
            type="text"
            className="w-full outline-none p-4 placeholder:text-gray-700"
            placeholder="Enter your email"
          />
          <button className="px-5 py-4 bg-[#FD9C6B] border border-white hover:bg-transparent hover:border-[#FD9C6B] flex items-center">
            <FaAnglesRight className="text-2xl text-white hover:text-[#FD9C6B]" />
          </button>
        </div>

        {/* Social Media Links */}
        <nav className="flex gap-3">
          <div className="p-3 border border-white hover:border-[#FD9C6B] flex items-center">
            <FaFacebookF className="text-2xl text-white hover:text-[#FD9C6B]" />
          </div>
          <div className="p-3 border border-white hover:border-[#FD9C6B] flex items-center">
            <FaTwitter className="text-2xl text-white hover:text-[#FD9C6B]" />
          </div>
          <div className="p-3 border border-white hover:border-[#FD9C6B] flex items-center">
            <FaLinkedin className="text-2xl text-white hover:text-[#FD9C6B]" />
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="w-full flex flex-col max-lg:flex-wrap md:flex-row justify-center items-start gap-10 p-3">
        {/* Useful Links */}
        <div className="w-full md:w-1/4 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-white mb-2">Useful Links</h2>
          {links.map((link, index) => (
            <a
              href={link.path}
              key={index}
              className="text-3xl text-white font-semibold mb-1 hover:text-red-600 transition duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Instagram Section */}
        <div className="w-full md:w-1/4 flex flex-col gap-2">
          <h2 className="text-3xl font-bold text-white text-center mb-2">Discount</h2>
          {["/o1.jpg", "/o2.jpg", "/o3.jpg"].map((imgSrc, index) => (
            <div className="flex items-center max-lg:flex-col mb-1" key={index}>
              <img
                src={imgSrc}
                alt={`Instagram ${index}`}
                className="w-[100px] h-[100px] bg-white mr-2"
              />
              <p className="text-white text-lg tracking-tight transition duration-300">
                {index === 0
                  ? "Up to 15% off"
                  : index === 1
                  ? "Up to 10% off"
                  : "Up to 20% off"}
              </p>
            </div>
          ))}
        </div>

        {/* About Us Section */}
        <div className="w-full md:w-1/4 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-white mb-2">About Us</h2>
          <p className="text-white text-lg tracking-tight text-center transition duration-300">
            At Healet, we craft timeless pieces that celebrate individuality and
            elegance. Our collection is a blend of traditional craftsmanship and
            modern design, reflecting the unique beauty of each wearer.
          </p>
        </div>

        {/* Address Section */}
        <div className="w-full md:w-1/4 flex flex-col items-start justify-center p-2 text-white">
          <h2 className="font-bold text-2xl mb-2">Address</h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <PiMapPinFill className="text-xl hover:text-yellow-500 transition-transform duration-300 transform hover:scale-110" />
              <h4 className="transition duration-300">Lohare Panjab Pakistan</h4>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-lg hover:text-yellow-500 transition-transform duration-300 transform hover:scale-110" />
              <h4 className="transition duration-300">Call: +033229999766</h4>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-lg hover:text-yellow-500 transition-transform duration-300 transform hover:scale-110" />
              <h4 className="transition duration-300">demo@gmail.com</h4>
            </div>
          </div>
          <div className="flex mt-3 items-center gap-4">
            <FaFacebook className="text-2xl hover:text-yellow-500 transition-transform duration-300 transform hover:scale-110" />
            <FaTwitter className="text-2xl hover:text-yellow-500 transition-transform duration-300 transform hover:scale-110" />
            <FaYoutube className="text-2xl hover:text-yellow-500 transition-transform duration-300 transform hover:scale-110" />
            <FaInstagram className="text-2xl hover:text-yellow-500 transition-transform duration-300 transform hover:scale-110" />
          </div>
        </div>
      </div>

      <div className="w-[80%] bg-white">
        <hr />
      </div>
      <p className="text-center text-white text-2xl mt-4">
        © 2024 All Rights Reserved. Design by Front-end developer Noman.
      </p>
    </footer>
  );
};

export default Footer;
