import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Settings, Video, Calendar, Image as ImageIcon, Save, LogOut, Plus, Trash2 } from 'lucide-react';

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState('settings');
    const navigate = useNavigate();

    // State for Settings Tab
    const [eventDate, setEventDate] = useState('');
    const [videoUrlId, setVideoUrlId] = useState('');
    const [videoViews, setVideoViews] = useState(0);

    // State for Events Tab
    const [events, setEvents] = useState([]);
    const [newEvent, setNewEvent] = useState({ title: '', description: '', date: '', type: '', bannertitle: '', status: 'upcoming' });

    // State for Legacy Tab
    const [legacyMedia, setLegacyMedia] = useState([]);
    const [uploadFile, setUploadFile] = useState(null);
    const [uploadTitle, setUploadTitle] = useState('');

    const token = localStorage.getItem('adminToken');

    useEffect(() => {
        if (!token) {
            navigate('/admin');
            return;
        }
        fetchSettings();
        fetchEvents();
        fetchLegacyMedia();
    }, [token, navigate]);

    const authHeaders = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    };

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        navigate('/admin');
    };

    // --- SETTINGS ACTIONS ---
    const fetchSettings = async () => {
        try {
            const res = await fetch('http://localhost:5000/api/settings');
            if (res.ok) {
                const data = await res.json();
                if (data.eventTimerDate) setEventDate(new Date(data.eventTimerDate).toISOString().slice(0, 16));
                setVideoUrlId(data.videoUrlId);
                setVideoViews(data.videoViews);
            }
        } catch (err) { console.error(err); }
    };

    const saveSettings = async () => {
        try {
            await fetch('http://localhost:5000/api/settings', {
                method: 'PUT',
                headers: authHeaders,
                body: JSON.stringify({ eventTimerDate: eventDate, videoUrlId })
            });
            alert('Settings saved successfully!');
        } catch (err) { alert('Failed to save settings'); }
    };

    // --- EVENTS ACTIONS ---
    const fetchEvents = async () => {
        try {
            const res = await fetch('http://localhost:5000/api/events');
            if (res.ok) setEvents(await res.json());
        } catch (err) { console.error(err); }
    };

    const createEvent = async (e) => {
        e.preventDefault();
        try {
            await fetch('http://localhost:5000/api/events', {
                method: 'POST',
                headers: authHeaders,
                body: JSON.stringify(newEvent)
            });
            setNewEvent({ title: '', description: '', date: '', type: '', bannertitle: '', status: 'upcoming' });
            fetchEvents();
        } catch (err) { alert('Failed to create event'); }
    };

    const deleteEvent = async (id) => {
        try {
            await fetch(`http://localhost:5000/api/events/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            fetchEvents();
        } catch (err) { alert('Failed to delete event'); }
    };

    // --- LEGACY ACTIONS ---
    const fetchLegacyMedia = async () => {
        try {
            const res = await fetch('http://localhost:5000/api/legacy');
            if (res.ok) setLegacyMedia(await res.json());
        } catch (err) { console.error(err); }
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        if (!uploadFile) return alert('Select a file to upload');

        const formData = new FormData();
        formData.append('media', uploadFile);
        formData.append('title', uploadTitle);

        try {
            const res = await fetch('http://localhost:5000/api/legacy', {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${token}` },
                body: formData
            });
            if (res.ok) {
                setUploadFile(null);
                setUploadTitle('');
                alert('File uploaded successfully!');
                fetchLegacyMedia();
            } else {
                alert('Upload failed');
            }
        } catch (err) { alert('Error uploading file'); }
    };

    const deleteLegacy = async (id) => {
        try {
            await fetch(`http://localhost:5000/api/legacy/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            fetchLegacyMedia();
        } catch (err) { alert('Delete failed'); }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Sidebar */}
            <div className="w-64 bg-slate-900 text-white p-6 inset-y-0 relative">
                <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
                <nav className="space-y-4">
                    <button onClick={() => setActiveTab('settings')} className={`flex items-center gap-3 w-full p-3 rounded-lg ${activeTab === 'settings' ? 'bg-blue-600' : 'hover:bg-slate-800'}`}>
                        <Settings size={20} /> Settings
                    </button>
                    <button onClick={() => setActiveTab('events')} className={`flex items-center gap-3 w-full p-3 rounded-lg ${activeTab === 'events' ? 'bg-blue-600' : 'hover:bg-slate-800'}`}>
                        <Calendar size={20} /> Events
                    </button>
                    <button onClick={() => setActiveTab('legacy')} className={`flex items-center gap-3 w-full p-3 rounded-lg ${activeTab === 'legacy' ? 'bg-blue-600' : 'hover:bg-slate-800'}`}>
                        <ImageIcon size={20} /> Legacy Collection
                    </button>
                </nav>

                <button onClick={handleLogout} className="absolute bottom-6 flex items-center gap-3 text-red-400 hover:text-red-300 w-full p-3 hover:bg-slate-800 rounded-lg">
                    <LogOut size={20} /> Logout
                </button>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-10 overflow-y-auto">

                {/* SETTINGS TAB */}
                {activeTab === 'settings' && (
                    <div className="bg-white rounded-2xl shadow-sm p-8 max-w-2xl">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2"><Settings className="text-blue-500" /> General Settings</h3>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Event Timer Date & Time</label>
                                <input
                                    type="datetime-local"
                                    value={eventDate}
                                    onChange={(e) => setEventDate(e.target.value)}
                                    className="w-full border border-slate-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">YouTube Video ID (Landing Page)</label>
                                <div className="flex gap-4">
                                    <input
                                        type="text"
                                        value={videoUrlId}
                                        onChange={(e) => setVideoUrlId(e.target.value)}
                                        placeholder="e.g. aUkgcHGo_8c"
                                        className="flex-1 border border-slate-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 flex items-center justify-between">
                                <div>
                                    <div className="text-sm text-blue-800 font-semibold mb-1">Total Main Video Views</div>
                                    <div className="text-3xl font-bold text-blue-600">{videoViews} <span className="text-lg font-medium text-blue-400">clicks</span></div>
                                </div>
                                <Video size={32} className="text-blue-300" />
                            </div>

                            <button onClick={saveSettings} className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition">
                                <Save size={20} /> Save Changes
                            </button>
                        </div>
                    </div>
                )}

                {/* EVENTS TAB */}
                {activeTab === 'events' && (
                    <div>
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2"><Calendar className="text-blue-500" /> Manage Announcements</h3>

                        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8 max-w-3xl">
                            <h4 className="font-bold text-lg mb-4 text-slate-800 flex items-center gap-2"><Plus size={18} /> Add New Event</h4>
                            <form onSubmit={createEvent} className="grid grid-cols-2 gap-4">
                                <input required type="text" placeholder="Card Banner Title (e.g. WE! Podcast)" value={newEvent.bannertitle} onChange={e => setNewEvent({ ...newEvent, bannertitle: e.target.value })} className="border p-3 rounded-lg col-span-2 md:col-span-1" />
                                <input required type="text" placeholder="Main Title (e.g. Episode 2: Finding Your Tribe)" value={newEvent.title} onChange={e => setNewEvent({ ...newEvent, title: e.target.value })} className="border p-3 rounded-lg col-span-2 md:col-span-1" />
                                <input required type="text" placeholder="Date/Text (e.g. Coming Soon)" value={newEvent.date} onChange={e => setNewEvent({ ...newEvent, date: e.target.value })} className="border p-3 rounded-lg" />
                                <input required type="text" placeholder="Badge Type (e.g. Prodcast, New Book)" value={newEvent.type} onChange={e => setNewEvent({ ...newEvent, type: e.target.value })} className="border p-3 rounded-lg" />

                                <select value={newEvent.status} onChange={e => setNewEvent({ ...newEvent, status: e.target.value })} className="border p-3 rounded-lg col-span-2">
                                    <option value="upcoming">Upcoming (Pulse yellow dot)</option>
                                    <option value="Live">Live (Pulse green dot)</option>
                                </select>

                                <textarea required placeholder="Description..." value={newEvent.description} onChange={e => setNewEvent({ ...newEvent, description: e.target.value })} className="border p-3 rounded-lg col-span-2 h-24" />

                                <button type="submit" className="col-span-2 bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700">Add Announcement</button>
                            </form>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {events.map(ev => (
                                <div key={ev._id} className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex flex-col">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-xs font-bold bg-slate-100 px-2 py-1 rounded text-slate-600">{ev.type}</span>
                                        <button onClick={() => deleteEvent(ev._id)} className="text-red-400 hover:text-red-600"><Trash2 size={16} /></button>
                                    </div>
                                    <h4 className="font-bold text-lg mb-1 leading-tight">{ev.title}</h4>
                                    <p className="text-sm text-slate-500 mb-4 line-clamp-3 flex-1">{ev.description}</p>
                                    <div className="text-xs font-semibold text-slate-400 mt-auto">{ev.date} &bull; {ev.status}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* LEGACY TAB */}
                {activeTab === 'legacy' && (
                    <div>
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2"><ImageIcon className="text-blue-500" /> Manage Legacy Media</h3>

                        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8 max-w-2xl text-center border-2 border-dashed border-slate-200">
                            <form onSubmit={handleUpload} className="flex flex-col items-center gap-4">
                                <div className="p-4 bg-slate-50 rounded-full text-slate-400 mb-2"><ImageIcon size={32} /></div>
                                <input type="file" required onChange={(e) => setUploadFile(e.target.files[0])} className="text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                                <input type="text" placeholder="Title (optional)" value={uploadTitle} onChange={e => setUploadTitle(e.target.value)} className="border p-3 w-64 rounded-lg text-sm text-center" />
                                <button type="submit" className="bg-blue-600 text-white px-8 py-2 rounded-full font-bold hover:bg-blue-700 w-64">Upload to Gallery</button>
                            </form>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {legacyMedia.map(media => (
                                <div key={media._id} className="relative group bg-white p-2 rounded-xl shadow-sm border border-slate-100">
                                    {media.type === 'video' ? (
                                        <video src={`http://localhost:5000${media.src}`} className="w-full h-40 object-cover rounded-lg" />
                                    ) : (
                                        <img src={`http://localhost:5000${media.src}`} className="w-full h-40 object-cover rounded-lg" />
                                    )}
                                    <button onClick={() => deleteLegacy(media._id)} className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition shadow-lg hover:bg-red-600">
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
