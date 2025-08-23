import React, { useState, useEffect } from "react";
import { Download, BookOpen, Play, Pause, Heart, Star, Users, Award, Clock, Brain, Globe, ChevronRight } from "lucide-react";

// Keep your original local image imports
import img1 from "../assets/landingpage/img1.png";
import img2 from "../assets/landingpage/img2.png";
import img3 from "../assets/landingpage/img3.jpg";
import img4 from "../assets/landingpage/img4.png";
import img5 from "../assets/landingpage/img5.jpg";
import img6 from "../assets/hopeframes/i5.jpg";
import img7 from "../assets/hopeframes/i17.jpg";
import img8 from "../assets/hopeframes/i18.jpg";
import img9 from "../assets/hopeframes/i11.jpg";
import img10 from "../assets/hopeframes/i13.jpg";
import img11 from "../assets/hopeframes/img.jpg"

function YouTubeSection({ videoId = "-BmRP--B_j8" }) {
    const [timeLeft, setTimeLeft] = useState({
        days: 15, hours: 0, minutes: 0, seconds: 0
    });

    const images = [img11, img2, img3, img4, img5, img6, img7, img8, img9, img10, img1];

    useEffect(() => {
        // FIXED EVENT DATE - This is your exact target date
        // Set to show 12 days, 22 hours, 38 minutes, 21 seconds from August 19, 2025
        const FIXED_EVENT_DATE = new Date('2025-09-01 18:38:21'); // September 1, 2025 at 6:38:21 PM
        
        const timer = setInterval(() => {
            const now = new Date();
            const diff = FIXED_EVENT_DATE - now;

            if (diff <= 0) {
                clearInterval(timer);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                setTimeLeft({
                    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((diff / (1000 * 60)) % 60),
                    seconds: Math.floor((diff / 1000) % 60)
                });
            }
        }, 1000);

        // Calculate initial time immediately
        const now = new Date();
        const diff = FIXED_EVENT_DATE - now;
        if (diff > 0) {
            setTimeLeft({
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((diff / (1000 * 60)) % 60),
                seconds: Math.floor((diff / 1000) % 60)
            });
        }

        return () => clearInterval(timer);
    }, []);

    const [hoveredImage, setHoveredImage] = useState(null);
    const [hoveredCard, setHoveredCard] = useState(null);
    const [hoveredButton, setHoveredButton] = useState(null);
    const [thumbnailHovered, setThumbnailHovered] = useState(false);

    const handleResourceClick = (type) => {
        switch (type) {
            case 'ebook':
                window.location.href = '/ebooks';
                break;
            case 'mindset':
                window.location.href = '/mindset';
                break;
            case 'gallery':
                window.location.href = '/Hopeframe';
                break;
            default:
                break;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-100/40 via-orange-100/40 to-slate-50 font-sans relative isolate">
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
                    
                    @keyframes ys-pulsePlay {
                        0% { 
                            box-shadow: 0 20px 40px rgba(249, 115, 22, 0.5), 0 0 0 0 rgba(249, 115, 22, 0.8);
                        }
                        50% { 
                            box-shadow: 0 30px 60px rgba(249, 115, 22, 0.7), 0 0 0 25px rgba(249, 115, 22, 0);
                        }
                        100% { 
                            box-shadow: 0 20px 40px rgba(249, 115, 22, 0.5), 0 0 0 0 rgba(249, 115, 22, 0);
                        }
                    }
                    
                    @keyframes ys-float {
                        0%, 100% { transform: translateY(0px) rotate(0deg); }
                        25% { transform: translateY(-15px) rotate(1deg); }
                        50% { transform: translateY(-8px) rotate(-0.5deg); }
                        75% { transform: translateY(12px) rotate(0.5deg); }
                    }
                    
                    @keyframes ys-slideInUp {
                        from { opacity: 0; transform: translateY(50px) scale(0.98); }
                        to { opacity: 1; transform: translateY(0) scale(1); }
                    }

                    @keyframes ys-fadeInLeft {
                        from { opacity: 0; transform: translateX(-30px); }
                        to { opacity: 1; transform: translateX(0); }
                    }

                    @keyframes ys-scaleIn {
                        from { opacity: 0; transform: scale(0.9); }
                        to { opacity: 1; transform: scale(1); }
                    }

                    .animate-float {
                        animation: ys-float 25s infinite ease-in-out;
                    }
                    
                    .animate-float-delayed {
                        animation: ys-float 30s infinite ease-in-out;
                        animation-delay: -15s;
                    }
                    
                    .animate-float-short {
                        animation: ys-float 20s infinite ease-in-out;
                        animation-delay: -8s;
                    }
                    
                    .animate-pulse-play {
                        animation: ys-pulsePlay 2.5s infinite;
                    }
                    
                    .animate-slide-up {
                        animation: ys-slideInUp 0.8s ease-out 0.3s both;
                    }
                    
                    .animate-fade-left {
                        animation: ys-fadeInLeft 0.8s ease-out;
                    }
                    
                    .animate-scale-in {
                        animation: ys-scaleIn 0.8s ease-out 0.5s both;
                    }
                    
                    .text-gradient-orange {
                        background: linear-gradient(135deg, #f97316 0%, #ea580c 50%, #dc2626 100%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                    }
                    
                    .bg-gradient-orange {
                        background: linear-gradient(135deg, #f97316, #ea580c);
                    }
                    
                    .bg-glass {
                        background: rgba(255, 255, 255, 0.3);
                        backdrop-filter: blur(20px);
                    }
                    
                    .bg-glass-light {
                        background: rgba(255, 255, 255, 0.35);
                        backdrop-filter: blur(20px);
                    }
                `}
            </style>

            {/* Floating background elements */}
            <div className="fixed top-[10%] left-[-8%] w-80 h-80 bg-gradient-to-br from-blue-500/15 to-purple-600/15 rounded-full blur-[4rem] animate-float pointer-events-none z-0" />
            <div className="fixed bottom-[10%] right-[-8%] w-96 h-96 bg-gradient-to-br from-orange-500/15 to-pink-500/15 rounded-full blur-[4rem] animate-float-delayed pointer-events-none z-0" />
            <div className="fixed top-[60%] left-[80%] w-64 h-64 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-full blur-[3rem] animate-float-short pointer-events-none z-0" />

            {/* Hero YouTube Thumbnail Section */}
            <section className="relative py-8 px-4 text-center overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto">
                    {/* Title */}
                    <div className="mb-12 animate-fade-left">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gradient-orange mb-6 tracking-tight leading-tight relative">
                            The "Smile" Explained
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mx-auto shadow-lg shadow-orange-500/30" />
                    </div>

                    {/* Video Thumbnail Section - Always shows thumbnail */}
                    <div className="relative max-w-5xl mx-auto animate-slide-up">
                        <div
                            className={`bg-glass border-2 border-white/20 rounded-3xl overflow-hidden transition-all duration-500 ease-out ${
                                hoveredImage === 'video' 
                                    ? 'shadow-2xl shadow-black/30 -translate-y-3 scale-[1.02]' 
                                    : 'shadow-xl shadow-black/20'
                            }`}
                            onMouseEnter={() => setHoveredImage('video')}
                            onMouseLeave={() => setHoveredImage(null)}
                        >
                            <div
                                className={`relative aspect-video cursor-pointer bg-gradient-to-br from-blue-500/10 to-orange-500/10 transition-all duration-500 overflow-hidden ${
                                    thumbnailHovered ? "scale-[1.02]" : "scale-100"
                                }`}
                                onClick={() => window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank')}
                                onMouseEnter={() => setThumbnailHovered(true)}
                                onMouseLeave={() => setThumbnailHovered(false)}
                            >
                                {/* YouTube thumbnail image */}
                                <img 
                                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                                    alt="Video Thumbnail"
                                    className="w-full h-full object-cover"
                                />
                                
                                {/* Video thumbnail overlay */}
                                <div className={`absolute inset-0 transition-all duration-300 ${
                                    thumbnailHovered
                                        ? 'bg-gradient-to-br from-blue-500/30 to-orange-500/30'
                                        : 'bg-gradient-to-br from-blue-500/20 to-orange-500/20'
                                }`} />
                                
                                {/* Play button */}
                                <div className={`absolute top-1/2 left-1/2 transition-transform duration-300 ${
                                    thumbnailHovered ? "-translate-x-1/2 -translate-y-1/2 scale-110" : "-translate-x-1/2 -translate-y-1/2"
                                }`}>
                                    <div className="bg-gradient-orange text-white p-6 md:p-8 rounded-full animate-pulse-play border-6 border-white/40 flex items-center justify-center backdrop-blur-sm">
                                        <Play size={36} fill="currentColor" className="ml-1 md:w-14 md:h-14" />
                                    </div>
                                </div>
                                
                                {/* Video info overlay */}
                                <div className={`absolute bottom-8 left-8 right-8 bg-black/70 backdrop-blur-sm rounded-2xl p-4 text-white transition-all duration-300 ${
                                    thumbnailHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                                }`}>
                                    <div className="flex items-center gap-2 text-sm font-medium">
                                        <Play size={16} />
                                        Click to watch on YouTube
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Countdown Section - 15 Days Timer */}
            <div className="flex justify-center items-center min-h-[48vh] py-8">
                <section className="max-w-[90%] rounded-3xl py-8 md:py-12 px-0 md:px-16 bg-gradient-to-b from-blue-300/40 to-orange-200/40 animate-scale-in">
                    <div
                        className={`bg-gradient-to-b from-yellow-400/40 to-white/90 border-2 border-white/30 rounded-3xl p-5 md:p-8 text-center transition-all duration-500 ease-out max-w-2xl min-w-72 mx-auto backdrop-blur-sm ${
                            hoveredImage === 'countdown'
                                ? '-translate-y-3 scale-[1.03] shadow-2xl shadow-black/20'
                                : 'translate-y-0 scale-100 shadow-xl shadow-black/10'
                        }`}
                        onMouseEnter={() => setHoveredImage('countdown')}
                        onMouseLeave={() => setHoveredImage(null)}
                    >
                        <div className="flex items-center justify-center gap-3 mb-6 md:mb-8 flex-wrap">
                            <Clock size={28} className="text-sky-700 md:w-9 md:h-9" />
                            <h2 className="text-2xl md:text-4xl font-extrabold m-0 text-sky-700 tracking-tight">
                                Event Starts In
                            </h2>
                        </div>
                        
                        <div className="text-2xl md:text-5xl font-black font-mono text-blue-800 tracking-wider flex justify-center items-center gap-1 md:gap-2 bg-white/50 p-4 md:p-8 rounded-2xl border-2 border-blue-800/10">
                            {[
                                { value: timeLeft.days, unit: 'd', label: 'Days' },
                                { value: timeLeft.hours, unit: 'h', label: 'Hours' },
                                { value: timeLeft.minutes, unit: 'm', label: 'Minutes' },
                                { value: timeLeft.seconds, unit: 's', label: 'Seconds' }
                            ].map((time, index) => (
                                <React.Fragment key={time.unit}>
                                    <div className="flex flex-col items-center gap-1">
                                        <span className="drop-shadow-sm">
                                            {String(time.value).padStart(2, '0')}
                                        </span>
                                        <span className="text-xs md:text-base text-slate-600 font-semibold uppercase tracking-wider">
                                            {time.label}
                                        </span>
                                    </div>
                                    {index < 3 && (
                                        <span className="text-slate-400 text-2xl md:text-4xl font-light">:</span>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            {/* Mission Section */}
            <section className="py-16 px-6">
                <div
                    className={`bg-gradient-to-br from-blue-500/8 to-purple-600/8 backdrop-blur-sm border-2 border-white/20 rounded-3xl p-8 md:p-20 text-center shadow-xl shadow-black/5 transition-all duration-500 ease-out max-w-4xl mx-auto ${
                        hoveredImage === 'mission' ? '-translate-y-2 scale-[1.01]' : 'translate-y-0 scale-100'
                    }`}
                    style={{ animation: 'ys-fadeInLeft 0.8s ease-out 0.6s both' }}
                    onMouseEnter={() => setHoveredImage('mission')}
                    onMouseLeave={() => setHoveredImage(null)}
                >
                    {/* Header Section */}
                    <div className="flex items-center justify-center gap-3 md:gap-4 mb-8 flex-wrap">
                        <Heart size={32} className="text-orange-500 md:w-12 md:h-12 lg:w-9 lg:h-9" />
                        <h2 className="text-3xl md:text-6xl lg:text-5xl font-black m-0 text-blue-700 tracking-tight text-center">
                            Our Mission
                        </h2>
                    </div>

                    {/* Mission Text */}
                    <div className="max-w-4xl mx-auto">
                        <p className="text-base md:text-xl lg:text-lg text-gray-700 leading-relaxed md:leading-loose font-medium text-justify mb-8 tracking-wide hyphens-auto break-words">
                            Some people have no water, no money… yet their smile shines with God's love. Our mission is to give them the food and knowledge they deserve so their heart, mind, and body can thrive together.
                        </p>
                    </div>

                    {/* Decorative Line */}
                    <div className="w-24 md:w-36 h-1 bg-gradient-to-r from-blue-700 to-orange-500 rounded-full mx-auto mt-8 shadow-lg shadow-blue-700/30" />
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                        {images.map((src, index) => (
                            <div
                                key={index}
                                className="cursor-pointer"
                                style={{ animation: `ys-slideInUp 0.6s ease-out ${0.1 * index}s both` }}
                            >
                                <img
                                    src={src}
                                    alt={`Gallery ${index + 1}`}
                                    className={`w-full h-64 md:h-80 object-cover rounded-3xl border-3 border-white/30 transition-all duration-500 ease-out ${
                                        hoveredImage === index
                                            ? 'shadow-2xl shadow-black/25 scale-105 -translate-y-3 rotate-1 brightness-110 saturate-120'
                                            : 'shadow-lg shadow-black/12 scale-100 translate-y-0 rotate-0 brightness-100 saturate-100'
                                    }`}
                                    onMouseEnter={() => setHoveredImage(index)}
                                    onMouseLeave={() => setHoveredImage(null)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cards Section */}
            <section className="py-16 px-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-12 text-blue-700 tracking-tight animate-fade-left">
                    Explore Our Resources
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                    {[
                        {
                            icon: BookOpen,
                            title: "Top eBook of The Week",
                            desc: "Discover life-changing insights in our most popular free eBook that transforms your perspective and unlocks new possibilities.",
                            button: "Read Now",
                            type: "ebook",
                            gradient: "bg-gradient-to-br from-yellow-400 to-orange-500"
                        },
                        {
                            icon: Brain,
                            title: "Mindset Module",
                            desc: "Unlock your potential with our guided mindset training programs designed for success and personal growth.",
                            button: "Start Learning",
                            type: "mindset",
                            gradient: "bg-gradient-to-br from-yellow-400 to-orange-500"
                        },
                        {
                            icon: Globe,
                            title: "Smile Around the World",
                            desc: "See the latest inspiring smiles shared by our global community of positive thinkers and change-makers.",
                            button: "View Gallery",
                            type: "gallery",
                            gradient: "bg-gradient-to-br from-yellow-400 to-orange-500"
                        }
                    ].map((card, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                            style={{ animation: `ys-slideInUp 0.6s ease-out ${0.2 * index}s both` }}
                        >
                            <div className={`bg-glass-light border-2 border-white/20 rounded-3xl p-12 text-center h-full flex flex-col justify-between transition-all duration-500 ease-out relative overflow-hidden ${
                                hoveredCard === index
                                    ? 'shadow-2xl shadow-black/20 -translate-y-3 scale-[1.03]'
                                    : 'shadow-xl shadow-black/10 translate-y-0 scale-100'
                            }`}>
                                {/* Card icon */}
                                <div className={`w-20 h-20 ${card.gradient} rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-black/20 transition-all duration-300 ${
                                    hoveredCard === index ? 'scale-110 rotate-[5deg]' : 'scale-100 rotate-0'
                                }`}>
                                    <card.icon size={36} className="text-white" />
                                </div>

                                <div className="flex-grow">
                                    <h3 className="text-2xl md:text-3xl font-extrabold mb-6 text-slate-800 tracking-tight">
                                        {card.title}
                                    </h3>
                                    <p className="text-slate-600 mb-10 leading-relaxed flex-grow text-lg font-medium">
                                        {card.desc}
                                    </p>
                                </div>

                                <button
                                    onClick={() => handleResourceClick(card.type)}
                                    className={`flex items-center justify-center gap-3 ${card.gradient} text-white py-4 px-8 rounded-2xl font-bold text-lg uppercase tracking-wider transition-all duration-300 cursor-pointer border-0 w-full ${
                                        hoveredButton === index
                                            ? 'shadow-2xl shadow-black/30 scale-105 -translate-y-1'
                                            : 'shadow-lg shadow-black/20 scale-100 translate-y-0'
                                    }`}
                                    onMouseEnter={() => setHoveredButton(index)}
                                    onMouseLeave={() => setHoveredButton(null)}
                                >
                                    {card.button}
                                    <ChevronRight size={20} className={`transition-transform duration-300 ${
                                        hoveredButton === index ? 'translate-x-1' : 'translate-x-0'
                                    }`} />
                                </button>

                                {/* Decorative elements */}
                                <div className={`absolute -top-1/2 -right-1/2 w-full h-full ${card.gradient} rounded-full opacity-5 transition-all duration-500 ${
                                    hoveredCard === index ? 'scale-120' : 'scale-100'
                                }`} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-4 pb-32">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/30 max-w-4xl mx-auto animate-scale-in">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600" />

                    {/* Animated background pattern */}
                    <div 
                        className="absolute inset-0 opacity-10 pointer-events-none animate-float"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                        }}
                    />

                    <div className="relative z-10 py-10 md:py-16 px-6 md:px-12 text-center text-white">
                        {/* Header Section */}
                        <div className="flex items-center justify-center gap-3 md:gap-4 mb-8 flex-wrap">
                            <Star size={32} className="text-yellow-400 md:w-12 md:h-12 lg:w-9 lg:h-9" />
                            <h2 className="text-3xl md:text-5xl lg:text-4xl font-black m-0 tracking-tight text-center leading-tight">
                                Nourishing Hearts, Minds, and Bodies
                            </h2>
                        </div>

                        {/* Description Text */}
                        <div className="max-w-4xl mx-auto mb-12">
                            <p className="text-base md:text-xl lg:text-lg opacity-90 leading-relaxed md:leading-loose font-medium text-justify hyphens-auto break-words m-0">
                                In a world where many lack water, food, or means, their smiles still reflect the light of love. We are here to feed their bodies, grow their minds, and awaken their hearts so they can flourish in every way.
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                            <a href="https://www.paypal.com/donate/?hosted_button_id=7QRRA68W82CF4" target="_blank"
                                className={`flex items-center justify-center gap-3 bg-gradient-orange text-white py-4 md:py-5 px-8 md:px-10 rounded-2xl font-bold text-lg md:text-xl transition-all duration-300 cursor-pointer border-0 min-w-60 md:min-w-0 max-w-80 md:max-w-none ${
                                    hoveredButton === 'primary' ? 'scale-105 -translate-y-1 shadow-2xl shadow-black/30' : 'scale-100 translate-y-0 shadow-lg shadow-black/20'
                                }`}
                                onMouseEnter={() => setHoveredButton('primary')}
                                onMouseLeave={() => setHoveredButton(null)}
                            >
                                <Download size={20} className="md:w-6 md:h-6" />
                                Donate Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default YouTubeSection;