import React from "react";
import Agency from "../../assets/SocialMM/Agency.jpg"

const MarketingAgen = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-20 py-5 bg-white">
      {/* Left Side - Text Content */}
      <div className="md:w-1/2 relative">
        {/* Gradient line at top */}
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 rounded-full mb-2 "></div>
        <h1 className="text-4xl ">
          Why work with
          <span className="font-bold leading-relaxed"> our Social Media Marketing agency in Trichy?
          </span>
        </h1>

        <p className="text-gray-700 text-base/8 -tracking-tight mt-10">
          Organic social media is a powerful way to enhance brand visibility
          within your marketing strategy. Why is this important? With 4.8
          billion social media users globally, a number that continues to grow,
          many of these individuals could become your customers. Share your
          products and services with a vast audience across major platforms like
          Facebook, Instagram, Youtube and LinkedIn
        </p>

        <p className="text-gray-700 text-base/8 -tracking-tight mt-5">
          At Tekno Spot, our dedicated social media professionals combine
          top-notch design with captivating copy to consistently engage your
          audience with dynamic content. We ensure that every post we create
          aligns with your business objectives, target demographic, unique value
          propositions, and visual storytelling.
        </p>

        {/* Gradient Background Blur Effect at Bottom Left */}
        <div
          className="absolute -bottom-28 -left-38 w-[400px] h-[400px] bg-gradient-to-br from-sky-300/30
               to-blue-200/20 rounded-full z-10 blur-xl"
        ></div>
      </div>

      {/* Right side - Image Section */}

      <div className="md:w-1/2 flex justify-center mt-22 md:mt">
        <div className="relative w-[500px] h-[400px] overflow-hidden">
          <img src={Agency} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default MarketingAgen;
