import React from "react";
import Slider from "react-slick";
import Shield from "../../assets/Images/Shield.png"
import Success from "../../assets/Images/Success.png"

const TestimonialData = [
  {
    id: 1,
    img: Success,
    para: "“With TeknoSpot, our business found its digital home. The ecommerce website they crafted is not just a platform; it's an experience. From design to functionality, they nailed it. Our online presence has never been stronger. Extremely good expertise in technical SEO and good UI/UX focus as well. Grateful for their expertise!”",
    name: "Prakash Raj",
    designation: "ULAV TECH, Virudhunagar",
  },
  {
    id: 2,
    img: Shield,
    para: "“With TeknoSpot, our business found its digital home. The ecommerce website they crafted is not just a platform; it's an experience. From design to functionality, they nailed it. Our online presence has never been stronger. Extremely good expertise in technical SEO and good UI/UX focus as well. Grateful for their expertise!”",
    name: "Nilavarasan",
    designation: "CEO of Manmakizh Foods",
  },
  {
    id: 3,
    img: Shield,
    para: "“With TeknoSpot, our business found its digital home. The ecommerce website they crafted is not just a platform; it's an experience. From design to functionality, they nailed it. Our online presence has never been stronger. Extremely good expertise in technical SEO and good UI/UX focus as well. Grateful for their expertise!”",
    name: "Nila",
    designation: "CEO of tecknospot",
  },
];
const Testimonial = () => {
  const setting = {
    dots: true,
    arrows: false,
    inifinte: true,
    speed: 500,
    slidesToScroll: 1,

    // autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mx-auto w-full py-6 mt-10 px-10">
      <div className="text-left mb-8 ">
        <p className="text-2xl font-semibold text-gray-700">Testimonials</p>
        <h1 className="text-3xl font-bold text-gray-900">
          What people say
          <br />
          About Us.
        </h1>
      </div>

      {/*Testmonial Card */}

      <div>
        <Slider {...setting}>
          {
            TestimonialData.map((item) => {
              return (
                <div key={item.id}>
                  <div className="flex flex-col justify-between h-full gap-4 p-6 shadow-lg mx-4 rounded-xl bg-blue-50">
                    {/*upper section */}
                    <div className="place-items-center">
                      <img src={item.img} alt=""  className="h-12 w-12 object-contain"/>
                      <div className="items-start gap-4">
                        <p className="text-base text-black/80">{item.para}</p>
                        
                      </div>
                    </div>
                    {/*bottom */}
                    <div className="pt-4">
                    <p className="text-xl font-bold text-black/80">{item.name}</p>
                      <p className="text-sm text-gray-500 mt-2">{item.designation}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
