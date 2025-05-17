import React from "react";
import Ellipse from "../../assets/Images/Ellipsee.png";
import Charater from "../../assets/WebDevelopIMG/Charater.png";

const WebAppCompany = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Blurred Background Gradient Effect */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div
          className="w-[600px] h-[300px] bg-gradient-to-br from-sky-300/30
          to-blue-200/20 rounded-full blur-3xl"
        ></div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between px-20 py-22 relative z-10">
        {/* Left Side - Text Content */}
        <div className="md:w-1/2">
          <p className="w-15 h-1 space-y-4 bg-gradient-to-r from-blue-400 via-violet-600 to-red-400 text-transparent mb-4"></p>
          <h1 className="text-4xl leading-relaxed">
            Searching for a{" "}
            <span className="font-bold">
              Reliable Web <br /> Application Development <br />
            </span>
            Company?
          </h1>
        </div>

        {/* Right Side Image / Content */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <div className="relative bg-white p-10 rounded-xl shadow-md w-full border border-pink-200  ">
            {/* Top Left Character Image */}
            <img
              src={Charater}
              alt="Character"
              className="absolute -left-30 -top-25 w-70 z-10 rotate-0 scale-x-[-1]"
            />

            {/* Bottom Right Decoration Image */}
            <img
              src={Ellipse}
              alt="Decoration"
              className="absolute -bottom-6 -right-6 w-20 z-0"
            />

            {/* Text Content */}
            <div className="relative z-10  p-6">
              <p className="text-gray-800 leading-relaxed">
                We prioritize an efficient workflow to guarantee accuracy
                throughout each phase of the development process. Partnering
                with us means you receive bespoke web applications designed to
                meet your unique business requirements. Our specialists adopt a
                mobile-first strategy, delivering an exceptional user experience
                on every device. </p>
                
                <p className="text-gray-800 leading-relaxed mt-1">If you're looking to create a minimum viable
                product (MVP) to explore your business idea or a proof of
                concept (PoC) to confirm your concept, we will collaborate with
                you closely. This partnership will help keep your project
                aligned from the beginning. We also incorporate tailored
                features into your app until it meets your needs. The
                personalized app can evolve and enhance as your business grows.
              </p>
            </div>
          </div>
          {/*Image */}
          <div className="relative inset-0 flex justify-center items-center mt-10">
            <img src={Ellipse} alt="" className="absolute right-30 mt-0 z-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebAppCompany;
