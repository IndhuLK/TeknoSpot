import React from "react";

const LocalGlobalSEO = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-20 py-10">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Section - Text */}
        {/* Gradient Border Wrapper */}
        <div className=" p-[2px] rounded-2xl bg-gradient-to-r from-purple-500 via-gray-400 to-yellow-400 shadow-3xl z-20 mb-10">
          <div className="bg-white rounded-2xl shadow-2xl p-8 ">
            <h3 className="text-center text-xl font-bold text-gradient bg-gradient-to-r from-yellow-500 to-blue-500 text-transparent bg-clip-text mb-6">
              Tell Us About Yourself to Get Started
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

        {/* Right Section - Form */}
        <div className="space-y-10 mb-10">
          <h2 className="text-2xl leading-loose">
           <span className="font-semibold"> No matter if you operate a small business or a large corporation,
            our SEO services in Trichy— </span><br />
            <span className="text-yellow-500"> both local and global—can provide
            enduring benefits and help maintain your competitive edge</span>
          </h2>

          <button className="px-6 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition">
            Book A Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocalGlobalSEO;
