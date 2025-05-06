import React from "react";
import Ellipse from "../../assets/Images/Ellipsee.png";

const TrichyWebdevelopment = () => {
  return (
    <div>
      <section className="flex flex-col md:flex-row items-center justify-between px-20 py-10">
        {/* Left Side Content */}
        <div className="max-w-lg text-left">
          <p className="text-4xl mb-4">
            Best
            <span className="text-yellow-500 ">
              {" "}
              Web Development <br />
            </span>
            <span className="font-bold">Company in Trichy</span>
          </p>
          <p className='lassName="text-gray-600 mt-8 text-base/8  tracking-widest"'>
            We offer technical consulting and tailored website development
            services, specifically designed for clients with unique back-end
            features that need integration.
          </p>
          <div className="flex gap-4 mt-5">
            <p className="text-yellow-500 text-md font-semibold mt-2">
              Trichy’s Leading Web Application Builders
            </p>
            <button className="group flex px-1 py-2 bg-indigo-700 text-white rounded-lg hover:bg-indigo-800 transition duration-300">
              SPEAK TO AN EXPERT
              <svg
                className="w-8 h-8  group-hover:rotate-90  text-white ease-linear duration-300 rounded-full group-hover:border-none p-2 rotate-45"
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  className="fill-white group-hover:fill-white"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {/* Right Side Image */}
        <div className="relative inset-0 flex justify-end items-center mt-20 px-50">
          <img src={Ellipse} alt="" className="absolute -mt-0 z-10" />
        </div>
      </section>
    </div>
  );
};

export default TrichyWebdevelopment;
