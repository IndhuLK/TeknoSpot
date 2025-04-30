import React from "react";
import BusinessDesign from "../../assets/Services/BusinessDesign.png";

const BusinessWebsite = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 py-20 bg-white relative overflow-visible">
      {/* Left Text Section */}
      <div className="md:w-1/2 mb-10 md:mb-0 p-10">
        <h2 className="text-xl md:text-3xl  text-gray-800 tracking-wide">
          Are you ready{" "}
          <span className="text-black font-bold">to create an amazing</span>
          <br />
          <span className="text-black font-bold">
            website for your business?
          </span>
        </h2>
      </div>

      {/* Right Section: Stacked Card Design */}
      
      {/* Right card section with layered design */}
      <div className="relative md:w-1/2 max-w-md mt-40">
          {/* Person image - positioned behind cards */}
          <img
            src={BusinessDesign}
            alt="Support specialist"
            className="absolute -top-60 -right-4 w-full h-auto z-10"
          />
          
          {/* Blue background card */}
          <div className="absolute  bottom-15 right-10 w-full h-full bg-blue-100 rounded-xl shadow-2xl z-20"></div>
          
          {/* White foreground card */}
          <div className="relative bg-gray-50 rounded-xl shadow-sm p-8 z-30">
            <p className="text-sm text-gray-800 leading-relaxed">
              Reach out to us today. The outstanding team of developers
              <br />
              and designers at Tekno Spot are ready to support you.
            </p>
            <button className="mt-4 bg-blue-600 text-white text-sm px-5 py-2 rounded-md hover:bg-blue-700 transition">
              Reach Us
            </button>
          </div>
          </div>
          

      {/* Gradient Background Blur Effect at Bottom Left */}
      <div
        className="absolute center w-[250px] h-[250px] bg-gradient-to-br from-sky-200/30
       to-blue-200/20 rounded-full z-10 blur-xl"
      ></div>
    </div>
  );
};

export default BusinessWebsite;
