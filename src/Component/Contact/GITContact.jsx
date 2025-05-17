import React from "react";
import headsetImg from "../../assets/Contact/HeadPhone.png";
import { FaLocationDot } from "react-icons/fa6";
import { MdPhone } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";

const GITContact = () => {
  return (
    <div className="relative max-w-6xl mx-auto mt-8 md:mt-20 p-[2px] bg-gradient-to-r from-purple-200 to-yellow-200 rounded-lg shadow-md">
      <div className="relative flex flex-col md:flex-row bg-white rounded-lg p-6">
        {/* Headset Image */}
        <img
          src={headsetImg}
          alt="Headset"
          className="absolute -top-10 -right-10 w-38 z-10 rotate-[-10deg] opacity-40 -scale-x-100"
        />

        {/* Left: Contact Info */}
        <div className="w-full md:w-1/2 bg-gradient-to-r from-yellow-200 to-green-200 p-20 rounded-lg space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl text-gray-800">
              <FaLocationDot />
            </span>
            <p className="text-xl font-semibold text-gray-800">
              Tiruchirappalli, Tamilnadu
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl text-gray-800">
              <MdPhone />
            </span>
            <p className="text-xl font-semibold text-gray-800">
              +91 7604921773
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl text-gray-800">
              <MdMailOutline />
            </span>
            <p className="text-xl font-semibold text-gray-800">
              surya@teknospot.in
            </p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-gray-500 to-blue-500 text-transparent bg-clip-text inline-block">
            Get In Touch With Us
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border-b border-gray-400 focus:outline-none pb-2"
            />
            <input
              type="text"
              placeholder="Mobile Number"
              className="w-full border-b border-gray-400 focus:outline-none pb-2"
            />
            <input
              type="email"
              placeholder="Email Id"
              className="w-full border-b border-gray-400 focus:outline-none pb-2"
            />
            <textarea
              placeholder="Message"
              className="w-full border-b border-gray-400 focus:outline-none pb-2"
            ></textarea>

            <button
              type="submit"
              className="bg-yellow-400 px-6 py-2 rounded shadow-md font-semibold hover:bg-yellow-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GITContact;
