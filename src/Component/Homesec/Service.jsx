import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Ellipse from "../../assets/Images/Ellipsee.png";
import group from "../../assets/Images/Group.png";

const services = [
  {
    title: "Web Designing",
    description:
      "Each website we create is perfectly crafted to deliver a 100% unique online experience tailored to your brand. Our expert web designers in trichy, transform your vision into a dynamic, custom web design that enhances your brand’s visibility, boosts engagement, and drives conversions. With us, your website design will not only stand out but also connect deeply with your audience.",
  },
  {
    title: "Web Development",
    description:
      "Tekno Spot, a leading web development company in trichy, specializes in building dynamic and innovative online solutions. From user-friendly online stores to comprehensive management systems, we deliver high-performing, well-executed projects tailored to drive digital success.",
  },
  {
    title: "Website Redesign",
    description:
      "Whether your website design needs a refresh or a complete website fix up, we analyze your site’s pain points and opportunities to revitalize your digital presence. Our expert web designers will breathe new life into your website, enhancing its functionality, user experience. The result? A modern, dynamic site that drives increased traffic and bolsters your industry reputation.",
  },
  {
    title: "Search Engine Optimization",
    description:
      "We offer a comprehensive range of services designed to boost your website’s ranking and attract organic, non-paid google search traffic. Our team can conduct a thorough SEO audit of your website, providing actionable insights and strategies to enhance your organic reach and visibility on search engines.",
  },
  {
    title: "E-Commerce Web Design & Development",
    description:
      "We specialize in e-commerce web development for leading content management systems (CMS) like Shopify, Magento, WooCommerce and custom e-commerce web development. Our experts can help you build and scale your eCommerce website across platforms, ensuring a seamless online shopping experience for your customers.",
  },
];

const Card = ({ title, description }) => (
  <div className="bg-white shadow-lg border border-gray-100 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-700 text-md leading-loose">{description}</p>
  </div>
);

const Service = () => {
  return (
    <div className="bg-gray-50">
      <section className="max-w-7xl mx-auto px-4 py-16 text-gray-800">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-2 leading-relaxed font-semibold">
            Our Interactive <span className="text-black font-bold">Web Design Services</span>
          </h2>
        
        </div>

        <div className="grid gap-8">
          {/* First row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card title={services[0].title} description={services[0].description} />
            <Card title={services[1].title} description={services[1].description} />
            <Card title={services[2].title} description={services[2].description} />
          </div>

          {/* Second row - 2 centered cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card title={services[3].title} description={services[3].description} />
            <Card title={services[4].title} description={services[4].description} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
