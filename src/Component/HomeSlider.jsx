import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaPhoneAlt,
  FaChevronLeft,
  FaChevronRight,
  FaAward
} from "react-icons/fa";
import "./HomeSlider.css";

import slide1 from "../assets/images/hero.jpeg";
import slide2 from "../assets/images/p2.jpeg";
import slide3 from "../assets/images/hero.jpeg";

const slides = [
  {
    image: slide1,
    badge: "PCI & BOARD OF TECHNICAL EDUCATION AFFILIATED",
    title: "Advancing Global Healthcare Through",
    highlight: "Quality Pharmacy Education",
    description:
      "Empowering the next generation of pharmacists with state-of-the-art research laboratories, modern curriculum, and expert mentorship.",
    primaryBtn: "Apply for Admission",
    primaryLink: "/admission-form",
    secondaryBtn: "Explore Programs",
    secondaryLink: "/academics"
  },
  {
    image: slide2,
    badge: "EXCELLENCE IN PHARMACEUTICAL RESEARCH",
    title: "Learn in Modern Labs,",
    highlight: "Lead Tomorrow’s Innovations",
    description:
      "Comprehensive training in Drug Formulation, Pharmacology, and Clinical Research to prepare you for global careers.",
    primaryBtn: "Download Brochure",
    primaryLink: "/downloads",
    secondaryBtn: "Campus Tour",
    secondaryLink: "/facilities"
  },
  {
    image: slide3,
    badge: "100% PLACEMENT ASSISTANCE & SCHOLARSHIPS",
    title: "Build a Rewarding Career in",
    highlight: "Pharmaceutical Sciences",
    description:
      "Join a premier educational institute committed to discipline, integrity, academic brilliance, and hands-on skill development.",
    primaryBtn: "Admission Form",
    primaryLink: "/admission-form",
    secondaryBtn: "Contact Helpdesk",
    secondaryLink: "/contact"
  },
];

const HomeSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const slide = slides[current];

  return (
    <section className="home-slider">
      <div
        className="slider-background"
        style={{ backgroundImage: `url(${slide.image})` }}
      />
      <div className="slider-overlay" />

      <div className="site-container slider-container">
        <div className="slider-content">
          <div className="slider-badge">
            <FaAward /> {slide.badge}
          </div>

          <h1>
            {slide.title} <span>{slide.highlight}</span>
          </h1>

          <p>{slide.description}</p>

          <div className="slider-buttons">
            <Link to={slide.primaryLink} className="slider-primary-btn">
              {slide.primaryBtn} <FaArrowRight />
            </Link>
            <Link to={slide.secondaryLink} className="slider-secondary-btn">
              {slide.secondaryBtn}
            </Link>
          </div>

          <div className="slider-contact-box">
            <div className="contact-icon"><FaPhoneAlt /></div>
            <div>
              <span className="contact-label">ADMISSION HELPLINE</span>
              <a href="tel:7355632066" className="contact-number">+91 7355632066 / 9651371295</a>
            </div>
          </div>
        </div>
      </div>

      <button className="slider-arrow slider-prev" onClick={prevSlide} aria-label="Previous">
        <FaChevronLeft />
      </button>
      <button className="slider-arrow slider-next" onClick={nextSlide} aria-label="Next">
        <FaChevronRight />
      </button>

      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={current === index ? "active" : ""}
            onClick={() => setCurrent(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeSlider;