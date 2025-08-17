import React from "react";
import { Brain, Play, ArrowRight } from "lucide-react";

import aviraltomar from "../assets/founder/tomar.png";
import joe from "../assets/founder/founderimg.png";

const mentors = [
  {
    name: "Joe Mittiga",
    role: "An inspiring figure sharing wisdom and knowledge on personal development and success principles.",
    img: joe,
    link: "https://www.youtube.com/playlist?list=PLFGAQbILBvByY1AlrLy0d98xcz1r4LLAD",
  },
  {
    name: "Aviral Tomar",
    role: "A motivational voice guiding people towards achieving their goals and unlocking their potential.",
    img: aviraltomar,
    link: "https://www.youtube.com/playlist?list=PLFGAQbILBvBy9yEprNXPxz0R-PTASyTf4",
  },
];

export default function MindsetSection() {
  return (
    <section className="mt-12 px-8 py-16 bg-gradient-to-br from-slate-50 to-slate-200 font-sans relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-orange-500/5 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="bg-blue-600 rounded-3xl p-12 mb-16 text-center relative overflow-hidden shadow-2xl shadow-blue-600/20">
          {/* Header decoration */}
          <div className="absolute -top-1/2 -right-1/5 w-48 h-48 bg-white/10 rounded-full animate-pulse"></div>
          
          <div className="relative z-20">
            {/* Icon wrapper */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/15 rounded-2xl mb-6 backdrop-blur-lg border border-white/20">
              <Brain className="text-3xl text-yellow-400 animate-pulse" />
            </div>
            
            <h1 className="text-5xl font-extrabold mb-4 text-white bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Mindset & Inspiration
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Fuel your mind with wisdom from great thinkers and leaders who've transformed millions of lives.
            </p>
            
          </div>
        </div>

        {/* Enhanced Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {mentors.map((mentor, index) => (
            <div 
              key={index}
              className="bg-white/95 rounded-2xl overflow-hidden relative transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-105 border border-white/20 backdrop-blur-xl shadow-lg hover:shadow-2xl group"
            >
              {/* Top gradient border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 bg-[length:200%_100%] animate-pulse"></div>
              
              {/* Card background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-400 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              
              <div className="p-8 text-center relative z-10">
                {/* Enhanced Image */}
                <div className="w-48 h-48 rounded-full mx-auto mb-6 relative bg-gradient-to-br from-orange-500 to-orange-400 p-1 transition-transform duration-300 group-hover:scale-105">
                  <img 
                    src={mentor.img} 
                    alt={mentor.name}
                    className="w-full h-full rounded-full object-cover transition-all duration-300"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-orange-500/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="text-white text-2xl" />
                  </div>
                </div>

                {/* Text Content */}
                <h3 className="text-blue-800 text-2xl font-bold mb-3">
                  {mentor.name}
                </h3>
                
                <p className="text-slate-600 text-base mb-8 leading-relaxed min-h-[80px]">
                  {mentor.role}
                </p>

                {/* Enhanced Button */}
                <a 
                  href={mentor.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-400 text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 relative overflow-hidden shadow-lg shadow-orange-500/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/40 group/btn"
                >
                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500"></div>
                  
                  <Play className="text-lg" />
                  <span>Watch on YouTube</span>
                  <ArrowRight className="text-sm transition-transform duration-300 group-hover/btn:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center p-12 bg-white/80 rounded-2xl backdrop-blur-xl border border-white/30">
          <h2 className="text-4xl font-extrabold text-blue-800 mb-4">
            Ready to Transform Your Mindset?
          </h2>
          
          <p className="text-xl text-slate-600 mb-8">
            Join thousands who've already started their journey to success
          </p>
          
          <button className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-10 py-5 rounded-full text-lg font-semibold cursor-pointer transition-all duration-300 shadow-lg shadow-blue-600/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/40 group">
            Start Your Journey
            {/* <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" /> */}
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}