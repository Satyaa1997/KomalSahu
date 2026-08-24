import React from "react";
import { Link } from "react-router-dom";
import { FaFilePdf, FaDownload } from "react-icons/fa";
import "./Downloads.css";

const downloadList = [
  { title: "Admission Application Form (Offline)", size: "1.2 MB", type: "PDF Form" },
  { title: "B.Pharm Syllabus & Subject Scheme", size: "3.5 MB", type: "Curriculum" },
  { title: "D.Pharm Syllabus & Training Scheme", size: "2.8 MB", type: "Curriculum" },
  { title: "Scholarship & Fee Concession Form", size: "900 KB", type: "Application" }
];

const Downloads = () => {
  return (
    <div className="docs-page">
      <div className="docs-hero">
        <div className="docs-container">
          <div className="docs-breadcrumb">
            <Link to="/">Home</Link> / <span>About</span> / <span>Downloads</span>
          </div>
          <h1>Student Resource Downloads</h1>
          <p>Forms, syllabi, fee charts, and official application templates.</p>
        </div>
      </div>

      <div className="docs-container">
        <div className="docs-card">
          <span className="docs-tag">FORMS & BROCHURES</span>
          <h2>Downloadable Resources</h2>
          <div className="docs-table-wrap">
            <table className="docs-table">
              <thead>
                <tr>
                  <th>File Description</th>
                  <th>Type</th>
                  <th>Size</th>
                  <th>Download</th>
                </tr>
              </thead>
              <tbody>
                {downloadList.map((item, idx) => (
                  <tr key={idx}>
                    <td>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                        <FaFilePdf style={{ color: "#ef4444", fontSize: "16px" }} />
                        <strong>{item.title}</strong>
                      </span>
                    </td>
                    <td>{item.type}</td>
                    <td>{item.size}</td>
                    <td>
                      <a href="#" onClick={(e) => e.preventDefault()} className="docs-btn">
                        <FaDownload /> Download
                      </a>
                    </td>
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

export default Downloads;