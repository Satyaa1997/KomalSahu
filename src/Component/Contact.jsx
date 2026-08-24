import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="contact-container">
          <div className="contact-breadcrumb">
            <Link to="/">Home</Link> / <span>Contact Us</span>
          </div>
          <h1>Get in Touch</h1>
          <p>We are here to answer your admission queries and help you navigate your course choices.</p>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-grid">
          {/* Contact Details Card */}
          <div className="contact-info-card">
            <span className="contact-tag">DIRECT HELPDESK</span>
            <h2>College Office Details</h2>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "flex", gap: "14px" }}>
                <FaMapMarkerAlt style={{ color: "#0d9488", fontSize: "20px", marginTop: "4px", flexShrink: 0 }} />
                <div>
                  <strong style={{ color: "#0a2540" }}>Campus Address:</strong>
                  <p style={{ margin: "4px 0 0", color: "#64748b", fontSize: "14px" }}>
                    Badagaon, Punapar, Jiyanpur, Azamgarh, Uttar Pradesh - 276127
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "14px" }}>
                <FaPhoneAlt style={{ color: "#0d9488", fontSize: "18px", marginTop: "4px", flexShrink: 0 }} />
                <div>
                  <strong style={{ color: "#0a2540" }}>Phone / Mobile:</strong>
                  <p style={{ margin: "4px 0 0", color: "#64748b", fontSize: "14px" }}>
                    +91 7355632066 / +91 9651371295
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "14px" }}>
                <FaEnvelope style={{ color: "#0d9488", fontSize: "18px", marginTop: "4px", flexShrink: 0 }} />
                <div>
                  <strong style={{ color: "#0a2540" }}>Official Email:</strong>
                  <p style={{ margin: "4px 0 0", color: "#64748b", fontSize: "14px" }}>
                    care@sksspharmacycollege.in
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "14px" }}>
                <FaClock style={{ color: "#0d9488", fontSize: "18px", marginTop: "4px", flexShrink: 0 }} />
                <div>
                  <strong style={{ color: "#0a2540" }}>Office Hours:</strong>
                  <p style={{ margin: "4px 0 0", color: "#64748b", fontSize: "14px" }}>
                    Monday – Saturday: 9:00 AM – 5:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="contact-form-card">
            <span className="contact-tag">SEND US A QUERY</span>
            <h2>Admission Inquiry</h2>
            {submitted ? (
              <div style={{ padding: "20px", background: "#f0fdfa", color: "#0d9488", borderRadius: "8px", fontWeight: 600 }}>
                Thank you! Your query has been submitted successfully.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="contact-form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    required
                    className="contact-input"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="contact-form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    required
                    className="contact-input"
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="contact-form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    required
                    className="contact-input"
                    placeholder="yourname@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="contact-form-group">
                  <label>Your Message</label>
                  <textarea
                    rows="4"
                    required
                    className="contact-input"
                    placeholder="Write your query..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="contact-submit-btn">Submit Inquiry</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;