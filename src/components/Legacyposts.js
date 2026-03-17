import React, { useState, useEffect } from 'react';
import { Play, Image, ZoomIn, X, ChevronLeft, ChevronRight, Grid, List } from 'lucide-react';
import API from '../config/api';

const LegacyPost = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  const [filter, setFilter] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [legacyMedia, setLegacyMedia] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const res = await fetch(`${API}/api/legacy`);
        if (res.ok) {
          const data = await res.json();
          // transform the srcs to point to full backend url
          const formatted = data.map(item => ({
            ...item,
            src: `${API}${item.src}`,
            id: item._id
          }));
          setLegacyMedia(formatted);
        }
      } catch (err) {
        console.error("Failed to fetch legacy media", err);
      } finally {
        setLoading(false);
      }
    };
    fetchMedia();
  }, []);

  const filteredMedia = legacyMedia.filter(media => {
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
              <h1 className="text-3xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Legacy Moments Collection
              </h1>
              <p className="text-lg md:text-xl text-justify text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8 font-normal">
                This space is dedicated to celebrating the kindness of our supporters. Every contribution leaves a lasting impact helping provide school supplies, educational opportunities, and brighter futures for children through Project Smile.
              </p>

              {/* View Mode Controls */}
              <div className="flex justify-center gap-3">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-xl transition-all duration-300 ${viewMode === 'grid'
                    ? 'bg-white/20 text-white shadow-lg scale-105'
                    : 'bg-white/10 text-blue-100 hover:bg-white/15 hover:scale-105'
                    }`}
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setViewMode('masonry')}
                  className={`p-3 rounded-xl transition-all duration-300 ${viewMode === 'masonry'
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
          <div className={`${viewMode === 'grid'
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
                      className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${viewMode === 'grid' ? 'h-64' : 'h-auto'
                        }`}
                      muted
                      loop
                    />
                  ) : (
                    <img
                      src={media.src}
                      alt=""
                      className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${viewMode === 'grid' ? 'h-64' : 'h-auto'
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
                    <p className="text-sm font-normal truncate">Legacy Collection</p>
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
            <h3 className="text-xl font-normal text-gray-700 mb-2">No media found</h3>
            <p className="text-gray-500 font-normal">Try adjusting your filter settings</p>
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
              <p className="text-lg font-normal text-center">Legacy Collection</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LegacyPost;