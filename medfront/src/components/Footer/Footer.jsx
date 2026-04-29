import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            {/* Main Footer Content */}
            <div className="footer-content">
                <div className="container">
                    <div className="footer-grid">
                        {/* About Section */}
                        <div className="footer-section">
                            <h4 className="footer-title">About JaanJivan</h4>
                            <p className="footer-text">
                                JaanJivan is a premier healthcare provider dedicated to delivering quality medical
                                services with compassion and excellence. Your health is our priority.
                            </p>
                            <div className="social-links">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link" title="Facebook">
                                    <FaFacebook size={20} />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" title="Instagram">
                                    <FaInstagram size={20} />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link" title="Twitter">
                                    <FaTwitter size={20} />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
                                    <FaLinkedin size={20} />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="footer-section">
                            <h4 className="footer-title">Quick Links</h4>
                            <ul className="footer-links">
                                <li>
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about">About Us</NavLink>
                                </li>
                                <li>
                                    <a href="#services">Services</a>
                                </li>
                                <li>
                                    <a href="#doctors">Find a Doctor</a>
                                </li>
                                <li>
                                    <NavLink to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="footer-section">
                            <h4 className="footer-title">Our Services</h4>
                            <ul className="footer-links">
                                <li>
                                    <a href="#general-care">General Care</a>
                                </li>
                                <li>
                                    <a href="#dental">Dental Care</a>
                                </li>
                                <li>
                                    <a href="#pathology">Pathology Lab</a>
                                </li>
                                <li>
                                    <a href="#emergency">24/7 Emergency</a>
                                </li>
                                <li>
                                    <a href="#online">Online Consultation</a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="footer-section">
                            <h4 className="footer-title">Contact Info</h4>
                            <div className="contact-item">
                                <FaPhone className="contact-icon" />
                                <div>
                                    <p className="contact-label">Phone</p>
                                    <a href="tel:+919876543210" className="contact-link">+91 98765 43210</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <FaEnvelope className="contact-icon" />
                                <div>
                                    <p className="contact-label">Email</p>
                                    <a href="mailto:info@jaanjivan.com" className="contact-link">info@jaanjivan.com</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <FaMapMarkerAlt className="contact-icon" />
                                <div>
                                    <p className="contact-label">Address</p>
                                    <p className="contact-text">123 Medical Plaza, Healthcare City, India 560001</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-content">
                        <p className="copyright">
                            &copy; {currentYear} <span className="brand">JaanJivan</span>. All rights reserved.
                        </p>
                        <div className="footer-legal">
                            <a href="#privacy">Privacy Policy</a>
                            <span className="separator">•</span>
                            <a href="#terms">Terms of Service</a>
                            <span className="separator">•</span>
                            <a href="#cookies">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
