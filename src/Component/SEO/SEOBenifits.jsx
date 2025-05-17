import React from 'react'

const benefits = [
  {
    title: "Increase Website Traffic",
    color: "from-red-500 to-red-800",
    icon: "bg-red-500",
    text: "Attract a consistent stream of potential clients who are actively looking your products or services"
  },
  {
    title: "Boost Your Leads and Sales",
    color: "from-blue-500 to-blue-800",
    icon: "bg-blue-500",
    text: "Turn Google into your 24/7 sales engine, effortlessly generating daily leads and sales without ongoing costs"
  },
  {
    title: "Affordable Expansion",
    color: "from-green-500 to-green-800",
    icon: "bg-green-500",
    text: "Generate consistent organic traffic and positive results without ongoing financial investment, making SEO a cost-effective and sustainable marketing strategy"
  },
  {
    title: "Establish Trust and Credibility",
    color: "from-yellow-400 to-yellow-600",
    icon: "bg-yellow-400",
    text: "Rank high in search results to position your brand as a trusted authority and outpace competitors"
  },
];

const SEOBenifits = () => {
  return (
    <div className="px-6 md:px-20 py-12 bg-gradient-to-br from-white via-blue-50 to-white">
      {/* Title Section */}
      <div className="mb-10">
        <div className="w-10 h-1 bg-gradient-to-r from-purple-500 to-red-500 mb-2 rounded"></div>
        <h2 className="text-2xl md:text-4xl font-medium">
          The Benefits of <span className="font-bold text-gray-800">Investing in</span><br />
          <span className="font-extrabold text-black mt-2 inline-block">SEO Services</span>
        </h2>
      </div>

      {/* Benefits List */}
      <div className="space-y-8">
        {benefits.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-4">
            {/* Icon & Title */}
            <div className="flex items-center gap-4 w-full md:w-1/2">
              <div className={`w-8 h-8 rounded-full ${item.icon}`}></div>
              <h3 className="text-md font-semibold">{item.title}</h3>
            </div>

            {/* Right Box */}
            <div className="w-full md:w-1/2 relative">
              <div className={`bg-gradient-to-r ${item.color} rounded-r-full py-4 pl-6 pr-16 text-white relative`}>
                <p className="text-sm font-normal leading-snug">{item.text}</p>
                <div className={`absolute right-0 top-0 h-full w-6 bg-white rounded-l-full`}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SEOBenifits