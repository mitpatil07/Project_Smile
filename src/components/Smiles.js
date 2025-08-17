import React, { useState } from "react";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    story: '',
    file: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      file: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowModal(false);
    setFormData({ name: '', location: '', story: '', file: null });
  };

  return (
    <div className="font-sans bg-gray-50 min-h-screen py-5">
      {/* Banner */}
      <div className="bg-gradient-to-br from-orange-400 to-orange-500 text-white text-center p-12 rounded-3xl mx-auto mt-24 mb-10 w-3/4 max-w-4xl shadow-xl relative overflow-hidden">
        <div className="text-4xl mb-4">🌐</div>
        <h1 className="text-3xl font-bold tracking-tight mb-4 drop-shadow-sm">
          Smiles Around the World
        </h1>
        <p className="text-lg opacity-95 leading-relaxed max-w-2xl mx-auto">
          A global gallery of joy, hope, and connection. Share yours today!
        </p>
      </div>

      {/* Submit Button */}
      <div className="text-center mt-10">
        <button 
          className="bg-gradient-to-br from-red-500 to-red-600 text-white border-none py-4 px-8 rounded-full text-lg font-semibold cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3 hover:from-red-600 hover:to-red-700"
          onClick={() => setShowModal(true)}
        >
          <span className="text-xl drop-shadow-sm">😊</span>
          Submit Your Smile
        </button>
      </div>

      {/* Empty State */}
      <div className="text-center px-5 mt-16">
        <div className="max-w-md mx-auto text-gray-600">
          <div className="text-5xl mb-5 opacity-60">📷</div>
          <p className="text-base mb-3">No smiles shared yet. Be the first to share yours!</p>
          <p className="text-gray-500 text-sm italic">
            Join our global community and spread happiness around the world
          </p>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-[9999] backdrop-blur-sm p-4"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="bg-white rounded-2xl p-8 w-full max-w-lg max-h-[90vh] overflow-auto shadow-2xl animate-in fade-in zoom-in duration-300 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-5 sticky top-0 bg-white z-10 pb-2">
              <h2 className="text-2xl font-bold text-gray-800 m-0">Share Your Smile</h2>
              <button 
                className="bg-transparent border-none text-xl cursor-pointer p-2 rounded-full transition-colors duration-200 text-gray-600 hover:bg-gray-100 flex-shrink-0"
                onClick={() => setShowModal(false)}
              >
                ✖
              </button>
            </div>
            
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Upload a photo or video (max 50MB) and tell us your story.
            </p>

            {/* Form */}
            <div className="flex flex-col gap-5">
              {/* Name Input */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-800">Your Name *</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name" 
                  className="p-3 rounded-xl border-2 border-gray-200 text-sm outline-none transition-all duration-200 focus:border-orange-400 focus:shadow-sm"
                />
              </div>

              {/* Location Input */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-800">Location *</label>
                <input 
                  type="text" 
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="City, Country" 
                  className="p-3 rounded-xl border-2 border-gray-200 text-sm outline-none transition-all duration-200 focus:border-orange-400 focus:shadow-sm"
                />
              </div>

              {/* Story Textarea */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-800">What made you smile? *</label>
                <textarea 
                  name="story"
                  value={formData.story}
                  onChange={handleInputChange}
                  placeholder="Share your story of joy..."
                  className="p-3 rounded-xl border-2 border-gray-200 text-sm outline-none transition-all duration-200 resize-y min-h-24 font-sans focus:border-orange-400 focus:shadow-sm"
                />
              </div>

              {/* File Upload */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-800">Upload Photo/Video</label>
                <div className="relative">
                  <input 
                    type="file" 
                    onChange={handleFileChange}
                    accept="image/*,video/*"
                    className="absolute opacity-0 w-full h-full cursor-pointer"
                    id="file-upload"
                  />
                  <label 
                    htmlFor="file-upload" 
                    className="block p-3 rounded-xl border-2 border-dashed border-gray-200 text-sm cursor-pointer transition-all duration-200 text-center text-gray-600 bg-gray-50 hover:bg-gray-100 hover:border-gray-300"
                  >
                    <span className="mr-2 text-base">📁</span>
                    {formData.file ? formData.file.name : 'Choose file...'}
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="bg-gradient-to-br from-red-500 to-red-600 text-white border-none py-4 px-5 rounded-xl text-base font-semibold cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 mt-3 shadow-lg hover:from-red-600 hover:to-red-700 hover:shadow-xl"
                onClick={handleSubmit}
              >
                <span className="text-lg">📤</span>
                Share My Smile
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}