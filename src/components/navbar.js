import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../style/nav.css";
import logo from "./smilelogo.png"; // Correct path to your logo

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // Check scroll position on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset';
  }, [location]);

  const toggleMobileMenu = () => {
    const nextState = !isMobileMenuOpen;
    setIsMobileMenuOpen(nextState);
    document.body.style.overflow = nextState ? 'hidden' : 'unset';
  };

  const handleNavItemClick = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  const handleOverlayClick = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  // Helper function to check if link is active
  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <nav className="navbar-nav">

          {/* Logo - positioned on left */}
          <Link to="/" className="navbar-logo" onClick={handleNavItemClick}>
            <img
              src={logo} // Use the imported logo
              alt="Smile Logo"
              className="navbar-logo-img"
            />
          </Link>

          {/* Centered Navigation Menu */}
          <ul className={`navbar-menu ${isMobileMenuOpen ? 'navbar-menu-active' : ''}`}>
            <li className="navbar-item">
              <Link
                to="/"
                className={`navbar-link ${isActiveLink('/') ? 'active' : ''}`}
                onClick={handleNavItemClick}
              >
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/founder"
                className={`navbar-link ${isActiveLink('/founder') ? 'active' : ''}`}
                onClick={handleNavItemClick}
              >
                Founder
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/ebooks"
                className={`navbar-link ${isActiveLink('/ebooks') ? 'active' : ''}`}
                onClick={handleNavItemClick}
              >
                E-Books
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/training"
                className={`navbar-link ${isActiveLink('/training') ? 'active' : ''}`}
                onClick={handleNavItemClick}
              >
                Training
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/education"
                className={`navbar-link ${isActiveLink('/education') ? 'active' : ''}`}
                onClick={handleNavItemClick}
              >
                Education
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/mindset"
                className={`navbar-link ${isActiveLink('/mindset') ? 'active' : ''}`}
                onClick={handleNavItemClick}
              >
                Mindset
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/Hopeframe"
                className={`navbar-link ${isActiveLink('/Hopeframe') ? 'active' : ''}`}
                onClick={handleNavItemClick}
              >
                Hope Frame
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/smiles"
                className={`navbar-link ${isActiveLink('/smiles') ? 'active' : ''}`}
                onClick={handleNavItemClick}
              >
                Smiles
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/contact"
                className={`navbar-link ${isActiveLink('/contact') ? 'active' : ''}`}
                onClick={handleNavItemClick}
              >
                Contact Us
              </Link>
            </li>

            {/* Mobile Donate Button */}
            <li className="navbar-item navbar-mobile-donate">
              <a to="/donate" className="navbar-btn-primary" onClick={handleNavItemClick}
                href="https://www.paypal.com/donate/?hosted_button_id=7QRRA68W82CF4"
                target="_blank"
              >
                Donate
              </a>
            </li>
          </ul>

          {/* Right Side Actions - positioned on right */}
          <div className="navbar-actions">
            {/* Desktop Donate Button */}
            <a
              href="https://www.paypal.com/donate/?hosted_button_id=7QRRA68W82CF4"
              className="navbar-btn-primary navbar-desktop-donate"
              target="_blank"
            >
              Donate
            </a>
            {/* Mobile Menu Toggle */}
            <button
              className={`navbar-mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
              aria-expanded={isMobileMenuOpen}
            >
              <span className="navbar-hamburger-line"></span>
              <span className="navbar-hamburger-line"></span>
              <span className="navbar-hamburger-line"></span>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`navbar-mobile-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={handleOverlayClick}
        aria-hidden="true"
      ></div>
    </header>
  );
};

export default Navbar;