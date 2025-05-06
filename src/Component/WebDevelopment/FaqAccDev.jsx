import React, {useState} from 'react'
import { ChevronDown } from 'lucide-react';
import Ellipse from "../../assets/Images/Ellipsee.png";

const FaqAccDev = () => {
  const faqs = [
    {
      question: "What is included in our web development service?",
      answer:
        "Our service includes front-end and back-end development, UX/UI design, SEO optimization, and post-launch support.",
    },
    {
      question:
        "What unique approaches does Tekno Spot use in creating web applications?",
      answer:
        "We leverage cutting-edge frameworks, agile methodologies, and a design-first approach to deliver scalable and user-friendly applications.",
    },
    {
      question: "Will my Web Application be Mobile-Friendly?",
      answer:
        "Absolutely! All our web applications are designed to be responsive and optimized for mobile devices.",
    },
    {
      question: "What is a headless CMS, and should I consider using it?",
      answer:
        "A headless CMS separates content management from the front end, allowing flexibility with frameworks. It’s great for scalable and dynamic apps.",
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
          <div className="absolute -top-6 left-0 w-28 h-1 text-transparent  bg-gradient-to-r from-purple-800 via-blue-800 to-red-800 mb-2"></div>
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
                className={`transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}
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
  )
}

export default FaqAccDev