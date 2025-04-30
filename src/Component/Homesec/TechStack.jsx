import React from "react";
import node from "../../assets/Images/NodeJS.png";
import php from "../../assets/Images/PHP.png";
import mysql from "../../assets/Images/Mysql.png";
import java from "../../assets/Images/Java.png";
import dotnet from "../../assets/Images/NETCore.png";
import python from "../../assets/Images/Python.png";
import rails from "../../assets/Images/RubyOnRails.png";
import golang from "../../assets/Images/Go.png";
import mongodb from "../../assets/Images/mon.png";

const techLogos = [
  { src: node, alt: "NodeJS" },
  { src: php, alt: "PHP" },
  { src: mysql, alt: "MySQL" },
  { src: java, alt: "Java" },
  { src: dotnet, alt: ".NET Core" },
  { src: python, alt: "Python" },
  { src: rails, alt: "Rails" },
  { src: golang, alt: "Go" },
  { src: mongodb, alt: "MongoDB" },
];

const TechStack = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-16">
      <div className="text-center mb-12 text-base/8">
        <p
          className="w-16 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mb-4 
            place-self-center"
        ></p>
        <h1 className="text-3xl">
          Our <br />
          <span className="font-bold">Tech Stack</span>
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 px-4">
        {["Backend", "Frontend", "Database"].map((label, index) => (
          <p
            key={index}
            className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-800  
      hover:from-purple-900 hover:to-pink-600 transition duration-300 relative inline-block group"
          >
            <span className="group-hover:after:w-1/2 after:content-[''] after:block after:w-0 after:h-[3px] after:bg-gradient-to-r after:from-pink-500 after:to-purple-600 after:transition-all after:duration-300 after:mx-auto">
              {label}
            </span>
          </p>
        ))}
      </div>
      <div className="py-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center">
          {techLogos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="w-40 h-auto hover:scale-110 transition-transform duration-300"
            />
          ))}
        </div>
      </div>
      <hr className="bg-gray-400 mt-10"/>
    </div>
  );
};

export default TechStack;
