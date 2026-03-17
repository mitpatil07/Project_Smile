import React from "react";
import "../src/App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import LandingPage from "./components/landingpage";
import Founder from "./components/founder";
import EBooks from "./components/ebooks";
import Training from "./components/training";
import Education from "./components/education";
import Mindset from "./components/Mindset";
import Contact from "./components/Contact_Us";
import Smile from "./components/Smiles";
import Hopeframe from "./components/HopeFrames";
import ScrollToTop from "./components/ScrollToTop";
import Legacyposts from "./components/Legacyposts";
import LanguageHub from "./components/language-hub";
import AdminLogin from "./components/admin/AdminLogin";
import AdminDashboard from "./components/admin/AdminDashboard";

// import the hook
import usePageTracking from "./hooks/usePageTracking";

function App() {
  // run tracking on every route change
  usePageTracking();
  const location = useLocation();

  // Check if current route is an admin route
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div>
      <ScrollToTop />
      {!isAdminRoute && <Navbar />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/ebooks" element={<EBooks />} />
        <Route path="/training" element={<Training />} />
        <Route path="/language-hub" element={<LanguageHub />} />
        <Route path="/education" element={<Education />} />
        <Route path="/mindset" element={<Mindset />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/smiles" element={<Smile />} />
        <Route path="/Hopeframe" element={<Hopeframe />} />
        <Route path="/Legacyposts" element={<Legacyposts />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>

      {!isAdminRoute && <Footer />}
    </div>
  );
}

export default App;
