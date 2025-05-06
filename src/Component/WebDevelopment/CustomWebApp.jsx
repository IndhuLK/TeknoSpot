import React from 'react'
import CustomWeb from '../../assets/WebDevelopIMG/CustomWeb.jpg'
import Ellipse from "../../assets/Images/Ellipsee.png";

const CustomWebApp = () => {
  return (
    <div className="relative overflow-hidden">
    <div className="flex flex-col md:flex-row items-center justify-center px-20 p-6 bg-white gap-10">
      
      {/* Left: Image and Icons */}
      <div className="relative w-full md:w-1/2">
        <img 
          src={CustomWeb}
          alt="Developer" 
          className="w-[500px] h-[450px] object-cover rounded-lg border-6 border-[#005389] border-t-[10px] border-b-[10px] border-l-[6px] border-r-[6px] shadow-md"
        />
        
      </div>

      {/* Right: Text Content */}
      <div className="w-full md:w-1/2">
      <p className="w-15 h-1 space-y-4 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500  text-transparent mb-4"></p>
        <h2 className="text-4xl text-gray-800">Custom <span className="font-bold text-black">Web Application</span></h2>
        <h3 className="text-4xl font-bold text-black mt-2">Development</h3>

        <ul className="list-disc list-inside mt-6 text-gray-900 space-y-3 font-semibold leading-loose">
          <li>Online Marketplace Platforms</li>
          <li>Event Ticketing Platforms</li>
          <li>Business Directory and Listing Sites</li>
          <li>Multilingual Websites</li>
          <li>LMS Applications</li>
          <li>Website with Subscription Models</li>
          <li>ERP System for Small Businesses</li>
        </ul>
      </div>
    </div>
    {/*Image */}
          <div className="relative inset-0 flex justify-center items-center mt-10">
            <img src={Ellipse} alt="" className="absolute left-30 -mt-0 z-10" />
          </div>
          </div>
  )
}

export default CustomWebApp