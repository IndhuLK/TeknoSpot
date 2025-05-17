import React from "react";

const advantages = [
  {
    title: "Strong Infrastructure",
    description:
      "Our modern infrastructure includes the latest hardware, sophisticated application tools, and secure networking solutions, all designed to maintain seamless development processes and protect data integrity during every phase of the project.",
  },
  {
    title: "Experienced Experts",
    description:
      "No matter if you're creating a native iOS app, an Android app, or a cross-platform solution, our developers possess more than just coding expertise; they are committed to keeping abreast of the latest trends and best practices in mobile app development technologies.",
  },
  {
    title: "Timely Delivery",
    description:
      "We effectively track the project's progress and keep you informed by following agile best practices and using advanced productivity tools for project planning. This method enables us to deliver your mobile app punctually while ensuring it meets the highest quality standards.",
  },
  {
    title: "Transparency and Understanding",
    description:
      "We prioritize complete transparency by providing clear updates on our progress, timelines, and deliverables, while also incorporating your feedback to improve the project.",
  },
  {
    title: "Adaptable Collaboration Frameworks",
    description:
      "We prioritize our clients' needs by providing the flexibility to select engagement models that suit them best. This allows them to adapt and switch between options as their requirements evolve, fostering a long-term and dependable partnership.",
  },
];

const Card = ({ title, description }) => (
  <div className="bg-white shadow-lg border border-gray-100 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-700 text-md leading-loose">{description}</p>
  </div>
);

const PerfectMobileApp = () => {
  return (
    <div className="bg-gray-50">
      <section className="max-w-7xl mx-auto px-4 py-16 text-gray-800">
        <div className="text-center mb-12">
          {/* Gradient line at top */}
          <div className="w-25 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 rounded-full mb-10 mx-auto"></div>
          <h2 className="text-4xl mb-2 leading-relaxed">
            Why Tekno Spot as{" "}
            <span className="text-black font-bold">
              Your Perfect Mobile App <br />
              Development Partner
            </span>
          </h2>
          <p className="text-sm leading-loose">
            Choose Tekno Spot for your customized mobile app development
            requirements and benefit from our proven track record, skilled
            experts, and commitment to delivering creative solutions that
            improve your business processes.
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

          {/* Third row - 1 centered card */}
          <div className="flex justify-center">
            <div className="max-w-lg w-full">
              <Card
                title={advantages[4].title}
                description={advantages[4].description}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PerfectMobileApp;
