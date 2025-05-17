import React from 'react'

const ContactSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-200  to-[#B0D49F] px-6 py-12">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Section - Text */}
        <div className="space-y-6">
          <h2 className="text-4xl leading-relaxed">
            <span className="text-black font-bold">Hire Our</span>{" "}
            <span className="text-gray-700 ">Mobile App Development</span> <br />
            <span className="text-black font-bold">Company in Trichy</span>
          </h2>
          <p className="text-sm text-gray-600">
            Consider partnering with Talent Spot, a leading mobile app development company in Trichy. <br />
            We offer tailored solutions designed to elevate your business. Our team of local experts<br />
            utilizes cutting-edge technologies to develop modern and efficient applications that align<br />
            perfectly with your specific business needs, ensuring both effectiveness and sustainability.
          </p>
          <button className="px-6 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition">
            Let's Connect
          </button>
        </div>

        {/* Right Section - Form */}
        {/* Gradient Border Wrapper */}
        <div className=" p-[2px] rounded-2xl bg-gradient-to-r from-purple-500 via-gray-400 to-yellow-400 shadow-3xl z-20 mb-10">
        <div className="bg-white rounded-2xl shadow-lg p-8 ">
          <h3 className="text-center text-xl font-bold text-gradient bg-gradient-to-r from-amber-500 to-blue-500 text-transparent bg-clip-text mb-6">
            Get In Touch With Us
          </h3>
          <form className="space-y-4 ">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border-b border-gray-300 focus:outline-none py-2"
            />
            <input
              type="text"
              placeholder="Mobile Number"
              className="w-full border-b border-gray-300 focus:outline-none py-2"
            />
            <input
              type="email"
              placeholder="Email Id"
              className="w-full border-b border-gray-300 focus:outline-none py-2"
            />
            <textarea
              placeholder="Message"
              className="w-full border-b border-gray-300 focus:outline-none py-2"
              rows="3"
            ></textarea>
            <div className="text-center mt-4">
              <button
                type="submit"
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold px-6 py-2 rounded shadow hover:opacity-90 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection