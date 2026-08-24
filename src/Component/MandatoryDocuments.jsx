import React from "react";
import { Link } from "react-router-dom";
import { FaFilePdf, FaDownload } from "react-icons/fa";
import "./MandatoryDocuments.css";

const docs = [
  { title: "PCI SIF & Approval Order", size: "2.4 MB", date: "2026-27" },
  { title: "BTE Affiliation Certificate", size: "1.8 MB", date: "2026-27" },
  { title: "AICTE Mandatory Disclosure (Part 1 & 2)", size: "4.1 MB", date: "2026" },
  { title: "Building Safety & Fire NOC", size: "1.1 MB", date: "2026" }
];

const MandatoryDocuments = () => {
  return (
    <div className="docs-page">
      <div className="docs-hero">
        <div className="docs-container">
          <div className="docs-breadcrumb">
            <Link to="/">Home</Link> / <span>About</span> / <span>Mandatory Documents</span>
          </div>
          <h1>Mandatory Disclosures</h1>
          <p>Statutory regulatory compliance documents for public scrutiny.</p>
        </div>
      </div>

      <div className="docs-container">
        <div className="docs-card">
          <span className="docs-tag">PUBLIC DISCLOSURES</span>
          <h2>Statutory Compliance Documents</h2>
          <div className="docs-table-wrap">
            <table className="docs-table">
              <thead>
                <tr>
                  <th>Document Title</th>
                  <th>Academic Year</th>
                  <th>File Size</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {docs.map((doc, idx) => (
                  <tr key={idx}>
                    <td>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                        <FaFilePdf style={{ color: "#ef4444", fontSize: "16px" }} />
                        <strong>{doc.title}</strong>
                      </span>
                    </td>
                    <td>{doc.date}</td>
                    <td>{doc.size}</td>
                    <td>
                      <a href="#" onClick={(e) => e.preventDefault()} className="docs-btn">
                        <FaDownload /> Download PDF
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

export default MandatoryDocuments;