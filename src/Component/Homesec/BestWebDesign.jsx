import React from "react";
import Ellipse from "../../assets/Images/Ellipse.png";
import Webdesign from "../../assets/Images/Webdesign.jpg";

const BestWebDesign = () => {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row items-center justify-between px-10 py-16 bg-white">
        {/* Left Side - Text Content */}
        <div className="md:w-1/2">
          <p
            className="w-15 h-1 space-y-4 bg-gradient-to-r from-pink-500 to-purple-600
              text-transparent mb-4"
          ></p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Best Web Design Company <br /> in Trichy
          </h2>
          <p className="text-lg text-yellow-500 font-semibold mb-2">
            We combine business expertise with technology to build one-stop web
            solutions
          </p>
          <p className="text-gray-700 text-base/8 tracking-widest ">
            Tekno Spot is a top-notch digital marketing agency based out in
            Trichy. With professional expertise, our expert team provides Web
            Designing, Web Development, E-Commerce Development, SEO Services,
            Social Media Marketing, Content Marketing, Graphics Design, and
            more.
          </p>
        </div>

        {/* Right Side - Video Section */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <div className="relative w-[500px] h-[350px] rounded-xl overflow-hidden shadow-lg">
            {/* Video Thumbnail */}
            <img
              src={Webdesign}
              alt="Video Thumbnail"
              className="w-full h-full object-cover"
            />
            {/* Play Button */}
            <button className="absolute inset-0 flex justify-center items-center bg-opacity-40">
              <svg
                className="w-12 h-12 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M4.5 3.5v13l11-6.5-11-6.5z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestWebDesign;
