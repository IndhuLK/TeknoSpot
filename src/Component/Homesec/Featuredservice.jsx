import React from "react";
import Rocket from "../../assets/Images/Rocket.png";
import Code from "../../assets/Images/Code.png";
import Heart from "../../assets/Images/Heart.png";
import Shield from "../../assets/Images/Shield.png";
import Success from "../../assets/Images/Success.png";
import Lock from "../../assets/Images/Lock.png";

const services = [
  {
    title: "Web Design",
    desc: "We design and develop highly interactive websites that move your business forward.",
    icon: Rocket,
    color: "black",
  },
  {
    title: "App Development",
    desc: "We develop Web Apps, Hybrid Apps, Native Apps to accelerate your business growth.",
    icon: Code,
    color: "blue",
  },
  {
    title: "SEO (Search Engine Optimization)",
    desc: "Maximize search engine love and drive organic traffic to your website with proven SEO Strategy.",
    icon: Heart,
    color: "pink",
  },
  {
    title: "SEM (Search Engine Marketing)",
    desc: "We rank business websites higher in Google Search results to get in front of your target audience.",
    icon: Shield,
    color: "green",
  },
  {
    title: "Graphics Design & Video Production",
    desc: "We create eye-catching, attractive and impressive designs. Logos, Social Media Posters, Brochures and more.",
    icon: Success,
    color: "orange",
  },
  {
    title: "SMM (Social Media Marketing)",
    desc: "We run creative advertisement campaigns on social media to accelerate your business growth.",
    icon: Lock,
    color: "purple",
  },
];

const Featuredservice = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-16">
      <div className="text-center mb-12 text-base/8">
        <p className="w-16 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mb-4 place-self-center"></p>
        <h1 className="text-3xl/11 text-center">
          Our Featured Services
          <br />& <span className="font-bold">Development Approach</span>
        </h1>
        <p className="text-gray-500">
          All-in-One Superior Solutions that Ensure Effective Lead Generation
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {services.map((services, index) => (
          <div
            key={index}
            className="bg-gray-50 border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="mb-10">
              <div className="flex items-center gap-4">
                <div
                  className={`p-2 rounded-full ${
                    services.color === "black"
                      ? "bg-black"
                      : services.color === "blue"
                      ? "bg-blue-200"
                      : services.color === "pink"
                      ? "bg-pink-200"
                      : services.color === "green"
                      ? "bg-green-200"
                      : services.color === "orange"
                      ? "bg-orange-200"
                      : services.color === "purple"
                      ? "bg-purple-300"
                      : ""
                  }`}
                >
                  <img src={services.icon} alt="icon" className="w-10 h-10" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {services.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600 mt-3 px-14">
                {services.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featuredservice;
