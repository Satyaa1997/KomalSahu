import React from "react";
import { Link } from "react-router-dom";
import "./PrincipalMessage.css";
import placeholderUser from "../assets/images/p3.JPG";

const PrincipalMessage = () => {
  return (
    <div className="msg-page">
      <div className="msg-hero">
        <div className="msg-container">
          <div className="msg-breadcrumb">
            <Link to="/">Home</Link> / <span>About</span> / <span>Principal's Message</span>
          </div>
          <h1>Principal's Message</h1>
          <p>Guiding students with structured pedagogy, innovation, and clinical discipline.</p>
        </div>
      </div>

      <div className="msg-container">
        <div className="msg-card">
          <div className="msg-profile">
            <img src={placeholderUser} alt="Principal" />
            <div className="msg-profile-body">
              <h3>Dr. R. K. Sharma</h3>
              <span>Principal, M.Pharm, Ph.D</span>
            </div>
          </div>

          <div className="msg-content">
            <span className="msg-tag">ACADEMIC PERSPECTIVE</span>
            <h2>"Striving for Clinical & Research Brilliance"</h2>
            <div className="msg-quote">
              "Our emphasis is on critical analytical thinking, laboratory precision, and hands-on preparation for the global market."
            </div>
            <p>
              At Shri Komal Sahu Smarak Pharmacy College, we adopt student-centric pedagogy combining classroom teaching with active laboratory demonstrations, seminars, and hospital training.
            </p>
            <p>
              I welcome all aspiring students to become part of this vibrant academic community and unlock their complete career potential.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipalMessage;