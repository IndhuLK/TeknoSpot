import React from "react";
import ourjourn from "../../assets/Aboutimage/ourjourn.png";
import Mission from "../../assets/Aboutimage/Ourmission.png";
import Vision from "../../assets/Aboutimage/Ourvision.png";
import Purpose from "../../assets/Aboutimage/Ourpurpose.png";
import Ellipse from "../../assets/Images/Ellipsee.png";

const Foundationwork = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="bg-gray-50 py-5 px-4 sm:px-6 lg:px-16 ">
        <div className="text-center mb-12 text-base/8">
          <p className="w-16 h-1 bg-gradient-to-r from-blue-700 via-purple-500 to-red-500 place-self-center"></p>
          <h1 className="text-3xl/11 text-center font-bold">
            Foundation of Our Work
          </h1>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-25 mt-20 py-10">
          {/* Card 1 */}
          <div className="border-2 border-pink-300 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col">
              {/* Icon and Title Side by Side */}
              <div className="flex items-center gap-2 mb-4">
                <img src={Mission} alt="Mission" className="w-12 h-12" />
                <h3 className="font-bold text-xl bg-gradient-to-r from-blue-700 via-purple-600 to-red-500 bg-clip-text text-transparent">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-600 text-sm ">
                Our mission is to empower businesses of all sizes, regions, and
                industries by giving them the resources, tactics, and platforms
                they require to successfully engage with their target clients.
                In order to promote meaningful engagement, long-term success,
                and sustainable growth in a market that is becoming more and
                more competitive, we take steps to close the gap between brands
                and the consumers who are actively looking for their products or
                services.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="mb-20 border-2 border-pink-300 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 md:-mt-8">
            <div className="flex flex-col py-5">
              {/* Icon and Title Side by Side */}
              <div className="flex items-center gap-2 mb-4">
                <img src={Vision} alt="Mission" className="w-12 h-12" />
                <h3 className="font-bold text-xl bg-gradient-to-r from-blue-700 via-purple-600 to-red-500 bg-clip-text text-transparent">
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                Our vision is to build a good legacy by constantly placing the
                needs and objectives of our clients, our employees, and the
                communities we serve at the center of all we do. We ensure an
                effort to establish strong relationships, sustain a culture of
                respect and honesty in order to make sure that our efforts not
                only lead to success but also improve the lives of those we come
                into contact with.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="border-2 border-pink-300 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col">
              {/* Icon and Title Side by Side */}
              <div className="flex items-center gap-2 mb-4">
                <img src={Purpose} alt="Mission" className="w-12 h-12" />
                <h3 className="font-bold text-xl bg-gradient-to-r from-blue-700 via-purple-600 to-red-500 bg-clip-text text-transparent">
                  Our Purpose
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                Our purpose is in providing measurable and substantial
                achievements for our clients, thereby allowing their businesses
                to grow, succeed, and maintain an edge over their competitors.
                Additionally, we cultivate a culture of innovation, professional
                growth, and continuous development among our employees, ensuring
                that we not only provide excellence today but also adapt to the
                evolving needs of tomorrow.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*Image */}
      <div className="relative -mt-[30px] flex justify-end -z-10 px-70">
        <img src={Ellipse} alt="" className="opacity-100" />
      </div>
    </div>
  );
};

export default Foundationwork;
