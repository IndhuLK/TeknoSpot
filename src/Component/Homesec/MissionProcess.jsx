import React from "react";
import Ellipse from "../../assets/Images/Ellipsee.png";
import Mission from "../../assets/Images/Mission.jpg";

const MissionProcess = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-10 py-5 bg-white">
      {/* Left Side - Text Content */}
      <div className="md:w-1/2">
        <p
          className="w-15 h-1 space-y-4 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500
              text-transparent mb-4"
        ></p>
        <h2 className="text-3xl md:text-4xl text-gray-900 mb-8">
          Your <span className="font-bold">Mission </span>our
          <span className="font-bold"> Vision </span>
          <br />
          Process
        </h2>

        <p className="text-lg text-yellow-500 font-semibold mb-2">
          Our Best Digital Marketing services in Trichy, that increase your business growth.

        </p>
        <p className="text-gray-700 text-base/8 -tracking-tight">
          Average Digital Marketing doesn’t work – You need an experienced
          growth partner who knows what it takes to help your business grow!
          <p className="text-gray-700 text-base/8 tracking-widest ">
          With over milestones of success, we have refined our process to ensure
          your digital marketing campaigns are successful. In addition, we take
          the time to understand your business model, challenges, goals, and
          audience behaviors. Our Digital Marketing Agency creates a tailor-made
          strategy that captures attention and delivers real, measurable, and
          profitable results.</p>
        </p>
      </div>

      {/*Image */}
      <div className="relative inset-0 ">
        <img src={Ellipse} alt="" className="absolute -mt-0 z-10"/>
      </div>

      {/* Image Section */}

      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <div className="relative w-[500px] h-[350px] rounded-xl overflow-hidden shadow-lg">
          <img src={Mission} alt="" className="w-full h-full object-cover"/>
        </div>
      </div>

      
    </div>
  );
};

export default MissionProcess;
