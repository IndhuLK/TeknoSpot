import React from "react";
import BusinessDesign from "../../assets/Services/BusinessDesign.png";

const BusinessWebsite = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 py-20 bg-white relative overflow-visible">
      {/* Left Text Section */}
      <div className="md:w-1/2 mb-10 md:mb-0 p-10">
        <h2 className="text-xl md:text-3xl  text-gray-800 tracking-wide ml-5 mb-2">
          Are you ready{" "}
          <span className="text-black font-bold">to create an amazing</span>
          <br />
          <span className="text-black font-bold">
            website for your business?
          </span>
        </h2>
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

      {/* Right Section: Image behind, form card over it */}
<div className="relative md:w-1/2 max-w-md mt-10 md:mt-1">
  
  {/* 👩‍💻 Person image - background */}
  <img
    src={BusinessDesign}
    alt="Support specialist"
    className="absolute -top-30 right-0 w-full h-auto z-10"
  />

  {/* 💬 White Contact Form Card - OVER the image */}
  <div className="relative bg-white rounded-xl shadow-xl p-8 z-20 border border-gray-200 mt-20">
    <h2 className="text-xl font-semibold text-center text-gradient bg-gradient-to-r from-yellow-500 to-blue-600 text-transparent bg-clip-text mb-6">
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
        className="bg-yellow-400 px-6 py-2 rounded shadow-md font-semibold hover:bg-yellow-500 w-full"
      >
        Submit
      </button>
    </form>
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
