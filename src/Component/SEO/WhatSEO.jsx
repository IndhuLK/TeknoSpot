import React from "react";
import WSEO from "../../assets/SEO/WSEO.jpg";
import Ellipse from "../../assets/Images/Ellipsee.png";

const WhatSEO = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-center px-20 p-6 bg-white gap-10">
        {/* Left: Image and Icons */}
        <div className="relative w-full md:w-1/2">
          <img
            src={WSEO}
            alt="Developer"
            className="w-[500px] h-[450px] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2">
          <p className="w-15 h-1 space-y-4 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500  text-transparent mb-2"></p>
          <h2 className="text-4xl text-gray-800">
            What is
            <span className="font-bold text-black"> SEO</span>
          </h2>
          <h3 className="text-2xl font-semibold text-yellow-500 mt-4">
            Search Engine Optimization
          </h3>

          <p className="text-md leading-loose mt-4">
            Search Engine Optimization (SEO) enhances your website's presence on
            search engine results pages (SERPs) such as Google. A higher ranking
            attracts more visitors, which can lead to increased traffic,
            potential leads, and sales.
          </p>
          <p className="text-md leading-loose mt-4">
            Everyone aims for the top position in Google’s search results, and
            it’s easy to see why: the majority of users don’t venture beyond the
            first page. Achieving a higher rank fosters trust with your
            audience, lending credibility to your site and driving more traffic
            and conversions.
          </p>

          <p className="text-md leading-loose mt-4">
            As a leading SEO agency in Trichy, ImPossible Marketing employs
            effective white-hat techniques to elevate your business online. Our
            comprehensive, results-oriented approach includes thorough keyword
            research, content optimization, on-page SEO, off-page SEO, and
            technical SEO. If your objective is to enhance brand visibility,
            you’ve come to the right place — our SEO services are tailored
            specifically for that purpose.
          </p>
        </div>
      </div>
      {/*Image */}
      <div className="relative inset-0 flex justify-center items-center mt-10">
        <img src={Ellipse} alt="" className="absolute left-30 -mt-0 z-10" />
      </div>
    </div>
  );
};

export default WhatSEO;
