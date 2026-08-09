import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../assets/images/logo1.png"
import {
  FaGraduationCap,
  FaFileAlt,
  FaBookOpen,
  FaBuilding,
  FaExternalLinkAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">

      {/* =========================================
          ADMISSION CTA
      ========================================= */}

      <section className="footer-admission">

        <div className="footer-admission-container">

          <div className="footer-admission-content">

            <span className="footer-eyebrow">
              START YOUR PHARMACY JOURNEY
            </span>

            <h2>
              Build Your Future in
              <span> Pharmaceutical Sciences</span>
            </h2>

            <p>
              Join Shri Komal Sahu Smarak Pharmacy College and
              take the next step toward a successful career
              in pharmaceutical education.
            </p>

          </div>

          <div className="footer-admission-buttons">

            <Link
              to="/admissions"
              className="footer-primary-btn"
            >
              Apply Admissions
              <FaArrowRight />
            </Link>

            <Link
              to="/admission-form"
              className="footer-outline-btn"
            >
              Admission Form
            </Link>

          </div>

        </div>

      </section>


      {/* =========================================
          MAIN FOOTER
      ========================================= */}

      <div className="footer-main">

        <div className="footer-container">


          {/* =====================================
              COLLEGE INFO
          ===================================== */}

          <div className="footer-about">

            <Link
              to="/"
              className="footer-logo"
            >

              <div className="footer-logo-image">
                <img
                  src={logo1}
                  alt="Shri Komal Sahu Pharmacy College"
                />
              </div>

            </Link>

            <h3>
              Shri Komal Sahu Smarak
              <br />
              Pharmacy College
            </h3>

            <p>
              Empowering students with quality pharmaceutical
              education, practical knowledge and professional
              skills for a better healthcare future.
            </p>


            {/* SOCIAL MEDIA */}

            <div className="footer-social">

              <a
                href="#"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

            </div>

          </div>


          {/* =====================================
              ADMISSIONS
          ===================================== */}

          <div className="footer-column">

            <h4>
              <FaGraduationCap />
              Admissions
            </h4>

            <ul>

              <li>
                <Link to="/admissions">
                  Apply Admissions
                </Link>
              </li>

              <li>
                <Link to="/fee-structure">
                  Fee Structure
                </Link>
              </li>

              <li>
                <Link to="/admission-form">
                  Admission Form
                </Link>
              </li>

              <li>
                <Link to="/scholarship">
                  Scholarship
                </Link>
              </li>

              <li>
                <Link to="/academics">
                  Education
                </Link>
              </li>

            </ul>

          </div>


          {/* =====================================
              USEFUL LINKS
          ===================================== */}

          <div className="footer-column">

            <h4>
              <FaBookOpen />
              Useful Links
            </h4>

            <ul>

              <li>
                <Link to="/academics">
                  Academics
                </Link>
              </li>

              <li>
                <Link to="/facilities">
                  Facilities
                </Link>
              </li>

              <li>
                <a
                  href="https://www.aicte-india.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AICTE
                  <FaExternalLinkAlt />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  Webmail
                </a>
              </li>

              <li>
                <Link to="/contact">
                  Contact Us
                </Link>
              </li>

            </ul>

          </div>


          {/* =====================================
              QUICK INFORMATION
          ===================================== */}

          <div className="footer-column">

            <h4>
              <FaFileAlt />
              Information
            </h4>

            <ul>

              <li>
                <Link to="/directories">
                  Contact / Directories
                </Link>
              </li>

              <li>
                <Link to="/admissions">
                  Admissions
                </Link>
              </li>

              <li>
                <Link to="/emergency">
                  Emergency Information
                </Link>
              </li>

              <li>
                <Link to="/feedback">
                  Questions & Feedback
                </Link>
              </li>

              <li>
                <Link to="/media">
                  Media Relations
                </Link>
              </li>

            </ul>

          </div>


          {/* =====================================
              CONTACT
          ===================================== */}

          <div className="footer-contact">

            <h4>
              <FaBuilding />
              Contact Us
            </h4>


            <div className="footer-contact-item">

              <span>
                <FaMapMarkerAlt />
              </span>

              <p>
                Badagaon, Punapar,
                <br />
                Jiyanpur, Azamgarh,
                <br />
                Uttar Pradesh - 276127
              </p>

            </div>


            <a
              href="tel:7355632066"
              className="footer-contact-item"
            >

              <span>
                <FaPhoneAlt />
              </span>

              <p>
                7355632066
                <br />
                9651371295
              </p>

            </a>


            <a
              href="mailto:care@sksspharmacycollege.in"
              className="footer-contact-item"
            >

              <span>
                <FaEnvelope />
              </span>

              <p>
                care@sksspharmacycollege.in
              </p>

            </a>

          </div>

        </div>

      </div>


      {/* =========================================
          BOTTOM BAR
      ========================================= */}

      <div className="footer-bottom">

        <div className="footer-bottom-container">

          <p>
            © 2026 Shri Komal Sahu Smarak Pharmacy College.
            All Rights Reserved.
          </p>

          <p className="footer-powered">
            Powered By :
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
            >
              Beena Software Solutions
            </a>
          </p>

          <p className="footer-updated">
            Site Last Updated :
            <strong>01 August 2026</strong>
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;