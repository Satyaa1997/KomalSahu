import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaPhoneAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import "./HomeSlider.css";

import slide1 from "../assets/images/hero.jpeg";
import slide2 from "../assets/images/p2.jpeg";
import slide3 from "../assets/images/hero.jpeg";

const slides = [
  {
    image: slide1,
    smallTitle: "WELCOME TO SHRI KOMAL SAHU SMARAK",
    title: "Quality Education in",
    highlight: "Pharmaceutical Sciences",
    description:
      "Empowering students with quality pharmaceutical education, practical learning and professional development.",
  },
  {
    image: slide2,
    smallTitle: "EXCELLENCE IN PHARMACY EDUCATION",
    title: "Learn Today.",
    highlight: "Lead Tomorrow.",
    description:
      "Build strong academic knowledge and practical skills for a successful career in pharmacy.",
  },
  {
    image: slide3,
    smallTitle: "YOUR FUTURE STARTS HERE",
    title: "Shape Your Career",
    highlight: "in Pharmacy",
    description:
      "Discover an environment focused on learning, practical training and overall student development.",
  },
];

const HomeSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const slide = slides[current];

  return (
    <section className="home-slider">

      {/* BACKGROUND IMAGE */}

      <div
        className="slider-background"
        style={{
          backgroundImage: `url(${slide.image})`,
        }}
      />

      {/* OVERLAY */}

      <div className="slider-overlay"></div>


      {/* CONTENT */}

      <div className="slider-container">

        <div className="slider-content">

          <span className="slider-small-title">
            {slide.smallTitle}
          </span>

          <h1>
            {slide.title}
            <span>{slide.highlight}</span>
          </h1>

          <p>
            {slide.description}
          </p>


          {/* BUTTONS */}

          <div className="slider-buttons">

            <Link
              to="/admission-form"
              className="slider-primary-btn"
            >
              Apply for Admission
              <FaArrowRight />
            </Link>

            <Link
              to="/about"
              className="slider-secondary-btn"
            >
              Explore College
            </Link>

          </div>


          {/* PHONE */}

          <a
            href="tel:7355632066"
            className="slider-contact"
          >
            <FaPhoneAlt />

            <span>
              Admission Enquiry
              <strong>7355632066</strong>
            </span>
          </a>

        </div>

      </div>


      {/* ARROWS */}

      <button
        className="slider-arrow slider-prev"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        <FaChevronLeft />
      </button>

      <button
        className="slider-arrow slider-next"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        <FaChevronRight />
      </button>


      {/* DOTS */}

      <div className="slider-dots">

        {slides.map((_, index) => (
          <button
            key={index}
            className={current === index ? "active" : ""}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}

      </div>

    </section>
  );
};

export default HomeSlider;