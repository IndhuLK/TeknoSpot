import React, {useState} from 'react'
import GITContact from '../../Component/Contact/GITContact'

const Sucess = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    
<div className="bg-white py-10">
  <div className="bg-[#faf3e4] py-6 px-4 flex flex-col md:flex-row justify-center items-center gap-6 mx-auto max-w-7xl text-center md:text-left rounded-md">
    <p className="text-gray-800 text-xl md:text-3xl">
      All that is required is <span className="font-bold text-black">one click for success</span>
    </p>
    <button onClick={() => setShowPopup(true)}
    className="bg-blue-600 hover:bg-blue-700 text-white text-base md:text-xl font-semibold py-2 px-6 rounded-md shadow-md mt-4 md:mt-0">
      Get a Quote !
    </button>
    {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
          <div className="relative max-w-5xl w-full">
            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 rounded-full w-8 h-8 flex items-center justify-center z-50"
            >
              &times;
            </button>

            {/* GITContact Component */}
            <GITContact />
          </div>
        </div>
      )}
  </div>
</div>
  )
}

export default Sucess