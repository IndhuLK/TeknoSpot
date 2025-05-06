import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Ellipse from "../../assets/Images/Ellipsee.png";
import group from "../../assets/Images/Group.png";

const slides = [
  {
    title: "Web Development",
    description: "Tekno Spot, a leading web development company in trichy, specializes in building dynamic and innovative online solutions. From user-friendly online stores to comprehensive management systems, we deliver high-performing, well-executed projects tailored to drive digital success.",
    icon: group,
  },
  {
    title: "Web Design",
    description: "Each website we create is perfectly crafted to deliver a 100% unique online experience tailored to your brand. Our expert web designers in trichy, transform your vision into a dynamic, custom web design that enhances your brand's visibility, boosts engagement, and drives conversions. With us, your website design will not only stand out but also connect deeply with your audience.",
    icon: group,
  },
  {
    title: "Website Redesign",
    description: "Whether your website design needs a refresh or a complete website fix up, we analyze your site's pain points and opportunities to revitalize your digital presence. Our expert web designers will breathe new life into your website, enhancing its functionality, user experience. The result? A modern, dynamic site that drives increased traffic and bolsters your industry reputation.",
    icon: group,
  },
  {
    title: "Search Engine Optimization",
    description: "We offer a comprehensive range of services designed to boost your website's ranking and attract organic, non-paid google search traffic. Our team can conduct a thorough SEO audit of your website, providing actionable insights and strategies to enhance your organic reach and visibility on search engines.",
    icon: group,
  },
];

const Service = () => {
  return (
    <div className="relative overflow-hidden">
    <div className="w-full flex flex-col justify-center items-center py-16 bg-gray-100 ">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Our Interactive Web Design Services
      </h1>

      <div className="w-full px-4 pb-20 relative z-20">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          loop={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} bg-gradient-to-r from-blue-500 to-purple-500 w-3 h-3 mx-1 rounded-full transition-all duration-300"></span>`;
            },
          }}
          modules={[Pagination, Navigation]}
          className="relative"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="h-full bg-white p-6 rounded-xl shadow-lg mx-2 transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-gradient">
                <div className="text-center flex flex-col items-center h-full">
                <img src={slide.icon} alt="{slide.title}" className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{slide.title}</h3>
                  <p className="text-gray-600">{slide.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          
          <div className="swiper-button-next !text-purple-500"></div>
          <div className="swiper-button-prev !text-purple-500"></div>
        </Swiper>
      </div>
      
    </div>
    {/*Image */}
    <div className="relative -mt-[30px] flex -z-10 px-10">
              <img src={Ellipse} alt="" className="opacity-120" />
            </div>
    </div>
  );
};

export default Service;
