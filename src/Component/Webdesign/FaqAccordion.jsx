import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Ellipse from "../../assets/Images/Ellipsee.png";

const FaqAccordion = () => {
  const faqs = [
    {
      question: "How does my business get impacted with website design?",
      answer:
        "Because website design impacts user experience, brand perception, and conversion rates, it has a big impact on your business. In the end, a well-designed website increases confidence, engages users, and inspires them to do desired actions, like contacting you or making an order.",
    },
    {
      question: "How Will a User-Friendly Website Improve Customer Experiences?",
      answer:
        "An amazing client experience is established on a foundation of a user-friendly website. A well-designed website makes it easy for users to navigate through the pages and get the information they require. Faster access to products, services, and relevant content comes from this, saving time and improving the way people view your brand's offers. A lasting impression is created by this better experience, increasing the possibility of return visits and conversions.",
    },
    {
      question:
        "Will my website be mobile-friendly and responsive?",
      answer:
        "Yes. Mobile-friendly designs are at the heart of Rocket's design approach instead of being a secondary concern. Your website will be responsive and mobile-friendly, so you can be sure. We make sure that every page that comes online is tested for usability across various browsers and devices.",
    },
    {
      question:
        "Why is SEO important for Custom Website Design?",
      answer:
        "For the purpose of to boost visibility, increase organic traffic, improve user engagement, and improve conversions, SEO makes sure that a custom website is search engine optimized.",
    },
    {
      question: "How long does it take to complete a web design project in Trichy?",
      answer:
        "For the purpose of to boost visibility, increase organic traffic, improve user engagement, and improve conversions, SEO makes sure that a custom website is search engine optimized.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <div className="w-full max-w-3xl mx-auto relative p-8 bg-white rounded-lg shadow-2xl my-12 overflow-hidden">
        {/* Left top corner decoration */}
        <div className="absolute -top-4 -left-4 w-16 h-16">
          <img
            src={Ellipse}
            alt="Decorative element"
            className="w-16 h-16 object-cover object-top-left"
          />
        </div>

        {/* Right bottom corner decoration */}
        <div className="absolute -bottom-4 -right-4 w-16 h-16">
          <img
            src={Ellipse}
            alt="Decorative element"
            className="w-16 h-16 object-cover object-bottom-right"
          />
        </div>

        <div className="px-20 mb-10">
          <h2 className="text-3xl relative inline-block mt-10">
            Frequently <span className="font-bold">ASKED QUESTIONS</span>
            <div className="absolute -top-6 left-0 w-28 h-1 text-transparent  bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 mb-2"></div>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-lg overflow-hidden">
              <div
                className="px-6 py-4 text-left font-bold flex justify-between hover:bg-gray-50 transition-all cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
                <ChevronDown
                  className={`transform transition-transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              {activeIndex === index && (
                <div className="px-6 py-4 text-gray-700">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqAccordion;
