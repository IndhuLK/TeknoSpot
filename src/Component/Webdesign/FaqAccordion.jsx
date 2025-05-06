import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Ellipse from "../../assets/Images/Ellipsee.png";

const FaqAccordion = () => {
  const faqs = [
    {
      question: "How does my business get impacted with website design?",
      answer:
        "Professional website design significantly impacts your business by establishing credibility, enhancing brand identity, and improving user experience. A well-designed website can increase conversion rates, extend your market reach, and provide valuable analytics for business decisions.",
    },
    {
      question: "Will my website be mobile-friendly and responsive?",
      answer:
        "Absolutely! All our websites are built with responsive design principles ensuring they look and function perfectly across all devices - from smartphones and tablets to desktop computers. This approach improves user experience and is favored by search engines like Google.",
    },
    {
      question:
        "How Will a User-Friendly Website Improve Customer Experiences?",
      answer:
        "User-friendly websites enhance customer experiences by providing intuitive navigation, faster loading times, and accessible information. This leads to increased engagement, reduced bounce rates, and higher conversion rates as visitors can easily find what they're looking for.",
    },
    {
      question:
        "How long does it take to complete a web design project in Trichy?",
      answer:
        "The timeline for web design projects in Trichy typically ranges from 4-12 weeks, depending on the project's complexity, requirements, and your team's responsiveness. Simple websites may be completed within 3-4 weeks, while more complex platforms with custom functionality might take 2-3 months.",
    },
    {
      question: "Why is SEO important for Custom Website Design?",
      answer:
        "SEO is crucial for custom website design because it improves visibility in search engine results, drives organic traffic, and increases conversions. An SEO-optimized custom website ensures technical elements like responsiveness and loading speed are perfected while content is structured for both users and search engines.",
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
            <div className="absolute -top-6 left-0 w-28 h-1 text-transparent  bg-gradient-to-r from-purple-500 to-pink-600 mb-2"></div>
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
