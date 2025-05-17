import React from 'react'


const services = [
    { title: 'Web Design', description: 'We design and develop highly interactive websites that move your business forward.', blueBottom: true, topPurpleBar: false, topGradientUnderline: false, bottomGradientUnderline: true },
    { title: 'App Development', description: 'We develop Web Apps, Hybrid Apps, Native Apps to accelerate your business growth.', blueBottom: false, topPurpleBar: true, topGradientUnderline: true, bottomGradientUnderline: false },
    { title: 'SEO (Search Engine Optimization)', description: 'Maximize search engine love and drive organic traffic to your website with proven SEO Strategy.', blueBottom: true, topPurpleBar: false, topGradientUnderline: false, bottomGradientUnderline: true },
    { title: 'SEM (Search Engine Marketing)', description: 'We rank business websites higher in Google Search results to get in front of your target audience.', blueBottom: false, topPurpleBar: true, topGradientUnderline: true, bottomGradientUnderline: false },
    { title: 'Graphics Design', description: 'We create eye-catching, attractive and impressive designs. Logos, Social Media Posters, Brouchers and more.', blueBottom: true, topPurpleBar: false, topGradientUnderline: false, bottomGradientUnderline: true },
    { title: 'SMM (Social Media Marketing)', description: 'We run creative advertisement campaigns on social media to accelerate your business growth.', blueBottom: false, topPurpleBar: true, topGradientUnderline: true, bottomGradientUnderline: false },
    { title: 'Video Production', description: 'We produce professional and high-quality videos that will impress your target audience.', blueBottom: true, topPurpleBar: false, topGradientUnderline: false, bottomGradientUnderline: true },
  ];

const FeaturedDevelopment = () => {
  return (
    
        <section className="min-h-screen flex flex-col items-center bg-gray-50 py-16 px-4 ">
          {/* Title Section */}
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 place-self-center mb-4"></div>
            <h2 className="text-4xl font-light text-gray-800">
              Our featured services 
            </h2>
            <h3 className="text-4xl text-gray-800 mb-4">
            and <span className="text-black font-bold">development approach</span>
            </h3>
            <p className="text-yellow-500 font-medium text-sm">
              All-in-One Superior Solutions that Ensure Effective Lead Generation
            </p>
          </div>
    
          {/* Cards Section */}
          <div className="flex flex-wrap justify-center gap-8 max-w-7xl">
            {/* First Row */}
            <div className="flex flex-wrap justify-center gap-20 w-full lg:justify-between">
              {services.slice(0, 4).map((service, index) => (
                <div
                  key={index}
                  className="relative flex flex-col w-65 bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  {/* Top Purple Bar if needed */}
                  {service.topPurpleBar && (
                    <div className="h-20 bg-purple-300 w-full"></div>
                  )}
    
                  <div className="p-6 flex flex-col items-center text-center relative">
                    {/* Top Gradient Underline */}
                    {service.topGradientUnderline && (
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 rounded-full"></div>
                    )}
                    <div className=''>
                    <h3 className="text-lg font-semibold mb-4 mt-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-6">{service.description}</p>
                    </div>
    
                    {/* Bottom Gradient Underline */}
                    {service.bottomGradientUnderline && (
                      <div className="h-1 w-6 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 mt-auto rounded-full"></div>
                    )}
                  </div>
    
                  {/* Light blue background at bottom if needed */}
                  {service.blueBottom && (
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-blue-100 rounded-b-lg"></div>
                  )}
                </div>
              ))}
            </div>
    
            {/* Second Row */}
            <div className="flex flex-wrap justify-center gap-20 mt-8">
              {services.slice(4).map((service, index) => (
                <div
                  key={index + 4}
                  className="relative flex flex-col w-65 bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  {/* Top Purple Bar if needed */}
                  {service.topPurpleBar && (
                    <div className="h-20 bg-purple-300 w-full"></div>
                  )}
    
                  <div className="p-6 flex flex-col items-center text-center relative">
                    {/* Top Gradient Underline */}
                    {service.topGradientUnderline && (
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 rounded-full"></div>
                    )}
                    <h3 className="text-lg font-semibold mb-4 mt-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-6">{service.description}</p>
    
                    {/* Bottom Gradient Underline */}
                    {service.bottomGradientUnderline && (
                      <div className="h-1 w-6 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 mt-auto rounded-full"></div>
                    )}
                  </div>
    
                  {/* Light blue background at bottom if needed */}
                  {service.blueBottom && (
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-blue-100 rounded-b-lg"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
  )
}

export default FeaturedDevelopment