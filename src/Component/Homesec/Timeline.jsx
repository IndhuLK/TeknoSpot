import React from 'react'
import { TrophyIcon } from "@heroicons/react/24/solid";

const steps = [
    { id: 1, title: "Discover", desc: "Market research, brand positioning & audience analysis", position: "top" },
    { id: 2, title: "Strategize", desc: "Campaign blueprint aligned with business objectives", position: "bottom" },
    { id: 3, title: "Design & Develop", desc: "Crafting visuals, content, and user journeys", position: "top" },
    { id: 4, title: "Deploy", desc: "Launching across chosen platforms", position: "bottom" },
    { id: 5, title: "Analyze", desc: "Data‑driven performance tracking", position: "top" },
    { id: 6, title: "Optimize", desc: "Refining for better reach, results, and ROI", position: "bottom" },
  ];

const Timeline = () => {
  return (
    <div className="relative py-30 px-4 max-w-5xl mx-auto">
      {/* central line */}
      <div className="absolute inset-x-0 top-1/2 h-0.5 bg-pink-600" />

      {/* steps */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-y-8">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`
              relative
              flex flex-col items-center
              ${step.position === "top" ? "md:-translate-y-24" : "md:translate-y-24"}
            `}
          >
            {/* connector line from central axis */}
            <div
              className={`
                hidden md:block
                absolute
                ${step.position === "top" ? "top-full" : "bottom-full"}
                left-1/2 transform -translate-x-1/2
                w-px h-4 bg-pink-700
              `}
            />
            {/* card */}
            <div className="bg-white p-7 rounded-lg border border-gray-200 shadow-sm w-60">
              <h4 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r 
                from-pink-500 to-purple-600">#{step.id}</span> 
                <span className='text-black font-bold'> {step.title}</span></h4>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </div>
          </div>
        ))}

        {/* trophy icon at end */}
        <div className="absolute top-1/2 right-0 transform translate-y-[-50%]">
          <TrophyIcon className="w-8 h-8 text-yellow-400" />
        </div>
      </div>
    </div>
  )
}

export default Timeline