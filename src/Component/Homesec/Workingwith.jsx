import React from "react";
import Ellipse from "../../assets/Images/Ellipsee.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,  Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Aaraniyam from "../../assets/Images/Aaraniyam.jpg";
import Rockfort from "../../assets/Images/Rockfort.png";
import UlavTech from "../../assets/Images/UlavTech.jpg";
import Joyfinance from "../../assets/Images/Joyfinance.png";
import Magil from "../../assets/Images/Magil.jpg";

const logos = [
  { id: 1, image: Aaraniyam, alt: "Aaranih Logo" },
  { id: 2, image: Rockfort, alt: "Rockfort Developers Logo" },
  { id: 3, image: UlavTech, alt: "UlavTech Logo" },
  { id: 4, image: Joyfinance, alt: "Joyfinance Logo" },
  { id: 5, image: Magil, alt: "Magil" },
];

const Workingwith = () => {
  return (
    <div className="w-full bg-white py-12 mt-10">
      <div className="container mx-auto relative">
        {/* Title Section */}
        <div className="text-left mb-8">
          <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mb-4"></div>
          <h2 className="text-3xl font-semibold text-gray-700">
            Meet the People
          </h2>
          <h1 className="text-3xl font-bold text-gray-900">
            We are Working With
          </h1>
        </div>

        {/* Custom Navigation Buttons */}
        <div className="absolute right-10 space-x-4 z-10">
          <button className="swiper-button-prev-custom bg-white hover:bg-blue-300  p-2 rounded-full border border-blue-400">
            <FaArrowLeft className="text-blue-700 hover:text-white" />
          </button>
          <button className="swiper-button-next-custom bg-white hover:bg-blue-300  hover:text-white p-2 rounded-full border border-blue-400">
            <FaArrowRight className="text-blue-700 hover:text-white" />
          </button>
        </div>

        {/* Animation Image */}
        <div className="place-items-center">
          <img src={Ellipse} alt=""  />
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="relative z-10 -mt-4 bg-white"
        >
          {logos.map((logo) => (
            <SwiperSlide key={logo.id}>
              <div className="flex flex-col items-center">
                <div className="w-[100px] h-[80px] sm:w-[120px] sm:h-[100px] flex items-center justify-center">
                  <img
                    src={logo.image}
                    alt={logo.alt}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Workingwith;
