import React from 'react'
import Sector from "../../assets/MobileApplication/Sector.png"

const sectors = [
  { id: 1, name: "Real Estate", color: "bg-yellow-500" },
  { id: 2, name: "Healthcare", color: "bg-green-500" },
  { id: 3, name: "Education", color: "bg-blue-500" },
  { id: 4, name: "Grocery", color: "bg-red-500" },
  { id: 5, name: "Fitness", color: "bg-pink-500" },
  { id: 6, name: "E-Commerce", color: "bg-blue-400" },
  { id: 7, name: "Manufacturing", color: "bg-green-600" },
  { id: 8, name: "FPO", color: "bg-yellow-500" },
];

const SectorDispaly = () => {

  const radius = 150;
  const centerX = 200;
  const centerY = 200;
  return (
    <div className="text-center my-12">
      {/* Gradient line at top */}
          <div className="w-25 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mb-10 mx-auto"></div>
      <h2 className="text-xl md:text-4xl font-semibold">
        Sectors <span className="font-bold">We Collaborate With</span>
      </h2>

      <div className="relative w-full max-w-[400px] aspect-square mx-auto mt-10">
        {/* SVG lines */}
        <svg className="absolute inset-0 w-full h-full z-0">
          {sectors.map((_, index) => {
            const angle = Math.PI * (index / (sectors.length - 1)); // 0 to 180 deg
            const x = centerX + radius * Math.cos(angle);
            const y = centerY - radius * Math.sin(angle);
            return (
              <line
                key={index}
                x1={centerX}
                y1={centerY}
                x2={x}
                y2={y}
                stroke="#CBD5E0"
                strokeWidth="1.5"
              />
            );
          })}
        </svg>

        {/* Center image */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 flex items-center justify-center z-10 ">
          <div className="w-46 h-46 items-center justify-center">
             <img src={Sector} alt="" className=''/>
          </div>
        </div>

        {/* Sector nodes */}
        {sectors.map((sector, index) => {
             const radius = 150;
          const angle = Math.PI * (index / (sectors.length - 1));
          const x = centerX + radius * Math.cos(angle);
          const y = centerY - radius * Math.sin(angle);

          return (
            <div
              key={sector.id}
              className="absolute text-center transform -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${x}px`, top: `${y}px` }}
            >
              <div
                className={`w-10 h-10 md:w-12 md:h-12 ${sector.color} rounded-full flex items-center justify-center text-white font-bold shadow-md`}
              >
                {sector.id}
              </div>
              <div className="text-xs -mt-15">{sector.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};




export default SectorDispaly