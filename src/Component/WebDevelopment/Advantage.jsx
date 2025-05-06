import React from "react";

const advantages = [
  {
    title: "Device Accessibility",
    description:
      "Web applications are accessible on any device with an internet connection. Featuring user-friendly interfaces and a strong emphasis on usability, these applications provide a smooth experience across various platforms. This level of accessibility facilitates market entry, allowing you to connect with and engage a wider audience.",
  },
  {
    title: "Affordable Development Solutions",
    description:
      "Web applications lower both development and maintenance expenses when compared to native applications. The process of updating web apps requires fewer resources, as updates are handled on the server side. This approach removes the necessity for app store submissions or user-initiated updating, leading to cost savings. Furthermore, you can also cut down on software licensing fees and taxes.",
  },
  {
    title: "Improved Security",
    description:
      "The development of custom web applications has evolved significantly with the introduction of advanced technologies. Contemporary applications utilize encrypted protocols such as HTTPS and SSL/TLS to safeguard user information. Additionally, they incorporate strong authentication methods to enhance security. It is essential for businesses to implement these robust security measures to ensure their safety.",
  },
  {
    title: "Growth and Flexibility",
    description:
      "Modern web application development services emphasize scalability, a crucial factor for handling growing user demands while maintaining performance. Frameworks like Ruby on Rails and Node.js facilitate rapid scaling, improving server processing capabilities and optimizing database management. By utilizing the appropriate tools, you can promote growth, uncover new opportunities, and execute updates seamlessly.",
  },
  {
    title: "Customizing Solutions to Meet Distinct Needs",
    description:
      "Custom web applications are designed to tackle specific business challenges, allowing you to select the features that best meet your needs. This tailored approach also enhances the user experience. For instance, an e-commerce company might incorporate inventory management and specialized payment plugins into their platform.",
  },
];

const Card = ({ title, description }) => (
  <div className="bg-white shadow-lg border border-gray-100 rounded-4xl p-6 hover:shadow-2xl transition-all duration-300">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-700 text-md leading-loose">{description}</p>
  </div>
);

const Advantage = () => {
  return (
    <div className="bg-gray-50">
    <section className="max-w-7xl mx-auto px-4 py-16 text-gray-800">
      <div className="text-center mb-12">
        {/* Gradient line at top */}
      <div className="w-25 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mb-10 mx-auto"></div>
        <h2 className="text-4xl font-bold mb-2">
          Advantages of Developing <span className="text-black">Web Application</span>
        </h2>
        <p className="text-sm text-yellow-500">
          Creating web application enhances your online visibility and helps your business expand by improving user experience. Let us show you how!
        </p>
      </div>

      <div className="grid gap-8">
        {/* First row - 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card title={advantages[0].title} description={advantages[0].description} />
          <Card title={advantages[1].title} description={advantages[1].description} />
        </div>

        {/* Second row - 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card title={advantages[2].title} description={advantages[2].description} />
          <Card title={advantages[3].title} description={advantages[3].description} />
        </div>

        {/* Third row - 1 centered card */}
        <div className="flex justify-center">
          <div className="max-w-lg w-full">
            <Card title={advantages[4].title} description={advantages[4].description} />
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Advantage;