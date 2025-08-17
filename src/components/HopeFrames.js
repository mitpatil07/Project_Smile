import React, { useState } from 'react';
import { Play, Image, ZoomIn, X, ChevronLeft, ChevronRight, Grid, List } from 'lucide-react';


import imgi2 from "../assets/hopeframes/i2.jpg";
import imgi3 from "../assets/hopeframes/i3.jpg";
import imgi4 from "../assets/hopeframes/i4.jpg";
import imgi5 from "../assets/hopeframes/i5.jpg";
import imgi6 from "../assets/hopeframes/i6.jpg";
import imgi7 from "../assets/hopeframes/i7.jpg";
import imgi8 from "../assets/hopeframes/i8.jpg";
import imgi9 from "../assets/hopeframes/i9.jpg";
import imgi10 from "../assets/hopeframes/i10.jpg";
import imgi11 from "../assets/hopeframes/i11.jpg";
import imgi12 from "../assets/hopeframes/i12.jpg";
import imgi13 from "../assets/hopeframes/i13.jpg";
import imgi14 from "../assets/hopeframes/i14.jpg";
import imgi15 from "../assets/hopeframes/i15.jpg";
import imgi16 from "../assets/hopeframes/i16.jpg";
import imgi17 from "../assets/hopeframes/i17.jpg";
import imgi18 from "../assets/hopeframes/i18.jpg";
import imgi19 from "../assets/hopeframes/i19.jpg";
import imgi20 from "../assets/hopeframes/i20.jpg";
import imgv5 from "../assets/hopeframes/v5.jpg";

// Import all videos
import video40 from "../assets/hopeframes/40.mp4";
import video50 from "../assets/hopeframes/50.mp4";
import video1 from "../assets/hopeframes/v1.mp4";
import video2 from "../assets/hopeframes/v2.mp4";
import video3 from "../assets/hopeframes/v3.mp4";
import video4 from "../assets/hopeframes/v4.mp4";
import video6 from "../assets/hopeframes/v6.mp4";
import video7 from "../assets/hopeframes/v7.mp4";
import video8 from "../assets/hopeframes/v8.mp4";
import video9 from "../assets/hopeframes/v9.mp4";
import video10 from "../assets/hopeframes/v10.mp4";
import video11 from "../assets/hopeframes/v11.mp4";
import video12 from "../assets/hopeframes/v12.mp4";
import video13 from "../assets/hopeframes/v13.mp4";
import video14 from "../assets/hopeframes/v14.mp4";
import video15 from "../assets/hopeframes/v15.mp4";
import video16 from "../assets/hopeframes/v16.mp4";
import video17 from "../assets/hopeframes/v17.mp4";
import video18 from "../assets/hopeframes/v18.mp4";
import video19 from "../assets/hopeframes/v19.mp4";
import video20 from "../assets/hopeframes/v20.mp4";
import video21 from "../assets/hopeframes/v21.mp4";
import video22 from "../assets/hopeframes/v22.mp4";
import video23 from "../assets/hopeframes/v23.mp4";
import video24 from "../assets/hopeframes/v24.mp4";
import video25 from "../assets/hopeframes/v25.mp4";
import video26 from "../assets/hopeframes/v26.mp4";
import video27 from "../assets/hopeframes/v27.mp4";
import video28 from "../assets/hopeframes/v28.mp4";
import video29 from "../assets/hopeframes/v29.mp4";
import video30 from "../assets/hopeframes/v30.mp4";
import video31 from "../assets/hopeframes/v31.mp4";
import video32 from "../assets/hopeframes/v32.mp4";
import video33 from "../assets/hopeframes/v33.mp4";
import video34 from "../assets/hopeframes/v34.mp4";
import video35 from "../assets/hopeframes/v35.mp4";
import video36 from "../assets/hopeframes/v36.mp4";
import video37 from "../assets/hopeframes/v37.mp4";
import video38 from "../assets/hopeframes/v38.mp4";
import video39 from "../assets/hopeframes/v39.mp4";
import video41 from "../assets/hopeframes/v41.mp4";
import video42 from "../assets/hopeframes/v42.mp4";
import video43 from "../assets/hopeframes/v43.mp4";
import video44 from "../assets/hopeframes/v44.mp4";
import video45 from "../assets/hopeframes/v45.mp4";
import video46 from "../assets/hopeframes/v46.mp4";
import video47 from "../assets/hopeframes/v47.mp4";
import video48 from "../assets/hopeframes/v48.mp4";
import video49 from "../assets/hopeframes/v49.mp4";
import video51 from "../assets/hopeframes/v51.mp4";
import video52 from "../assets/hopeframes/v52.mp4";
import video53 from "../assets/hopeframes/v53.mp4";
import video54 from "../assets/hopeframes/v54.mp4";
import video55 from "../assets/hopeframes/v55.mp4";

const MediaGallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  const [filter, setFilter] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Static media files using imported assets
  const mediaFiles = [
    // Images
    { id: 1, type: 'image', src: imgi2 },
    { id: 2, type: 'image', src: imgi3 },
    { id: 3, type: 'image', src: imgi4 },
    { id: 4, type: 'image', src: imgi5 },
    { id: 5, type: 'image', src: imgi6 },
    { id: 6, type: 'image', src: imgi7 },
    { id: 7, type: 'image', src: imgi8 },
    { id: 8, type: 'image', src: imgi9 },
    { id: 9, type: 'image', src: imgi10 },
    { id: 10, type: 'image', src: imgi11 },
    { id: 11, type: 'image', src: imgi12 },
    { id: 12, type: 'image', src: imgi13 },
    { id: 13, type: 'image', src: imgi14 },
    { id: 14, type: 'image', src: imgi15 },
    { id: 15, type: 'image', src: imgi16 },
    { id: 16, type: 'image', src: imgi17 },
    { id: 17, type: 'image', src: imgi18 },
    { id: 18, type: 'image', src: imgi19 },
    { id: 19, type: 'image', src: imgi20 },
    { id: 20, type: 'image', src: imgv5 },
    
    // Videos
    { id: 21, type: 'video', src: video40 },
    { id: 22, type: 'video', src: video50 },
    { id: 23, type: 'video', src: video1 },
    { id: 24, type: 'video', src: video2 },
    { id: 25, type: 'video', src: video3 },
    { id: 26, type: 'video', src: video4 },
    { id: 27, type: 'video', src: video6 },
    { id: 28, type: 'video', src: video7 },
    { id: 29, type: 'video', src: video8 },
    { id: 30, type: 'video', src: video9 },
    { id: 31, type: 'video', src: video10 },
    { id: 32, type: 'video', src: video11 },
    { id: 33, type: 'video', src: video12 },
    { id: 34, type: 'video', src: video13 },
    { id: 35, type: 'video', src: video14 },
    { id: 36, type: 'video', src: video15 },
    { id: 37, type: 'video', src: video16 },
    { id: 38, type: 'video', src: video17 },
    { id: 39, type: 'video', src: video18 },
    { id: 40, type: 'video', src: video19 },
    { id: 41, type: 'video', src: video20 },
    { id: 42, type: 'video', src: video21 },
    { id: 43, type: 'video', src: video22 },
    { id: 44, type: 'video', src: video23 },
    { id: 45, type: 'video', src: video24 },
    { id: 46, type: 'video', src: video25 },
    { id: 47, type: 'video', src: video26 },
    { id: 48, type: 'video', src: video27 },
    { id: 49, type: 'video', src: video28 },
    { id: 50, type: 'video', src: video29 },
    { id: 51, type: 'video', src: video30 },
    { id: 52, type: 'video', src: video31 },
    { id: 53, type: 'video', src: video32 },
    { id: 54, type: 'video', src: video33 },
    { id: 55, type: 'video', src: video34 },
    { id: 56, type: 'video', src: video35 },
    { id: 57, type: 'video', src: video36 },
    { id: 58, type: 'video', src: video37 },
    { id: 59, type: 'video', src: video38 },
    { id: 60, type: 'video', src: video39 },
    { id: 61, type: 'video', src: video41 },
    { id: 62, type: 'video', src: video42 },
    { id: 63, type: 'video', src: video43 },
    { id: 64, type: 'video', src: video44 },
    { id: 65, type: 'video', src: video45 },
    { id: 66, type: 'video', src: video46 },
    { id: 67, type: 'video', src: video47 },
    { id: 68, type: 'video', src: video48 },
    { id: 69, type: 'video', src: video49 },
    { id: 70, type: 'video', src: video51 },
    { id: 71, type: 'video', src: video52 },
    { id: 72, type: 'video', src: video53 },
    { id: 73, type: 'video', src: video54 },
    { id: 74, type: 'video', src: video55 }
  ];

  const filteredMedia = mediaFiles.filter(media => {
    if (filter === 'all') return true;
    if (filter === 'images') return media.type === 'image';
    if (filter === 'videos') return media.type === 'video';
    return true;
  });

  const openModal = (media, index) => {
    setSelectedMedia(media);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  const navigateMedia = (direction) => {
    const newIndex =
      direction === 'next'
        ? (currentIndex + 1) % filteredMedia.length
        : currentIndex === 0
          ? filteredMedia.length - 1
          : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedMedia(filteredMedia[newIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="pt-28 pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-white/5 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
            
            <div className="relative z-10 text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Capturing Smiles, Changing Lives
              </h1>
              <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
                Every picture tells a story of hope, kindness, and transformation. These moments capture
                the real impact of ProjectSmile.
              </p>
              
              {/* View Mode Controls */}
              <div className="flex justify-center gap-3">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-xl transition-all duration-300 ${
                    viewMode === 'grid'
                      ? 'bg-white/20 text-white shadow-lg scale-105'
                      : 'bg-white/10 text-blue-100 hover:bg-white/15 hover:scale-105'
                  }`}
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setViewMode('masonry')}
                  className={`p-3 rounded-xl transition-all duration-300 ${
                    viewMode === 'masonry'
                      ? 'bg-white/20 text-white shadow-lg scale-105'
                      : 'bg-white/10 text-blue-100 hover:bg-white/15 hover:scale-105'
                  }`}
                >
                  <List size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        {filteredMedia.length > 0 ? (
          <div className={`${
            viewMode === 'grid' 
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' 
              : 'columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6'
          }`}>
            {filteredMedia.map((media, index) => (
              <div
                key={media.id}
                className="group relative cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2"
                onClick={() => openModal(media, index)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
                  {media.type === 'video' ? (
                    <video
                      src={media.src}
                      className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                        viewMode === 'grid' ? 'h-64' : 'h-auto'
                      }`}
                      muted
                      loop
                    />
                  ) : (
                    <img
                      src={media.src}
                      alt=""
                      className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                        viewMode === 'grid' ? 'h-64' : 'h-auto'
                      }`}
                    />
                  )}
                  
                  {/* Media type icon */}
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-2 rounded-full shadow-lg">
                    {media.type === 'video' ? <Play size={14} /> : <Image size={14} />}
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white p-4 rounded-full shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <ZoomIn size={24} />
                    </div>
                  </div>
                  
                  {/* Title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium truncate">ProjectSmile Media</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
              <Image size={40} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No media found</h3>
            <p className="text-gray-500">Try adjusting your filter settings</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative max-w-7xl max-h-full" onClick={(e) => e.stopPropagation()}>
            {selectedMedia.type === 'video' ? (
              <video 
                src={selectedMedia.src} 
                className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl" 
                controls 
                autoPlay 
              />
            ) : (
              <img 
                src={selectedMedia.src} 
                alt="" 
                className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl object-contain" 
              />
            )}
            
            {/* Close button */}
            <button
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
              onClick={closeModal}
            >
              <X size={20} />
            </button>
            
            {/* Navigation buttons */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
              onClick={() => navigateMedia('prev')}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
              onClick={() => navigateMedia('next')}
            >
              <ChevronRight size={24} />
            </button>
            
            {/* Title */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-4 rounded-xl backdrop-blur-sm">
              <p className="text-lg font-medium text-center">ProjectSmile Gallery</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaGallery;