import React from "react";

const advantages = [
    { title: "Fin-Tech Application Development", color: "blue" },
    { title: "Non-Profit Application Development", color: "green" },
    { title: "FPO Application Development", color: "blue" },
    { title: "E-Commerce Application Development", color: "green" },
    { title: "Retail Business Application Development", color: "blue" },
    { title: "Educational Institutional Application Development", color: "green" },
    { title: "Real Estate Application Development", color: "blue" },
    { title: "Healthcare Application Development", color: "green" }
  ];

const WebSolution = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 text-gray-800">
      <div className="text-center mb-12">
        {/* Gradient line at top */}
      <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 rounded-full mb-10 mx-auto"></div>
        <h2 className="text-3xl font-bold mb-2">
          Our <span className="text-black">Customizing Web Solutions across Sectors</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
        {advantages.map((advantage, index) => {
          if (advantage.color === "blue") {
            // Blue card layout
            return (
              <div key={index} className="relative w-full h-24">
                {/* Blue background layer */}
                <div className="absolute -top-4 left-4 w-full h-full rounded-lg bg-blue-500 -z-10"></div>
                
                {/* Foreground white card */}
                <div className="bg-white rounded-lg shadow-md h-full flex items-center p-4 relative z-10">
                  <p className="text-base font-medium leading-snug">{advantage.title}</p>
                </div>
              </div>
            );
          } else {
            // Green card layout
            return (
              <div key={index} className="relative w-full h-24">
                {/* Green background layer */}
                <div className="absolute top-4 left-4 w-full h-full rounded-lg bg-green-600 -z-10"></div>

                {/* Foreground white card */}
                <div className="bg-white rounded-lg shadow-md h-full flex items-center p-4 relative z-0">
                  <p className="text-base font-medium leading-snug">{advantage.title}</p>
                </div>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};

export default WebSolution;
