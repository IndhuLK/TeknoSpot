import React from "react";
import ContactIMG from "../../assets/Contact/ContactIMG.png";

const Conversation = () => {
  return (
   <div className="relative bg-white py-20 px-6 md:px-12">
  {/* Text container with higher z-index */}
  <div className="max-w-4xl mx-auto text-center relative z-20 md:text-left md:max-w-xl bottom-10">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-500 text-transparent bg-clip-text">
        Success starts with a conversation
      </span>
    </h2>
    <p className="text-gray-600 mb-6 max-w-xl mx-auto leading-relaxed tracking-wide md:mx-0">
      Lorem ipsum dolor sit amet consectetur. Ornare magnis faucibus facilisis eleifend non mi a. Tristique pellentesque facilisis lacus hendrerit scelerisque ut dignissim id. Ac orci in elit velit et. Id suspendisse in mollis ipsum pulvinar.
    </p>
    <p className="text-2xl md:text-3xl font-semibold text-black">Contact us now</p>
  </div>

  {/* Right-side image with lower z-index */}
  <div className="absolute bottom-0 right-4 md:right-40 top-auto md:top-0 z-10 opacity-70 w-32 md:w-auto">
    <img
      src={ContactIMG}
      alt="Contact Illustration"
      className="w-full h-auto"
    />
  </div>
</div>
  );
};

export default Conversation;
