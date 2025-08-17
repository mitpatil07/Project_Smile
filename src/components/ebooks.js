import React, { useState } from 'react';
import { Heart, BookOpen, Star, Sparkles, Clock, Lightbulb, Rocket, Target, ExternalLink, Edit, Save, X } from 'lucide-react';

const BookSection = () => {
  const [donationBooks, setDonationBooks] = useState([
    { 
      id: 1, 
      title: "The Magic Garden", 
      author: "Sarah Johnson", 
      age: "5-8 years", 
      genre: "Fantasy",
      coverImage: "https://picsum.photos/seed/magic-garden/200/280",
      donationLink: "https://www.firstbook.org/"
    },
    { 
      id: 2, 
      title: "Adventures in Space", 
      author: "Mike Chen", 
      age: "6-10 years", 
      genre: "Sci-Fi",
      coverImage: "https://picsum.photos/seed/space-adventure/200/280",
      donationLink: "https://www.reachoutandread.org/"
    },
    { 
      id: 3, 
      title: "Friendship Tales", 
      author: "Emma Wilson", 
      age: "4-7 years", 
      genre: "Social Skills",
      coverImage: "https://picsum.photos/seed/friendship/200/280",
      donationLink: "https://www.unitedway.org/"
    },
    { 
      id: 4, 
      title: "Ocean Mysteries", 
      author: "David Brown", 
      age: "7-11 years", 
      genre: "Educational",
      coverImage: "https://picsum.photos/seed/ocean-mysteries/200/280",
      donationLink: "https://www.berniespagereads.org/"
    }
  ]);

  const [editingBook, setEditingBook] = useState(null);
  const [editForm, setEditForm] = useState({});

  const handleVisitSite = (siteName) => {
    console.log(`Visiting ${siteName}`);
    alert(`This would take you to ${siteName}!`);
  };


  const handleSaveEdit = (bookId) => {
    setDonationBooks(prev => 
      prev.map(book => 
        book.id === bookId ? { ...book, ...editForm } : book
      )
    );
    setEditingBook(null);
    setEditForm({});
  };

  const handleCancelEdit = () => {
    setEditingBook(null);
    setEditForm({});
  };

  const handleFormChange = (field, value) => {
    setEditForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-orange-50 py-16 px-5 font-sans overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial opacity-10"></div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 relative z-10">
        {/* Header with decorative elements */}
        <div className="text-center mb-12 animate-bounce-in">
          <h2 className="text-4xl text-blue-700 m-0 drop-shadow-md">
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Amazing Books</span> for Little Learners!
          </h2>
        </div>

        {/* Main content area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left side - Information */}
          <div className="bg-white rounded-3xl p-10 shadow-2xl border-4 border-orange-500 relative overflow-hidden animated-border">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-orange-500 to-blue-500 animate-gradient-shift"></div>

            <div className="flex justify-center mb-8">
              <div className="relative animate-float">
                <div className="text-5xl mb-2 text-center text-orange-500">
                  <Heart className="w-12 h-12 mx-auto" fill="currentColor" />
                </div>
                <div className="text-4xl text-center animate-page-flip text-blue-600">
                  <BookOpen className="w-10 h-10 mx-auto" />
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-blue-700 text-3xl mb-5 text-center flex items-center justify-center gap-2">
                <Lightbulb className="w-8 h-8 text-orange-500" />
                Learning is Fun!
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed text-center mb-8">
                Discover wonderful stories, exciting adventures, and amazing facts!
                Our carefully selected books help children learn while having lots of fun.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 bg-orange-100 p-3 rounded-2xl border-2 border-gray-800 font-bold text-blue-500 transition-transform duration-300 hover:scale-105">
                  <Star className="w-5 h-5 text-orange-500" />
                  <span>Interactive Stories</span>
                </div>
                <div className="flex items-center gap-2 bg-orange-100 p-3 rounded-2xl border-2 border-gray-800 font-bold text-blue-500 transition-transform duration-300 hover:scale-105">
                  <Lightbulb className="w-5 h-5 text-orange-500" />
                  <span>Timeless Classics</span>
                </div>
                <div className="flex items-center gap-2 bg-orange-100 p-3 rounded-2xl border-2 border-gray-800 font-bold text-blue-500 transition-transform duration-300 hover:scale-105">
                  <Clock className="w-5 h-5 text-orange-500" />
                  <span>From the Past to You</span>
                </div>
                <div className="flex items-center gap-2 bg-orange-100 p-3 rounded-2xl border-2 border-gray-800 font-bold text-blue-500 transition-transform duration-300 hover:scale-105">
                  <Sparkles className="w-5 h-5 text-orange-500" />
                  <span>Magical Adventures</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Book websites */}
          <div className="flex flex-col gap-8">
            <h3 className="text-center text-blue-700 text-3xl mb-5 flex items-center justify-center gap-2">
              <BookOpen className="w-8 h-8 text-orange-500" />
              Visit Our Book Partners
            </h3>

            <div className="bg-transparent rounded-3xl p-6 shadow-2xl border-4 border-blue-500 flex items-center gap-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-3xl">
              <div className="relative perspective-1000">
                <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-2 h-20 bg-blue-700 rounded-sm"></div>
                <div className="w-16 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex flex-col items-center justify-center text-white text-xs font-bold text-center p-1 shadow-lg animate-book-glow">
                  <div className="text-xs mb-1">Story Land</div>
                  <div className="text-xs opacity-90">Amazing Tales</div>
                </div>
              </div>
              <div>
                <h4 className="text-blue-700 text-xl mb-2">Evergreen Books</h4>
                <p className="text-gray-600 text-base mb-4 leading-normal">Fairy tales, adventures, and magical stories that spark imagination!</p>
                <a
                  target="_blank"
                  href="https://www.gutenberg.org/"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-5 py-3 rounded-full text-base font-bold no-underline cursor-pointer transition-all duration-300 shadow-lg shadow-blue-500/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/40"
                >
                  <Rocket className="w-5 h-5" />
                  Visit Story Land
                </a>
              </div>
            </div>

            <div className="bg-transparent rounded-3xl p-6 shadow-2xl border-4 border-blue-500 flex items-center gap-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-3xl">
              <div className="relative perspective-1000">
                <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-2 h-20 bg-blue-700 rounded-sm"></div>
                <div className="w-16 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex flex-col items-center justify-center text-white text-xs font-bold text-center p-1 shadow-lg animate-book-glow-orange">
                  <div className="text-xs mb-1">Legendary Stories</div>
                  <div className="text-xs opacity-90">Vintage Pages</div>
                </div>
              </div>
              <div>
                <h4 className="text-blue-700 text-xl mb-2">Epic Library</h4>
                <p className="text-gray-600 text-base mb-4 leading-normal">Step into a world of timeless tales and classic adventures free for everyone, forever.</p>
                <a
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-3 rounded-full text-base font-bold no-underline cursor-pointer transition-all duration-300 shadow-lg shadow-orange-500/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/40"
                  href="https://openlibrary.org/"
                  target="_blank"
                >
                  <Target className="w-5 h-5" />
                  Start Learning
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Book Donation Section */}
        <div className="bg-white rounded-3xl p-10 shadow-2xl border-4 border-orange-500 relative overflow-hidden mb-12">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-orange-500 to-blue-500 animate-gradient-shift"></div>
          
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="relative animate-float">
                <div className="text-4xl text-center animate-page-flip text-blue-600">
                  <BookOpen className="w-10 h-10 mx-auto" />
                </div>
              </div>
            </div>
            <h3 className="text-blue-700 text-3xl mb-4 flex items-center justify-center gap-2">
              <Heart className="w-8 h-8 text-orange-500" fill="currentColor" />
              Share the Joy of Reading!
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
              Help us spread the magic of books! Donate these wonderful stories to children who need them most. 
              Every book donated creates a new adventure for a young reader.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {donationBooks.map((book) => (
              <div 
                key={book.id} 
                className={`bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-6 border-3 border-blue-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
              >
                <div className="flex items-start gap-4">
                  <div className="relative">
                    {/* Actual Book Cover Image */}
                    <div className="w-20 h-28 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg shadow-lg overflow-hidden border-2 border-white relative animate-book-glow">
                      <img 
                        src={book.coverImage} 
                        alt={book.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to gradient with title if image fails to load
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 absolute inset-0 flex flex-col items-center justify-center text-white text-xs font-bold text-center p-2 hidden">
                        <div className="text-xs leading-tight">{book.title}</div>
                        <div className="text-xs opacity-80 mt-1">{book.author}</div>
                      </div>
                      {book.donated && (
                        <div className="absolute inset-0 bg-orange-500 bg-opacity-90 flex items-center justify-center">
                          {/* <PartyPopper className="w-6 h-6 text-white" /> */}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    {editingBook === book.id ? (
                      // Edit Mode
                      <div className="space-y-2">
                        <input
                          type="text"
                          value={editForm.title}
                          onChange={(e) => handleFormChange('title', e.target.value)}
                          className="w-full px-2 py-1 text-lg font-bold border border-blue-300 rounded focus:outline-none focus:border-blue-500"
                          placeholder="Book Title"
                        />
                        <input
                          type="text"
                          value={editForm.author}
                          onChange={(e) => handleFormChange('author', e.target.value)}
                          className="w-full px-2 py-1 text-sm border border-blue-300 rounded focus:outline-none focus:border-blue-500"
                          placeholder="Author"
                        />
                        <input
                          type="text"
                          value={editForm.age}
                          onChange={(e) => handleFormChange('age', e.target.value)}
                          className="w-full px-2 py-1 text-xs border border-blue-300 rounded focus:outline-none focus:border-blue-500"
                          placeholder="Age Range"
                        />
                        <input
                          type="text"
                          value={editForm.genre}
                          onChange={(e) => handleFormChange('genre', e.target.value)}
                          className="w-full px-2 py-1 text-xs border border-blue-300 rounded focus:outline-none focus:border-blue-500"
                          placeholder="Genre"
                        />
                        <input
                          type="url"
                          value={editForm.coverImage}
                          onChange={(e) => handleFormChange('coverImage', e.target.value)}
                          className="w-full px-2 py-1 text-xs border border-blue-300 rounded focus:outline-none focus:border-blue-500"
                          placeholder="Cover Image URL"
                        />
                        <input
                          type="url"
                          value={editForm.donationLink}
                          onChange={(e) => handleFormChange('donationLink', e.target.value)}
                          className="w-full px-2 py-1 text-xs border border-blue-300 rounded focus:outline-none focus:border-blue-500"
                          placeholder="Donation Link"
                        />
                        <div className="flex gap-2 pt-2">
                          <button
                            onClick={() => handleSaveEdit(book.id)}
                            className="flex items-center gap-1 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold hover:bg-green-600 transition-colors"
                          >
                            <Save className="w-3 h-3" />
                            Save
                          </button>
                          <button
                            onClick={handleCancelEdit}
                            className="flex items-center gap-1 bg-gray-500 text-white px-3 py-1 rounded-full text-xs font-bold hover:bg-gray-600 transition-colors"
                          >
                            <X className="w-3 h-3" />
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      // Display Mode
                      <div>
                        <div className="flex items-start justify-between mb-1">
                          <h4 className="text-blue-700 text-lg font-bold">
                            {book.title}
                          </h4>
                        </div>
                        <p className="text-gray-600 text-sm mb-1">by {book.author}</p>
                        <p className="text-gray-500 text-xs mb-1">Age: {book.age}</p>
                        <p className="text-gray-500 text-xs mb-3">Genre: {book.genre}</p>
                        
                        {/* Donation Link */}
                        <a 
                          href={book.donationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 shadow-lg shadow-orange-500/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/40"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Visit Donation Site
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-100 to-orange-100 px-6 py-3 rounded-full border-2 border-orange-400">
              <Star className="w-6 h-6 text-orange-500 " fill="currentColor" />
              <span className="text-blue-700 font-bold">
                {donationBooks.length} amazing books available for donation!
              </span>
              <Star className="w-6 h-6 text-orange-500 " fill="currentColor" />
            </div>
          </div>
        </div>

        {/* Bottom decorative elements */}
        <div className="flex justify-center items-center gap-5 mt-12 bg-white p-5 rounded-3xl shadow-xl">
          <div className="text-4xl animate-bounce">
            <Sparkles className="w-10 h-10 text-orange-500" />
          </div>
          <div className="text-blue-700 text-lg font-bold text-center italic">
            "Every book is a new adventure waiting to begin!"
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        .bg-gradient-radial {
          background: radial-gradient(circle at 20% 80%, rgba(255, 152, 0, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(33, 150, 243, 0.1) 0%, transparent 50%);
        }

        @keyframes bounceIn {
          0% { transform: scale(0.3); opacity: 0; }
          50% { transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { transform: scale(1); opacity: 1; }
        }

        .animate-bounce-in {
          animation: bounceIn 1s ease-out;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes pageFlip {
          0%, 100% { transform: rotateY(0deg); }
          50% { transform: rotateY(15deg); }
        }

        .animate-page-flip {
          animation: pageFlip 2s ease-in-out infinite;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradientShift 3s ease-in-out infinite;
        }

        @keyframes bookGlow {
          0%, 100% { box-shadow: 3px 3px 10px rgba(0,0,0,0.3); }
          50% { box-shadow: 3px 3px 15px rgba(33, 150, 243, 0.5); }
        }

        .animate-book-glow {
          animation: bookGlow 2s ease-in-out infinite;
        }

        @keyframes bookGlowOrange {
          0%, 100% { box-shadow: 3px 3px 10px rgba(0,0,0,0.3); }
          50% { box-shadow: 3px 3px 15px rgba(255, 152, 0, 0.5); }
        }

        .animate-book-glow-orange {
          animation: bookGlowOrange 2s ease-in-out infinite;
        }

        .hover\\:shadow-3xl:hover {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .border-3 {
          border-width: 3px;
        }

        /* Mobile responsive */
        @media (max-width: 768px) {
          .grid-cols-2 {
            grid-template-columns: 1fr;
          }
          
          .text-4xl {
            font-size: 2rem;
          }
          
          .flex {
            flex-direction: column;
            text-align: center;
          }
          
          .gap-5 {
            gap: 1rem;
          }
          
          .flex-col {
            gap: 1rem;
          }

          .md\\:grid-cols-2 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default BookSection;