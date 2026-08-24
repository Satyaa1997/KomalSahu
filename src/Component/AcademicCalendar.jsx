import React from "react";
import { Link } from "react-router-dom";
import "./AcademicCalendar.css";

const calendarEvents = [
  { month: "August 2026", event: "Commencement of New Academic Session & Orientation" },
  { month: "October 2026", event: "First Sessional Theory & Practical Examinations" },
  { month: "December 2026", event: "Winter Break & Industrial Training Modules" },
  { month: "January 2027", event: "Second Sessional Exams & Hospital Pharmacy Workshops" },
  { month: "April 2027", event: "Annual Board/University Practical Examinations" },
  { month: "May 2027", event: "Final Theory Examinations (BTE / University)" }
];

const AcademicCalendar = () => {
  return (
    <div className="docs-page">
      <div className="docs-hero">
        <div className="docs-container">
          <div className="docs-breadcrumb">
            <Link to="/">Home</Link> / <span>About</span> / <span>Calendar</span>
          </div>
          <h1>Academic Calendar</h1>
          <p>Schedule of sessions, internal evaluations, and board examination timelines.</p>
        </div>
      </div>

      <div className="docs-container">
        <div className="docs-card">
          <span className="docs-tag">SESSION 2026-2027</span>
          <h2>Key Academic Dates</h2>
          <div className="docs-table-wrap">
            <table className="docs-table">
              <thead>
                <tr>
                  <th>Timeline / Month</th>
                  <th>Activity / Examination Event</th>
                </tr>
              </thead>
              <tbody>
                {calendarEvents.map((evt, idx) => (
                  <tr key={idx}>
                    <td><strong>{evt.month}</strong></td>
                    <td>{evt.event}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicCalendar;