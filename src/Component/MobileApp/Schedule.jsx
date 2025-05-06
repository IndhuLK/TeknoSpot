import React from 'react'
import Call from '../../assets/MobileApplication/ScheduleCall.jpg'; 
import { PhoneCall } from 'lucide-react';

const Schedule = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${Call})`,
        minHeight: '450px',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-16 gap-10">
        {/* Left Text */}
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-semibold text-yellow-400 leading-relaxed">
            Find outstanding developers to meet  <br />your mobile app development <br /> requirements
          </h2>
        </div>

        {/* Right Card */}
        <div className="md:w-1/3 bg-white/20 backdrop-blur-md p-10 rounded-xl text-sm text-black shadow-lg leading-loose font-bold">
          <p>
          Schedule a meeting with our skilled mobile app developers to discuss your ideas and explore creative solutions that can boost both innovation and efficiency in your business.
          </p>

          <button className="mt-20 flex items-center bg-yellow-400 text-black font-semibold px-5 py-2 rounded-full hover:bg-yellow-500 transition duration-300">
            <PhoneCall className="w-4 h-4 mr-2" />
            Schedule a Call
          </button>
        </div>
      </div>
    </section>
  )
}

export default Schedule