import React, { useState, useEffect } from "react";

// UI Constants
const UI_CONSTANTS = {
  colors: {
    primary: {
      50: '#f0f7ff',
      100: '#e0efff',
      500: '#1E63B3',
      600: '#1a5699',
      700: '#154a80'
    },
    secondary: {
      50: '#fef7f0',
      500: '#F45B3D',
      600: '#d94c2f',
      700: '#c43d26'
    },
    neutral: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a'
    }
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '4rem'
  },
  borderRadius: {
    sm: '0.5rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.5rem'
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)'
  }
};

// Course Data
const COURSES_DATA = [
  { 
    id: 1, 
    title: "1st and 2nd Grade Educational Videos", 
    description: "A curated playlist of fun and educational videos for children in 1st and 2nd grade.", 
    students: 895, 
    level: "Beginner",
    duration: "7 videos",
    link: "https://www.youtube.com/playlist?list=PLMsX9836rE05_C8bL0CHQ351oTG5AvRhe" 
  },
  { 
    id: 2, 
    title: "PreSchool Learning Videos", 
    description: "Engaging videos designed to help preschoolers learn basic concepts in an enjoyable way.", 
    students: 757, 
    level: "Beginner",
    duration: "13 videos",
    link: "https://www.youtube.com/playlist?list=PLMsX9836rE044x-U9QYdHuq2HKLloF9px" 
  },
  { 
    id: 3, 
    title: "Kindergarten Learning Videos", 
    description: "A collection of videos to prepare children for kindergarten, covering a range of essential skills.", 
    students: 675, 
    level: "Beginner",
    duration: "29 videos",
    link: "https://www.youtube.com/playlist?list=PLMsX9836rE06s9Qp4CjchN7DY6rvY3cmT" 
  },
  { 
    id: 4, 
    title: "Learn Social Skills for Children", 
    description: "Videos that teach important social skills to children, helping them interact better with others.", 
    students: 860, 
    level: "Intermediate",
    duration: "12 videos",
    link: "https://www.youtube.com/playlist?list=PLMsX9836rE06v5R6KCVPZjkkOEv7P82XS" 
  },
  { 
    id: 5, 
    title: "Counting Videos for Kids", 
    description: "Fun and interactive videos to help young children learn how to count.", 
    students: 635, 
    level: "Beginner",
    duration: "13 videos",
    link: "https://www.youtube.com/playlist?list=PLMsX9836rE04j-qu-nt2NM_cj1DRJvSs9" 
  },
  { 
    id: 6, 
    title: "Life of Shapes", 
    description: "A creative series of videos that brings shapes to life, teaching geometry in a unique way.", 
    students: 1001, 
    level: "Intermediate",
    duration: "31 videos",
    link: "https://www.youtube.com/playlist?list=PLMsX9836rE04VOjKg4z1-I0RX7xxk7qX4" 
  },
  { 
    id: 7, 
    title: "Shapes and Colors for Children Playlist", 
    description: "A vibrant playlist to help children learn about different shapes and colors.", 
    students: 1015, 
    level: "Beginner",
    duration: "22 videos",
    link: "https://www.youtube.com/playlist?list=PLMsX9836rE06exWzAzzXsh38HjkJxy4uK" 
  }
];

const EducationalResources = () => {
  const [bookmarkedCourses, setBookmarkedCourses] = useState(new Set());
  const [thumbnails, setThumbnails] = useState({});
  const [filter, setFilter] = useState('all');
  const visitorCount = 0;

  useEffect(() => {
    COURSES_DATA.forEach(course => {
      fetchThumbnail(course.link).then(url => {
        setThumbnails(prev => ({ ...prev, [course.id]: url }));
      });
    });
  }, []);

  const fetchThumbnail = async (url) => {
    try {
      const parsed = new URL(url);
      const videoId = parsed.searchParams.get("v");
      if (videoId) {
        return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
      }
      if (parsed.searchParams.get("list")) {
        const res = await fetch(`https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`);
        const data = await res.json();
        return data.thumbnail_url || "https://via.placeholder.com/480x360?text=No+Thumbnail";
      }
    } catch (err) {
      console.error("Thumbnail fetch failed", err);
    }
    return "https://via.placeholder.com/480x360?text=No+Thumbnail";
  };

  const toggleBookmark = (courseId) => {
    const newBookmarked = new Set(bookmarkedCourses);
    if (newBookmarked.has(courseId)) {
      newBookmarked.delete(courseId);
    } else {
      newBookmarked.add(courseId);
    }
    setBookmarkedCourses(newBookmarked);
  };

  const openVideo = (url) => {
    window.open(url, "_blank");
  };

  const getLevelBadgeStyle = (level) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Advanced':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const filteredCourses = filter === 'all' 
    ? COURSES_DATA 
    : COURSES_DATA.filter(course => course.level.toLowerCase() === filter);

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"
      style={{
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
      }}
    >
      {/* Add top spacing to account for navigation */}
      <div className="pt-24 sm:pt-28 md:pt-32"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        
        {/* Header Banner */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl shadow-2xl mt-3 mb-12">
          <div className="absolute inset-0"></div>
          <div className="relative px-8 py-12 sm:px-12 sm:py-16 text-center">
            <div className="mx-auto max-w-3xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                Educational Resources
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 font-light leading-relaxed">
                Discover amazing learning content designed to inspire and educate
              </p>
            </div>
          </div>
        </div>

        {/* Khan Academy Banner */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 mb-12 overflow-hidden hover:shadow-2xl transition-all duration-500 relative">
          <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
          
          {/* Viewer count positioned in top-right */}
          <div className="absolute top-4 right-6 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1">
            <span className="inline-flex items-center gap-1.5 text-white text-xs font-medium">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
              </svg>
              {visitorCount} viewers
            </span>
          </div>
          
          <div className="p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🎓</span>
                </div>
              </div>
              
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  Learn with Khan Academy
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Khan Academy provides a free, world-class education for anyone, anywhere. 
                  It offers practice exercises, instructional videos, and a personalized learning dashboard.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <button 
                    onClick={() => window.open('https://www.khanacademy.org/', '_blank')}
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Explore Khan Academy
                  </button>
                  
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full text-sm font-medium text-gray-700">
                      <span className="text-green-500">✓</span>
                      Free Access
                    </span>
                    <span className="inline-flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full text-sm font-medium text-gray-700">
                      <span className="text-blue-500">🌍</span>
                      World-class
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Available Courses</h2>
              <p className="text-gray-600 mt-1">Choose from our comprehensive collection of skill-building programs</p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {['all', 'beginner', 'intermediate', 'advanced'].map((level) => (
                <button
                  key={level}
                  onClick={() => setFilter(level)}
                  className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                    filter === level
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div 
              key={course.id} 
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden hover:-translate-y-2"
            >
              {/* Course Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={thumbnails[course.id] || "https://via.placeholder.com/480x360?text=Loading..."}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() => openVideo(course.link)}
                      className="w-14 h-14 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-xl transform hover:scale-110 transition-all duration-300"
                    >
                      <svg className="w-5 h-5 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 5v10l8-5-8-5z"/>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Bookmark Button */}
                <button
                  onClick={() => toggleBookmark(course.id)}
                  className="absolute top-3 right-3 w-9 h-9 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
                >
                  <svg 
                    className={`w-4 h-4 transition-colors duration-300 ${
                      bookmarkedCourses.has(course.id) ? 'text-red-500' : 'text-gray-400'
                    }`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                  </svg>
                </button>

                {/* Level Badge */}
                <div className="absolute top-3 left-3">
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getLevelBadgeStyle(course.level)}`}>
                    {course.level}
                  </span>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                  {course.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {course.description}
                </p>

                {/* Course Stats */}
                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                    </svg>
                    <span>{course.duration}</span>
                  </div>
                </div>

                {/* Start Button */}
                <button
                  onClick={() => openVideo(course.link)}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-2.5 px-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  Start Course
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.467-.881-6.08-2.33M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-600">Try adjusting your filter to see more courses.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationalResources;