import React from "react";
import { Link } from "react-router-dom";
import "./Administration.css";

const adminList = [
  { name: "Shri Komal Sahu", role: "Chairman / President", contact: "chairman@sksspharmacycollege.in" },
  { name: "Dr. R. K. Sharma", role: "Principal & Head of Institute", contact: "principal@sksspharmacycollege.in" },
  { name: "Mr. Anand Verma", role: "Registrar / Admin Officer", contact: "admin@sksspharmacycollege.in" },
  { name: "Mrs. Sunita Yadav", role: "Examination Controller", contact: "exam@sksspharmacycollege.in" },
  { name: "Mr. Deepesh Patel", role: "Accounts & Finance Head", contact: "accounts@sksspharmacycollege.in" }
];

const Administration = () => {
  return (
    <div className="admin-page">
      <div className="admin-hero">
        <div className="admin-container">
          <div className="admin-breadcrumb">
            <Link to="/">Home</Link> / <span>About</span> / <span>Administration</span>
          </div>
          <h1>Administrative Committee</h1>
          <p>Key officials leading institute governance, admissions, and student services.</p>
        </div>
      </div>

      <div className="admin-container">
        <div className="admin-card">
          <span className="admin-tag">GOVERNANCE & LEADERSHIP</span>
          <h2>Administrative Directory</h2>
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Officer Name</th>
                  <th>Designation / Responsibility</th>
                  <th>Official Email</th>
                </tr>
              </thead>
              <tbody>
                {adminList.map((admin, idx) => (
                  <tr key={idx}>
                    <td><strong>{admin.name}</strong></td>
                    <td>{admin.role}</td>
                    <td>{admin.contact}</td>
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

export default Administration;