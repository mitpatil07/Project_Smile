import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Settings, Video, Calendar, Image as ImageIcon, Save, LogOut, Plus, Trash2, LayoutDashboard, Menu, X, CheckCircle2, AlertCircle, BarChart3, Users, Activity, TrendingUp, MonitorPlay } from 'lucide-react';
import API from '../../config/api';

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState('views');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

    // State for Views Tab
    const [courseViews, setCourseViews] = useState({});

    // Notification State
    const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

    const token = localStorage.getItem('adminToken');

    const showToast = (message, type = 'success') => {
        setToast({ show: true, message, type });
        setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 3000);
    };

    useEffect(() => {
        if (!token) {
            navigate('/admin');
            return;
        }
        fetchSettings();
        fetchEvents();
        fetchLegacyMedia();
        fetchCourseViews();

        const interval = setInterval(() => {
            fetchCourseViews();
        }, 3000);

        return () => clearInterval(interval);
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
            const res = await fetch(`${API}/api/settings`);
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
            await fetch(`${API}/api/settings`, {
                method: 'PUT',
                headers: authHeaders,
                body: JSON.stringify({ eventTimerDate: eventDate, videoUrlId })
            });
            showToast('Settings saved successfully!');
        } catch (err) { showToast('Failed to save settings', 'error'); }
    };

    // --- EVENTS ACTIONS ---
    const fetchEvents = async () => {
        try {
            const res = await fetch(`${API}/api/events`);
            if (res.ok) setEvents(await res.json());
        } catch (err) { console.error(err); }
    };

    const createEvent = async (e) => {
        e.preventDefault();
        try {
            await fetch(`${API}/api/events`, {
                method: 'POST',
                headers: authHeaders,
                body: JSON.stringify(newEvent)
            });
            setNewEvent({ title: '', description: '', date: '', type: '', bannertitle: '', status: 'upcoming' });
            showToast('Announcement created successfully!');
            fetchEvents();
        } catch (err) { showToast('Failed to create event', 'error'); }
    };

    const deleteEvent = async (id) => {
        try {
            await fetch(`${API}/api/events/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            showToast('Announcement deleted');
            fetchEvents();
        } catch (err) { showToast('Failed to delete event', 'error'); }
    };

    // --- LEGACY ACTIONS ---
    const fetchLegacyMedia = async () => {
        try {
            const res = await fetch(`${API}/api/legacy`);
            if (res.ok) setLegacyMedia(await res.json());
        } catch (err) { console.error(err); }
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        if (!uploadFile) return showToast('Select a file to upload', 'error');

        const formData = new FormData();
        formData.append('media', uploadFile);
        formData.append('title', uploadTitle);

        try {
            const res = await fetch(`${API}/api/legacy`, {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${token}` },
                body: formData
            });
            if (res.ok) {
                setUploadFile(null);
                setUploadTitle('');
                showToast('File uploaded successfully!');
                fetchLegacyMedia();
            } else {
                showToast('Upload failed', 'error');
            }
        } catch (err) { showToast('Error uploading file', 'error'); }
    };

    const deleteLegacy = async (id) => {
        try {
            await fetch(`${API}/api/legacy/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            showToast('Media deleted');
            fetchLegacyMedia();
        } catch (err) { showToast('Delete failed', 'error'); }
    };

    // --- VIEWS LOGIC ---
    const fetchCourseViews = async () => {
        try {
            const res = await fetch(`${API}/api/courses/views`);
            if (res.ok) setCourseViews(await res.json());
        } catch (err) { console.error(err); }
    };

    // Calculate analytics metrics
    const educationViews = Object.entries(courseViews).filter(([id]) => !id.startsWith('t_') && !id.startsWith('lang_'));
    const trainingViews = Object.entries(courseViews).filter(([id]) => id.startsWith('t_'));
    const languageViews = Object.entries(courseViews).filter(([id]) => id.startsWith('lang_'));

    const maxEdu = Math.max(...educationViews.map(([, v]) => v), 1);
    const maxTrain = Math.max(...trainingViews.map(([, v]) => v), 1);
    const maxLang = Math.max(...languageViews.map(([, v]) => v), 1);

    const totalEdu = educationViews.reduce((a, [, v]) => a + v, 0);
    const totalTrain = trainingViews.reduce((a, [, v]) => a + v, 0);
    const totalLang = languageViews.reduce((a, [, v]) => a + v, 0);
    const totalSite = Object.values(courseViews).reduce((a, b) => a + b, 0);

    const navItems = [
        { id: 'views', label: 'Overview', icon: LayoutDashboard },
        { id: 'settings', label: 'Preferences', icon: Settings },
        { id: 'events', label: 'Announcements', icon: Calendar },
        { id: 'legacy', label: 'Media Library', icon: ImageIcon },
    ];

    return (
        <div className="min-h-screen bg-[#F0F4F8] text-slate-800 flex flex-col relative font-sans antialiased selection:bg-blue-100">
            {/* Custom Toast Notification */}
            {toast.show && (
                <div className={`fixed bottom-6 right-6 z-[100] flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-xl transition-all duration-300 transform translate-y-0 opacity-100 border ${toast.type === 'success' ? 'bg-white text-blue-900 border-blue-200' : 'bg-red-50 text-red-800 border-red-200'
                    }`}>
                    {toast.type === 'success' ? <CheckCircle2 size={18} className="text-blue-500" /> : <AlertCircle size={18} className="text-red-500" />}
                    <span className="text-sm font-bold tracking-tight">{toast.message}</span>
                </div>
            )}

            {/* Main Navbar matched to Site Branding */}
            <nav className="bg-white/80 backdrop-blur-md border-b border-indigo-100 sticky top-0 z-50 shadow-sm">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Brand */}
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 bg-gradient-to-br from-[#80D0FF] to-[#A78BFA] rounded-xl flex items-center justify-center text-white shadow-md shadow-indigo-200">
                                <MonitorPlay size={18} />
                            </div>
                            <span className="text-lg font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent tracking-tight">
                                ProjectSmile Console
                            </span>
                        </div>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-1">
                            {navItems.map(item => (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveTab(item.id)}
                                    className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 ${activeTab === item.id
                                        ? 'bg-blue-50 text-blue-700 shadow-sm border border-blue-100'
                                        : 'text-slate-500 hover:text-blue-600 hover:bg-slate-50'
                                        }`}
                                >
                                    <item.icon size={16} className={activeTab === item.id ? 'text-blue-600' : 'text-slate-400'} />
                                    {item.label}
                                </button>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="hidden md:flex items-center gap-4">
                            <span className="text-xs font-bold text-slate-500 flex items-center gap-1.5 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
                                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-sm shadow-blue-300"></span> Online
                            </span>
                            <button
                                onClick={handleLogout}
                                className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-red-50 hover:text-red-500 transition-colors"
                                title="Sign out"
                            >
                                <LogOut size={16} />
                            </button>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="p-2 text-slate-500 hover:text-blue-600"
                            >
                                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden border-t border-indigo-100 bg-white/95 backdrop-blur-xl absolute w-full shadow-2xl">
                        <div className="p-4 space-y-2">
                            {navItems.map(item => (
                                <button
                                    key={item.id}
                                    onClick={() => { setActiveTab(item.id); setMobileMenuOpen(false); }}
                                    className={`flex w-full items-center gap-3 py-3.5 px-5 rounded-xl text-base font-bold transition-colors ${activeTab === item.id
                                        ? 'bg-blue-50 text-blue-700'
                                        : 'text-slate-500 hover:bg-slate-50 hover:text-blue-600'
                                        }`}
                                >
                                    <item.icon size={20} className={activeTab === item.id ? 'text-blue-600' : 'text-slate-400'} />
                                    {item.label}
                                </button>
                            ))}
                            <button
                                onClick={handleLogout}
                                className="flex w-full items-center gap-3 py-3.5 px-5 rounded-xl text-base font-bold text-rose-500 hover:bg-rose-50"
                            >
                                <LogOut size={20} /> Sign out
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Main Content Area */}
            <main className="flex-1 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">

                {/* --- OVERVIEW TAB (BRAND MATCHED ANALYTICS) --- */}
                {activeTab === 'views' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="mb-8 flex items-end justify-between">
                            <div>
                                <h2 className="text-3xl font-black text-slate-800 tracking-tight flex items-center gap-3">
                                    System Analytics
                                </h2>
                                <p className="text-sm font-bold text-slate-500 mt-1">Live traffic monitoring and general engagement metrics across platform hubs.</p>
                            </div>
                        </div>

                        {/* Top Clean Metric Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-6 shadow-lg shadow-blue-500/20 text-white flex flex-col justify-between transform transition hover:-translate-y-1">
                                <div className="text-xs font-bold text-blue-100 uppercase tracking-widest mb-4 flex items-center justify-between">Total Platform <TrendingUp size={16} className="text-white" /></div>
                                <div className="text-4xl font-black tracking-tight">{totalSite.toLocaleString()}</div>
                            </div>
                            <div className="bg-white rounded-2xl p-6 border border-indigo-50 shadow-sm flex flex-col justify-between transform transition hover:-translate-y-1 group">
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center justify-between">Education <Video size={16} className="text-[#80D0FF] group-hover:scale-110 transition-transform" /></div>
                                <div className="text-4xl font-black text-slate-800 tracking-tight">{totalEdu.toLocaleString()}</div>
                            </div>
                            <div className="bg-white rounded-2xl p-6 border border-indigo-50 shadow-sm flex flex-col justify-between transform transition hover:-translate-y-1 group">
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center justify-between">Training <Users size={16} className="text-[#A78BFA] group-hover:scale-110 transition-transform" /></div>
                                <div className="text-4xl font-black text-slate-800 tracking-tight">{totalTrain.toLocaleString()}</div>
                            </div>
                            <div className="bg-white rounded-2xl p-6 border border-indigo-50 shadow-sm flex flex-col justify-between transform transition hover:-translate-y-1 group">
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center justify-between">Languages <BarChart3 size={16} className="text-emerald-400 group-hover:scale-110 transition-transform" /></div>
                                <div className="text-4xl font-black text-slate-800 tracking-tight">{totalLang.toLocaleString()}</div>
                            </div>
                        </div>

                        {/* Detailed Category Bars (Matched Aesthetic) */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                            {/* Education Detailed */}
                            <div className="bg-white rounded-2xl shadow-sm border border-indigo-50 p-6">
                                <h3 className="text-base font-black text-slate-800 mb-6 pb-4 border-b border-slate-100 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-[#80D0FF]/20 text-[#80D0FF] flex items-center justify-center"><Video size={18} /></div> Course Directory
                                </h3>
                                <div className="space-y-5">
                                    {educationViews.sort((a, b) => b[1] - a[1]).map(([id, views]) => (
                                        <div key={id} className="group">
                                            <div className="flex justify-between items-baseline mb-2">
                                                <span className="text-sm font-bold text-slate-600 group-hover:text-[#80D0FF] transition-colors">ID: {id}</span>
                                                <span className="text-sm font-black text-slate-800">{views.toLocaleString()}</span>
                                            </div>
                                            <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden shadow-inner">
                                                <div
                                                    className="bg-gradient-to-r from-[#80D0FF] to-blue-500 h-full rounded-full transition-all duration-1000 ease-in-out relative"
                                                    style={{ width: `${(views / maxEdu) * 100}%` }}
                                                >
                                                    <div className="absolute top-0 right-0 bottom-0 left-0 bg-white/20 animate-pulse"></div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Training Detailed */}
                            <div className="bg-white rounded-2xl shadow-sm border border-indigo-50 p-6">
                                <h3 className="text-base font-black text-slate-800 mb-6 pb-4 border-b border-slate-100 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-[#A78BFA]/20 text-[#A78BFA] flex items-center justify-center"><Users size={18} /></div> Training Network
                                </h3>
                                <div className="space-y-5 max-h-[440px] overflow-y-auto pr-2 custom-scrollbar">
                                    {trainingViews.sort((a, b) => b[1] - a[1]).map(([id, views]) => (
                                        <div key={id} className="group">
                                            <div className="flex justify-between items-baseline mb-2">
                                                <span className="text-sm font-bold text-slate-600 group-hover:text-[#A78BFA] transition-colors">Module {id.replace('t_', '')}</span>
                                                <span className="text-sm font-black text-slate-800">{views.toLocaleString()}</span>
                                            </div>
                                            <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden shadow-inner">
                                                <div
                                                    className="bg-gradient-to-r from-[#A78BFA] to-purple-500 h-full rounded-full transition-all duration-1000 ease-in-out relative"
                                                    style={{ width: `${(views / maxTrain) * 100}%` }}
                                                >
                                                    <div className="absolute top-0 right-0 bottom-0 left-0 bg-white/20 animate-pulse"></div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Language Detailed */}
                            <div className="bg-white rounded-2xl shadow-sm border border-indigo-50 p-6">
                                <h3 className="text-base font-black text-slate-800 mb-6 pb-4 border-b border-slate-100 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-500 flex items-center justify-center"><BarChart3 size={18} /></div> Linguistics
                                </h3>
                                <div className="space-y-5">
                                    {languageViews.sort((a, b) => b[1] - a[1]).map(([id, views]) => (
                                        <div key={id} className="group">
                                            <div className="flex justify-between items-baseline mb-2">
                                                <span className="text-sm font-bold text-slate-600 group-hover:text-emerald-500 transition-colors">Class {id.replace('lang_', '')}</span>
                                                <span className="text-sm font-black text-slate-800">{views.toLocaleString()}</span>
                                            </div>
                                            <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden shadow-inner">
                                                <div
                                                    className="bg-gradient-to-r from-emerald-400 to-emerald-500 h-full rounded-full transition-all duration-1000 ease-in-out relative"
                                                    style={{ width: `${(views / maxLang) * 100}%` }}
                                                >
                                                    <div className="absolute top-0 right-0 bottom-0 left-0 bg-white/20 animate-pulse"></div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                )}

                {/* --- SETTINGS TAB (REFINED) --- */}
                {activeTab === 'settings' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-xl mx-auto">
                        <div className="mb-8 text-center">
                            <h2 className="text-3xl font-black text-slate-800 tracking-tight">Preferences</h2>
                            <p className="text-sm font-bold text-slate-500 mt-2">Configure global platform variables and countdowns.</p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-sm border border-indigo-50 p-8 space-y-8">
                            <div>
                                <label className="block text-sm font-black text-slate-700 mb-3">Event Countdown Deadline</label>
                                <input
                                    type="datetime-local"
                                    value={eventDate}
                                    onChange={(e) => setEventDate(e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl font-bold text-slate-700 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-inner"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-black text-slate-700 mb-3">Featured Video Source ID</label>
                                <input
                                    type="text"
                                    value={videoUrlId}
                                    onChange={(e) => setVideoUrlId(e.target.value)}
                                    placeholder="e.g. aUkgcHGo_8c"
                                    className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl font-bold text-slate-700 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-inner"
                                />
                                <p className="text-xs font-bold text-slate-400 mt-2">The unique identifier appended to the YouTube URL.</p>
                            </div>

                            <button onClick={saveSettings} className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-3.5 rounded-xl font-black text-base shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transform hover:-translate-y-1 transition-all">
                                <Save size={18} /> Save Configuration
                            </button>
                        </div>
                    </div>
                )}

                {/* --- EVENTS TAB (REFINED) --- */}
                {activeTab === 'events' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl mx-auto">
                        <div className="mb-8 flex justify-between items-end">
                            <div>
                                <h2 className="text-3xl font-black text-slate-800 tracking-tight">Announcements</h2>
                                <p className="text-sm font-bold text-slate-500 mt-2">Manage network broadcasts and active event statuses.</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-sm border border-indigo-50 p-8 mb-10">
                            <h3 className="font-black text-lg mb-6 text-slate-800 pb-4 border-b border-slate-100 flex items-center gap-2">
                                <Plus size={20} className="text-blue-500" /> Draft New Entry
                            </h3>
                            <form onSubmit={createEvent} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Banner Line</label>
                                    <input required type="text" placeholder="e.g. WE! Podcast" value={newEvent.bannertitle} onChange={e => setNewEvent({ ...newEvent, bannertitle: e.target.value })} className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl font-bold text-sm focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all" />
                                </div>
                                <div>
                                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Headline</label>
                                    <input required type="text" placeholder="e.g. Finding Your Tribe" value={newEvent.title} onChange={e => setNewEvent({ ...newEvent, title: e.target.value })} className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl font-bold text-sm focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all" />
                                </div>
                                <div>
                                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Date / Subtitle</label>
                                    <input required type="text" placeholder="e.g. March 12, 2026" value={newEvent.date} onChange={e => setNewEvent({ ...newEvent, date: e.target.value })} className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl font-bold text-sm focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all" />
                                </div>
                                <div>
                                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Category Flag</label>
                                    <input required type="text" placeholder="e.g. Media" value={newEvent.type} onChange={e => setNewEvent({ ...newEvent, type: e.target.value })} className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl font-bold text-sm focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all" />
                                </div>
                                <div className="sm:col-span-2">
                                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Current Status</label>
                                    <select value={newEvent.status} onChange={e => setNewEvent({ ...newEvent, status: e.target.value })} className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl font-bold text-sm focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all">
                                        <option value="upcoming">🟡 Pending / Upcoming</option>
                                        <option value="Live">🟢 Live / Active</option>
                                    </select>
                                </div>

                                <div className="sm:col-span-2">
                                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Content Body</label>
                                    <textarea required placeholder="Content description..." value={newEvent.description} onChange={e => setNewEvent({ ...newEvent, description: e.target.value })} className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl font-bold text-sm focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all min-h-[120px] resize-y" />
                                </div>

                                <button type="submit" className="sm:col-span-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-base py-3.5 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transform hover:-translate-y-1 transition-all mt-2">Publish to Network</button>
                            </form>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {events.map(ev => (
                                <div key={ev._id} className="bg-white p-6 rounded-2xl shadow-sm border border-indigo-50 flex flex-col group relative transform transition hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10">
                                    <button onClick={() => deleteEvent(ev._id)} className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-rose-500 hover:bg-rose-50 transition-all opacity-0 group-hover:opacity-100 shadow-sm">
                                        <Trash2 size={16} />
                                    </button>
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className={`w-2 h-2 rounded-full ${ev.status === 'Live' ? 'bg-emerald-500 animate-pulse' : 'bg-amber-400'}`}></span>
                                        <span className="text-xs font-black text-slate-500 uppercase tracking-widest">{ev.type}</span>
                                    </div>
                                    <h4 className="font-black text-xl text-slate-800 mb-2 leading-tight pr-6">{ev.title}</h4>
                                    <p className="text-sm font-medium text-slate-600 mb-6 line-clamp-3 leading-relaxed flex-1">{ev.description}</p>

                                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400">
                                        <span>{ev.date}</span>
                                        <span className={`px-2 py-1.5 rounded-lg border ${ev.status === 'Live' ? 'bg-emerald-50 text-emerald-600 border-emerald-200 shadow-inner' : 'bg-amber-50 text-amber-600 border-amber-200 shadow-inner'}`}>
                                            {ev.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* --- LEGACY TAB (REFINED) --- */}
                {activeTab === 'legacy' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto">
                        <div className="mb-8 flex justify-between items-end">
                            <div>
                                <h2 className="text-3xl font-black text-slate-800 tracking-tight">Media Library</h2>
                                <p className="text-sm font-bold text-slate-500 mt-2">Manage global assets for the masonry gallery display.</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-sm border border-indigo-50 p-8 mb-10">
                            <form onSubmit={handleUpload} className="flex flex-col sm:flex-row items-center gap-6">
                                <div className="flex-1 w-full flex flex-col sm:flex-row gap-6">
                                    <input type="file" required onChange={(e) => setUploadFile(e.target.files[0])} className="w-full sm:w-auto text-sm text-slate-500 file:mr-4 file:py-3.5 file:px-6 file:rounded-xl file:border-0 file:text-sm file:font-black file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer block border border-indigo-50 rounded-xl p-1 font-bold" />
                                    <input type="text" placeholder="Title or Reference ID" value={uploadTitle} onChange={e => setUploadTitle(e.target.value)} className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl font-bold text-sm focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all shadow-inner" />
                                </div>
                                <button type="submit" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3.5 rounded-xl font-black text-base flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transform hover:-translate-y-1 transition-all shrink-0">
                                    <Plus size={20} /> Upload Asset
                                </button>
                            </form>
                        </div>

                        <div className="columns-2 sm:columns-3 lg:columns-4 gap-6 space-y-6">
                            {legacyMedia.map(media => (
                                <div key={media._id} className="relative group bg-slate-100 rounded-2xl overflow-hidden shadow-md break-inside-avoid">
                                    {media.type === 'video' ? (
                                        <video src={`${API}${media.src}`} autoPlay loop muted playsInline className="w-full object-cover" />
                                    ) : (
                                        <img src={`${API}${media.src}`} alt="Asset" className="w-full object-cover" />
                                    )}
                                    <div className="absolute inset-0 bg-indigo-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 backdrop-blur-sm">
                                        <button onClick={() => deleteLegacy(media._id)} className="w-12 h-12 rounded-full bg-white text-rose-500 flex items-center justify-center hover:bg-rose-50 hover:scale-110 transition-all shadow-xl">
                                            <Trash2 size={20} />
                                        </button>
                                    </div>
                                    {media.title && (
                                        <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md p-3 border-t border-indigo-50">
                                            <h5 className="text-slate-800 font-bold text-sm truncate">{media.title}</h5>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </main>

            <style>{`
                .custom-scrollbar::-webkit-scrollbar { width: 4px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
            `}</style>
        </div>
    );
}
