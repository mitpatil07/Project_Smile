import React from "react";
import { Twitter, Facebook, Instagram, Heart } from "lucide-react";

const FOOTER_CONFIG = {
  brand: {
    logo: "L",
    name: "Smile",
    tagline: "Matching the God in Your Heart with the Wisdom in Your Head",
    mission: "Enrich • Encourage • Empower"
  },
  navigation: [
    { label: "Home", path: "/" },
    { label: "Founder", path: "/founder" },
    { label: "E-Books", path: "/ebooks" },
    { label: "Training", path: "/training" },
    { label: "Education", path: "/education" }
  ],
  social: [
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/joemittiga",
      hoverColor: "hover:bg-blue-500"
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/people/Joe-Mittiga/61574825025092/",
      hoverColor: "hover:bg-blue-600"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/joemittiga2",
      hoverColor: "hover:bg-pink-500"
    }
  ],
  cta: {
    text: "Join The Mission",
    url: "https://www.paypal.com/donate/?hosted_button_id=7QRRA68W82CF4"
  },
  copyright: "© 2025 Smile Foundation. All Rights Reserved"
};

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
      
      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          
          {/* Brand Section - Takes more space on large screens */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <div className="max-w-sm mx-auto lg:mx-0">
              {/* Logo */}
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg border-2 border-white/20 transform hover:scale-105 transition-transform duration-300">
                  {FOOTER_CONFIG.brand.logo}
                </div>
                <span className="text-3xl font-bold text-white drop-shadow-lg">
                  {FOOTER_CONFIG.brand.name}
                </span>
              </div>
              
              {/* Tagline */}
              <p className="text-white/90 text-base leading-relaxed mb-4 font-medium">
                {FOOTER_CONFIG.brand.tagline}
              </p>
              
              {/* Mission Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 backdrop-blur-md rounded-full border border-orange-400/30 text-sm font-semibold text-white shadow-lg">
                <Heart className="text-red-400 animate-pulse w-4 h-4" />
                <span>{FOOTER_CONFIG.brand.mission}</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <h3 className="text-xl font-semibold text-white mb-6 relative">
              Quick Links
              <div className="absolute bottom-0 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 w-8 h-0.5 bg-orange-400 rounded-full mt-2"></div>
            </h3>
            <nav>
              <ul className="space-y-3">
                {FOOTER_CONFIG.navigation.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.path}
                      className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block relative group font-medium"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          
          {/* Connect Section */}
          <div className="lg:col-span-4 text-center lg:text-left">
            <h3 className="text-xl font-semibold text-white mb-6 relative">
              Connect With Us
              <div className="absolute bottom-0 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 w-8 h-0.5 bg-orange-400 rounded-full mt-2"></div>
            </h3>
            
            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-3 mb-6">
              {FOOTER_CONFIG.social.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1 border-2 border-white/20 ${social.hoverColor} hover:shadow-lg hover:shadow-current/25`}
                  >
                    <IconComponent className="text-lg" />
                  </a>
                );
              })}
            </div>
            
            {/* CTA Button */}
            <div className="w-full lg:w-auto">
              <a
                href={FOOTER_CONFIG.cta.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center w-full lg:w-auto px-8 py-3 bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-full text-white font-semibold transition-all duration-300 hover:bg-orange-500/30 hover:border-orange-400/50 hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                <span className="relative">{FOOTER_CONFIG.cta.text}</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Decorative Divider */}
        <div className="flex items-center justify-center my-10">
          <div className="h-px w-20 sm:w-32 bg-gradient-to-r from-transparent to-white/50"></div>
          <div className="w-2 h-2 bg-orange-400 rounded-full mx-4 shadow-lg shadow-orange-400/50"></div>
          <div className="h-px w-20 sm:w-32 bg-gradient-to-l from-transparent to-white/50"></div>
        </div>
        
        {/* Bottom Section */}
        <div className="text-center">
          <p className="text-white/70 text-sm font-medium">
            {FOOTER_CONFIG.copyright}
          </p>
        </div>
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-ping animation-delay-1000"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-orange-400/40 rounded-full animate-ping animation-delay-2000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-white/10 rounded-full animate-ping animation-delay-3000"></div>
      </div>
    </footer>
  );
};

export default Footer;