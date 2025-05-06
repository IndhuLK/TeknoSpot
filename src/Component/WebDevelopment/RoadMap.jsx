
import React from "react";

const RoadMap = () => {
  const phases = [
    {
      id: 1,
      title: "Assessment: Analysis of Demand",
      color: "bg-red-500",
      position: "top",
      dotPosition: 5,
      dotColor: "bg-purple-700"
    },
    {
      id: 2,
      title: "Project Organization",
      color: "bg-green-600",
      position: "bottom",
      dotPosition: 10,
      dotColor: "bg-blue-500"
    },
    {
      id: 3,
      title: "Designing Architecture – UI/UX Design",
      color: "bg-green-600",
      position: "top",
      dotPosition: 15,
      dotColor: "bg-green-600"
    },
    {
      id: 4,
      title: "MVP or Proof of Concept (Upon Requirement)",
      color: "bg-blue-500",
      position: "bottom",
      dotPosition: 20,
      dotColor: "bg-orange-500"
    },
    {
      id: 5,
      title: "QA and Testing",
      color: "bg-blue-500",
      position: "top",
      dotPosition: 25,
      dotColor: "bg-blue-500"
    },
    {
      id: 6,
      title: "Launch the Application",
      color: "bg-red-500",
      position: "bottom",
      dotPosition: 30,
      dotColor: "bg-red-500"
    }
  ];

  // Create an array of 35 dots for the timeline
  const dots = Array.from({ length: 35 }, (_, i) => {
    // Find if this dot position has a phase
    const phaseWithDot = phases.find(phase => phase.dotPosition === i + 1);
    
    return {
      id: i + 1,
      hasPhase: !!phaseWithDot,
      color: phaseWithDot ? phaseWithDot.dotColor : "bg-gray-300"
    };
  });

  return (
    <section className="pt-10 pb- px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Gradient line at top */}
      <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mb-10 mx-auto"></div>
      
      <h2 className="text-center font-semibold mb-6">
        <span className="text-2xl sm:text-3xl">Our Web </span>
        <span className="text-2xl sm:text-3xl font-bold">Application Development Road Map</span>
      </h2>
      
      <p className="text-center text-gray-700 max-w-4xl mx-auto mb-50 px-4">
        We organize the process to guarantee outstanding quality at each phase, starting from the initial idea all the way to the final launch. 
        Our approach emphasizes meticulous attention to every detail of development, backed by our expertise.
      </p>
      
      {/* Mobile version - stacked list for small screens */}
      <div className="md:hidden space-y-6 mb-10">
        {phases.map((phase) => (
          <div key={phase.id} className={`${phase.color} text-white p-4 rounded-lg flex items-center`}>
            <div className={`${phase.dotColor} w-8 h-8 rounded-full mr-4 flex-shrink-0 flex items-center justify-center text-sm font-bold text-white`}>
              {phase.id}
            </div>
            <span className="text-sm font-medium">{phase.title}</span>
          </div>
        ))}
      </div>
      
      {/* Road map visualization - desktop version */}
      <div className="relative min-h-[400px] mb-1 hidden md:block">
        
        
        {/* Timeline dots */}
        <div className="flex justify-between items-center relative">
          {dots.map(dot => (
            <div 
              key={dot.id} 
              className={`w-5 h-5 rounded-full ${dot.color} z-10 ${dot.hasPhase ? 'relative' : ''}`}
            >
              {dot.hasPhase && (
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-bold text-white">
                  {phases.find(phase => phase.dotPosition === dot.id)?.id}
                </span>
              )}
            </div>
          ))}
        </div>
        
        {/* Phases display with connecting lines and content boxes */}
        <div className="absolute top-0 left-0 right-0 bottom-0">
          {phases.map(phase => {
            // Calculate position along the timeline (percentage)
            const position = ((phase.dotPosition - 1) / 34) * 100;
            
            return (
              <div 
                key={phase.id} 
                className="absolute" 
                style={{ 
                  left: `${position}%`, 
                  top: phase.position === "top" ? "-160px" : "60px",
                  transform: "translateX(-50%)"
                }}
              >
                {/* Vertical connecting line */}
                <div 
                  className={`absolute left-1/2 w-px ${phase.dotColor}`} 
                  style={{
                    top: phase.position === "top" ? "100%" : "-60px", 
                    height: phase.position === "top" ? "80px" : "60px"
                  }}
                ></div>
                
                {/* Content box */}
                <div 
                  className={`${phase.color} text-white px-6 py-4 rounded-lg text-sm sm:text-base font-medium relative w-[220px] sm:w-[250px]`}
                >
                  {phase.title}
                  
                  {/* Three dots decoration */}
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex gap-0.5">
                    <div className="bg-white opacity-80 w-1 h-1 rounded-full"></div>
                    <div className="bg-white opacity-80 w-1 h-1 rounded-full"></div>
                    <div className="bg-white opacity-80 w-1 h-1 rounded-full"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RoadMap;

