import React from "react";
import RightC from '../../assets/MobileApplication/RightC.jpg'


const timelineData = [
  {
    id: "01",
    title: "Personalized Choices",
    desc: "As a dedicated mobile app development agency based in Trichy, we offer tailored solutions that include distinctive features to meet your needs.",
    side: "left"
  },
  {
    id: "02",
    title: "Innovative Marketing Approaches",
    desc: "We are committed to delivering the most effective marketing strategies that can grow alongside your esteemed business.",
    side: "right"
  },
  {
    id: "03",
    title: "Dynamic Code",
    desc: "Our codes are designed to be lightweight, but they possess a surprising strength that challenges the typical perceptions of what lightweight codes can achieve.",
    side: "left"
  },
  {
    id: "04",
    title: "Flawless Applications",
    desc: "Once the app is launched, we prioritize regular updates and actively engage with the community that forms around it.",
    side: "right"
  },
];

const RightChoice = () => {
  return (
    <div className="px-6 md:px-20 py-12 bg-white">
      {/* Section Title */}
      <p className="w-14 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mb-3"></p>
      <h2 className="text-2xl md:text-3xl text-gray-900 mb-10 leading-snug">
        What makes{" "}
        <span className="font-bold">
          Tekno Spot the right choice <br className="hidden md:block" />
          for digitizing
        </span>{" "}
        your product?
      </h2>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Left - Image */}
        <div className="md:w-1/2">
          <img
            src={RightC}
            alt="Right Choice"
            className="w-full max-h-[350px] rounded-lg object-cover shadow-md"
          />
        </div>

        {/* Right - Timeline */}
        <div className="md:w-1/2 relative">
          <div className="relative flex flex-col items-center">
            {/* Center Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-purple-700 via-purple-500 to-purple-900 z-0"></div>

            {timelineData.map((item, index) => (
              <div
                key={index}
                className="w-full flex mb-6 items-center justify-between relative"
              >
                {item.side === "left" && (
                  <>
                    {/* Left card */}
                    <div className="w-[45%] text-left pr-3 z-10">
                      <div className="bg-white border border-gray-200 p-3 rounded-md shadow-sm text-sm">
                        <h3 className="font-bold text-lg bg-gradient-to-r from-pink-500 to-purple-700 text-transparent bg-clip-text">
                          #{item.id} {item.title}
                        </h3>
                        <p className="text-xs text-gray-600 mt-1">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {/* Connector line to center */}
                    <div className="w-[10%] h-[2px] bg-purple-600 -ml-15"></div>

                    {/* Spacer */}
                    <div className="w-[45%]"></div>
                  </>
                )}

                {item.side === "right" && (
                  <>
                    {/* Spacer */}
                    <div className="w-[45%]"></div>

                    {/* Connector line to center */}
                    <div className="w-[10%] h-[2px] bg-purple-600 -mr-15"></div>

                    {/* Right card */}
                    <div className="w-[45%] text-left pl-3 z-10">
                      <div className="bg-white border border-gray-200 p-3 rounded-md shadow-sm text-sm">
                        <h3 className="font-bold text-lg bg-gradient-to-r from-pink-500 to-purple-700 text-transparent bg-clip-text">
                          #{item.id} {item.title}
                        </h3>
                        <p className="text-xs text-gray-600 mt-1">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightChoice;
