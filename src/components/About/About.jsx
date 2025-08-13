import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";
import images from "../../images";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="about" className="about-section" data-aos="fade-up">
      <div className="about-container">
        {/* Image Side */}
        <div className="about-image-wrapper">
          <div className="image-bg"></div>
          <img
            src={images.img2}
            alt="Awaad Interiors"
            className="about-image"
          />
        </div>

        {/* Content Side */}
        <div className="about-content">
          <h2 className="about-title">
            Crafting Interiors <span>That Inspire</span>
          </h2>
          <p className="about-text">
            At <strong>Awaad Interiors</strong>, we create wardrobes and kitchen cabinets
            that blend precision craftsmanship with modern elegance. Every project is
            tailored to suit your style and space, using durable finishes and timeless designs.
          </p>
          <p className="about-text">
            From <em>custom wardrobe installations</em> to <em>CNC engraving</em> and <em>full interior fit-outs</em>,
            our services deliver a seamless, premium experience for every client.
          </p>
          <a href="#services" className="btn about-btn">
            Explore Our Work
          </a>
        </div>
      </div>
    </section>
  );
}
