import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import WhychooseTekno from "../../assets/WebDevelopIMG/WhychooseTekno.png";
import { ImCheckmark } from "react-icons/im";

const WhyChooseTekno = () => {
  return (
    <div>
      <section className="relative bg-white py-12 px-4 md:px-20">
        {/* Blur effect on left corner */}
        <div className="absolute top-0 -left-20 w-[400px] h-[350px] bg-gradient-to-br from-sky-300/30 to-blue-300/20 rounded-full z-0 blur-3xl"></div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left side: Image + Text side-by-side */}
          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Image */}
            <img
              src={WhychooseTekno}
              alt="Illustration"
              className="w-48 h-auto object-contain mb-4 md:mb-0"
            />

            {/* Text Content */}
            <div>
              {/* Gradient line */}
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 rounded-full mb-4"></div>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 leading-relaxed">
                Why Choose{" "}
                <span className="font-bold text-black">Tekno Spot for Web</span>
                <span className="font-bold text-black">
                  {" "}
                  Application <br />
                  Development?
                </span>
              </h2>

              {/* Paragraph */}
              <p className="text-gray-600 mt-4 text-sm md:text-base">
                Tekno Spot merges extensive industry expertise with a commitment
                to technology and client requirements. Continue reading to
                discover why we are your top choice for web application
                development!
              </p>
            </div>
          </div>

          {/* Right side: Feature list */}
          <div className="flex justify-center items-start md:items-center">
            <div className="space-y-10 max-w-lg">
              {[
                "Affordable Strategy",
                "Varied Industry Expertise",
                "Technological Adaptability and Enhanced Skillset",
                "Performance and Framework Integration Focused Development",
                "Global Expertise & Unified Communication",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <ImCheckmark className="text-blue-600 mt-1" />
                  <p className="text-gray-800 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseTekno;
