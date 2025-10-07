import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, Bell, BellRing } from 'lucide-react';

export default function PodcastBanner() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isNotified, setIsNotified] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleProgressClick = (e) => {
    const progressBar = e.currentTarget;
    const clickX = e.nativeEvent.offsetX;
    const width = progressBar.offsetWidth;
    const newTime = (clickX / width) * duration;
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const handleNotify = () => {
    setIsNotified(!isNotified);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="relative overflow-hidden rounded-3xl shadow-2xl">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-800 via-indigo-900 to-blue-900">
          <div className="absolute inset-0 opacity-30">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full animate-pulse"
                style={{
                  width: Math.random() * 100 + 20 + 'px',
                  height: Math.random() * 100 + 20 + 'px',
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                  backgroundColor: `hsla(${Math.random() * 360}, 70%, 60%, 0.3)`,
                  animationDelay: Math.random() * 3 + 's',
                  animationDuration: Math.random() * 3 + 2 + 's'
                }}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-8 md:p-12 lg:p-16">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left Side - Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-block mb-4">
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 text-white text-xs md:text-sm font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-lg">
                  New Podcast
                </span>
              </div>
              
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-yellow-300 mb-4 tracking-tight">
                WE!
              </h2>
              
              <p className="text-xl md:text-2xl font-bold text-white mb-4">
                Finding Community and Connection
              </p>
              
              <p className="text-base md:text-lg text-gray-200 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Join me on a journey to rediscover unity in our divided world. Listen to the introduction and be the first to know when we launch!
              </p>

              {/* Audio Player */}
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 mb-6 max-w-xl mx-auto lg:mx-0">
                <audio
                  ref={audioRef}
                  preload="metadata"
                >
                  {/* Replace with your audio file path */}
                  <source src="/podcast-intro.mp3" type="audio/mpeg" />
                  <source src="/podcast-intro.ogg" type="audio/ogg" />
                  Your browser does not support the audio element.
                </audio>
                
                <div className="flex items-center gap-4 mb-4">
                  <button
                    onClick={togglePlay}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full p-4 transition-all transform hover:scale-110 shadow-xl"
                  >
                    {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
                  </button>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Volume2 size={16} className="text-gray-300" />
                      <span className="text-sm font-semibold text-white">
                      The First Beat
                      </span>
                    </div>
                    
                    <div
                      className="relative h-2 bg-gray-700 rounded-full cursor-pointer overflow-hidden"
                      onClick={handleProgressClick}
                    >
                      <div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all"
                        style={{ width: `${(currentTime / duration) * 100}%` }}
                      />
                    </div>
                    
                    <div className="flex justify-between text-xs text-gray-300 mt-1">
                      <span>{formatTime(currentTime)}</span>
                      <span>{formatTime(duration)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={handleNotify}
                  className={`${
                    isNotified
                      ? 'bg-green-500 hover:bg-green-600'
                      : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700'
                  } text-white font-bold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2`}
                >
                  {isNotified ? (
                    <>
                      <BellRing size={20} />
                      <span>You'll be notified!</span>
                    </>
                  ) : (
                    <>
                      <Bell size={20} />
                      <span>Notify Me When Live</span>
                    </>
                  )}
                </button>

              </div>
            </div>

            {/* Right Side - Visual Element */}
            <div className="w-full lg:w-auto flex-shrink-0">
              <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-3xl transform rotate-6 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl transform -rotate-6 opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl p-8 text-center shadow-2xl">
                    <div className="text-7xl md:text-8xl font-black text-yellow-300 mb-2">
                      WE!
                    </div>
                    <div className="text-white text-sm md:text-base font-bold uppercase tracking-wider">
                      Podcast
                    </div>
                    <div className="mt-4 flex items-center justify-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-white text-xs font-semibold">Coming Soon</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}