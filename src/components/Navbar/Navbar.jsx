import React, { useState } from "react";
import { Link } from "react-scroll";
import { Instagram, Facebook, Moon, Sun } from "lucide-react";
import "./Navbar.css";
import logo from '../../assets/images/logo.png';
export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.setAttribute("data-bs-theme", darkMode ? "light" : "dark");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top shadow-sm">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand fw-bold" href="#">
          <img src={logo} alt="" style={{width:'70px'}}/>
        </a>

        {/* Hamburger */}
        <button
          className={`navbar-toggler custom-toggler ${menuOpen ? "open" : ""}`}
          type="button"
          aria-controls="navbarNav"
          aria-expanded={menuOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menu */}
        <div
          className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto me-3">
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="hero"
                smooth
                duration={500}
                spy={true}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="about"
                smooth
                duration={500}
                spy={true}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="services"
                smooth
                duration={500}
                spy={true}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="contact"
                smooth
                duration={500}
                spy={true}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Social + Theme toggle */}
          <div className="d-flex align-items-center gap-3">
            <a
              href="https://instagram.com/Awaadinteriors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
            <a
              href="https://facebook.com/AwaadInteriors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </a>
            <button className="theme-toggle-btn" onClick={toggleTheme}>
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
