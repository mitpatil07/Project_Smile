import React, { useState } from 'react';
import { Heart, Brain, Globe, Users, BookOpen, Target, Diamond, HelpCircle, ChevronDown, ChevronUp, Smile } from 'lucide-react';
import aviraltomar from "../assets/founder/tomar.png"
import miteshpatil from "../assets/founder/mitesh.png"
import founderimg from "../assets/founder/joemittunga.jpg"
import ayushtomer from "../assets/founder/ayushtomar.png"

  
  const AboutPage = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [activeCard, setActiveCard] = useState(null);
    const [expandedFaq, setExpandedFaq] = useState(null);
  
    const coreValues = [
      {
        title: 'Love',
        description: 'Recognizing and honoring the inherent worth and potential in every individual.',
        Icon: Heart
      },
      {
        title: 'Wisdom',
        description: 'Providing practical, actionable knowledge that empowers and enlightens.',
        Icon: Brain
      },
      {
        title: 'Access',
        description: 'Ensuring that education and resources are freely and easily available to all.',
        Icon: Globe
      },
      {
        title: 'Unity',
        description: 'Fostering a global community of learners, sharers, and supporters working together.',
        Icon: Users
      }
    ];
  
    const founder = {
      name: 'Joe Mittiga',
      role: 'Founder',
      image: founderimg ,
      description: 'As Founder, Joe envisioned The Smile from witnessing the untapped potential in every heart, creating a movement to bridge love with wisdom and empower lives globally.'
    };
  
    const president = {
      name: 'Avirat Tomar',
      role: 'President',
      image: aviraltomar,
      description: 'As President, Avirat leads The Smile with a passion for connecting people to empowering knowledge, driving the organization\'s mission to unlock human potential worldwide.'
    };
  
    const vicePresident = {
      name: 'Mitesh Patil',
      role: 'Project Manager',
      image: miteshpatil,
      description: 'Mitesh, as Project Manager, turns ideas into results with clarity, focus, and impact.'
    };
  
    const teamMember = {
      name: 'Ayush Tomer',
      role: 'Ai Expert',
      image: ayushtomer,
      description: 'Driving AI innovation and operational excellence through intelligent solutions and seamless execution.'
    };
    
  
    const faqs = [
      {
        question: "What is The Smile?",
        answer: "We are a global initiative dedicated to providing free access to knowledge and skill training, believing that wisdom can empower individuals to match the love and potential already within them."
      },
      {
        question: "How can I contribute?",
        answer: "You can contribute by suggesting free eBooks, sharing your smile, volunteering your skills, or donating to support our operational costs."
      },
      {
        question: "Are all resources truly free?",
        answer: "Yes, all eBooks and core skill training modules are provided completely free of charge. Our mission is to ensure knowledge is accessible to everyone."
      },
      {
        question: "How does The Smile ensure accessibility?",
        answer: "We break down barriers by providing quality, affordable care and programs. We focus on making our services accessible to people from all backgrounds and economic situations."
      },
      {
        question: "Where is The Smile located?",
        answer: "While our team works from various locations, we focus on creating impact in communities worldwide. Our programs are designed to reach people wherever they are."
      },
      {
        question: "How can I contact The Smile team?",
        answer: "You can reach out to our team through our social media channels or contact our core team members directly for specific inquiries and collaboration opportunities."
      }
    ];
  
    const handleCardHover = (index, type) => {
      setHoveredCard(`${type}-${index}`);
    };
  
    const handleCardLeave = () => {
      setHoveredCard(null);
    };
  
    const toggleFaq = (index) => {
      setExpandedFaq(expandedFaq === index ? null : index);
    };
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 font-sans">
        {/* Hero Section */}
        <div className="relative mt-8 md:mt-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white overflow-hidden min-h-[300px] md:min-h-[350px] lg:min-h-[400px] flex items-center justify-center">
          {/* Hero Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-orange-500/10"></div>
          
          {/* Hero Content */}
          <div className="relative text-center mt-10 px-4 max-w-[90%] z-20">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/20 rounded-full mb-4 md:mb-6 backdrop-blur-sm animate-pulse">
              <Smile size={20} className="sm:w-6 sm:h-6 md:w-8 md:h-8" color="white" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 drop-shadow-lg leading-tight">
              About The Project Smile
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed opacity-90 max-w-2xl mx-auto">
              Discover our story, vision, and the passionate people driving our mission forward.
            </p>
            <div className="w-16 sm:w-20 md:w-24 lg:w-32 h-1 bg-gradient-to-r from-orange-500 to-blue-500 mx-auto mt-4 md:mt-6 rounded-full"></div>
          </div>
  
          {/* Floating Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-white/10 rounded-full top-[20%] left-[10%] animate-bounce" style={{animationDuration: '6s'}}></div>
            <div className="absolute w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 bg-white/10 rounded-full top-[60%] right-[15%] animate-bounce" style={{animationDuration: '8s', animationDirection: 'reverse'}}></div>
            <div className="absolute w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 bg-white/10 rounded-full top-[40%] left-[80%] animate-bounce" style={{animationDuration: '7s'}}></div>
          </div>
        </div>
  
        <div className="max-w-full px-3 sm:px-4 md:px-6 lg:px-12 xl:px-16 py-6 md:py-12 lg:py-16 mx-auto">
          {/* Our Story */}
          <section className="mb-12 md:mb-16 lg:mb-24">
            <div className="flex flex-col sm:flex-row items-center justify-center mb-6 md:mb-12 gap-2 sm:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-blue-500 to-orange-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <BookOpen size={20} className="md:w-6 md:h-6" color="white" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center">Our Story</h2>
            </div>
            
            <div className="relative bg-white rounded-2xl md:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12 border border-gray-100 transition-all duration-300 max-w-[95%] md:max-w-[90%] mx-auto overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-orange-500"></div>
              <div className="leading-relaxed">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-5 leading-relaxed">
                  The Smile began with a simple observation during a journey across diverse cultures and landscapes: even in the face of profound 
                  hardship, the human spirit shines through with an innate goodness, a radiant smile that reflects a deep, often untapped, wellspring of love 
                  and potential.
                </p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-5 leading-relaxed">
                  Our founder witnessed firsthand individuals possessing immense inner wealth – a heart full of God's love – yet lacking the practical 
                  knowledge or skills to transform their circumstances. This sparked a powerful realization: what if we could match this inherent love with
                  <span className="font-semibold text-blue-500"> accessible wisdom? What if knowledge could be the bridge to unlock this potential?</span>
                </p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-0 leading-relaxed">
                  From this insight, The Smile was born. Not as a charity offering temporary relief, but as a catalyst for empowerment, providing the tools for 
                  self-sufficiency and sustainable growth. <span className="font-semibold text-blue-500">We believe that by equipping individuals with knowledge, we are not just addressing material 
                  needs, but nurturing the seeds of change that lie within every heart.</span>
                </p>
              </div>
            </div>
          </section>
  
          {/* The Vision */}
          <section className="mb-12 md:mb-16 lg:mb-24">
            <div className="flex flex-col sm:flex-row items-center justify-center mb-6 md:mb-12 gap-2 sm:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-orange-300 to-blue-500 flex items-center justify-center shadow-lg shadow-orange-500/30">
                <Target size={20} className="md:w-6 md:h-6" color="white" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center">The Vision</h2>
            </div>
            
            <div className="relative bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl md:rounded-3xl shadow-2xl shadow-blue-500/30 p-4 sm:p-6 md:p-8 lg:p-12 text-center transition-all duration-300 max-w-[95%] md:max-w-[90%] mx-auto overflow-hidden">
              <div className="absolute top-1/2 left-1/2 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-gradient-radial from-white/10 to-transparent rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{animationDuration: '4s'}}></div>
              <p className="relative text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed font-medium text-white z-10">
                "We envision a world of smiles, laughter, learning & wisdom that cultivates hearts, 
                nurtures minds with wisdom and knowledge, empowering individuals to build brighter futures 
                for themselves and their communities."
              </p>
            </div>
          </section>
  
          {/* Core Values */}
          <section className="mb-12 md:mb-16 lg:mb-24">
            <div className="flex flex-col sm:flex-row items-center justify-center mb-6 md:mb-12 gap-2 sm:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-blue-400 to-orange-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Diamond size={20} className="md:w-6 md:h-6" color="white" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center">Core Values</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-[95%] lg:max-w-[90%] mx-auto">
              {coreValues.map((value, index) => {
                const { Icon } = value;
                const isHovered = hoveredCard === `value-${index}`;
                return (
                  <div 
                    key={index} 
                    className={`bg-white rounded-xl md:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 text-center transition-all duration-300 border border-gray-100 cursor-pointer relative overflow-hidden ${
                      isHovered ? 'transform -translate-y-2 scale-105 shadow-2xl shadow-blue-500/30' : ''
                    }`}
                    onMouseEnter={() => handleCardHover(index, 'value')}
                    onMouseLeave={handleCardLeave}
                  >
                    <div className={`mb-4 md:mb-6 transition-all duration-300 flex justify-center ${
                      isHovered ? 'transform scale-125 rotate-6' : ''
                    }`}>
                      <Icon size={32} color={isHovered ? '#fe960c' : '#2d89e5'} />
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </section>
  
          {/* Leadership Team */}
          <section className="mb-12 md:mb-16 lg:mb-24">
            <div className="flex flex-col sm:flex-row items-center justify-center mb-6 md:mb-12 gap-2 sm:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-orange-300 to-blue-500 flex items-center justify-center shadow-lg shadow-orange-500/30">
                <Users size={20} className="md:w-6 md:h-6" color="white" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center">Leadership Team</h2>
            </div>
  
            {/* Founder and President in one row */}
            <div className="mb-12 md:mb-16 lg:mb-20">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-600 mb-6 md:mb-8">Leadership</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
                {/* Founder Card */}
                <div 
                  className={`bg-white rounded-xl md:rounded-2xl shadow-lg p-6 md:p-8 text-center transition-all duration-300 border border-gray-100 cursor-pointer ${
                    hoveredCard === 'founder-0' ? 'transform -translate-y-2 shadow-2xl shadow-orange-500/25' : ''
                  }`}
                  onMouseEnter={() => handleCardHover(0, 'founder')}
                  onMouseLeave={handleCardLeave}
                >
                  <div className="relative inline-block mb-4 md:mb-6">
                    <img 
                      src={founder.image}
                      alt={founder.name}
                      className={`w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full object-cover shadow-md mx-auto transition-all duration-300 border-2 border-gray-100 ${
                        hoveredCard === 'founder-0' ? 'transform scale-110 shadow-lg' : ''
                      }`}
                    />
                    <div className="absolute -bottom-1 -right-1 md:bottom-0 md:right-0 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-orange-500 to-blue-500 rounded-full flex items-center justify-center border-2 md:border-3 border-white">
                      <Smile size={12} className="md:w-4 md:h-4" color="white" />
                    </div>
                  </div>
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2">{founder.name}</h4>
                  <p className="text-orange-500 font-medium text-base md:text-lg mb-4">{founder.role}</p>
                  <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6">{founder.description}</p>
                  <div className="flex justify-center gap-3 md:gap-4 flex-wrap">
                    <a href='https://www.linkedin.com/in/aviral-tomarrr/' target='_blank' className="px-3 py-2 md:px-4 md:py-2 bg-gray-100 text-orange-500 rounded-full text-xs sm:text-sm md:text-base font-medium hover:bg-orange-500 hover:text-white transition-all duration-300 hover:-translate-y-1">
                      LinkedIn
                    </a>
                    <a href='https://www.linkedin.com/in/joemittiga/' target='_blank' className="px-3 py-2 md:px-4 md:py-2 bg-gray-100 text-orange-500 rounded-full text-xs sm:text-sm md:text-base font-medium hover:bg-orange-500 hover:text-white transition-all duration-300 hover:-translate-y-1">
                      Instagram
                    </a>
                  </div>
                </div>
  
                {/* President Card */}
                <div 
                  className={`bg-white rounded-xl md:rounded-2xl shadow-lg p-6 md:p-8 text-center transition-all duration-300 border border-gray-100 cursor-pointer ${
                    hoveredCard === 'president-0' ? 'transform -translate-y-2 shadow-2xl shadow-blue-500/25' : ''
                  }`}
                  onMouseEnter={() => handleCardHover(0, 'president')}
                  onMouseLeave={handleCardLeave}
                >
                  <div className="relative inline-block mb-4 md:mb-6">
                    <img 
                      src={president.image}
                      alt={president.name}
                      className={`w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full object-cover shadow-md mx-auto transition-all duration-300 border-2 border-gray-100 ${
                        hoveredCard === 'president-0' ? 'transform scale-110 shadow-lg' : ''
                      }`}
                    />
                    <div className="absolute -bottom-1 -right-1 md:bottom-0 md:right-0 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center border-2 md:border-3 border-white">
                      <Smile size={12} className="md:w-4 md:h-4" color="white" />
                    </div>
                  </div>
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2">{president.name}</h4>
                  <p className="text-blue-500 font-medium text-base md:text-lg mb-4">{president.role}</p>
                  <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6">{president.description}</p>
                  <div className="flex justify-center gap-3 md:gap-4 flex-wrap">
                    <a href='https://www.linkedin.com/in/aviral-tomarrr/' target='_blank' className="px-3 py-2 md:px-4 md:py-2 bg-gray-100 text-blue-500 rounded-full text-xs sm:text-sm md:text-base font-medium hover:bg-blue-500 hover:text-white transition-all duration-300 hover:-translate-y-1">
                      LinkedIn
                    </a>
                    <a href='https://www.instagram.com/aviraltomarofficial/' target='_blank' className="px-3 py-2 md:px-4 md:py-2 bg-gray-100 text-blue-500 rounded-full text-xs sm:text-sm md:text-base font-medium hover:bg-blue-500 hover:text-white transition-all duration-300 hover:-translate-y-1">
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Project Manager and Team Member */}
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-600 mb-6 md:mb-8">Team Members</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {/* Project Manager Card */}
                <div 
                  className={`bg-white rounded-xl shadow-md p-4 md:p-6 text-center transition-all duration-300 border border-gray-100 cursor-pointer ${
                    hoveredCard === 'vp-0' ? 'transform -translate-y-2 shadow-xl shadow-orange-500/25' : ''
                  }`}
                  onMouseEnter={() => handleCardHover(0, 'vp')}
                  onMouseLeave={handleCardLeave}
                >
                  <div className="relative inline-block mb-3 md:mb-4">
                    <img 
                      src={vicePresident.image}
                      alt={vicePresident.name}
                      className={`w-20 h-20 md:w-28 md:h-28 rounded-full object-cover shadow-md mx-auto transition-all duration-300 border-2 border-gray-100 ${
                        hoveredCard === 'vp-0' ? 'transform scale-110 shadow-lg' : ''
                      }`}
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 md:w-7 md:h-7 bg-gradient-to-br from-orange-500 to-blue-500 rounded-full flex items-center justify-center border-2 border-white">
                      <Smile size={10} className="md:w-3 md:h-3" color="white" />
                    </div>
                  </div>
                  <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-1">{vicePresident.name}</h4>
                  <p className="text-orange-500 font-medium text-sm md:text-base mb-3">{vicePresident.role}</p>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed mb-4">{vicePresident.description}</p>
                  <div className="flex justify-center gap-2 md:gap-3 flex-wrap">
                    <a href='https://www.instagram.com/mitesh_9207?igsh=YmZocTd6cWc4bjZs&utm_source=qr' target='_blank' className="px-2 py-1 md:px-3 md:py-2 bg-gray-100 text-orange-500 rounded-full text-xs md:text-sm font-medium hover:bg-orange-500 hover:text-white transition-all duration-300 hover:-translate-y-1">
                      Instagram
                    </a>
                  </div>
                </div>
  
                {/* New Team Member Card */}
                <div 
                  className={`bg-white rounded-xl shadow-md p-4 md:p-6 text-center transition-all duration-300 border border-gray-100 cursor-pointer ${
                    hoveredCard === 'team-0' ? 'transform -translate-y-2 shadow-xl shadow-blue-500/25' : ''
                  }`}
                  onMouseEnter={() => handleCardHover(0, 'team')}
                  onMouseLeave={handleCardLeave}
                >
                  <div className="relative inline-block mb-3 md:mb-4">
                    <img 
                      src={teamMember.image}
                      alt={teamMember.name}
                      className={`w-20 h-20 md:w-28 md:h-28 rounded-full object-cover shadow-md mx-auto transition-all duration-300 border-2 border-gray-100 ${
                        hoveredCard === 'team-0' ? 'transform scale-110 shadow-lg' : ''
                      }`}
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 md:w-7 md:h-7 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center border-2 border-white">
                      <Smile size={10} className="md:w-3 md:h-3" color="white" />
                    </div>
                  </div>
                  <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-1">{teamMember.name}</h4>
                  <p className="text-blue-500 font-medium text-sm md:text-base mb-3">{teamMember.role}</p>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed mb-4">{teamMember.description}</p>
                  <div className="flex justify-center gap-2 md:gap-3 flex-wrap">
                    <a href='https://www.linkedin.com/in/ayush-kumar-207241347?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank' className="px-2 py-1 md:px-3 md:py-2 bg-gray-100 text-blue-500 rounded-full text-xs md:text-sm font-medium hover:bg-blue-500 hover:text-white transition-all duration-300 hover:-translate-y-1">
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

        {/* FAQ Section */}
        <section className="mb-12 md:mb-16 lg:mb-24">
          <div className="flex flex-col sm:flex-row items-center justify-center mb-6 md:mb-12 gap-2 sm:gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-blue-400 to-orange-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
              <HelpCircle size={20} className="md:w-6 md:h-6" color="white" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center">Frequently Asked Questions</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => {
              const isExpanded = expandedFaq === index;
              return (
                <div key={index} className="mb-3 md:mb-4 rounded-lg md:rounded-xl overflow-hidden shadow-md">
                  <div 
                    className={`p-3 sm:p-4 md:p-6 cursor-pointer flex justify-between items-center font-semibold transition-all duration-300 border border-gray-200 text-sm sm:text-base md:text-lg ${
                      isExpanded 
                        ? 'bg-blue-400 text-white' 
                        : 'bg-white text-gray-800 hover:bg-orange-400 hover:text-white'
                    }`}
                    onClick={() => toggleFaq(index)}
                  >
                    <span>{faq.question}</span>
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                  <div className={`bg-gray-50 transition-all duration-300 overflow-hidden ${
                    isExpanded ? 'max-h-48 opacity-100 p-3 sm:p-4 md:p-6' : 'max-h-0 opacity-0 p-0'
                  }`}>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;