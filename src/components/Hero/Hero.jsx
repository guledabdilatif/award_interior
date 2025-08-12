import React from "react";
import { Link } from "react-scroll";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
            <h1 className="fw-bold animate__animated animate__fadeInDown">
              Transforming Spaces,
              <br />
              <span className="highlight">Defining Lives</span>
            </h1>
            <p className="lead mt-3 animate__animated animate__fadeInUp">
              At <strong>Awaad Interiors</strong>, we craft high-quality wardrobes, 
              kitchen cabinets, and interior solutions that blend style with functionality. 
              Modern designs, durable finishes, and precision craftsmanship — tailored to your space.
            </p>
            <Link
              to="services"
              smooth
              duration={500}
              className="btn btn-cta mt-4 animate__animated animate__fadeInUp animate__delay-1s"
            >
              View Our Services
            </Link>
          </div>

          {/* Right Image */}
          <div className="col-md-6 text-center animate__animated animate__fadeInRight">
            <img
              src="https://via.placeholder.com/500x400?text=Awaad+Interiors"
              alt="Awaad Interiors"
              className="img-fluid hero-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
