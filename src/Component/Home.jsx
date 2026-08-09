
import React from "react";
import { Link } from "react-router-dom";

import {
  FaGraduationCap,
  FaFlask,
  FaBookOpen,
  FaUserGraduate,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

import "./Home.css";
import HomeSlider from "./HomeSlider";

import aboutImg from "../assets/images/p3.JPG";
import campusImg from "../assets/images/p2.jpeg";

const Home = () => {
  return (
    <main className="home-page">

      {/* =========================================
          HOME SLIDER
      ========================================= */}

      <HomeSlider />


      {/* =========================================
          HIGHLIGHTS
      ========================================= */}

      <section className="home-highlights">

        <div className="home-container highlights-grid">

          <div className="highlight-item">

            <div className="highlight-icon">
              <FaGraduationCap />
            </div>

            <div>
              <strong>Quality Education</strong>
              <span>
                Professional Pharmacy Learning
              </span>
            </div>

          </div>


          <div className="highlight-item">

            <div className="highlight-icon">
              <FaFlask />
            </div>

            <div>
              <strong>Practical Training</strong>
              <span>
                Laboratory Based Learning
              </span>
            </div>

          </div>


          <div className="highlight-item">

            <div className="highlight-icon">
              <FaUserGraduate />
            </div>

            <div>
              <strong>Student Focused</strong>
              <span>
                Career Oriented Environment
              </span>
            </div>

          </div>


          <div className="highlight-item">

            <div className="highlight-icon">
              <FaBookOpen />
            </div>

            <div>
              <strong>Academic Excellence</strong>
              <span>
                Strong Learning Foundation
              </span>
            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          ABOUT
      ========================================= */}

      <section className="home-about">

        <div className="home-container about-grid">

          {/* IMAGE */}

          <div className="about-image-box">

            <img
              src={aboutImg}
              alt="Shri Komal Sahu Smarak Pharmacy College"
            />

            <div className="about-badge">

              <FaGraduationCap />

              <div>
                <strong>Pharmacy</strong>
                <span>Education</span>
              </div>

            </div>

          </div>


          {/* CONTENT */}

          <div className="about-content">

            <span className="home-label">
              ABOUT OUR COLLEGE
            </span>

            <h2>
              Building Knowledge,
              <span>
                {" "}Shaping Healthcare Professionals
              </span>
            </h2>

            <p>
              Shri Komal Sahu Smarak Pharmacy College is
              dedicated to providing students with a strong
              academic foundation in pharmaceutical sciences.
            </p>

            <p>
              We focus on theoretical understanding, practical
              laboratory exposure, professional discipline and
              overall development of our students.
            </p>


            {/* POINTS */}

            <div className="about-points">

              <div>
                <FaCheckCircle />
                <span>
                  Quality Academic Environment
                </span>
              </div>

              <div>
                <FaCheckCircle />
                <span>
                  Practical Laboratory Learning
                </span>
              </div>

              <div>
                <FaCheckCircle />
                <span>
                  Experienced & Supportive Faculty
                </span>
              </div>

              <div>
                <FaCheckCircle />
                <span>
                  Career Oriented Education
                </span>
              </div>

            </div>


            <Link
              to="/about"
              className="home-btn"
            >
              Know More
              <FaArrowRight />
            </Link>

          </div>

        </div>

      </section>


      {/* =========================================
          PROGRAMS
      ========================================= */}

      
{/* =========================================
    PROGRAMS
========================================= */}

        <section className="home-programs">

  <div className="home-container">

    {/* HEADING */}

    <div className="home-heading">

      <span className="home-label">
        OUR PROGRAMS
      </span>

      <h2>
        Explore Our
        <span> Pharmacy Programs</span>
      </h2>

      <p>
        Develop the knowledge and practical skills
        required to build a professional career in
        pharmaceutical sciences.
      </p>

    </div>


    {/* =========================================
        PROGRAM SLIDER
    ========================================= */}

    <div className="program-slider">

      <div className="program-track">

        {/* CARD 1 */}

        <div className="program-card">

          <div className="program-icon">
            <FaGraduationCap />
          </div>

          <span className="program-type">
            UNDERGRADUATE PROGRAM
          </span>

          <h3>
            Bachelor of Pharmacy
          </h3>

          <p>
            A comprehensive pharmacy education focused
            on pharmaceutical sciences, practical learning
            and professional development.
          </p>

          <Link to="/academics">
            View Program
            <FaArrowRight />
          </Link>

        </div>


        {/* CARD 2 */}

        <div className="program-card featured">

          <div className="program-icon">
            <FaBookOpen />
          </div>

          <span className="program-type">
            DIPLOMA PROGRAM
          </span>

          <h3>
            Diploma in Pharmacy
          </h3>

          <p>
            Build essential pharmaceutical knowledge
            with academic learning and practical exposure.
          </p>

          <Link to="/academics">
            View Program
            <FaArrowRight />
          </Link>

        </div>


        {/* CARD 3 */}

        <div className="program-card">

          <div className="program-icon">
            <FaFlask />
          </div>

          <span className="program-type">
            PRACTICAL LEARNING
          </span>

          <h3>
            Laboratory Training
          </h3>

          <p>
            Practical laboratory activities help students
            understand and apply pharmaceutical concepts.
          </p>

          <Link to="/facilities">
            View Facilities
            <FaArrowRight />
          </Link>

        </div>


        {/* CARD 4 */}

        <div className="program-card">

          <div className="program-icon">
            <FaGraduationCap />
          </div>

          <span className="program-type">
            UNDERGRADUATE PROGRAM
          </span>

          <h3>
            Bachelor of Pharmacy
          </h3>

          <p>
            A comprehensive pharmacy education focused
            on pharmaceutical sciences, practical learning
            and professional development.
          </p>

          <Link to="/academics">
            View Program
            <FaArrowRight />
          </Link>

        </div>


        {/* CARD 5 */}

        <div className="program-card featured">

          <div className="program-icon">
            <FaBookOpen />
          </div>

          <span className="program-type">
            DIPLOMA PROGRAM
          </span>

          <h3>
            Diploma in Pharmacy
          </h3>

          <p>
            Build essential pharmaceutical knowledge
            with academic learning and practical exposure.
          </p>

          <Link to="/academics">
            View Program
            <FaArrowRight />
          </Link>

        </div>


        {/* CARD 6 */}

        <div className="program-card">

          <div className="program-icon">
            <FaFlask />
          </div>

          <span className="program-type">
            PRACTICAL LEARNING
          </span>

          <h3>
            Laboratory Training
          </h3>

          <p>
            Practical laboratory activities help students
            understand and apply pharmaceutical concepts.
          </p>

          <Link to="/facilities">
            View Facilities
            <FaArrowRight />
          </Link>

        </div>


        {/* DUPLICATE SET FOR SEAMLESS LOOP */}

        <div className="program-card">

          <div className="program-icon">
            <FaGraduationCap />
          </div>

          <span className="program-type">
            UNDERGRADUATE PROGRAM
          </span>

          <h3>
            Bachelor of Pharmacy
          </h3>

          <p>
            A comprehensive pharmacy education focused
            on pharmaceutical sciences, practical learning
            and professional development.
          </p>

          <Link to="/academics">
            View Program
            <FaArrowRight />
          </Link>

        </div>


        <div className="program-card featured">

          <div className="program-icon">
            <FaBookOpen />
          </div>

          <span className="program-type">
            DIPLOMA PROGRAM
          </span>

          <h3>
            Diploma in Pharmacy
          </h3>

          <p>
            Build essential pharmaceutical knowledge
            with academic learning and practical exposure.
          </p>

          <Link to="/academics">
            View Program
            <FaArrowRight />
          </Link>

        </div>


        <div className="program-card">

          <div className="program-icon">
            <FaFlask />
          </div>

          <span className="program-type">
            PRACTICAL LEARNING
          </span>

          <h3>
            Laboratory Training
          </h3>

          <p>
            Practical laboratory activities help students
            understand and apply pharmaceutical concepts.
          </p>

          <Link to="/facilities">
            View Facilities
            <FaArrowRight />
          </Link>

        </div>


        <div className="program-card">

          <div className="program-icon">
            <FaGraduationCap />
          </div>

          <span className="program-type">
            UNDERGRADUATE PROGRAM
          </span>

          <h3>
            Bachelor of Pharmacy
          </h3>

          <p>
            A comprehensive pharmacy education focused
            on pharmaceutical sciences, practical learning
            and professional development.
          </p>

          <Link to="/academics">
            View Program
            <FaArrowRight />
          </Link>

        </div>


        <div className="program-card featured">

          <div className="program-icon">
            <FaBookOpen />
          </div>

          <span className="program-type">
            DIPLOMA PROGRAM
          </span>

          <h3>
            Diploma in Pharmacy
          </h3>

          <p>
            Build essential pharmaceutical knowledge
            with academic learning and practical exposure.
          </p>

          <Link to="/academics">
            View Program
            <FaArrowRight />
          </Link>

        </div>


        <div className="program-card">

          <div className="program-icon">
            <FaFlask />
          </div>

          <span className="program-type">
            PRACTICAL LEARNING
          </span>

          <h3>
            Laboratory Training
          </h3>

          <p>
            Practical laboratory activities help students
            understand and apply pharmaceutical concepts.
          </p>

          <Link to="/facilities">
            View Facilities
            <FaArrowRight />
          </Link>

        </div>

      </div>

    </div>

  </div>

        </section>



      {/* =========================================
          CAMPUS
      ========================================= */}

      <section className="home-campus">

        <img
          src={campusImg}
          alt="Shri Komal Sahu Pharmacy College Campus"
          className="campus-bg"
        />

        <div className="campus-overlay"></div>

        <div className="home-container campus-content">

          {/* LEFT CONTENT */}

          <div className="campus-text">

            <span className="home-label">
              CAMPUS & FACILITIES
            </span>

            <h2>
              Learn in an Environment
              <span> Built for Growth</span>
            </h2>

            <p>
              Our campus provides a supportive environment
              where students can focus on academics, practical
              training and professional development.
            </p>

            <Link
              to="/facilities"
              className="campus-btn"
            >
              Explore Facilities
              <FaArrowRight />
            </Link>

          </div>


          {/* RIGHT LIST */}

          <div className="campus-list">

            <div>
              <FaCheckCircle />
              <span>
                Modern Learning Environment
              </span>
            </div>

            <div>
              <FaCheckCircle />
              <span>
                Practical Laboratories
              </span>
            </div>

            <div>
              <FaCheckCircle />
              <span>
                Student Support
              </span>
            </div>

            <div>
              <FaCheckCircle />
              <span>
                Academic Resources
              </span>
            </div>

          </div>

        </div>

      </section>


    </main>
  );
};

export default Home;

