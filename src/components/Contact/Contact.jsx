import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import "./Contact.css";

export default function Contact() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section id="contact" className="contact-section container">

            {/* Map - Full Width */}
            <div className="map-container" data-aos="fade-up">
                <iframe
                    title="Google Map - Awaad Interiors"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7677067440654!2d36.85817837582785!3d-1.314898135659841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f118468215a9b%3A0xaa12ac238a3d96a1!2s34%20Enterprise%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1755105480948!5m2!1sen!2ske"
                    width="100%"
                    height="500"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            {/* Contact Links + Form */}
            <div className="contact-bottom">

                {/* Contact Links */}
                <div className="contact-links" data-aos="fade-right">
                    <div className="contact-item modern-card">
                        <MessageCircle className="contact-icon" size={60} />
                        <div className="contact-text">
                            <a href="https://wa.me/254726864735" target="_blank" rel="noopener noreferrer">
                                0726 864 735
                            </a>
                            <a href="https://wa.me/254791233435" target="_blank" rel="noopener noreferrer">
                                0791 233 435
                            </a>
                        </div>
                    </div>

                    <div className="contact-item modern-card">
                        <Phone className="contact-icon" size={60} />
                        <div className="contact-text">
                            <a href="tel:+254726864733">0726 864 733</a>
                            <a href="tel:+254791233435">0791 233 435</a>
                        </div>
                    </div>

                    <div className="contact-item modern-card">
                        <Mail className="contact-icon" size={60} />
                        <div className="contact-text">
                            <a href="mailto:awaadinterior@gmail.com">awaadinterior@gmail.com</a>
                        </div>
                    </div>

                    <div className="contact-item modern-card">
                        <MapPin className="contact-icon" size={60} />
                        <div className="contact-text">
                            <a
                                href="https://maps.app.goo.gl/z4phW4NAE2iUFnZe8"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Enterprise Road 34, Kolaba Godown No:6, Industrial Area, Nairobi
                            </a>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="contact-form" data-aos="fade-left">
                    <h2>Get in <span>Touch</span></h2>
                    <form>
                        <input type="text" name="name" placeholder="Your Name" required />
                        <input type="email" name="email" placeholder="Your Email" required />
                        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>

            </div>
        </section>
    );
}
