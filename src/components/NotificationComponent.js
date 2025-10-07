import React, { useState } from 'react';
import { Calendar, Bell, BellRing } from 'lucide-react';

export default function NotificationEvent() {
  const [notifiedEvents, setNotifiedEvents] = useState([]);

  const upcomingEvents = [
    {
      id: 1,
      title: "Prodcast: WE!- finding community connection in a divided world",
      description: "Welcome to 'We' by Joe a journey into the heart of human connection. In a world more linked than ever, we face rising loneliness, burnout, and disconnection from ourselves, each other, and the Divine.",
      date: "November 2025",
      type: "Prodcast",
      status: "upcoming",
      bannertitle: 'WE! Podcast',
    },
    {
      id: 2,
      title: "Episode 2: Finding Your Tribe",
      description: "'We' by Joe explores humanity's growing disconnection amid global connectivity, revealing how loneliness and burnout arise from separation from self, others, and the Divine.",
      date: "Coming Soon",
      type: "New Book",
      status: "Live",
      bannertitle: 'WE! - Book',
    },
  ];

  const handleNotify = (eventId) => {
    if (notifiedEvents.includes(eventId)) {
      setNotifiedEvents(notifiedEvents.filter(id => id !== eventId));
    } else {
      setNotifiedEvents([...notifiedEvents, eventId]);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6">
      {/* Header Section */}
      <div className="mb-6">
        <div className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-3">
          <span className="flex items-center gap-1.5">
            <Calendar size={14} />
            Upcoming Events
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          New Announcements & Events
        </h2>
        <p className="text-sm md:text-base text-gray-600 max-w-2xl">
          Don't miss out on upcoming episodes and special events. Get notified when new content drops!
        </p>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {upcomingEvents.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all border border-gray-200"
          >
            {/* Card Header */}
            <div className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="bg-orange-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                  {event.type}
                </span>
                {event.status === 'upcoming' && (
                  <div className="flex items-center gap-1 bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-0.5 rounded-full">
                    <div className="w-1 h-1 bg-gray-900 rounded-full animate-pulse"></div>
                    <span>Soon</span>
                  </div>
                )}
                {event.status === 'Live' && (
                  <div className="flex items-center gap-1 bg-green-400 text-gray-900 text-xs font-bold px-2 py-0.5 rounded-full">
                    <div className="w-1 h-1 bg-gray-900 rounded-full animate-pulse"></div>
                    <span>Live</span>
                  </div>
                )}
              </div>
              <div className="text-yellow-300 text-xl md:text-2xl font-bold">{event.bannertitle}</div>
            </div>

            {/* Card Body */}
            <div className="p-4">
              <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">
                {event.title}
              </h3>
              
              <p className="text-xs md:text-sm text-gray-600 mb-3 text-justify leading-relaxed line-clamp-3">
                {event.description}
              </p>

              {/* Event Details */}
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                <Calendar size={14} className="text-orange-500 flex-shrink-0" />
                <span className="font-semibold">{event.date}</span>
              </div>

              {/* Notification Button */}
              {/* <button
                onClick={() => handleNotify(event.id)}
                className={`w-full flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm font-semibold transition-all ${
                  notifiedEvents.includes(event.id)
                    ? 'bg-orange-500 text-white'
                    : 'bg-orange-50 text-orange-600 hover:bg-orange-100'
                }`}
              >
                {notifiedEvents.includes(event.id) ? (
                  <>
                    <BellRing size={16} />
                    <span>Notified</span>
                  </>
                ) : (
                  <>
                    <Bell size={16} />
                    <span>Notify Me</span>
                  </>
                )}
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}