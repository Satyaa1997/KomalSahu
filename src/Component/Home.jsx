
import { Link } from "react-router-dom";
import {
  FaGraduationCap,
  FaFlask,
  FaBookOpen,
  FaArrowRight,
  FaCheckCircle,
  FaHospital,
  FaAward,
  FaChalkboardTeacher
} from "react-icons/fa";

import "./Home.css";
import HomeSlider from "./HomeSlider";

import aboutImg from "../assets/images/p3.JPG";
import campusImg from "../assets/images/p2.jpeg";

const Home = () => {
  return (
    <main className="home-page">
      {/* Slider Hero */}
      <HomeSlider />

      {/* Trust & Highlights Strip */}
      <section className="highlights-section">
        <div className="site-container highlights-grid">
          <div className="highlight-card">
            <div className="highlight-icon"><FaAward /></div>
            <div>
              <h3>Approved Education</h3>
              <p>PCI & Govt. Recognized</p>
            </div>
          </div>

          <div className="highlight-card">
            <div className="highlight-icon"><FaFlask /></div>
            <div>
              <h3>Advanced Laboratories</h3>
              <p>Practical & Research Focused</p>
            </div>
          </div>

          <div className="highlight-card">
            <div className="highlight-icon"><FaChalkboardTeacher /></div>
            <div>
              <h3>Experienced Faculty</h3>
              <p>Dedicated Mentorship</p>
            </div>
          </div>

          <div className="highlight-card">
            <div className="highlight-icon"><FaHospital /></div>
            <div>
              <h3>Career & Hospital Tie-ups</h3>
              <p>Clinical Internships</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="site-container about-grid">
          <div className="about-image-wrapper">
            <img
              src={aboutImg}
              alt="Shri Komal Sahu Smarak Pharmacy College Campus"
              className="about-main-img"
            />
            <div className="about-floating-card">
              <FaGraduationCap />
              <div>
                <strong>Excellence in</strong>
                <span>Pharmaceutical Sciences</span>
              </div>
            </div>
          </div>

          <div className="about-text-content">
            <span className="section-subtitle">ABOUT OUR INSTITUTION</span>
            <h2>
              Building Pharmaceutical Knowledge, <span>Shaping Healthcare Leaders</span>
            </h2>
            <p className="lead-p">
              Shri Komal Sahu Smarak Pharmacy College is established with the vision to deliver high-standard educational infrastructure and ethical medical values to aspiring pharma professionals.
            </p>
            <p>
              We prioritize comprehensive theoretical knowledge combined with intense laboratory training, active industrial exposure, and disciplined clinical learning.
            </p>

            <div className="about-features-grid">
              <div className="feature-item"><FaCheckCircle /> Modern Analytical Labs</div>
              <div className="feature-item"><FaCheckCircle /> Rich Library & E-Journals</div>
              <div className="feature-item"><FaCheckCircle /> Specialized Faculty Support</div>
              <div className="feature-item"><FaCheckCircle /> Placement & Guidance Cell</div>
            </div>

            <div className="about-actions">
              <Link to="/about" className="btn-solid">
                Discover More <FaArrowRight />
              </Link>
              <Link to="/admissions" className="btn-outline">
                Admission Procedure
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="programs-section">
        <div className="site-container">
          <div className="section-header-center">
            <span className="section-subtitle">ACADEMIC EXCELLENCE</span>
            <h2>Our Premier Pharmacy Programs</h2>
            <p>
              Designed to equip students with the essential scientific capabilities and hands-on clinical acumen needed in the modern pharmaceutical sector.
            </p>
          </div>

          <div className="programs-grid-modern">
            {/* Program 1 */}
            <div className="program-box">
              <div className="program-header">
                <span className="program-pill">4 Years Degree</span>
                <div className="program-icon-box"><FaGraduationCap /></div>
              </div>
              <h3>Bachelor of Pharmacy (B.Pharm)</h3>
              <p>
                An exhaustive 4-year undergraduate course covering Medicinal Chemistry, Pharmacology, Pharmaceutics, Pharmacognosy, and Regulatory Affairs.
              </p>
              <ul className="program-perks">
                <li><FaCheckCircle /> Clinical & Hospital Training</li>
                <li><FaCheckCircle /> Industrial Formulations</li>
              </ul>
              <Link to="/academics" className="program-action-link">
                View Course Structure <FaArrowRight />
              </Link>
            </div>

            {/* Program 2 (Featured) */}
            <div className="program-box featured">
              <div className="program-header">
                <span className="program-pill featured-pill">2 Years Diploma</span>
                <div className="program-icon-box"><FaBookOpen /></div>
              </div>
              <h3>Diploma in Pharmacy (D.Pharm)</h3>
              <p>
                A 2-year foundational program focused on drug dispensing, community healthcare, hospital pharmacy practice, and fundamental drug formulation.
              </p>
              <ul className="program-perks">
                <li><FaCheckCircle /> Registered Pharmacist Qualification</li>
                <li><FaCheckCircle /> Practical Lab Exposure</li>
              </ul>
              <Link to="/academics" className="program-action-link">
                View Course Structure <FaArrowRight />
              </Link>
            </div>

            {/* Program 3 */}
            <div className="program-box">
              <div className="program-header">
                <span className="program-pill">Hands-on Learning</span>
                <div className="program-icon-box"><FaFlask /></div>
              </div>
              <h3>Advanced Laboratory Training</h3>
              <p>
                Specialized practical modules focusing on modern equipment, analytical techniques, chemical synthesis, and standardized drug testing methods.
              </p>
              <ul className="program-perks">
                <li><FaCheckCircle /> Machine Room & Herbarium</li>
                <li><FaCheckCircle /> Safety & Compliance Focused</li>
              </ul>
              <Link to="/facilities" className="program-action-link">
                Explore Laboratories <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Campus & Infrastructure */}
      <section className="campus-section">
        <img src={campusImg} alt="Campus Infrastructure" className="campus-bg-img" />
        <div className="campus-gradient-overlay" />
        <div className="site-container campus-inner">
          <div className="campus-text-side">
            <span className="section-subtitle light">CAMPUS LIFE & ENVIRONMENT</span>
            <h2>State-of-the-Art Infrastructure Designed for Student Growth</h2>
            <p>
              Our expansive campus is thoughtfully structured with fully equipped laboratories, spacious classrooms, Wi-Fi connectivity, and a resource-rich library to support your academic voyage.
            </p>
            <Link to="/facilities" className="btn-solid-light">
              Take Virtual Campus Tour <FaArrowRight />
            </Link>
          </div>

          <div className="campus-cards-grid">
            <div className="infra-card">
              <h4>Modern Pharma Labs</h4>
              <p>Precision equipment for real-world formulation and chemical testing.</p>
            </div>
            <div className="infra-card">
              <h4>Comprehensive Library</h4>
              <p>Thousands of national/international textbooks, journals & digital archives.</p>
            </div>
            <div className="infra-card">
              <h4>Smart Classrooms</h4>
              <p>Audio-visual equipped lecture halls for interactive and collaborative study.</p>
            </div>
            <div className="infra-card">
              <h4>Green & Safe Campus</h4>
              <p>Peaceful, hygienic, and student-first environment with dedicated transport.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;