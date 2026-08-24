import React from "react";
import { Link } from "react-router-dom";
import "./ChairmanMessage.css";
import placeholderUser from "../assets/images/p3.JPG";

const ChairmanMessage = () => {
  return (
    <div className="msg-page">
      <div className="msg-hero">
        <div className="msg-container">
          <div className="msg-breadcrumb">
            <Link to="/">Home</Link> / <span>About</span> / <span>Chairman's Message</span>
          </div>
          <h1>Chairman's Message</h1>
          <p>Inspiring future healthcare practitioners with vision and dedication.</p>
        </div>
      </div>

      <div className="msg-container">
        <div className="msg-card">
          <div className="msg-profile">
            <img src={placeholderUser} alt="Chairman" />
            <div className="msg-profile-body">
              <h3>Shri Komal Sahu</h3>
              <span>Chairman / Founder</span>
            </div>
          </div>

          <div className="msg-content">
            <span className="msg-tag">LEADERSHIP & VISION</span>
            <h2>"Empowering Students to Serve Humanity"</h2>
            <div className="msg-quote">
              "Healthcare and pharmaceuticals are noble disciplines that demand devotion, continuous learning, and human empathy."
            </div>
            <p>
              Welcome to Shri Komal Sahu Smarak Pharmacy College. Our vision is to empower young minds from all backgrounds with premier educational resources and technological infrastructure.
            </p>
            <p>
              We ensure our graduates emerge not just as skilled pharmacists, but as disciplined, responsible individuals who can contribute significantly to the medical sector and nation-building.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChairmanMessage;