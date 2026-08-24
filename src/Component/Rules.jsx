
import { Link } from "react-router-dom";
import "./Rules.css";

const Rules = () => {
  return (
    <div className="rules-page">
      <div className="rules-hero">
        <div className="rules-container">
          <div className="rules-breadcrumb">
            <Link to="/">Home</Link> / <span>About</span> / <span>Rules & Regulations</span>
          </div>
          <h1>Rules & Discipline Code</h1>
          <p>Standard guidelines and code of conduct for all enrolled students.</p>
        </div>
      </div>

      <div className="rules-container">
        <div className="rules-card">
          <span className="rules-tag">INSTITUTIONAL GUIDELINES</span>
          <h2>Code of Conduct</h2>
          <ul className="rules-list">
            <li>
              <strong>Minimum Attendance Requirement</strong>
              A minimum of 75% attendance in both theory and practical classes is strictly mandatory to be eligible for board examinations.
            </li>
            <li>
              <strong>Laboratory Safety & Dress Code</strong>
              Lab aprons/coats and standard safety gear are mandatory inside all pharmaceutical chemistry, analysis, and pharmaceutics labs.
            </li>
            <li>
              <strong>Anti-Ragging Policy</strong>
              Ragging in any form is completely prohibited under PCI/UGC norms. Any violation will lead to immediate disciplinary action and expulsion.
            </li>
            <li>
              <strong>Identity Cards & Campus Discipline</strong>
              Students must carry their valid college ID card at all times and maintain professional decorum inside the campus premises.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Rules;