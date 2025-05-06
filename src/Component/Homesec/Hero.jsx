import React from "react";
import hero from "../../assets/Images/Hero.png";
import Ellipse from "../../assets/Images/Ellipsee.png";

const Hero = () => {
  return (
    <div className="overflow-hidden relative">
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-16">
        {/* Left Side Content */}
        <div className="max-w-lg text-left">
          <h1 className="text-4xl md:text-5xl leading-tight">
            Leading{" "}
            <span
              className="font-bold bg-gradient-to-b from-red-400 to-red-800 bg-clip-text
              text-transparent">
              Web Design
            </span>{" "}
            & <br />
            <span className="text-black font-bold ">Web Development</span>{" "}
            Company in <span className="font-bold bg-gradient-to-tr from-indigo-400 to-red-800 bg-clip-text
              text-transparent">Trichy</span>
          </h1>
          <p className="text-gray-600 mt-4 text-base/8  tracking-widest">
            Tekno Spot, Trichy is the best company for Web Design and Web
            Development that will be your Digital Transformation <br />Partner.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
            Get a Quote !
          </button>
        </div>

        {/* Right Side Image */}
        <div className="mt-10 md:mt-0">
          <img src={hero} alt="Working at desk" className="w-full max-w-md" />
        </div>
      </section>

      {/* Gradient Background Blur Effect at Bottom Left */}
      <div className="absolute -bottom-28 -left-28 w-[350px] h-[450px] bg-gradient-to-br from-sky-300/30
       to-pink-200/20 rounded-full -z-10 blur-xl"></div>

       {/*Image */}
       <div className="relative inset-0 flex justify-center items-center mt-20">
        <img src={Ellipse} alt="" className="absolute -mt-0 z-10"/>
       </div>
    </div>
  );
};

export default Hero;
