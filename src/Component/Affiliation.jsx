import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import "./Affiliation.css";

const affiliations = [
  { body: "Pharmacy Council of India (PCI), New Delhi", code: "PCI-Approved", status: "Active / Approved" },
  { body: "Board of Technical Education (BTE), Uttar Pradesh", code: "BTE-UP", status: "Affiliated" },
  { body: "All India Council for Technical Education (AICTE)", code: "AICTE-India", status: "Recognized" }
];

const Affiliation = () => {
  return (
    <div className="docs-page">
      <div className="docs-hero">
        <div className="docs-container">
          <div className="docs-breadcrumb">
            <Link to="/">Home</Link> / <span>About</span> / <span>Affiliation</span>
          </div>
          <h1>Affiliations & Approvals</h1>
          <p>Accreditation and statutory approvals ensuring certified pharmacy degrees.</p>
        </div>
      </div>

      <div className="docs-container">
        <div className="docs-card">
          <span className="docs-tag">STATUTORY RECOGNITION</span>
          <h2>Affiliated Regulatory Bodies</h2>
          <div className="docs-table-wrap">
            <table className="docs-table">
              <thead>
                <tr>
                  <th>Governing Council / University</th>
                  <th>Affiliation Ref / Status</th>
                  <th>Approval Status</th>
                </tr>
              </thead>
              <tbody>
                {affiliations.map((item, idx) => (
                  <tr key={idx}>
                    <td><strong>{item.body}</strong></td>
                    <td>{item.code}</td>
                    <td>
                      <span style={{ color: "#0d9488", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "6px" }}>
                        <FaCheckCircle /> {item.status}
                      </span>
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

export default Affiliation;