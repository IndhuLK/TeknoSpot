import React from "react";
import Google from "../../assets/SEO/Google.png";

const GoogleRank = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-4 md:px-20 py-16 overflow-hidden">
      {/* Left Side Content */}
      <div className="md:w-1/2 z-10">
        <div className="max-w-lg text-left">
          <p className="text-yellow-400 text-2xl font-bold mb-2">
            No.1 SEO Company in Trichy
          </p>
          <p className="text-4xl ">
            Guaranteed 1st page{" "}
            <span className="bg-gradient-to-r from-purple-900 to-rose-900 bg-clip-text text-transparent font-bold">
              Google
            </span>
          </p>
          <p className="text-4xl mt-2">
            <span className="bg-gradient-to-r from-blue-500 via-purple-400 to-red-800 bg-clip-text text-transparent  font-bold">
              Rankings in 90 days
            </span>
          </p>
          <p className="text-gray-600 mt-6 text-base leading-relaxed tracking-wide">
            EEvery day, people turn to Google to search for products and
            services. Securing a position on Page 1 helps your business gain
            prominence. Greater visibility leads to more traffic, inquiries, and
            ultimately, increased sales.
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
        <div className="relative">
          {/* Base circle */}
          <div className="absolute -bottom-1 w-[450px] h-[20px] bg-blue-600/50 rounded-full left-1/2 -translate-x-1/2 mb-10"></div>

          <img
            src={Google}
            alt="Mobile App Development"
            className="w-full max-w-md relative z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default GoogleRank;
