import React from "react";
import { Facebook, Instagram } from "lucide-react";
import "./Footer.css";
import logo from '../../assets/images/logo.png';
const Footer = () => {
    return (
        <footer className="footer-section container">

            {/* Social Media */}
            <div className="footer-contact">
                <div className="social-links">
                    <p className="footer-heading">FOLLOW US</p>
                    <div className="footer-icons">
                        <a href="https://facebook.com/AwaadInteriors" target="_blank" rel="noopener noreferrer">
                            <Facebook size={28} />
                        </a>
                        <a href="https://www.instagram.com/awaadcabinets?igsh=MWxxOXNiYWpmNm8zag%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                            <Instagram size={28} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="footer-container" style={{ display: 'flex', alignItems: 'center', justifyContent:"space-around"}}>

                {/* Brand */}
                <div className="footer-brand">
                    <img src={logo} alt="" style={{width:"200px"}}/>
                    <p style={{textAlign:'center'}}>Creative and functional interior <br /> solutions for every space.</p>
                </div>

                {/* Quick Links */}
                <div className="footer-quicklinks">
                    <p className="footer-heading">QUICK LINKS</p>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>

            {/* Bottom */}
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Awaad Interior. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
