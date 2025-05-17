import React from "react";
import SMM from "../../assets/SocialMM/SMM.png";

const TopSM = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-4 md:px-20 py-16 overflow-hidden">
      {/* Left Side Content */}
      <div className="md:w-1/2 z-10">
        <div className="max-w-lg text-left">
          <p className="text-yellow-400 text-2xl font-bold mb-2">
            Get Social with the
          </p>
          <p className="text-4xl leading-normal">
            <span className="bg-gradient-to-r from-blue-500 to-rose-900 bg-clip-text text-transparent font-bold">
              Top Social Media Marketing{" "}
            </span>
            <span className="text-blue-500  font-bold">Agency </span>
            in Trichy
          </p>

          <p className="text-gray-600 mt-6 text-base leading-relaxed tracking-wide">
            Social Media Marketing Agencies play a vital role in the growth of
            businesses. Although 73% of marketers consider social media
            marketing effective, a significant 93% regard it as indispensable.
            These agencies support businesses in developing captivating content
            and overseeing online communities, enabling them to establish a
            robust online presence and engage with their audience.
          </p>
          <button className="mt-8 group flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition duration-300">
            SPEAK TO AN EXPERT
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center z-10">
        <img
          src={SMM}
          alt="Mobile App Development"
          className="w-full max-w-md relative z-10"
        />
      </div>
    </section>
  );
};

export default TopSM;
