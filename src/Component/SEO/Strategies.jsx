import React from "react";
import SEOStrateige from "../../assets/SEO/SEOStrategie.png";
import Ellipse from "../../assets/Images/Ellipsee.png";

const Strategies = () => {
  return (
    <div className="px-6 md:px-20 relative">
      <div className="p-[2px] rounded-xl bg-gradient-to-tr from-purple-400 via-pink-700 to-violet-400">
        <div className="bg-gray-50 rounded-xl p-6 flex flex-col md:flex-row relative">
          {/* Left Text Section - 2/3 */}
          <div className="w-full md:w-2/3 text-center md:text-left z-10">
            <p className="w-15 h-1 space-y-4 bg-gradient-to-r from-blue-600 via-purple-500 to-red-700  text-transparent mb-2"></p>
            <h2 className="text-4xl">
              Our <span className="font-bold text-black">SEO</span>
              <span className="text-yellow-500 font-bold"> Strategies</span>
            </h2>
            <p className="text-gray-700 mt-4 text-md leading-relaxed">
              It's important to understand that SEO isn't a straightforward
              formula to follow. While there are established best practices,
              there's no one-size-fits-all approach that applies universally to
              every brand, company, or organization. Additionally, strategies
              that succeed in one sector may yield different results in another.
            </p>
            <p className="text-gray-700 mt-2 text-md leading-relaxed">
              At Tekno Spot, we've developed a systematic approach to optimize
              your website effectively. We begin with a thorough SEO audit to
              pinpoint areas that need enhancement. This audit helps us uncover
              technical SEO issues such as missing XML sitemaps, slow loading
              times, and broken links. We also suggest relevant keywords for
              your metadata and enhance the on-page content of your target
              pages. Following this, we create a backlink acquisition strategy
              to support the modifications made to your site, ultimately
              boosting its rankings and attracting targeted visitors.
            </p>
          </div>

          {/* Right Image Section - 1/3 */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end items-end relative z-10">
            <img
              src={SEOStrateige}
              alt="SEO Strategy"
              className="w-[240px] md:w-[280px] object-contain absolute bottom-2 md:bottom-0 top-19.5 md:right-6"
            />
          </div>
        </div>
      </div>
      {/*Image */}
      <div className="relative -mt-[30px] flex justify-end -z-10 px-10">
        <img src={Ellipse} alt="" className="opacity-100 mb-4" />
      </div>
    </div>
  );
};

export default Strategies;
