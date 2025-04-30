import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Surya from "../../assets/Aboutimage/Surya.png";

const AboutTeknoSpot = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const points = [
    "We didn’t just build websites. We built trust.",
    "We didn’t just run ads. We ran campaigns that moved the needle.",
    "We didn’t just follow trends. We created tailored strategies that worked in the real world.",
  ];
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-10 py-5 bg-white">
      {/* Left Side - Text Content */}
      <div className="md:w-1/2">
        <h1 className="text-4xl font-light" data-aos="fade-down">
          About{" "}
          <span className="font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Tekno Spot
          </span>
        </h1>
        <p
          className="text-yellow-500 font-semibold mt-3"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          We Turn Your Digital Ideas into Reality
        </p>

        <p className="text-gray-700 text-base/8 -tracking-tight mt-10">
          Every great narrative has a modest beginning; ours began in a tiny
          room in the center of Trichy, where hopes were stronger than doubts,
          rather than in a luxurious office or with a large investment.
        </p>
        <p className="text-black text-base/8 -tracking-tight mt-2">
          Meet our Founder, Surya Prakash, an ambitious self-learner who
          believed that impact requires only purpose. With Expertise in Digital
          Marketing, he decided against waiting for a VC-backed fund or the
          perfect time. Instead, he opened his laptop, established a Wi-Fi
          connection, and turned a room into a battleground of energy, passion,
          and ideas.
        </p>

        {/* Bullet points and List */}
        <div className="bg-gradient-to-r rounded-md">
          <ul className="space-y-4">
            {points.map((point, index) => (
              <li key={index} className="flex items-start text-gray-700">
                <span className="mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 rotate-[-180]"
                  >
                    <defs>
                      <linearGradient
                        id="airplaneGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#8b5cf6" /> {/* Violet */}
                        <stop offset="100%" stopColor="#ec4899" /> {/* Pink */}
                      </linearGradient>
                    </defs>
                    <path
                      d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 
                    .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z"
                      fill="url(#airplaneGradient)"
                    />
                  </svg>
                </span>
                <p className="leading-relaxed">{point}</p>
              </li>
            ))}
          </ul>
        </div>
        {/* Gradient Background Blur Effect at Bottom Left */}
      <div className="absolute -bottom-28 -left-28 w-[400px] h-[400px] bg-gradient-to-br from-sky-200/30
       to-blue-200/20 rounded-full z-10 blur-xl"></div>
      </div>

      {/* Right side - Image Section */}

      <div className="md:w-1/2 flex justify-center mt-22 md:mt">
        <div className="relative w-[500px] h-[400px] rounded-xl overflow-hidden shadow-lg">
          <img src={Surya} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default AboutTeknoSpot;
