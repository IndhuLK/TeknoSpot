import React from "react";
import Trichydesign from "../../assets/Services/Trichydesign.png";
import Ellipse from "../../assets/Images/Ellipsee.png";

const TrichyWebDesign = () => {
  return (
    <div className="relative overflow-hidden">
      <section className="flex flex-col md:flex-row items-center justify-between px-20 py-10">
        {/* Left Side Content */}
        <div className="max-w-lg text-left">
          <p className="text-yellow-500 font-medium text-md mb-4">
            Best Web Designing in Trichy
          </p>
          <h1 className="text-4xl md:text-5xl leading-tight">
            Your Web Designing
            <br />
            <span className="font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent">
              Company in Trichy
            </span>
          </h1>
          
          <p className="text-gray-600 mt-8 text-base/8  tracking-widest">
            A great story is the heart of any great design. With the top tech,
            design, and copy brains on your side, you can stand out from the
            competition. Choose our Web Designing Agency in Trichy for
            professional website designing, marketing, and branding services.
          </p>
          <button className="mt-8 group flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition duration-300">
            SPEAK TO AN EXPERT
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Right Side Image */}

        <div className="mt-10 md:mt-0">
          <img
            src={Trichydesign}
            alt="Working at desk"
            className="w-full max-w-md"
          />
        </div>
      </section>

      {/*Image */}
      <div className="relative inset-0 flex justify-end items-center mt-20 px-50">
        <img src={Ellipse} alt="" className="absolute -mt-0 z-10" />
      </div>
    </div>
  );
};

export default TrichyWebDesign;
