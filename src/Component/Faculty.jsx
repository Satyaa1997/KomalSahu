import React from "react";
import { Link } from "react-router-dom";
import "./Faculty.css";
import placeholderFaculty from "../assets/images/p3.JPG";

const facultyMembers = [
  { name: "Dr. R. K. Sharma", role: "Principal & Professor", qual: "M.Pharm, Ph.D (Pharmaceutics)" },
  { name: "Mr. Amit Kumar Singh", role: "Associate Professor", qual: "M.Pharm (Pharmacology)" },
  { name: "Mrs. Pooja Tiwari", role: "Assistant Professor", qual: "M.Pharm (Pharmaceutical Chemistry)" },
  { name: "Mr. Sandeep Maurya", role: "Lecturer / Lab Head", qual: "B.Pharm, M.Pharm (Pharmacognosy)" },
  { name: "Ms. Neha Gupta", role: "Assistant Professor", qual: "M.Pharm (Pharmacy Practice)" }
];

const Faculty = () => {
  return (
    <div className="faculty-page">
      <div className="faculty-hero">
        <div className="faculty-container">
          <div className="faculty-breadcrumb">
            <Link to="/">Home</Link> / <span>Faculty</span>
          </div>
          <h1>Our Experienced Faculty</h1>
          <p>Meet our accomplished team of pharmaceutical researchers, educators, and mentors.</p>
        </div>
      </div>

      <div className="faculty-container">
        <div className="faculty-grid">
          {facultyMembers.map((fac, idx) => (
            <div className="faculty-card" key={idx}>
              <img src={placeholderFaculty} alt={fac.name} className="faculty-img" />
              <div className="faculty-details">
                <h4>{fac.name}</h4>
                <span className="faculty-designation">{fac.role}</span>
                <span className="faculty-qual">{fac.qual}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faculty;