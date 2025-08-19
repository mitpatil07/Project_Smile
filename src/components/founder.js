import React, { useState, useEffect } from "react";
import { 
  Heart, Play, Download, ExternalLink, Mail, Star, Award, Users, BookOpen, ArrowRight, Share2,
  Facebook, Instagram, X, Linkedin, Youtube, Globe
} from "lucide-react";


import bookCover from "../assets/founder/bookimg.png";
import founderImg from "../assets/founder/founderimg.png";
import bookcover2 from "../assets/founder/book2.jpg";


const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("About Me");
  const [isVisible, setIsVisible] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth <= 1024);
    };
    
    // Set initial values
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const socialLinks = [
    { icon: Facebook, url: "https://www.facebook.com/people/Joe-Mittiga/61574825025092/", label: "Facebook", color: "#1877f2" },
    { icon: Instagram, url: "https://www.instagram.com/joemittiga2", label: "Instagram", color: "#e4405f" },
    { icon: X, url: "https://x.com/mittiga95743", label: "X", color: "#1da1f2" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/joemittiga/", label: "LinkedIn", color: "#0077b5" },
    { icon: Youtube, url: "https://www.youtube.com/@JoeMittiga", label: "YouTube", color: "#ff0000" },
    { icon: Mail, url: "https://mail.google.com/mail/u/0/?fs=1&to=Joe@JoeMittiga.com&tf=cm", label: "Website", color: "#6366f1" }
  ];

  const books = [
    {
      title: "HEALING ADDICTION: A Journey to Reclaim Your Inner Child",
      description: "This book is not just words - it is a mirror. A mirror to see your hidden pain, buried memories, and the little child inside you who is still waiting to be seen, loved, and healed. In this raw and real journey, Joe Mittiga shares how he broke free from the chains of addiction, shame, and abandonment - not by facing the past, but by facing it with love. If you have ever felt lost, numb, unworthy, or unloved, this book will feel like a conversation with your soul.",
      cover: bookCover,
      downloadLink: "https://drive.google.com/file/d/1TaGvzdEcFceDRK-as07JQsglsy3xlt5K/view",
      supportLink: "https://www.amazon.com/Healing-Addiction-Inner-Child-Break/dp/1963701496",
      downloadCount: "456",
      isComingSoon: false
    },
    {
      title: "WE!: finding community connection in a divided world",
      cover: bookcover2,
      downloadCount: "Coming Soon",
      isComingSoon: true
    },
  ];

  const videos = [
    { videoId: "f5acgJZm8p0", title: "South Africa Kids #1" },
    { videoId: "ih5BY8qNUOo", title: "South Africa #2" },
    { videoId: "BEgBNloPQdk", title: "South Africa #3" },
    { videoId: "m0SHEQVsZgk", title: "South Africa #4" },
    { videoId: "WFctHHslDEw", title: "South Africa #5" },
    { videoId: "Ma9rJVrT6xI", title: "South Africa #6" },
    { videoId: "Ie3umvTlnMM", title: "South Africa #7" },
    { videoId: "501ubTV-qeY", title: "South Africa #8" },
    { videoId: "Tb4aChLd6Rg", title: "South Africa #9" },
    { videoId: "7-76fz96ZJk", title: "South Africa #10" }
  ];

  const tabs = [
    { id: "About Me", icon: Users, label: "About Me" },
    { id: "Support", icon: Heart, label: "My Story" },
    { id: "Contact", icon: Mail, label: "Support" }
  ];

  const handleShare = async (video) => {
    const shareData = {
      title: video.title,
      text: `Check out this inspiring transformation story: ${video.description || ''}`,
      url: `https://www.youtube.com/watch?v=${video.videoId}`
    };

    try {
      if (navigator.share && navigator.canShare(shareData)) {
        await navigator.share(shareData);
      } else {
        const textToCopy = `${video.title}\nWatch: https://www.youtube.com/watch?v=${video.videoId}`;
        await navigator.clipboard.writeText(textToCopy);
        
        const notification = document.createElement('div');
        notification.textContent = 'Link copied to clipboard!';
        notification.className = 'fixed top-5 right-5 bg-green-500 text-white px-5 py-3 rounded-lg z-50 shadow-lg';
        document.body.appendChild(notification);
        
        setTimeout(() => {
          if (document.body.contains(notification)) {
            document.body.removeChild(notification);
          }
        }, 2000);
      }
    } catch (error) {
      console.log('Error sharing:', error);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg) scale(1);
            opacity: 0.3;
          }
          33% {
            transform: translateY(-30px) rotate(120deg) scale(1.1);
            opacity: 0.5;
          }
          66% {
            transform: translateY(20px) rotate(240deg) scale(0.9);
            opacity: 0.4;
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animate-float-delay-7 {
          animation: float 20s ease-in-out infinite;
          animation-delay: 7s;
        }

        .animate-float-delay-14 {
          animation: float 20s ease-in-out infinite;
          animation-delay: 14s;
        }

        .animate-slide-up {
          animation: slideInUp 1s ease-out both;
        }

        .animate-slide-up-delay-200 {
          animation: slideInUp 1s ease-out 0.2s both;
        }

        .animate-slide-up-delay-400 {
          animation: slideInUp 1s ease-out 0.4s both;
        }

        .animate-slide-up-delay-600 {
          animation: slideInUp 1s ease-out 0.6s both;
        }

        .animate-slide-up-delay-800 {
          animation: slideInUp 1s ease-out 0.8s both;
        }

        .animate-slide-up-delay-1000 {
          animation: slideInUp 1s ease-out 1s both;
        }

        .animate-pulse-custom {
          animation: pulse 4s ease-in-out infinite;
        }

        .bg-gradient-hero {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .bg-gradient-text {
          background: linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .bg-gradient-blue-purple {
          background: linear-gradient(to right, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .bg-gradient-orange {
          background: linear-gradient(135deg, #f9fafb 0%, #dbeafe 100%);
        }

        .bg-gradient-donation {
          background: linear-gradient(90deg, #f97316, #dc2626);
        }

        .bg-gradient-donate-btn {
          background: linear-gradient(135deg, #dc2626 0%, #f97316 100%);
        }

        .backdrop-blur-custom {
          backdrop-filter: blur(10px);
        }

        .backdrop-blur-heavy {
          backdrop-filter: blur(15px);
        }
      `}</style>
      
      <div className="font-sans leading-relaxed text-gray-800 overflow-x-hidden">
        {/* Hero Section */}
        <section className={`${isMobile ? 'min-h-screen mt-4 px-4' : 'min-h-screen mt-12'} bg-gradient-hero flex items-center relative overflow-hidden`}>
          {/* Floating Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className={`absolute ${isMobile ? 'w-48 h-48' : 'w-72 h-72'} top-[10%] left-[5%] rounded-full bg-white bg-opacity-10 blur-2xl animate-float`}></div>
            <div className={`absolute ${isMobile ? 'w-36 h-36' : 'w-48 h-48'} top-[60%] right-[10%] rounded-full bg-white bg-opacity-10 blur-2xl animate-float-delay-7`}></div>
            <div className={`absolute ${isMobile ? 'w-24 h-24' : 'w-36 h-36'} bottom-[20%] left-[15%] rounded-full bg-white bg-opacity-10 blur-2xl animate-float-delay-14`}></div>
          </div>

          <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
            <div className={`grid ${isMobile ? 'grid-cols-1 gap-8' : isTablet ? 'grid-cols-1 gap-16' : 'grid-cols-2 gap-16'} items-center`}>
              {/* Hero Image - Show first on mobile */}
              <div className={`flex justify-center animate-slide-up-delay-1000 ${isMobile ? 'order-1' : 'order-2'}`}>
                <div className={`relative ${isMobile ? 'w-60 h-60 mt-10' : 'w-80 h-80'}`}>
                  <div className="absolute -inset-5 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-60 blur-xl animate-pulse-custom"></div>
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white border-opacity-30 backdrop-blur-custom transition-transform duration-500">
                    <img
                      src={founderImg}
                      alt="Joe Mittiga - Founder"
                      className="w-full h-full object-cover transition-transform duration-700"
                    />
                  </div>
                  <div className={`absolute -bottom-2 -right-2 bg-white bg-opacity-95 backdrop-blur-custom ${isMobile ? 'px-4 py-2' : 'px-5 py-3'} rounded-full border-2 border-white border-opacity-30 flex items-center gap-2 font-bold text-gray-800 shadow-xl ${isMobile ? 'text-sm' : 'text-base'}`}>
                    <Award size={isMobile ? 16 : 20} />
                    <span>Founder</span>
                  </div>
                </div>
              </div>

              {/* Hero Content */}
              <div className={`text-white ${isMobile ? 'order-2 text-center' : 'order-1 text-left'}`}>
                <div className="inline-block bg-white bg-opacity-20 backdrop-blur-custom border border-white border-opacity-30 px-6 py-2 rounded-full text-sm font-semibold mb-4 md:mb-8 animate-slide-up-delay-200">
                  Global Speaker & Author
                </div>
                
                <h1 className={`${isMobile ? 'text-4xl' : 'text-6xl'} font-bold leading-tight mb-6 bg-gradient-text animate-slide-up-delay-400`}>
                  Joe Mittiga
                </h1>
                
                <p className={`${isMobile ? 'text-lg' : 'text-2xl'} font-semibold text-indigo-200 mb-4 animate-slide-up-delay-600`}>
                  Transformation Through Love
                </p>
                
                <p className={`${isMobile ? 'text-base max-w-full' : 'text-lg max-w-lg'} text-indigo-300 leading-relaxed mb-8 animate-slide-up-delay-800 text-justify`}>
                  Heart-centered CEO, bestselling author, and global speaker dedicated to guiding others on the path of healing, self-discovery, and authentic transformation.
                </p>

                {/* Social Media Icons */}
                <div className="mb-4">
                  <p className="text-sm font-semibold text-indigo-200 uppercase tracking-wide mb-4">
                    Connect With Joe
                  </p>
                  <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={social.label}
                          className="relative transition-all duration-300 ease-out transform hover:-translate-y-1 hover:scale-110"
                        >
                          <div 
                            className={`${isMobile ? 'w-10 h-10' : 'w-12 h-12'} rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300`}
                            style={{ backgroundColor: social.color }}
                          >
                            <IconComponent size={isMobile ? 16 : 20} />
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Books Section */}
        <section className={`${isMobile ? 'py-5' : 'pt-10'}`}>
          <div className="max-w-6xl mx-auto px-4 md:px-5">
            <div className={`text-center ${isMobile ? 'mb-8' : 'mb-16'}`}>
              <h2 className={`${isMobile ? 'text-3xl' : 'text-6xl'} font-bold mb-6 text-gray-800`}>
                Featured Books
              </h2>
              <p className={`${isMobile ? 'text-base' : 'text-xl'} text-gray-500 max-w-2xl mx-auto text-justify`}>
                Discover transformative knowledge through our carefully curated collection of books designed to inspire and empower your journey.
              </p>
            </div>

            {books.map((book, idx) => (
              <div key={idx} className={`bg-orange-50 ${isMobile ? 'rounded-2xl p-5 mb-5' : 'rounded-3xl p-10 mb-10'} shadow-xl border border-orange-200 transition-all duration-300 relative overflow-hidden`}>
                {book.isComingSoon ? (
                  // Coming Soon Book Layout
                  <div className={`flex items-center ${isMobile ? 'gap-5 flex-col' : 'gap-12 flex-row'} relative z-10`}>
                    <div className={`${isMobile ? 'flex-none' : 'flex-none w-72'} flex justify-center items-center`}>
                      <div className="relative">
                        <img src={book.cover} alt={book.title} className={`${isMobile ? 'w-48 h-72' : 'w-60 h-80'} object-cover rounded-2xl shadow-2xl transition-all duration-300 opacity-75`} />
                        <div className="absolute inset-0 bg-black bg-opacity-30 rounded-2xl flex items-center justify-center">
                          <div className="bg-white bg-opacity-95 px-6 py-3 rounded-full">
                            <span className="text-gray-800 font-bold text-lg">Coming Soon</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={`flex-1 ${isMobile ? 'text-center' : 'text-left'}`}>
                      <h3 className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-bold mb-5 text-gray-800 leading-tight`}>
                        {book.title}
                      </h3>
                      <p className={`${isMobile ? 'text-lg' : 'text-xl'} text-gray-600 font-semibold mb-6`}>
                        Stay tuned for this upcoming release!
                      </p>
                      
                      {/* Download Counter for Coming Soon */}
                      <div className={`flex items-center gap-2 ${isMobile ? 'justify-center' : 'justify-start'} text-gray-500`}>
                        <Download size={16} />
                        <span className="text-sm font-medium">{book.downloadCount}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Regular Book Layout with full info and buttons
                  <div className={`flex items-center ${isMobile ? 'gap-5 flex-col' : idx % 2 === 1 ? 'gap-12 flex-row-reverse' : 'gap-12 flex-row'} relative z-10`}>
                    <div className={`flex-1 ${isMobile ? 'text-center' : 'text-left'}`}>
                      <h5 className={`text-orange-600 tracking-wide uppercase mb-2 ${isMobile ? 'text-sm' : 'text-base'}`}>
                        MY GIFT TO YOU
                      </h5>
                      <h3 className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-bold mb-5 text-gray-800 leading-tight`}>
                        {book.title}
                      </h3>
                      <p className={`${isMobile ? 'text-sm' : 'text-base'} leading-relaxed text-gray-700 mb-8 text-justify`}>
                        {book.description}
                      </p>
                      <div className={`flex gap-4 ${isMobile ? 'flex-col' : 'flex-row'} items-center mb-4`}>
                        <a href={book.supportLink} className={`px-6 py-3 rounded-lg no-underline font-semibold transition-all duration-300 inline-flex items-center text-sm cursor-pointer border-none gap-2 justify-center bg-orange-600 text-white shadow-lg ${isMobile ? 'w-full' : ''}`}>
                          Support Author
                        </a>
                        <a href={book.downloadLink} className={`px-6 py-3 rounded-lg no-underline font-semibold transition-all duration-300 inline-flex items-center text-sm cursor-pointer gap-2 justify-center bg-transparent border-2 border-orange-600 text-orange-600 ${isMobile ? 'w-full' : ''}`}>
                          Download Free
                        </a>
                      </div>
                      
                      {/* Download Counter */}
                      <div className={`flex items-center gap-2 ${isMobile ? 'justify-center' : 'justify-start'} text-gray-600`}>
                        <Download size={16} />
                        <span className="text-sm font-medium">{book.downloadCount} Downloads</span>
                      </div>
                    </div>
                    <div className={`${isMobile ? 'flex-none' : 'flex-none w-72'} flex justify-center items-center`}>
                      <img src={book.cover} alt={book.title} className={`${isMobile ? 'w-48 h-72' : 'w-60 h-80'} object-cover rounded-2xl shadow-2xl transition-all duration-300`} />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Stories Section */}
        <section className={`bg-gray-50 ${isMobile ? 'py-5' : 'py-0'} relative`}>
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className={`text-center ${isMobile ? 'mb-8' : 'mb-16'}`}>
              <h2 className={`${isMobile ? 'text-3xl' : 'text-6xl'} font-bold mb-6 text-gray-800`}>
                Success <span className="bg-gradient-blue-purple">Stories</span>
              </h2>
              <p className={`${isMobile ? 'text-base' : 'text-xl'} text-gray-500 max-w-2xl mx-auto text-justify`}>
                Real transformations from real people who found their way back to wholeness
              </p>
            </div>

            <div className={`grid ${isMobile ? 'grid-cols-1 gap-6' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'} relative z-10`}>
              {videos.map((video, idx) => (
                <div key={idx} className="bg-white rounded-3xl overflow-hidden transition-all duration-700 shadow-lg relative border border-white border-opacity-80">
                  <a
                    href={`https://www.youtube.com/watch?v=${video.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block no-underline text-inherit"
                  >
                    <div className="relative overflow-hidden aspect-video bg-gradient-to-br from-gray-100 to-gray-200">
                      <img
                        src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-700"
                      />
                      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${isMobile ? 'w-14 h-14' : 'w-18 h-18'} bg-white bg-opacity-15 backdrop-blur-heavy rounded-full flex items-center justify-center transition-all duration-500 border-2 border-white border-opacity-30`}>
                        <Play color="white" size={isMobile ? 20 : 28} className="ml-1" />
                      </div>
                    </div>
                  </a>
                  <div className={`${isMobile ? 'p-6' : 'p-8'} relative flex justify-between items-start gap-4`}>
                    <div className="flex-1">
                      <h3 className={`${isMobile ? 'text-lg' : 'text-xl'} font-bold text-gray-800 mb-3 transition-colors duration-300 leading-snug m-0`}>
                        {video.title}
                      </h3>
                    </div>
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        handleShare(video);
                      }}
                      className={`flex-shrink-0 ${isMobile ? 'w-9 h-9' : 'w-11 h-11'} rounded-xl bg-gradient-to-br from-gray-50 to-gray-200 border border-gray-200 flex items-center justify-center cursor-pointer transition-all duration-300 text-gray-500 relative overflow-hidden`}
                      title="Share this story"
                    >
                      <Share2 size={isMobile ? 14 : 18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Mission */}
        <section className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-xl p-6 md:p-10 max-w-4xl mx-auto my-4 md:my-8 shadow-md text-center border border-red-300">
          <h3 className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-bold text-blue-900 mb-4`}>
            ❤️ Support the Mission
          </h3>
          <p className={`${isMobile ? 'text-sm' : 'text-base'} text-gray-800 mb-6 leading-relaxed text-justify`}>
            Your contribution helps us keep knowledge free and accessible for everyone, everywhere.
            Every donation, no matter the size, fuels our mission and empowers another individual to build a brighter future.
          </p>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 md:p-6 inline-block max-w-full">
            <p className={`mb-4 ${isMobile ? 'text-sm' : 'text-base'} text-amber-800 text-justify`}>
              Join thousands who have already contributed to this life-changing mission.
            </p>
            <a
              href="https://www.paypal.com/donate/?hosted_button_id=7QRRA68W82CF4"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block bg-gradient-donation text-white ${isMobile ? 'px-5 py-2 text-sm' : 'px-6 py-3 text-base'} rounded-lg no-underline font-bold transition-all duration-300`}
            >
              ❤️ Make a Donation
            </a>
          </div>
        </section>

        {/* Contact Section with Tabs */}
        <section className={`${isMobile ? 'py-4' : 'py-4'} bg-gray-50`}>
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className={`text-center ${isMobile ? 'mb-8' : 'mb-16'}`}>
              <h2 className={`${isMobile ? 'text-3xl' : 'text-6xl'} font-bold mb-6 text-gray-800`}>
                Connect with <span className="bg-gradient-blue-purple">Joe</span>
              </h2>
              <p className={`${isMobile ? 'text-base' : 'text-xl'} text-gray-500 max-w-2xl mx-auto text-justify`}>
                We're here to support you on your journey of transformation and healing
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* Tabs */}
              <div className={`flex flex-wrap justify-center ${isMobile ? 'gap-2 mb-8' : 'gap-4 mb-12'}`}>
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`flex items-center gap-3 ${isMobile ? 'px-4 py-2 text-sm' : 'px-6 py-3 text-base'} rounded-2xl font-semibold ${
                      activeTab === tab.id 
                        ? 'bg-blue-500 text-white shadow-lg transform scale-105' 
                        : 'bg-gray-200 text-gray-500'
                    } border-none cursor-pointer transition-all duration-300`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <tab.icon size={isMobile ? 16 : 20} />
                    {isMobile ? tab.label.split(' ')[0] : tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className={`bg-gradient-orange rounded-3xl ${isMobile ? 'p-6 mb-8' : 'p-8 md:p-12 mb-12'} shadow-xl border border-gray-200`}>
                {activeTab === "About Me" && (
                  <div>
                    <div className={`flex items-center gap-4 mb-8 ${isMobile ? 'justify-center' : 'justify-start'}`}>
                      <BookOpen size={isMobile ? 24 : 32} color="#3b82f6" />
                      <h3 className={`${isMobile ? 'text-xl' : 'text-3xl'} font-bold text-gray-800 m-0`}>About Joe Mittiga</h3>
                    </div>
                    <div className={`${isMobile ? 'text-base' : 'text-lg'} leading-relaxed text-gray-700 text-justify`}>
                      <p className="mb-6">
                        Joe Mittiga is a Global TEDx Speaker and the visionary Founder of ProjectSmile.world.
                        A conscious CEO and heart-centered entrepreneur, Joe is also a best-selling author and deeply respected spiritual guide.
                        With a presence that radiates both strength and compassion, he walks alongside others on the path of healing,
                        helping them reconnect with their power, purpose, and inner peace.
                      </p>
                      <p className="mb-6">
                        Joe's journey has been one of profound transformation. Through his own trials and awakenings,
                        he has cultivated a deep well of emotional insight and self love practices that now serve as a beacon
                        for those seeking clarity, connection, and growth. His message rooted in raw honesty and courageous vulnerability bridges
                        the gap between spiritual wisdom and real world success.
                      </p>
                      <p className="mb-6">
                        Whether on stage, in a coaching session, or through his writing, Joe inspires individuals and organizations alike
                        to rise into their highest potential. His teachings offer not just inspiration, but tangible tools for living a life
                        grounded in love, authenticity, and financial abundance.
                      </p>
                      <p className={`${isMobile ? 'text-lg' : 'text-xl'} font-semibold text-gray-800 mb-6`}>
                        Based in Atlanta, Georgia, Joe travels the world touching lives with his powerful story,
                        his unwavering dedication to service, and his commitment to helping others awaken to who they truly are.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === "Support" && (
                  <div>
                    <div className={`flex items-center gap-4 mb-8 ${isMobile ? 'justify-center' : 'justify-start'}`}>
                      <Star size={isMobile ? 24 : 32} color="#3b82f6" />
                      <h3 className={`${isMobile ? 'text-xl' : 'text-3xl'} font-bold text-gray-800 m-0`}>My Story of Transformation</h3>
                    </div>
                    <div className={`${isMobile ? 'text-base' : 'text-lg'} leading-relaxed text-gray-700 text-justify`}>
                      <p className={`${isMobile ? 'text-lg' : 'text-xl'} font-semibold text-red-600 mb-6`}>
                        There was a time when Joe Mittiga stood at the edge of life—barely able to work, self-worth shattered, and homelessness looming.
                      </p>
                      <p className="mb-6">
                        The world around him felt empty. On February 20, 1994, in a moment of desperation and surrender,
                        Joe looked up and whispered a simple prayer: <em>"God, if I'm not supposed to drink or do drugs today… I need Your help."</em>
                      </p>
                      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 md:p-6 rounded-lg my-8">
                        <p className={`m-0 text-yellow-800 italic ${isMobile ? 'text-sm' : 'text-base'}`}>
                          <strong>What happened next defied logic:</strong> An energy surged through his body, a tear fell from his left eye,
                          and just like that, the desire for alcohol and drugs vanished. That moment became the turning point.
                        </p>
                      </div>
                      <p className="mb-6">
                        From the ashes of addiction and codependency, Joe began an inner journey of radical self-discovery and healing.
                        He faced the deepest layers of pain and isolation, only to uncover a profound connection with the universe a connection that would become the foundation of his life's mission.
                      </p>
                      <p className={`${isMobile ? 'text-lg' : 'text-xl'} font-bold text-green-600 mb-6`}>
                        With over 31 years of sobriety, Joe Mittiga is no longer the man who once struggled to survive.
                      </p>
                      <p className="mb-6">
                        Today, he is a heart-centered CEO, author, and global speaker an evolved spiritual guide who walks alongside
                        others on the path of transformation. He doesn't just preach healing he lives it. His message is rooted in
                        vulnerability, honesty, and practical spiritual wisdom.
                      </p>
                      <p className="mb-6">
                        Joe is the founder of ProjectSmile.world, a platform where passion meets knowledge where emotional insight and
                        self-love meet the hunger for purpose. Whether on stage or in one-on-one conversations, Joe helps people rediscover
                        their inner power and lead lives filled with clarity, love, and abundance.
                      </p>
                      <p className="mb-6">
                        But his transformation didn't just touch his personal life it rippled into the business world.
                        Joe is also the founder and Chairman of the Board of Avion Energy Inc, a multi-million-dollar energy procurement company. Over the last 15 years, under his visionary leadership, Avion has grown into an industry leader with a 91% client retention rate. His commitment to operational excellence, innovation, and servant leadership has set a new standard in the energy sector.
                        Backed by patent-pending technology, Joe's strategic thinking has not only revolutionized energy procurement but created a culture of growth, collaboration, and purpose inside the company.
                      </p>
                      <p className="mb-6">
                        He has also authored two transformative books "WE!" and "Healing Addiction" both of which share the tools, mindset, and soul work that helped him and continue to inspire others around the world.
                        From near-homelessness to building multiple million-dollar businesses, from addiction to global impact Joe Mittiga's journey is a living testament to the power of surrender, healing, and the courage to evolve.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === "Contact" && (
                  <div>
                    <div className={`flex items-center gap-4 mb-8 ${isMobile ? 'justify-center' : 'justify-start'}`}>
                      <Heart size={isMobile ? 24 : 32} color="#3b82f6" />
                      <h3 className={`${isMobile ? 'text-xl' : 'text-3xl'} font-bold text-gray-800 m-0`}>Support the Mission</h3>
                    </div>
                    <div className={`${isMobile ? 'text-base' : 'text-lg'} leading-relaxed text-gray-700 text-justify`}>
                      <p className="mb-6">
                        Your contribution helps us keep knowledge free and accessible for everyone, everywhere.
                        Every donation, no matter the size, fuels our mission and empowers another individual to build a brighter future.
                      </p>
                      <div className="bg-gradient-to-br from-red-50 to-yellow-50 p-6 md:p-8 rounded-2xl border border-red-300 text-center mt-8">
                        <p className={`${isMobile ? 'text-sm' : 'text-base'} text-gray-800 mb-6 leading-relaxed text-justify`}>
                          Join thousands who have already contributed to this life-changing mission.
                        </p>
                        <a
                          href="https://www.paypal.com/donate/?hosted_button_id=7QRRA68W82CF4"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 ${isMobile ? 'px-3 py-3 text-base' : 'px-4 py-4 text-lg'} bg-gradient-donate-btn text-white rounded-lg no-underline font-bold transition-all duration-300 shadow-lg`}
                        >
                          <Heart size={isMobile ? 16 : 20} />
                          Make a Donation
                          <ArrowRight size={isMobile ? 16 : 20} />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;