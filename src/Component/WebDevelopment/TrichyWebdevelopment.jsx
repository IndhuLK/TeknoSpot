import React from "react";
import Ellipse from "../../assets/Images/Ellipsee.png";
import Webdevelopment from '../../assets/WebDevelopIMG/Webdevelopment.png'

const TrichyWebdevelopment = () => {
  return (
     <div>
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10">
        {/* Left Side: Image */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <img
            src={Webdevelopment}
            alt="Web development illustration"
            className="w-full h-auto"
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="md:w-1/2 max-w-lg text-left">
          <h1 className="text-yellow-500 py-2">
            Trichy’s Leading Web Application Builders
          </h1>

          <p className="text-4xl mb-4">
            Best
            <span
              className="bg-gradient-to-r from-blue-400 via-violet-600 to-red-400
              bg-clip-text text-transparent font-bold"
            >
              {" "}
              Web Development <br />
            </span>
            <span className="">Company in Trichy</span>
          </p>

          <p className="text-gray-600 mt-8 text-base tracking-widest">
            We offer technical consulting and tailored website development
            services, specifically designed for clients with unique back-end
            features that need integration.
          </p>

          <div className="gap-4 mt-5">
            <p className="text-yellow-500 text-md font-semibold mt-2">
              Trichy’s Leading Web Application Builders
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
      </section>
    </div>
  );
};

export default TrichyWebdevelopment;
