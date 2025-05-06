import React from 'react'
import img1 from '../../assets/MobileApplication/img1.jpg';
import img2 from '../../assets/MobileApplication/img2.jpg';
import img3 from '../../assets/MobileApplication/img3.jpg';
import img4 from '../../assets/MobileApplication/img4.jpg';
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from 'lucide-react';


const images = [img1, img2, img3, img4];

const AppOpportunities = () => {

    const sliderRef = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // disable default arrows
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      }
    ]
  };

  return (
    <section className="py-16 px-4 md:px-20 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-4">
        How Mobile Apps Can Boost Your Business Opportunities
      </h2>
      <p className="text-center text-amber-500 mb-8">
        Mobile app development solutions offer a wide range of advantages for businesses in different sectors. Here are some of the main benefits
      </p>

      <Slider ref={sliderRef} {...settings} className="relative">
        {images.map((img, index) => (
          <div key={index} className="px-2">
            <img src={img} alt={`Slide ${index}`} className="rounded-lg w-full h-60 object-cover" />
          </div>
        ))}
      </Slider>

      {/* Custom Arrows */}
      <div className="flex justify-center mt-4 gap-6">
        <button onClick={() => sliderRef.current.slickPrev()} className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full">
          <ArrowLeft size={20} />
        </button>
        <button onClick={() => sliderRef.current.slickNext()} className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full">
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  )
}

export default AppOpportunities