import React from 'react'
import Hero from "./Hero"
import Service from './Service'
import BestWebDesign from './BestWebDesign'
import Workingwith from './Workingwith'
import Testimonial from './Testimonial'
import Featuredservice from './Featuredservice'
import MissionProcess from './MissionProcess'
import Timeline from './Timeline'
import bg from "../../assets/Images/Bg.png";

const Home = () => {
  return (
    <div>
      {/* Background Image */}
      <div className="absolute top-0 right-0 w-1/2 h-auto -z-10">
        <img src={bg} alt="Background" className="w-full h-screen object-fit" />
      </div>
        <Hero /> 
        <Service />
        <BestWebDesign />
        <Workingwith />
        <Testimonial />
        <Featuredservice />
        <MissionProcess/>
        <Timeline />
    </div>
  )
}

export default Home