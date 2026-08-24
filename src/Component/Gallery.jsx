import React from "react";
import { Link } from "react-router-dom";
import "./Gallery.css";
import campus1 from "../assets/images/hero.jpeg";
import campus2 from "../assets/images/p2.jpeg";
import campus3 from "../assets/images/p3.JPG";

const galleryImages = [
  { img: campus1, title: "Modern College Building" },
  { img: campus2, title: "Pharmaceutics Practical Lab" },
  { img: campus3, title: "Classroom Lecture Sessions" },
  { img: campus1, title: "Herbarium & Botanical Garden" },
  { img: campus2, title: "Library Reading Hall" },
  { img: campus3, title: "Annual Sports & Cultural Day" }
];

const Gallery = () => {
  return (
    <div className="gallery-page">
      <div className="gallery-hero">
        <div className="gallery-container">
          <div className="gallery-breadcrumb">
            <Link to="/">Home</Link> / <span>Gallery</span>
          </div>
          <h1>Campus & Facility Gallery</h1>
          <p>A glimpse into academic life, laboratories, and campus infrastructure.</p>
        </div>
      </div>

      <div className="gallery-container">
        <div className="gallery-grid">
          {galleryImages.map((item, idx) => (
            <div className="gallery-item" key={idx}>
              <img src={item.img} alt={item.title} />
              <div className="gallery-overlay">
                <strong>{item.title}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;