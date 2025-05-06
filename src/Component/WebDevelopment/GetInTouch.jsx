import React from 'react'
import InTouch from '../../assets/WebDevelopIMG/InTouch.png'

const GetInTouch = () => {
  return (
    <section className="w-full px-6 py-1 bg-white flex flex-col lg:flex-row items-center justify-center gap-40 relative overflow-hidden">
      {/* Left content */}
      <div className=" z-20">
        <h2 className="text-xl sm:text-2xl text-yellow-500 font-semibold mb-2 leading-loose">
          Get in touch with us today or send an <br />email, <span className="text-xl sm:text-2xl font-bold text-black">
          and let's talk more about your project
        </span>
        </h2>
        
        <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition">
          Get a Quote !
        </button>
      </div>

      {/* Right side with form and character */}
      <div className="relative flex items-start">
        {/* Rotated Character Image */}
        <img
          src={InTouch}
          alt="3D Character"
          className="w-70 sm:w-42 md:w-90 absolute -left-42 top-1/2 -translate-y-1/2 rotate-[-27deg] z-10"
        />

        {/* Contact Form */}
        {/* Gradient Border Wrapper */}
        <div className="p-[2px] rounded-md bg-gradient-to-r from-yellow-400 via-gray-400 to-purple-500 shadow-3xl z-20 mb-10">
          {/* Actual Form */}
          <form className="w-[320px] sm:w-[400px] p-6 pt-8 rounded-md bg-white">
            <h3 className="text-lg font-bold text-center text-gradient bg-gradient-to-r from-yellow-500 to-gray-600 bg-clip-text text-transparent mb-6">
              Get In Touch With Us
            </h3>

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border-b border-gray-400 focus:outline-none py-2 mb-4"
            />
            <input
              type="text"
              placeholder="Mobile Number"
              className="w-full border-b border-gray-400 focus:outline-none py-2 mb-4"
            />
            <input
              type="email"
              placeholder="Email Id"
              className="w-full border-b border-gray-400 focus:outline-none py-2 mb-4"
            />
            <textarea
              placeholder="Message"
              className="w-full border-b border-gray-400 focus:outline-none py-2 mb-4 resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-white py-2 rounded-md font-semibold shadow"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default GetInTouch