import React, { useState, useEffect } from 'react';
import './Hero.css';
import { FaStethoscope, FaCalendarAlt } from 'react-icons/fa';
import { useNavigate,Link } from 'react-router-dom';

const Hero = () => {
    const [isAnimated, setIsAnimated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setIsAnimated(true);
    }, []);

    return (
        <section className={`hero-section ${isAnimated ? 'animate' : ''}`}>
            <div className="hero-content">
                <div className="container">
                    <div className="hero-wrapper">
                        {/* Left Content */}
                        <div className="hero-text">
                            <h1 className="hero-title">
                                Book Trusted Doctors Anytime, Anywhere
                            </h1>
                            <p className="hero-subtitle">
                                Experience premium healthcare with certified doctors, modern facilities,
                                and 24/7 emergency support. Your health is our priority.
                            </p>

                            {/* CTA Buttons */}
                            <div className="hero-buttons">
                                <button className="btn btn-primary btn-lg">
                                    <FaCalendarAlt size={18} />
                                    Book Appointment
                                </button>
                                <Link to="/doctors" className="btn btn-secondary btn-lg">
                                    <FaStethoscope size={18} />
                                    Find a Doctor
                                </Link>
                            </div>

                            {/* Trust Indicators */}
                            <div className="hero-stats">
                                <div className="stat-item">
                                    <div className="stat-number">500+</div>
                                    <div className="stat-label">Certified Doctors</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number">50K+</div>
                                    <div className="stat-label">Happy Patients</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number">15+</div>
                                    <div className="stat-label">Years Experience</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Illustration/Image */}
                        <div className="hero-image">
                            <div className="image-placeholder">
                                <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                                    {/* Background Circle */}
                                    <circle cx="200" cy="200" r="180" fill="#e0f2fe" opacity="0.3" />
                                    <circle cx="200" cy="200" r="150" fill="#87ceeb" opacity="0.2" />

                                    {/* Doctor Figure - Simplified */}
                                    <ellipse cx="200" cy="140" rx="35" ry="40" fill="#0ea5a5" />
                                    <path
                                        d="M 165 185 Q 200 175 235 185"
                                        stroke="#0ea5a5"
                                        strokeWidth="3"
                                        fill="none"
                                    />
                                    <rect x="155" y="190" width="90" height="80" fill="#14b8a6" rx="8" />
                                    <rect x="145" y="270" width="30" height="70" fill="#0ea5a5" />
                                    <rect x="225" y="270" width="30" height="70" fill="#0ea5a5" />

                                    {/* Medical Cross */}
                                    <g transform="translate(280, 120)">
                                        <circle cx="0" cy="0" r="25" fill="white" stroke="#10b981" strokeWidth="2" />
                                        <line
                                            x1="0"
                                            y1="-12"
                                            x2="0"
                                            y2="12"
                                            stroke="#10b981"
                                            strokeWidth="3"
                                        />
                                        <line
                                            x1="-12"
                                            y1="0"
                                            x2="12"
                                            y2="0"
                                            stroke="#10b981"
                                            strokeWidth="3"
                                        />
                                    </g>

                                    {/* Decorative Elements */}
                                    <circle cx="100" cy="100" r="8" fill="#10b981" opacity="0.4" />
                                    <circle cx="320" cy="280" r="10" fill="#0ea5a5" opacity="0.3" />
                                    <circle cx="80" cy="300" r="6" fill="#14b8a6" opacity="0.3" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Animated Background Elements */}
            <div className="hero-bg-element hero-element-1"></div>
            <div className="hero-bg-element hero-element-2"></div>
            <div className="hero-bg-element hero-element-3"></div>
        </section>
    );
};

export default Hero;
