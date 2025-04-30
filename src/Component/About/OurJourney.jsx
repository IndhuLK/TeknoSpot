import React from "react";
import ourjourn from "../../assets/Aboutimage/ourjourn.png";
import Ellipse from "../../assets/Images/Ellipsee.png";

const OurJourney = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="text-center mt-10">
        <p className="text-3xl font-semibold">
          Our Journey —
          <span className="font-bold bg-gradient-to-r from-blue-700 via-purple-600 to-pink-700 bg-clip-text text-transparent">
            {" "}
            Driven by Vision, Defined by Results
          </span>
        </p>
      </div>

      {/*Main content */}
      <div className="relative min-h-screen flex flex-col justify-center items-center px-6  overflow-hidden">
        <div className="relative z-10 max-w-7xl w-full bg-white/80 backdrop-blur-md p-8 md:p-16 flex flex-col md:flex-row items-center gap-10">
          {/*left image */}
          <div className="md:w-1/2 flex justify-center mt-22 md:mt-0">
            <div className="relative w-full max-w-[400px] h-full  rounded-xl overflow-hidden">
              <img
                src={ourjourn}
                alt=""
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Blurred Background Gradient Effect */}
          <div className="absolute inset-0 z-0 flex items-center justify-center">
            <div
              className="w-[600px] h-[400px] bg-gradient-to-br from-sky-200/30
       to-blue-200/20 rounded-full blur-3xl"
            ></div>
            <div className=""></div>
          </div>

          {/* Right side -  Text content  */}

          <div className="md:w-1/2 mb-10 py-3">
            <p
              className="w-15 h-1 space-y-4 bg-gradient-to-r from-pink-500 to-purple-600
              text-transparent "
            ></p>
            <h2 className="text-3xl font-bold mt-2">Our Core Values</h2>
            <p className="text-lg text-yellow-500 font-semibold mb-2 mt-5">
              Consistency in Every Project, Values in Every Step
            </p>
            <p className="text-gray-700 text-base/8 -tracking-tight mt-5">
              One thing never changes, even if each project we take on is
              different: our dedication to our fundamental values. These
              principles form the foundation of our client-centered strategy.
              Exceptional service and significant results will be assured when
              we continuously live up to our vision, mission, and promise.
            </p>
          </div>
        </div>
      </div>
      {/*Image */}
      <div className="relative inset-0 flex justify-center items-center mt-10">
        <img src={Ellipse} alt="" className="absolute left-30 -mt-0 z-10" />
      </div>
    </div>
  );
};

export default OurJourney;
