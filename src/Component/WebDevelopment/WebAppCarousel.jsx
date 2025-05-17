import React, { useRef } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ellipse from "../../assets/Images/Ellipsee.png";
import GITContact from "../Contact/GITContact"; 

const services = [
  {
    title: "Front-End Development Services",
    description:
      "Tekno Spot designs intuitive and user-friendly interfaces that provide a smooth user experience (UX). We leverage contemporary front-end frameworks such as React, Angular, and Vue.js to transform intricate concepts into beautiful applications.",
  },
  {
    title: "Back-End Development Services",
    description:
      "Our back-end development focuses on creating scalable, secure, and dependable solutions that ensure your application operates seamlessly. We leverage advanced technologies such as Node.js, Python, and SQL/NoSQL databases to craft robust business logic and optimize database efficiency. Whether you're launching a startup or managing a large enterprise, we have you covered! Our high-performance web applications guarantee a smooth experience for your users.",
  }, 
  {
    title: "SaaS Application Development",
    description:
      "SaaS solutions provide the flexibility needed to accommodate your business expansion. They also reduce IT infrastructure costs by enabling cloud storage for all your data. Additionally, this model allows for quicker service delivery and the ability to swiftly respond to market shifts. Interested in leveraging the advantages of SaaS? Partner with us! Our cloud-native strategy ensures that your SaaS applications are scalable, secure, and budget-friendly. We utilize technologies such as AWS Lambda and Kubernetes to create intelligent, multi-tenant solutions that are designed to evolve alongside your business requirements!",
  },
  {
    title: " Web Portal Development ",
    description:
      "Our innovative web portals consolidate all your online services into a single, convenient location. These platforms feature real-time dashboards, tracking systems, and sophisticated reporting tools. With these robust capabilities, you can enhance decision-making and boost user engagement. Additionally, our web portal development services are tailored to meet the needs of diverse industries. For instance, we create patient portals that facilitate secure data sharing in the healthcare sector. In retail, we provide order tracking and inventory management dashboards. In the education field, we develop learning management systems that streamline collaboration.",
  },
  {
    title: " Web Application Maintenance and Support ",
    description:
      "We go beyond simply launching your app; we provide ongoing maintenance and support to ensure it remains up-to-date and competitive. What does this entail? Initially, our services feature real-time monitoring and prompt bug resolution. We also manage compatibility updates for the latest operating systems and browsers. Additionally, we prioritize security and performance enhancements. Rest assured, we will keep you informed of any changes we implement to ensure you are always in the loop.",
  },
];


const WebAppCarousel = () => {
  const sliderRef = useRef();
  const [showModal, setShowModal] = React.useState(false);

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
      <div className="bg-gray-50 py-20 px-4 sm:px-10 md:px-20 relative">
        {/* Heading */}
        <div className="text-center mb-10 space-y-5">
          <div className="mt-2 mx-auto w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 rounded-full"></div>
          <h2 className="text-4xl text-gray-700">
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
            <div key={index} className="px-2 sm:px-4 mb-3">
              <div className="h-[400px] w-full flex flex-col justify-between border rounded-lg shadow-md border-blue-300 bg-gray-50 p-6">
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 rounded-full mb-4"></div>
                <h3 className="text-xl font-bold text-black">
                  {service.title}
                </h3>
                <p className="text-md text-gray-600 mt-2 flex-grow leading-loose overflow-hidden">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>

        {/* Contact Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-xl text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 transition mt-10"
          >
            Contact Us
          </button>
        </div>

        {/* Arrows */}
        <div className="absolute right-6 bottom-20 flex gap-4">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="bg-white border border-blue-300 p-2 rounded-full shadow-md hover:bg-blue-500"
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

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-5xl relative overflow-y-auto max-h-[90vh]">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-4 text-gray-700 hover:text-red-600 text-3xl"
              >
                &times;
              </button>
              <GITContact />
            </div>
          </div>
        )}

        {/* Custom Dots */}
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

      {/* Ellipse image adjustment */}
      <div className="relative -mt-[50px] flex justify-end -z-10 overflow-hidden px-10">
        <img
          src={Ellipse}
          alt="Ellipse Background"
          className="opacity-100 translate-y-[25%] mb-[-30px] max-w-full"
        />
      </div>
    </div>
  );
};

export default WebAppCarousel;
