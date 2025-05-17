import React from 'react'
import ExpertImage from "../../assets/Aboutimage/Call.png";

const CallUs = () => {
  return (
    <div className="relative bg-gradient-to-r from-yellow-200 to-green-300 rounded-lg my-40 mx-4 md:mx-16 flex items-center justify-between p-6 md:p-10">
      
      {/* Left Section */}
      <div className=" relative z-10 flex flex-col space-y-4 max-w-lg">
        <h2 className="text-xl md:text-3xl font-normal text-black">
          Ready to <span className="font-bold">speak to an expert?</span>
        </h2>

        <div className="gap-4 flex">
          <p className="font-bold mt-1 text-xl">Please Call Us</p>

          <a
            href="tel:+917604921773"
            className="inline-flex items-center bg-gradient-to-r from-[#4F46E5] to-[#8B5CF6] text-white px-4 py-2 rounded-md text-sm shadow hover:shadow-lg transition-all duration-300"
          >
            {/* SVG Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            +91-76049 21773
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="absolute right-0 text-center bottom-0 z-20 hidden md:block">
        <img
          src={ExpertImage}
          alt="Speak to Expert"
          className="max-w-[350px] h-[350px] object-contain block mx-auto transform -translate-y-"
        />
      </div>

    </div>
  )
}

export default CallUs