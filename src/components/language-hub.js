import React, { useState, useEffect } from "react";
import { BookOpen, Globe, ChevronRight, Award, Users, Clock } from "lucide-react";
import API from "../config/api";
import img1 from "../assets/LanguageHub/1.png";
import img2 from '../assets/LanguageHub/6.png'
import img3 from "../assets/LanguageHub/3.png";
import img4 from "../assets/LanguageHub/4.png";
import img5 from "../assets/LanguageHub/5.png";

function LanguagesTranslator() {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [hoveredButton, setHoveredButton] = useState(null);
    const [courseViews, setCourseViews] = useState({});

    // Language courses data
    const HARDCODED_COURSES = [
        {
            id: 1,
            language: "Hindi → English",
            title: "Learn English for Hindi Speakers",
            desc: "Master English with lessons designed specifically for Hindi speakers. Build vocabulary, grammar, and confidence.",
            level: "Beginner to Advanced",
            students: "104",
            image: img2,
            gradient: "bg-gradient-to-br from-orange-500 to-green-600",
            courseUrl: "https://drive.google.com/file/d/1QbJvIJF7RH4abhd6ka02F42aawm41Nae/view?usp=sharing"
        },
        {
            id: 2,
            language: "Urdu → English",
            title: "Learn English for Urdu Speakers",
            desc: "Comprehensive English course tailored for Urdu speakers with cultural context and practical examples.",
            level: "All Levels",
            students: "98",
            image: img1,
            gradient: "bg-gradient-to-br from-green-600 to-emerald-700",
            courseUrl: "https://drive.google.com/file/d/1tWRi30YEoapxvVfafh3qzd0gB3Thv8bJ/view?usp=sharing"
        },
        {
            id: 3,
            language: "Chinese → English",
            title: "Learn English for Chinese Speakers",
            desc: "Bridge the language gap with English lessons focusing on pronunciation, grammar, and practical communication.",
            level: "Beginner",
            students: "45",
            image: img3,
            gradient: "bg-gradient-to-br from-red-600 to-yellow-500",
            courseUrl: "https://drive.google.com/file/d/13UrPW-0ZIEtenzV1XS_OENoVtTMFmgpk/view?usp=sharing"
        },
        {
            id: 4,
            language: "Spanish → English",
            title: "Learn English for Spanish Speakers",
            desc: "Accelerate your English learning with courses designed to help Spanish speakers master English effectively.",
            level: "Intermediate",
            students: "86",
            image: img4,
            gradient: "bg-gradient-to-br from-yellow-500 to-red-500",
            courseUrl: "https://drive.google.com/file/d/1iA6aTFivzYT7QazQ4ygoCGzCPxap7RkH/view?usp=sharing"
        },
        {
            id: 5,
            language: "French → English",
            title: "Learn English for French Speakers",
            desc: "Perfect your English with specialized lessons that address common challenges for French speakers.",
            level: "Beginner to Intermediate",
            students: "37",
            image: img5,
            gradient: "bg-gradient-to-br from-blue-600 to-purple-600",
            courseUrl: "https://drive.google.com/file/d/19msRalxB2mm2IHQCAUqIL77K7K8RXstX/view?usp=sharing"
        },
    ];

    const [courses, setCourses] = useState([...HARDCODED_COURSES]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [viewsRes, coursesRes] = await Promise.all([
                    fetch(`${API}/api/courses/views`),
                    fetch(`${API}/api/resources?category=language`)
                ]);

                if (viewsRes.ok) {
                    const data = await viewsRes.json();
                    const langViews = {};
                    for (const [key, val] of Object.entries(data)) {
                        if (key.startsWith('lang_')) {
                            langViews[key] = val;
                        }
                    }
                    setCourseViews(langViews);
                }

                if (coursesRes.ok) {
                    const data = await coursesRes.json();
                    setCourses([...HARDCODED_COURSES, ...data]);
                }
            } catch (err) {
                console.error("Failed to fetch data", err);
            }
        };

        fetchData(); // initial fetch
        const interval = setInterval(fetchData, 3000); // 3s polling
        return () => clearInterval(interval);
    }, []);

    const handleCourseClick = (course) => {
        const courseId = `lang_${course._id || course.id}`; // Prefix 'lang_' for language courses

        if (course.courseUrl || course.link) {
            window.open(course.courseUrl || course.link, '_blank');
        } else {
            alert('Document not available for this course.');
            return;
        }

        // Register the view with the backend asynchronously
        fetch(`${API}/api/courses/${courseId}/view`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ baseViews: parseInt(course.students) || 0 })
        })
            .then(res => {
                if (res.ok) return res.json();
                throw new Error("Network error.");
            })
            .then(data => {
                setCourseViews(prev => ({ ...prev, [courseId]: data.views }));
            })
            .catch(err => console.error("Error setting views:", err));
    };


    return (
        <div className="min-h-screen bg-gradient-to-br mt-5 from-slate-50 via-blue-50/40 to-orange-50/30 font-sans relative overflow-x-hidden">
            <style>
                {`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
                
                * {
                    font-family: 'Inter', sans-serif;
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    25% { transform: translateY(-15px) rotate(1deg); }
                    50% { transform: translateY(-8px) rotate(-0.5deg); }
                    75% { transform: translateY(12px) rotate(0.5deg); }
                }
                
                @keyframes slideInUp {
                    from { opacity: 0; transform: translateY(50px) scale(0.98); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }

                @keyframes fadeInLeft {
                    from { opacity: 0; transform: translateX(-30px); }
                    to { opacity: 1; transform: translateX(0); }
                }

                @keyframes scaleIn {
                    from { opacity: 0; transform: scale(0.9); }
                    to { opacity: 1; transform: scale(1); }
                }

                .animate-float {
                    animation: float 25s infinite ease-in-out;
                }
                
                .animate-float-delayed {
                    animation: float 30s infinite ease-in-out;
                    animation-delay: -15s;
                }
                
                .animate-float-short {
                    animation: float 20s infinite ease-in-out;
                    animation-delay: -8s;
                }
                
                .animate-fade-left {
                    animation: fadeInLeft 0.8s ease-out;
                }
                
                .animate-slide-up {
                    animation: slideInUp 0.8s ease-out 0.3s both;
                }
                
                .animate-scale-in {
                    animation: scaleIn 0.8s ease-out 0.5s both;
                }
            `}
            </style>

            {/* Floating background elements */}
            <div className="fixed top-[10%] left-[-8%] w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-500/15 to-purple-600/15 rounded-full blur-[4rem] animate-float pointer-events-none z-0" />
            <div className="fixed bottom-[10%] right-[-8%] w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-orange-500/15 to-pink-500/15 rounded-full blur-[4rem] animate-float-delayed pointer-events-none z-0" />
            <div className="fixed top-[60%] left-[80%] w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-full blur-[3rem] animate-float-short pointer-events-none z-0" />

            {/* Hero Section */}
            <section className="pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-8 sm:pb-10 md:pb-12 px-4 sm:px-6 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 text-blue-700 tracking-tight animate-fade-left leading-tight">
                        Learn Any Language
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 mb-6 sm:mb-8 font-medium animate-slide-up max-w-3xl mx-auto">
                        You can learn English from any language with Project Smile's free courses
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-slate-700 animate-scale-in">
                        <div className="flex items-center gap-2">
                            <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
                            <span className="font-semibold text-sm sm:text-base">Best Resources</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Award className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
                            <span className="font-semibold text-sm sm:text-base">Easy To Learn</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cards Section */}
            <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 relative z-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-8 sm:mb-12 md:mb-16 text-slate-800 tracking-tight">
                    Popular Language Courses
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
                    {courses.map((course, index) => (
                        <div
                            key={course._id || course.id}
                            style={{ animation: `slideInUp 0.6s ease-out ${0.15 * index}s both` }}
                            className="w-full"
                        >
                            <div
                                className={`group relative overflow-hidden rounded-3xl transition-all duration-500
                                ${hoveredCard === (course._id || course.id) ? 'transform -translate-y-4 shadow-2xl' : 'shadow-lg hover:shadow-xl'}
                            `}
                                onMouseEnter={() => setHoveredCard(course._id || course.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                {/* Card Background Gradient */}
                                <div className={`absolute inset-0 ${course.gradient || 'bg-gradient-to-br from-gray-500 to-gray-600'} opacity-10`} />

                                {/* Card Header/Image Area */}
                                <div className={`h-48 relative overflow-hidden flex items-center justify-center ${course.gradient || 'bg-gradient-to-br from-gray-500 to-gray-600'}`}>
                                    <div className="absolute inset-0 bg-black/20 mix-blend-overlay" />
                                    {course.image && course.image.length > 5 ? (
                                        <img
                                            src={course.image}
                                            alt={course.language || course.title}
                                            className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-110"
                                        />
                                    ) : (
                                        <span className="text-white text-xl font-bold opacity-80 px-4 text-center z-10">{course.title}</span>
                                    )}
                                    {/* Bottom gradient overlay to hide bottom part */}
                                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                                    <div className={`absolute top-4 right-4 ${course.gradient} text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-bold text-xs sm:text-sm shadow-lg`}>
                                        {course.language}
                                    </div>
                                </div>

                                {/* Course Content */}
                                <div className="p-5 sm:p-6 md:p-7 flex flex-col flex-grow">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold mb-2 sm:mb-3 text-slate-800 tracking-tight leading-tight">
                                        {course.title}
                                    </h3>
                                    <p className="text-slate-600 mb-4 sm:mb-5 leading-relaxed flex-grow text-sm sm:text-base">
                                        {course.desc}
                                    </p>

                                    {/* Course Stats */}
                                    <div className="flex justify-between items-center mb-4 sm:mb-5 pb-4 sm:pb-5 border-b border-slate-200">
                                        <div className="flex items-center gap-2 group/stat">
                                            <div className="p-2 rounded-lg bg-gray-50 group-hover/stat:bg-white transition-colors duration-300">
                                                <Users size={16} className="text-gray-400 group-hover/stat:text-blue-500 transition-colors" />
                                            </div>
                                            <span className="text-sm font-semibold text-gray-700 group-hover/stat:text-gray-900 transition-colors">
                                                {(parseInt(course.students) || 0) + (courseViews[`lang_${course._id || course.id}`] || 0)} views
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 group/stat">
                                            <div className="p-2 rounded-lg bg-gray-50 group-hover/stat:bg-white transition-colors duration-300">
                                                <Clock size={16} className="text-gray-400 group-hover/stat:text-orange-500 transition-colors" />
                                            </div>
                                            <span className="text-sm font-semibold text-gray-700 group-hover/stat:text-gray-900 transition-colors">
                                                {course.duration || 'Self-paced'}
                                            </span>
                                        </div>
                                    </div>

                                    {/* CTA Button */}
                                    <button
                                        onClick={() => handleCourseClick(course)}
                                        onMouseEnter={() => setHoveredButton(course._id || course.id)}
                                        onMouseLeave={() => setHoveredButton(null)}
                                        className={`w-full py-4 px-6 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all duration-300
                                        ${course.gradient || 'bg-gradient-to-br from-gray-500 to-gray-600'} text-white shadow-lg
                                        ${hoveredButton === (course._id || course.id) ? 'shadow-xl scale-[1.02]' : 'hover:shadow-md'}
                                    `}
                                    >
                                        Enroll Now
                                        <ChevronRight className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${hoveredButton === (course._id || course.id) ? 'translate-x-1' : 'translate-x-0'
                                            }`} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default LanguagesTranslator;