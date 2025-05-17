import React from 'react'

const services = [
  {
    title: "Social Media Audit",
    description: "A successful social media strategy starts with a comprehensive audit of your online presence. We analyze your platforms, focusing on audience demographics, performance metrics, engagement rates, and competitor activities. This reveals insights for growth and highlights strengths and weaknesses in your strategy. Using our findings, we can boost your online visibility to align with your business goals. Companies that conduct regular audits often see engagement rates rise by up to 25% in six months.",
    color: "bg-green-500",
  },
  {
    title: "Innovative Content Creation",
    description: "A social media marketing agency must create visually appealing posts that resonate with your audience. Research shows visual content is shared 40 times more than other types. Our creative team uses a data-driven approach to ensure your content is seen and shared, focusing on striking graphics and engaging copy.",
    color: "bg-green-500",
  },
  {
    title: "Photography",
    description: "High-quality images are essential in social media marketing. Stunning photography establishes your brand's tone and visual identity. Our services provide professionally captured images that effectively showcase your business. Research shows that 67% of consumers believe product image quality affects their purchasing decisions, highlighting the importance of exceptional visuals.",
    color: "bg-blue-500",
  },
  {
    title: "Videography",
    description: "Video content is a powerful way to engage audiences. As a social media marketing agency, we create eye-catching videos that grab attention. With 91% of marketers viewing it as essential for social media, we produce promotional clips, behind-the-scenes looks, and product showcases to elevate your brand on Instagram, Facebook, and YouTube.",
    color: "bg-blue-500",
  },
  {
    title: "Graphics Design",
    description: "Visuals in digital marketing are more effective than words. Our agency's skilled graphic designers transform your brand's vision into eye-catching images. Innovative layouts enhance brand visibility and make your content pop in busy feeds. Studies show that posts with relevant images receive 94% more engagement, highlighting the crucial role of design in social media marketing.",
    color: "bg-green-500",
  },
  {
    title: "Influencer Marketing",
    description: "Increase your brand's visibility and worth. Working with influencers can greatly elevate your brand awareness and recognition. Team up with our social media specialists to develop a powerful influencer marketing strategy and build solid connections with influencers.",
    color: "bg-green-500",
  },
];
const FeaturedSMM = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-20">
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 rounded-full mx-auto mb-4"></div>
        <h2 className="text-4xl font-medium leading-relaxed">
          Our Featured{" "}
          <span className="text-black font-bold">Social Media Marketing Services</span>
        </h2>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Vertical Line */}
        <div className="absolute top-1 bottom-40 left-[2%] w-px bg-dashed border-l-2 border-gray-300 z-0"></div>
        {/* Right Vertical Line */}
        <div className="absolute top-1 bottom-40 right-[41.5%] w-px bg-dashed border-l-2 border-gray-300 z-0"></div>

        {services.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`relative z-10 md:flex ${
                isLeft ? "justify-start md:pl-10" : "justify-end md:pr-10"
              }`}
            >
              <div className="relative bg-white max-w-md p-6 rounded-xl shadow-md">
                {/* Circle Indicator */}
                <div
                  className={`absolute top-1 transform -translate-y-3/4 ${
                    isLeft ? "-left-8" : "right-120"
                  }`}
                >
                  {/* Outer Circle */}
                  <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center bg-white">
                    {/* Inner Color Dot */}
                    <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                  </div>
                </div>
                {/* Content */}
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default FeaturedSMM