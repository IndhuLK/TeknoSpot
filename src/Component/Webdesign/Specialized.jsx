import React from 'react'
import htmlIcon from "../../assets/Services/HTML.png";
import cssIcon from "../../assets/Services/CSS.png";
import jsIcon from "../../assets/Services/JS.png";
import reactIcon from "../../assets/Services/ReactJS.png";
import tailwindIcon from "../../assets/Services/Tailwindcss.png";
import wordpressIcon from "../../assets/Services/WordPress.png";
import bootstrapIcon from "../../assets/Services/Bootstrap.png";

const Specialized = () => {

    const technologies = [
        { name: "HTML", icon: htmlIcon },
        { name: "CSS", icon: cssIcon },
        { name: "JavaScript", icon: jsIcon },
        { name: "React JS", icon: reactIcon },
        { name: "Tailwind CSS", icon: tailwindIcon },
        { name: "WordPress", icon: wordpressIcon },
        { name: "Bootstrap", icon: bootstrapIcon },
      ]; 

  return (
    <div className="py-12 px-4 text-center">
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 place-self-center mb-4"></div>
      <div className="mb-10">
        <p className="text-gray-700 font-light text-4xl mb-1">We are</p>
        <h2 className="text-4xl font-bold text-black">
          <span className=" pb-1">Specialized in</span>
        </h2>
      </div>

      {/* First row - 4 items */}
      <div className="flex justify-center flex-wrap gap-12 mb-10">
  {technologies.slice(0, 4).map((tech, index) => (
    <div key={index} className="flex flex-col items-center">
      <img
        src={tech.icon}
        alt={tech.name}
        className="w-64 h-24 object-contain"
      />
    </div>
  ))}
</div>

{/* Second row - 3 items */}
<div className="flex justify-center flex-wrap gap-12">
  {technologies.slice(4).map((tech, index) => (
    <div key={index + 4} className="flex flex-col items-center">
      <img
        src={tech.icon}
        alt={tech.name}
        className="w-64 h-24 object-contain"
      />
    </div>
  ))}
</div>
    </div>
  )
}

export default Specialized