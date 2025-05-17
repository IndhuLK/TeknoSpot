import React from "react";

const advantages = [
  {
    title: "Keyword Research",
    description:
      "Our focus on choosing the right keywords is designed to enhance your site's ranking for searches that yield qualified traffic with a strong intent to purchase, ultimately increasing conversions.",
  },
  {
    title: "On-Page SEO",
    description:
      "This encompasses all SEO enhancements applied directly to the web page. We will refine your website's content, meta tags, images, and internal links to boost relevance for target keywords and elevate search visibility.",
  },
  {
    title: "Off-Page SEOt",
    description:
      "Off-Page SEO encompasses elements beyond your website that influence search engine rankings and visibility, including backlinks and the quantity and quality of sites that link to you. We enhance your website's domain authority by building links and removing harmful links, thereby improving your search engine rankings.",
  },
  {
    title: "Technical SEO",
    description:
      "A slow website can adversely affect user experience and search engine rankings because of delayed loading times and different technical issues. We will perform a comprehensive audit to pinpoint and fix site errors, boost loading speed, guarantee mobile responsiveness, and enhance crawlability.",
  },
  {
    title: "Local SEO",
    description:
      "For companies focusing on Indian customers, we enhance your website for local search visibility, ensuring you show up in searches like 'Trichy' and 'near me'. This involves handling Google My Business profiles, local citations, customer feedback, and keywords specific to your location.",
  },
  {
    title: "E-Commerce SEO",
    description:
      "We will enhance your product and category pages, along with their descriptions, to draw in the right customers for your E-Commerce business. By focusing on user experience and strategically targeting commercial keywords, we will increase traffic that leads to sales.",
  },
  {
    title: "Video SEO",
    description:
      "By enhancing your video titles, tags, descriptions, and thumbnails, we help your content achieve better rankings on platforms such as YouTube and Google search results.",
  },
];

const Card = ({ title, description }) => (
  <div className="bg-white shadow-lg border border-gray-100 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-700 text-md leading-loose">{description}</p>
  </div>
);

const OurSEOService = () => {
  return (
    <div className="bg-gray-50">
      <section className="max-w-7xl mx-auto px-4 py-16 text-gray-800">
        <div className="text-center mb-12">
          {/* Gradient line at top */}
          <div className="w-25 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 rounded-full mb-10 mx-auto"></div>
          <h2 className="text-4xl mb-2 leading-relaxed">
            Our <span className="text-black font-bold">SEO Services</span>
          </h2>
          <p className="text-sm leading-loose">
            Our all-encompassing SEO framework is crafted to elevate business
            rankings, draw in valuable traffic, and deliver quantifiable
            outcomes. Although our packages encompass all essential SEO
            components, we customize strategies to align with your specific
            business requirements. For instance, Local SEO is vital for
            companies focusing on customers in Trichy, whereas International SEO
            supports those looking to grow on a global scale. Regardless of
            whether you operate a corporate website, an e-commerce platform, or
            a content site, we enhance every facet of your SEO campaign to
            ensure success.
          </p>
        </div>

        <div className="grid gap-8">
          {/* First row - 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card
              title={advantages[0].title}
              description={advantages[0].description}
            />
            <Card
              title={advantages[1].title}
              description={advantages[1].description}
            />
          </div>

          {/* Second row - 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card
              title={advantages[2].title}
              description={advantages[2].description}
            />
            <Card
              title={advantages[3].title}
              description={advantages[3].description}
            />
          </div>

          {/* Second row - 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card
              title={advantages[4].title}
              description={advantages[4].description}
            />
            <Card
              title={advantages[5].title}
              description={advantages[5].description}
            />
          </div>

          {/* Third row - 1 centered card */}
          <div className="flex justify-center">
            <div className="max-w-lg w-full">
              <Card
                title={advantages[6].title}
                description={advantages[6].description}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurSEOService;
