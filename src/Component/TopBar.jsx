import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaExternalLinkAlt,
  FaUniversity,
} from "react-icons/fa";

import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar-container">

        {/* LEFT SIDE */}
        <div className="topbar-left">

          <a
            href="#"
            className="topbar-link"
            onClick={(e) => e.preventDefault()}
          >
            <FaUniversity />
            <span>Webmail</span>
          </a>

          <span className="topbar-divider"></span>

          <a
            href="https://www.pci.nic.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="topbar-link"
          >
            <span>PCI</span>
            <FaExternalLinkAlt className="external-icon" />
          </a>

          <span className="topbar-divider"></span>

          <a
            href="https://www.aicte-india.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="topbar-link"
          >
            <span>AICTE</span>
            <FaExternalLinkAlt className="external-icon" />
          </a>

          <span className="topbar-divider"></span>

          <a
            href="#"
            className="topbar-link college-code"
            onClick={(e) => e.preventDefault()}
          >
            College Code (B-Pharma):
          </a>

          <span className="topbar-divider"></span>

          <a
            href="#"
            className="topbar-link college-code"
            onClick={(e) => e.preventDefault()}
          >
            College Code (D-Pharma):
          </a>

        </div>


        {/* RIGHT SIDE */}
        <div className="topbar-right">

          <a
            href="mailto:care@sksspharmacycollege.in"
            className="contact-item"
          >
            <span className="contact-icon">
              <FaEnvelope />
            </span>

            <span className="contact-content">
              <small>Email</small>
              <strong>care@sksspharmacycollege.in</strong>
            </span>
          </a>


          <span className="contact-divider"></span>


          <a
            href="tel:7355632066"
            className="contact-item"
          >
            <span className="contact-icon">
              <FaPhoneAlt />
            </span>

            <span className="contact-content">
              <small>Phone</small>
              <strong>7355632066</strong>
            </span>
          </a>

        </div>

      </div>
    </div>
  );
};

export default TopBar;