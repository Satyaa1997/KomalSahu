import  { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/images/logo1.png";
import {
  FaChevronDown,
  FaBars,
  FaTimes,
  FaUserLock,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setAboutOpen(false);
  };

  return (
    <header className={`header-wrapper ${scrolled ? "header-scrolled" : ""}`}>
      {/* Top Bar for Professional College Contact */}
      <div className="top-bar">
        <div className="site-container top-bar-content">
          <div className="top-bar-info">
            <span><FaMapMarkerAlt /> Azamgarh, Uttar Pradesh</span>
            <a href="mailto:care@sksspharmacycollege.in"><FaEnvelope /> care@sksspharmacycollege.in</a>
            <a href="tel:7355632066"><FaPhoneAlt /> +91 7355632066</a>
          </div>
          <div className="top-bar-badge">
            <span>PCI & AICTE Approved Institute</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="main-navbar">
        <div className="site-container navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <div className="navbar-logo-image">
              <img src={logo} alt="Shri Komal Sahu Pharmacy College" />
            </div>
            <div className="logo-text">
              <span>SHRI KOMAL SAHU SMARAK</span>
              <strong>PHARMACY COLLEGE</strong>
            </div>
          </Link>

          <nav className={`navbar-menu ${menuOpen ? "active" : ""}`}>
            <NavLink to="/" className="nav-link" onClick={closeMenu}>
              Home
            </NavLink>

            {/* About Dropdown */}
            <div className="nav-dropdown">
              <button
                type="button"
                className="nav-link dropdown-btn"
                onClick={() => setAboutOpen(!aboutOpen)}
              >
                About Us <FaChevronDown className={aboutOpen ? "rotate" : ""} />
              </button>

              <div className={`dropdown-menu ${aboutOpen ? "dropdown-active" : ""}`}>
                <NavLink to="/about/introduction" onClick={closeMenu}>Introduction</NavLink>
                <NavLink to="/about/chairman-message" onClick={closeMenu}>Chairman's Message</NavLink>
                <NavLink to="/about/principal-message" onClick={closeMenu}>Principal's Message</NavLink>
                <NavLink to="/about/administration" onClick={closeMenu}>Administration</NavLink>
                <NavLink to="/about/affiliation" onClick={closeMenu}>Affiliation & Approvals</NavLink>
                <NavLink to="/about/rules" onClick={closeMenu}>Rules & Regulations</NavLink>
                <NavLink to="/about/mandatory-documents" onClick={closeMenu}>Mandatory Documents</NavLink>
                <NavLink to="/about/calendar" onClick={closeMenu}>Academic Calendar</NavLink>
                <NavLink to="/downloads" onClick={closeMenu}>Downloads</NavLink>
              </div>
            </div>

            <NavLink to="/faculty" className="nav-link" onClick={closeMenu}>
              Faculty
            </NavLink>

            <NavLink to="/gallery" className="nav-link" onClick={closeMenu}>
              Gallery
            </NavLink>

            <NavLink to="/news" className="nav-link" onClick={closeMenu}>
              News & Events
            </NavLink>

            <NavLink to="/contact" className="nav-link" onClick={closeMenu}>
              Contact
            </NavLink>

            <div className="mobile-actions">
              <Link to="/admissions" className="btn-primary-sm" onClick={closeMenu}>
                Apply Admission
              </Link>
            </div>
          </nav>

          <div className="navbar-actions">
            <Link to="/login" className="login-button">
              <FaUserLock />
              <span>Portal Login</span>
            </Link>

            <button
              className="mobile-menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Navigation"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;