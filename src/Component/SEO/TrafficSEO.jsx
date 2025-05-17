import React from "react";
import Boost from "../../assets/SEO/BoostSEO.jpg";

const TrafficSEO = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${Boost})`,
        minHeight: "450px",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Centered Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-[#FFC107] text-3xl md:text-4xl font-bold mb-6">
          Increase Your Traffic and Revenue with Our Expert <br /> SEO Services
        </h1>

        <div className="bg-white/1 backdrop-blur-md p-6 md:p-8 rounded-xl text-sm text-white shadow-lg max-w-xl">
          <p className="mb-6">
            Set up a meeting to explore how our services can turn <br />your search
            capabilities into a powerful revenue engine
          </p>
          <button className="bg-yellow-400 cursor-pointer text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-500 transition duration-300">
            Boost Your SEO Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrafficSEO;
