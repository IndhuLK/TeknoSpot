import React from "react";
import User from "../../assets/SEO/PrioritizingUser.png";

const SEOPrioritizing = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-20 py-5 bg-white">
      {/* Left Side - Text Content */}
      <div className="md:w-1/2 relative">
        {/* Gradient line at top */}
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 rounded-full mb-2 "></div>
        <h1 className="text-4xl ">
          We Improve{" "}
          <span className="font-bold leading-relaxed">
            SEO by Prioritizing User Experience
          </span>
        </h1>

        <p className="text-gray-700 text-base/8 -tracking-tight mt-10">
          Search Engine Optimization (SEO) goes beyond merely achieving high
          rankings in search results. It focuses on providing the appropriate
          content to the right audience at the optimal moment. At Tekno Spot, we
          emphasize a user-first strategy, where our SEO experts develop
          user-focused plans to present relevant and precise information to your
          target audience. Combined with our skill in producing high-quality
          content that connects with users, we create a holistic SEO solution
          that enhances your website's visibility, builds user trust, and boosts
          engagement.
        </p>

        {/* Gradient Background Blur Effect at Bottom Left */}
        <div
          className="absolute -bottom-28 -left-28 w-[400px] h-[400px] bg-gradient-to-br from-sky-200/30
           to-blue-200/20 rounded-full z-10 blur-xl"
        ></div>
      </div>

      {/* Right side - Image Section */}

      <div className="md:w-1/2 flex justify-center mt-22 md:mt">
        <div className="relative w-[500px] h-[400px] overflow-hidden">
          <img src={User} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default SEOPrioritizing;
