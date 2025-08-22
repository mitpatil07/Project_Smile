import React, { useState, useEffect } from 'react';
import backgroundImage from "../assets/landingpage/bgimg.png";
import Aftersection from "../components/landingsection"

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <div
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`
        }}
      >
        {/* Additional overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ease-out ${isVisible
            ? 'transform translate-y-0 opacity-100'
            : 'transform translate-y-8 opacity-0'
            }`}>
            {/* Main Heading */}
            <h1 className="text-4xl mt-10 sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
              style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 2px 10px rgba(0, 0, 0, 0.6)' }}>
              Matching the God in Your Heart
              <br />
              <span className="text-orange-500"
                style={{ textShadow: '0 4px 20px rgba(255, 107, 0, 0.5), 0 2px 10px rgba(0, 0, 0, 0.8)' }}>
                with the Wisdom in Your Head
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-white/95 font-light mb-10 tracking-wide"
              style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.7)' }}>
              Enrich • Encourage • Empower
            </p>

            {/* Action Button */}
            <div className="flex justify-center mb-12">
              <a 
                className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-xl min-w-[200px]"
                style={{
                  boxShadow: '0 8px 30px rgba(255, 107, 0, 0.4), 0 4px 15px rgba(0, 0, 0, 0.3)'
                }}
              >
                <span className="relative z-10"> <a href='https://www.youtube.com/watch?v=-BmRP--B_j8' target='\blank'>  Join The Live Stream</a></span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>

            {/* Schedule Info Card */}
            <div className="max-w-lg mx-auto backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20 shadow-xl">
              <div className="flex flex-col items-center space-y-2">
                <span className="text-sm text-orange-400 font-semibold uppercase tracking-wide"
                  style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)' }}>
                  Next Session:
                </span>
                <span className="text-lg text-white font-medium text-center"
                  style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.6)' }}>
                  1st & 15th of every month
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Aftersection />
    </div>
  );
};

export default LandingPage;