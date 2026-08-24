import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../assets/images/logo1.png";
import {
  FaGraduationCap,
  FaFileAlt,
  FaBookOpen,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaExternalLinkAlt
} from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      {/* Admission Call-to-Action Strip */}
      <section className="footer-admission">
        <div className="site-container footer-admission-box">
          <div className="footer-admission-text">
            <span className="cta-eyebrow">ADMISSIONS OPEN FOR 2026-27</span>
            <h2>Build Your Future in Pharmaceutical Sciences</h2>
            <p>
              Join Shri Komal Sahu Smarak Pharmacy College and take the next step toward a successful career in healthcare, clinical research, and hospital pharmacy.
            </p>
          </div>

          <div className="footer-admission-actions">
            <Link to="/admissions" className="btn-cta-white">
              Apply Now <FaArrowRight />
            </Link>
            <Link to="/admission-form" className="btn-cta-ghost">
              Admission Form
            </Link>
          </div>
        </div>
      </section>

      {/* Main Footer Links & Info */}
      <div className="footer-main">
        <div className="site-container footer-grid">
          {/* About Column */}
          <div className="footer-col-about">
            <Link to="/" className="footer-brand">
              <img src={logo1} alt="Shri Komal Sahu Pharmacy College" />
            </Link>
            <h3>Shri Komal Sahu Smarak Pharmacy College</h3>
            <p>
              Empowering students with high-grade pharmaceutical training, practical knowledge, and professional ethics for a resilient healthcare future.
            </p>

            <div className="footer-social-strip">
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="YouTube"><FaYoutube /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* Column 2: Admissions */}
          <div className="footer-col">
            <h4><FaGraduationCap /> Admissions</h4>
            <ul>
              <li><Link to="/admissions">Apply Admissions</Link></li>
              <li><Link to="/fee-structure">Fee Structure</Link></li>
              <li><Link to="/admission-form">Admission Form</Link></li>
              <li><Link to="/scholarship">Scholarships</Link></li>
              <li><Link to="/academics">Courses Offered</Link></li>
            </ul>
          </div>

          {/* Column 3: Useful Links */}
          <div className="footer-col">
            <h4><FaBookOpen /> Useful Links</h4>
            <ul>
              <li><Link to="/academics">Academics</Link></li>
              <li><Link to="/facilities">Campus Facilities</Link></li>
              <li>
                <a href="https://www.aicte-india.org/" target="_blank" rel="noopener noreferrer">
                  AICTE Portal <FaExternalLinkAlt className="external-ico" />
                </a>
              </li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Student Webmail</a></li>
              <li><Link to="/contact">Helpdesk & Contact</Link></li>
            </ul>
          </div>

          {/* Column 4: Quick Info */}
          <div className="footer-col">
            <h4><FaFileAlt /> Information</h4>
            <ul>
              <li><Link to="/directories">Staff Directory</Link></li>
              <li><Link to="/emergency">Emergency Info</Link></li>
              <li><Link to="/feedback">Queries & Feedback</Link></li>
              <li><Link to="/media">Media Relations</Link></li>
              <li><Link to="/downloads">Affiliation Docs</Link></li>
            </ul>
          </div>

          {/* Column 5: Contact Info */}
          <div className="footer-col-contact">
            <h4>Contact Address</h4>
            <div className="contact-list">
              <div className="contact-item">
                <FaMapMarkerAlt />
                <p>Badagaon, Punapar, Jiyanpur, Azamgarh, Uttar Pradesh - 276127</p>
              </div>

              <a href="tel:7355632066" className="contact-item">
                <FaPhoneAlt />
                <p>+91 7355632066<br />+91 9651371295</p>
              </a>

              <a href="mailto:care@sksspharmacycollege.in" className="contact-item">
                <FaEnvelope />
                <p>care@sksspharmacycollege.in</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom">
        <div className="site-container footer-bottom-inner">
          <p>© 2026 Shri Komal Sahu Smarak Pharmacy College. All Rights Reserved.</p>
          <p className="footer-developer">
            Powered By : <strong>Beena Software Solutions</strong>
          </p>
          <p className="footer-status">Site Last Updated : <span>August 2026</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;