import React from "react";
import { Link } from "react-router-dom";
import "./NewsEvents.css";
import newsImg from "../assets/images/p2.jpeg";

const newsData = [
  {
    title: "Admissions Open for B.Pharm & D.Pharm Batch 2026-27",
    date: "August 2026",
    desc: "Online and offline applications are invited for eligible 10+2 science students for the upcoming academic session."
  },
  {
    title: "National Pharmacist Day Celebration & Health Camp",
    date: "July 2026",
    desc: "Free community health checks and medicine counseling camp organized by faculty and student volunteers."
  },
  {
    title: "State Level Workshop on Drug Formulation Techniques",
    date: "June 2026",
    desc: "Hands-on industrial demonstration conducted in collaboration with prominent pharma manufacturing units."
  }
];

const NewsEvents = () => {
  return (
    <div className="news-page">
      <div className="news-hero">
        <div className="news-container">
          <div className="news-breadcrumb">
            <Link to="/">Home</Link> / <span>News & Events</span>
          </div>
          <h1>News, Notices & Events</h1>
          <p>Stay updated with notifications, workshops, and college activities.</p>
        </div>
      </div>

      <div className="news-container">
        <div className="news-grid">
          {newsData.map((item, idx) => (
            <div className="news-card" key={idx}>
              <img src={newsImg} alt={item.title} className="news-img" />
              <div className="news-body">
                <span className="news-date">{item.date}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsEvents;