import React from 'react'
import Ellipse from "../../assets/Images/Ellipsee.png";

const timelineItems = [
    {
      id: "01",
      title: "Excellent Web Design",
      desc: "We create excellent website designs which are not only visually appealing but also extremely conversion focused.",
      side: "right",
    },
    {
      id: "02",
      title: "Speed Enhancement",
      desc: "The work we do on websites will all load lightning-fast (less than two seconds), so you are never going to lose a client or visitor because of a slow website.",
      side: "left",
    },
    {
      id: "03",
      title: "Easy and Fast Approach",
      desc: "Your new live website will be ready for you without any challenges or difficulties because of our smooth web design and development process.",
      side: "right",
    },
    {
      id: "04",
      title: "Structure with SEO Optimization",
      desc: "All of our websites are optimized to have an ideal on-page SEO structure that is consistent with the most recent 2025 SEO trends.",
      side: "left",
    },
    {
      id: "05",
      title: "Constantly Ready to assist",
      desc: "Our team will be able assist you with any follow-up updates and additional support once the project is completed.",
      side: "right",
    },
  ];

const TeknoSpotTimeline = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="bg-gray-50 px-6 py-12 pb-20 relative">
        {/* Header */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <div className="flex justify-center mb-1">
            <div className="w-10 h-1 text-transparent  bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 mb-2"></div>
          </div>
          <p className="text-sm text-black mt-2">Why Tekno Spot for Web Designing?</p>
          <h2 className="text-3xl font-bold mt-3">Top Web Designing Company in Trichy</h2>
          <p className="text-yellow-500 mt-4 font-semibold text-sm">
            Understand the factors that make Tekno Spot the best web design company you've been looking for.
          </p>
        </div>

        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-[135vh] w-0.5 bg-yellow-400 z-0" />

        {/* Timeline Items */}
        <div className="relative z-10 max-w-6xl mx-auto">
          {timelineItems.map((item) => (
            <div
              key={item.id}
              className={`relative mb-12 ${
                item.side === 'left' ? 'flex flex-row-reverse' : 'flex'
              }`}
            >
              {/* Timeline Card */}
              <div className="w-1/2 px-4">
                <div className="bg-white border border-gray-100 p-6 rounded-lg shadow-sm text-left">
                  <div className="flex items-baseline gap-2">
                    <span className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                      {item.id}
                    </span>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
                </div>
              </div>

              {/* Horizontal Line with Dot */}
              <div className="w-[10%] flex items-center justify-center relative">
                {item.side === 'left' ? (
                  <div className="h-0.5 w-1/2 bg-yellow-400 absolute right-0"></div>
                ) : (
                  <div className="h-0.5 w-1/2 bg-yellow-400 absolute left-0"></div>
                )}
                <div className="absolute w-3 h-3 bg-yellow-400 rounded-full"></div>
              </div>

              {/* Empty space for the other half */}
              <div className="w-1/2"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Image */}
      <div className="relative -mt-[30px] flex justify-start -z-10 px-50">
        <img src={Ellipse} alt="Timeline Background" className="opacity-100" />
      </div>
    </div>
  )
}

export default TeknoSpotTimeline