import React, { useRef } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ellipse from "../../assets/Images/Ellipsee.png";

const services = [
  {
    title: "Front-End Development Services",
    description:
      "Tekno Spot designs intuitive and user-friendly interfaces that provide a smooth user experience (UX). We leverage contemporary front-end frameworks such as React, Angular, and Vue.js to transform intricate concepts into beautiful applications.",
  },
  {
    title: "Back-End Development Services",
    description:
      "Our back-end development focuses on creating scalable, secure, and dependable solutions that ensure your application operates seamlessly. We leverage advanced technologies such as Node.js, Python, and SQL/NoSQL databases to craft robust business logic and optimize database efficiency. Whether youre launching a startup or managing a large enterprise, we have you covered! Our high-performance web applications guarantee a smooth experience for your users",
  },
  {
    title: "Custom Web Application Services",
    description:
      "Looking to develop one-of-a-kind applications tailored to your unique requirements? We’re here to assist you! Our approach to custom web application development emphasizes adaptability, growth potential, and outstanding user experience. We support you throughout the entire journey, from brainstorming to launch! With more than ten years of expertise in sectors like e-commerce, healthcare, and finance, we excel at producing exceptional outcomes. You can also harmonize functionality with design to craft powerful applications.",
  },
];

const WebAppCarousel = () => {
  const sliderRef = useRef();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20%", // Adjust for how much side content is shown
    arrows: false,
    dotsClass: "slick-dots custom-dots",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "10%",
        },
      },
    ],
  };

  return (
    <div className="relative overflow-hidden">
      <div className="bg-gray-50 py-20 px-4 sm:px-10 md:px-20 relative ">
        {/* Heading */}
        <div className="text-center mb-10 space-y-5">
          <div className="mt-2 mx-auto w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 rounded-full"></div>
          <h2 className="text-4xl md:text-4xl text-gray-700">
            Our Web{" "}
            <span className="font-bold text-black">
              Application Development Services
            </span>
          </h2>
          <p className="text-yellow-500 mt-2 text-md md:text-base font-semibold">
            We turn your ideas into digital realities, committed to guiding you
            from the initial concept all the way to launch. Reach out to <br />
            us today to explore our comprehensive web development services!
          </p>
        </div>

        {/* Slider */}
        <Slider ref={sliderRef} {...settings}>
          {services.map((service, index) => (
            <div key={index} className="px-2 sm:px-4 h-full mb-3">
              <div className="h-full flex flex-col justify-between border rounded-lg shadow-md border-blue-300 bg-gray-50 p-6 min-h-[320px]">
                {/* Gradient Line */}
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 rounded-full mb-4"></div>

                {/* Title */}
                <h3 className="text-xl font-bold text-black">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-md text-gray-600 mt-2 flex-grow leading-loose">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>

        {/* Contact Button Centered */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="bg-blue-600 text-xl text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 transition mt-10"
          >
            Contact Us
          </button>
        </div>

        {/* Arrows bottom-right corner */}
        <div className="absolute right-6 bottom-20 flex gap-4">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="bg-white border border-blue-300 p-2 rounded-full shadow-md hover:bg-blue-500 "
          >
            <FaArrowLeft className="text-blue-500 hover:text-white" />
          </button>

          <button
            onClick={() => sliderRef.current.slickNext()}
            className="bg-white border border-blue-300 p-2 rounded-full shadow-md hover:bg-blue-500"
          >
            <FaArrowRight className="text-blue-500 hover:text-white" />
          </button>
        </div>
        {/* Custom Dot Styles (Inline Style Approach) */}
        <style jsx>{`
          .custom-dots li {
            margin: 0 4px;
          }

          .custom-dots li button:before {
            font-size: 10px;
            color: #d1d1d1;
            opacity: 1;
            content: "";
            display: block;
            width: 10px;
            height: 10px;
            border-radius: 9999px;
            background-color: #d1d1d1;
          }

          .custom-dots li.slick-active button:before {
            background: linear-gradient(to right, #c33764, #1d2671);
          }
        `}</style>
      </div>
      {/*Image */}
      <div className="relative -mt-[30px] flex justify-end -z-10 px-70">
        <img src={Ellipse} alt="" className="opacity-100 mb-4" />
      </div>
    </div>
  );
};

export default WebAppCarousel;
