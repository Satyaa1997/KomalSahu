import React from "react";
import { Link } from "react-router-dom";
import { FaGraduationCap, FaFlask, FaHospital } from "react-icons/fa";
import "./Introduction.css";

const Introduction = () => {
  return (
    <div className="intro-page">
      <div className="intro-hero">
        <div className="intro-container">
          <div className="intro-breadcrumb">
            <Link to="/">Home</Link> / <span>About Us</span> / <span>Introduction</span>
          </div>
          <h1>About Our Institution</h1>
          <p>Committed to delivering high-standard pharmaceutical education and training.</p>
        </div>
      </div>

      <div className="intro-container">
        <div className="intro-card">
          <span className="intro-tag">WELCOME TO SKSS PHARMACY COLLEGE</span>
          <h2>A Premier Centre for Pharmaceutical Learning</h2>
          <p>
            Shri Komal Sahu Smarak Pharmacy College was established with a clear mission: to nurture qualified pharmacy professionals equipped with deep technical knowledge, practical aptitude, and strong moral ethics.
          </p>
          <p>
            Located in Azamgarh, Uttar Pradesh, the college provides modern academic facilities, high-tech laboratories, and an environment optimized for clinical and pharmaceutical research.
          </p>

          <div className="intro-pillars">
            <div className="intro-pillar-box">
              <FaGraduationCap style={{ color: "#0d9488", fontSize: "24px" }} />
              <h4>Academic Excellence</h4>
              <p>PCI & BTE affiliated courses with an updated modern syllabus.</p>
            </div>
            <div className="intro-pillar-box">
              <FaFlask style={{ color: "#0d9488", fontSize: "24px" }} />
              <h4>Practical Labs</h4>
              <p>Advanced formulation, pharmacology, and pharmacognosy labs.</p>
            </div>
            <div className="intro-pillar-box">
              <FaHospital style={{ color: "#0d9488", fontSize: "24px" }} />
              <h4>Clinical Exposure</h4>
              <p>Hands-on hospital and pharmaceutical manufacturing training.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;