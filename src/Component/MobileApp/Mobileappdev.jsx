import React from 'react'
import AppDevelop from '../../assets/MobileApplication/AppDevelop.png'

const Mobileappdev = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-4 md:px-20 py-16 overflow-hidden">
      {/* Background Circle Effects */}
      
      
      {/* Left Side Content */}
      <div className="md:w-1/2 z-10">
        <div className="max-w-lg text-left">
          <h1 className="text-3xl md:text-4xl leading-relaxed">
            <span className="font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Mobile App Development
            </span>{" "}
            Company in Trichy
          </h1>
          <p className="text-gray-600 mt-6 text-base leading-relaxed tracking-wide">
            Circle Design stands out as the Leading Mobile App Development Company in Trichy. 
            We excel in crafting exceptional mobile app solutions that deliver impressive outcomes. 
            As the preferred choice for clients across India, we prioritize customer satisfaction, 
            employing a strategic app development approach and a committed team to create 
            captivating apps that enhance your business's digital presence.
          </p>
          <button className="mt-8 group flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition duration-300">
            SPEAK TO AN EXPERT
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center z-10">
        <div className="relative">
          {/* Base circle */}
          <div className="absolute -bottom-14 w-[500px] h-[250px] bg-amber-500/50 rounded-full left-1/2 -translate-x-1/2 mb-10"></div>
          
          <img 
            src={AppDevelop} 
            alt="Mobile App Development" 
            className="w-full max-w-md relative z-10"
          />
        </div>
      </div>
    </section>
  )
}

export default Mobileappdev