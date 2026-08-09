import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/images/logo1.png"
import {
  FaChevronDown,
  FaBars,
  FaTimes,
  FaUserLock,
} from "react-icons/fa";

import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setAboutOpen(false);
  };

  return (
    <header className="main-navbar">

      <div className="navbar-container">

        {/* ================= LOGO ================= */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>

          <div className="navbar-logo-image">
             <img
               src={logo}
               alt="Shri Komal Sahu Pharmacy College Logo"
             />
           </div>

          <div className="logo-text">
            <span>SHRI KOMAL SAHU</span>
            <strong>PHARMACY COLLEGE</strong>
          </div>

        </Link>


        {/* ================= DESKTOP MENU ================= */}
        <nav className={`navbar-menu ${menuOpen ? "active" : ""}`}>

          <NavLink
            to="/"
            className="nav-link"
            onClick={closeMenu}
          >
            Home
          </NavLink>


          {/* ABOUT DROPDOWN */}
          <div className="nav-dropdown">

            <button
              className="nav-link dropdown-btn"
              onClick={() => setAboutOpen(!aboutOpen)}
            >
              About Us
              <FaChevronDown
                className={aboutOpen ? "rotate" : ""}
              />
            </button>

            <div
              className={`dropdown-menu ${
                aboutOpen ? "dropdown-active" : ""
              }`}
            >

              <NavLink
                to="/about/introduction"
                onClick={closeMenu}
              >
                Introduction
              </NavLink>

              <NavLink
                to="/about/chairman-message"
                onClick={closeMenu}
              >
                Chairman's Message
              </NavLink>

              <NavLink
                to="/about/principal-message"
                onClick={closeMenu}
              >
                Principal's Message
              </NavLink>

              <NavLink
                to="/about/administration"
                onClick={closeMenu}
              >
                Administration
              </NavLink>

              <NavLink
                to="/about/affiliation"
                onClick={closeMenu}
              >
                Affiliation
              </NavLink>

              <NavLink
                to="/about/rules"
                onClick={closeMenu}
              >
                Rules & Regulation
              </NavLink>

              <NavLink
                to="/about/mandatory-documents"
                onClick={closeMenu}
              >
                Mandatory Documents
              </NavLink>

              <NavLink
                to="/about/calendar"
                onClick={closeMenu}
              >
                Calendar
              </NavLink>

              <NavLink
                to="/downloads"
                onClick={closeMenu}
              >
                Downloads
              </NavLink>

            </div>

          </div>


          {/* FACULTY */}
          <NavLink
            to="/faculty"
            className="nav-link"
            onClick={closeMenu}
          >
            Faculty
          </NavLink>


          {/* GALLERY */}
          <NavLink
            to="/gallery"
            className="nav-link"
            onClick={closeMenu}
          >
            Gallery
          </NavLink>


          {/* NEWS */}
          <NavLink
            to="/news"
            className="nav-link"
            onClick={closeMenu}
          >
            News & Events
          </NavLink>


          {/* CONTACT */}
          <NavLink
            to="/contact"
            className="nav-link"
            onClick={closeMenu}
          >
            Contact
          </NavLink>

        </nav>


        {/* ================= LOGIN ================= */}
        <Link
          to="/login"
          className="login-button"
          onClick={closeMenu}
        >
          <FaUserLock />

          <span>Login</span>
        </Link>


        {/* ================= MOBILE BUTTON ================= */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

    </header>
  );
};

export default Navbar;