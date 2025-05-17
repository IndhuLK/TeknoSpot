import React from "react";
import img1 from "../../assets/MobileApplication/img1.jpg";
import img2 from "../../assets/MobileApplication/img2.jpg";
import img3 from "../../assets/MobileApplication/img3.jpg";
import img4 from "../../assets/MobileApplication/img4.jpg";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "lucide-react";

const content = [
  {
    img: img1,
    title: "Business Assessment",
    desc: "Mobile applications enable companies to collect detailed information about user interactions, behaviors, sales trends, app performance, and other metrics. This data helps enhance their services and provides customers with a more enjoyable app experience.",
  },
  {
    img: img2,
    title: "Increase Revenue",
    desc: "Research indicates that individuals are more likely to look for products or services on their smartphones instead of laptops. Having your business app readily available could significantly increase your sales opportunities.",
  },
  {
    img: img3,
    title: "Improved Customer Engagement",
    desc: "Mobile applications provide customers with a convenient way to connect with your business. They can deliver tailored experiences, keep users updated on the latest promotions through push notifications, enhance customer support, and offer a variety of additional benefits.",
  },
  {
    img: img4,
    title: "Stand Out From the Crowd",
    desc: "A mobile application enhances brand exposure, acts as a direct marketing avenue, provides users with easy access to your services, and, with personalized features, and becomes a strong asset to differentiate yourself in a competitive market.",
  },
];

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
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <section className="py-16 px-4 md:px-20 bg-white">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-5">
        How Mobile Apps Can Boost Your Business Opportunities
      </h2>
      <p className="text-yellow-500 font-semibold text-md mb-5 text-center">
        Mobile app development solutions offer a wide range of advantages for
        businesses in different sectors. Here are some of the main benefits:
      </p>

      {/* Carousel */}
      <Slider ref={sliderRef} {...settings}>
        {content.map((item, index) => (
          <div key={index} className="px-3">
            <div className="rounded-lg shadow-md overflow-hidden bg-white flex flex-col h-[450px] w-full">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4 flex flex-col justify-between flex-grow">
                <h3 className="text-xl font-bold text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Arrows */}
      <div className="flex justify-center gap-6 mt-6">
        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          onClick={() => sliderRef.current.slickNext()}
          className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default AppOpportunities;
