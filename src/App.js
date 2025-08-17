import React from "react";
import "../src/App.css"
import { Routes, Route } from "react-router-dom"; 
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
import Hopeframe from "./components/HopeFrames"
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div>
      
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/ebooks" element={<EBooks />} />
        <Route path="/training" element={<Training />} />
        <Route path="/education" element={<Education />} />
        <Route path="/mindset" element={<Mindset />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/smiles" element={<Smile />} />
        <Route path="/Hopeframe" element={<Hopeframe />} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
