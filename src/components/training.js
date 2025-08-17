import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Star,
  Clock,
  Users,
  Lock,
  ArrowRight,
  Sparkles
} from "lucide-react";

const courses = [
  { id: 1, title: "Freelance Video Editing", duration: "6 Weeks", description: "Master video editing techniques and build a portfolio that attracts high-paying clients in the competitive freelance market.", students: 750, img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=200&fit=crop", doc: "https://docs.google.com/document/d/1d9SWXt1R5txTmdfCma6biqEsloEILEvDYobj9qTcAog/edit?tab=t.0#heading=h.2rsnqid7p97c" },
  { id: 2, title: "Advanced Graphic Design", duration: "8 Weeks", description: "Dive deep into design theory, typography, and visual communication to create stunning designs that convert.", students: 951, img: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&h=200&fit=crop", doc: "https://docs.google.com/document/d/1_WjogzgG6QUfWqtpIaLI2rrMqt9RJRmHXvRF4KrBIL4/edit?tab=t.0#heading=h.g8uhyrbs8yb5" },
  { id: 3, title: "Social Media Management", duration: "5 Weeks", description: "Learn to create engaging content, build communities, and drive business growth through strategic social media.", students: 810, img: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop", doc: "https://docs.google.com/document/d/1RsRldCESIooUX5NbIo-RiU4EHbgfuzlbaJC_7hkDqsw/edit?tab=t.0#heading=h.12ejtjd6b4g0" },
  { id: 4, title: "Virtual Assistant Skills", duration: "4 Weeks", description: "Become an indispensable VA with skills in project management, communication, and digital tools mastery.", students: 1006, img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=200&fit=crop", doc: "https://docs.google.com/document/d/1RsRldCESIooUX5NbIo-RiU4EHbgfuzlbaJC_7hkDqsw/edit?tab=t.0#heading=h.12ejtjd6b4g0" },
  { id: 5, title: "Simple Website Building", duration: "4 Weeks", description: "Build beautiful, functional websites without coding using modern tools and best practices for user experience.", students: 895, img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=200&fit=crop", doc: "https://docs.google.com/document/d/1kJzU6z4WqhpN9dJOiLOFuDUux3z_v4hxTzVDvWrWcJU/edit?tab=t.0#heading=h.on7thd22n0l5" },
  { id: 6, title: "Content Writing", duration: "6 Weeks", description: "Craft compelling articles, blogs, and copy that engages readers and drives action across various platforms.", students: 883, img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=200&fit=crop", doc: "https://docs.google.com/document/d/1KLXd4K9PAulOfynkC9-aSfN0d2mBxesdXBrnqXF6iA8/edit?tab=t.0#heading=h.3al10wc8m3co" },
  { id: 7, title: "Basic SEO Skills", duration: "3 Weeks", description: "Understand search engine optimization fundamentals to boost website visibility and organic traffic growth.", students: 895, img: "https://images.unsplash.com/photo-1675023112817-52b789fd2ef0?w=400&h=200&fit=crop", doc: "https://docs.google.com/document/d/1m-dwdB3ib_gCdztQnL-yCrk9NVlk3wWI2m6ywN4-nyA/edit?tab=t.0#heading=h.suybr2skmzzq" },
  { id: 8, title: "Data Entry Jobs", duration: "2 Weeks", description: "Develop speed and accuracy for efficient data entry work with techniques to maximize your earning potential.", students: 941, img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=200&fit=crop", doc: "https://docs.google.com/document/d/16eX33z5ZegrxWD-zPsRnLDnJEXRfIm505uJpyzWmt6U/edit?tab=t.0#heading=h.rv3w38kowzcc" },
  { id: 9, title: "E-commerce Store Setup", duration: "5 Weeks", description: "Launch and manage your own online store with proven strategies for product selection and sales optimization.", students: 1023, img: "https://images.unsplash.com/photo-1539278383962-a7774385fa02?w=400&h=200&fit=crop", doc: "https://docs.google.com/document/d/1s7RuA5pbTAY2yVkLqXxvP9viW4OyMEXtLeX97_qW9aw/edit?tab=t.0#heading=h.35ju0gb7nb6b" },
  { id: 10, title: "Basic Coding", duration: "8 Weeks", description: "Get started with the fundamentals of programming and build your first applications using modern technologies.", students: 876, img: "https://images.unsplash.com/photo-1597440836382-e5f0bd6155f7?w=400&h=200&fit=crop", doc: "https://docs.google.com/document/d/1rLC1AZVtNgJqTd3n8bZjJATOYsiuaxOqiaeKxp_RRPA/edit?tab=t.0#heading=h.39nirfrr6nr3" },
  { id: 11, title: "Tour Guide Services", duration: "3 Weeks", description: "Learn to create memorable tours and experiences that showcase local culture and generate sustainable income.", students: 986, img: "https://images.unsplash.com/photo-1581326002021-ba3f4abd127e?w=400&h=200&fit=crop", doc: "https://docs.google.com/document/d/1Fsm9H-CLRJ7WhCHT4ivCBRz9UgLqvu-dvokjrs-NmoU/edit?tab=t.0#heading=h.5cqu0d6hirzf" },
  { id: 12, title: "Catering or Baking Business", duration: "6 Weeks", description: "Turn your passion for food into a profitable home-based business with proven recipes and marketing strategies.", students: 1068, img: "https://images.unsplash.com/photo-1680310765701-c292e765296b?w=400&h=200&fit=crop", doc: "https://docs.google.com/document/d/1en_KixhrpXs2IRN-SDwxsYImJdUHgVwHpPneXZ_Ps4w/edit?tab=t.0#heading=h.5lddo0n1oj0h" },
  { id: 13, title: "Motorbike Delivery Services", duration: "2 Weeks", description: "Start your own local delivery service with minimal investment and learn efficient route planning and customer service.", students: 912, img: "https://images.unsplash.com/photo-1616915939238-2a7a363d45c4?w=400&h=200&fit=crop", doc: "https://docs.google.com/document/d/1yYfs7dtjHLu4cE2jSi21jns04CRioGoUkQx69llWfh4/edit?tab=t.0#heading=h.pdbpx1gtqwlr" },
  { id: 14, title: "Organic Vegetable Gardening", duration: "10 Weeks", description: "Grow healthy, organic vegetables sustainably while building a profitable local farming business from your backyard.", students: 896, img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400&h=200&fit=crop", doc: "https://docs.google.com/document/d/1w7M230doOQbhrith-QhXb1rqgDZAuVsAtIdlE88f7Fg/edit?tab=t.0#heading=h.yssnxqykijq2" },
  { id: 15, title: "Poultry Farming Basics", duration: "8 Weeks", description: "Learn the essentials of raising chickens for eggs and meat with sustainable practices and disease prevention.", students: 756, img: "https://images.unsplash.com/photo-1589923188900-85dae523342b?w=400&h=200&fit=crop", doc: "https://docs.google.com/document/d/1j-6Zfg9pVZkN1AbKGr83sz9jqpvyQb5Fvhn5FL_jpIQ/edit?tab=t.0#heading=h.hqrn5os5nv7" },
  { id: 16, title: "Starting a Small Plant Nursery", duration: "12 Weeks", description: "Cultivate and sell popular plants while learning propagation techniques and building a loyal customer base.", students: 1054, img: "https://images.unsplash.com/photo-1525317158-d3d159cfdb25?w=400&h=200&fit=crop", doc: "https://docs.google.com/document/d/1suB3kZc98MQ0Cnppilt74-Ma79X6cX-OjJf4JPBBMeo/edit?tab=t.0#heading=h.3qss3l48sy1t" },
  { id: 17, title: "Fish Farming", duration: "10 Weeks", description: "Discover the basics of aquaculture and sustainable fish farming for both local consumption and commercial sales.", students: 960, img: "https://images.unsplash.com/photo-1591121213542-7020cc7a0b52?w=400&h=200&fit=crop", doc: "https://docs.google.com/document/d/1ZYa9SGTxQinT96Lg9CjEO1qkWSYqnVv1_oE8-lcXXM8/edit?tab=t.0#heading=h.630qa7wimhco" },
  { id: 18, title: "T-shirt Design & Selling", duration: "4 Weeks", description: "Design and sell custom t-shirts online using print-on-demand services and effective marketing strategies.", students: 850, img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=200&fit=crop", doc: "https://docs.google.com/document/d/1CasadR1uc0lCddKNru2FIYjHkuFuQN_aVn0A0bQyPY0/edit?tab=t.0#heading=h.ui9n1x164ia2" },
  { id: 19, title: "How to Start a YouTube Channel", duration: "7 Weeks", description: "Create, grow, and monetize your own YouTube channel with content strategies that build engaged audiences.", students: 954, img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&h=200&fit=crop", doc: "https://docs.google.com/document/d/1X0x5UKB8GbgfExcgyjevgwOOdwlStF3RNpzf8hbXh4U/edit?tab=t.0#heading=h.p9ml7tecr0re" },
  { id: 20, title: "Affiliate Marketing Basics", duration: "5 Weeks", description: "Earn passive income by promoting products you love through strategic affiliate marketing and content creation.", students: 1095, img: "https://images.unsplash.com/photo-1674027392842-29f8354e236c?w=400&h=200&fit=crop", doc: "https://docs.google.com/document/d/1hB0PuT_FsKy_l_y0soRlF1ZrAdAgf72z3S7HzsvToJA/edit?tab=t.0#heading=h.mlv7jeaba94p" },
  { id: 21, title: "Voice-Over Work", duration: "6 Weeks", description: "Use your voice for commercials, audiobooks, and more while building a professional home studio setup.", students: 730, img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=200&fit=crop", doc: "https://docs.google.com/document/d/1-EGT3T5ONg_QPj2YTDIL8gxmSZ7d1SqrT-3rDFvntJo/edit?tab=t.0#heading=h.r5cffep6odxr" }
];

const SkillTraining = () => {
  const [bookmarkedCourses, setBookmarkedCourses] = useState(new Set());

  const toggleBookmark = (courseId) => {
    const newBookmarked = new Set(bookmarkedCourses);
    if (newBookmarked.has(courseId)) {
      newBookmarked.delete(courseId);
    } else {
      newBookmarked.add(courseId);
    }
    setBookmarkedCourses(newBookmarked);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Enhanced Header Banner */}
        <div className="relative overflow-hidden bg-gradient-to-br  top-10 mt-6 from-blue-600 via-blue-700 to-blue-800 text-white text-center py-16 px-8 rounded-3xl mb-16 shadow-2xl">
          <div className="relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Skill Training Programs
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl opacity-95 max-w-4xl mx-auto leading-relaxed">
              Empower yourself with practical, job-oriented skills for a brighter future. Transform your career with comprehensive training programs designed for real-world success.
            </p>
          </div>
        </div>

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-700 mb-4">
            Available Courses
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose from our comprehensive collection of skill-building programs designed to help you succeed in today's competitive marketplace
          </p>
        </div>

        {/* Enhanced Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative"
            >
              {/* Top gradient border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-800 transform scale-x-0 group-hover:scale-x-50 transition-transform duration-300 origin-left"></div>

              {/* Course Image */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500">
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Bookmark button */}
                <button
                  onClick={() => toggleBookmark(course.id)}
                  className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${bookmarkedCourses.has(course.id)
                      ? 'bg-yellow-400 text-yellow-800 shadow-lg'
                      : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
                    }`}
                >
                </button>
              </div>

              {/* Course Content */}
              <div className="p-6">
                {/* Header with title and rating */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-blue-700 leading-tight flex-1 mr-3 group-hover:text-blue-800 transition-colors">
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-1 bg-yellow-50 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                    <span className="text-yellow-500">⭐</span>
                    {course.rating}
                  </div>
                </div>

                {/* Course Meta */}
                <div className="flex flex-wrap gap-3 mb-4">
                  <div className="flex items-center gap-2 bg-gray-50 text-gray-700 px-3 py-2 rounded-full text-sm font-medium">
                    <span className="text-blue-600">🕐</span>
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-2 bg-gray-50 text-gray-700 px-3 py-2 rounded-full text-sm font-medium">
                    <span className="text-blue-600">👥</span>
                    {course.students} students
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {course.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between gap-4">
                  <button
                    onClick={() => {
                      if (course.doc) {
                        window.open(course.doc, "_blank");
                      } else {
                        alert("Document not available for this course.");
                      }
                    }}
                    className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg relative overflow-hidden group"
                  >
                    <span className="relative z-10">Start Course</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Footer Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 px-8 rounded-3xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Transform Your Future?</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Join thousands of students who have already started their journey to success with our comprehensive training programs.
            </p>
            <Link
              to="/education"
              className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
            >
              Explore All Courses
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillTraining;