import React from 'react';
import './MedicalInfo.css';
import { FaCheckCircle, FaAward, FaHeartbeat, FaUsers, FaHospital, FaShieldAlt } from 'react-icons/fa';

const MedicalInfo = () => {
    const benefits = [
        'Board-certified and experienced doctors',
        'Modern diagnostic equipment',
        'Comprehensive patient care',
        'Emergency support 24/7',
        'Transparent pricing',
        'Patient-focused approach'
    ];

    const stats = [
        {
            icon: <FaUsers />,
            value: '500+',
            label: 'Certified Doctors',
            color: '#0ea5a5'
        },
        {
            icon: <FaHeartbeat />,
            value: '50K+',
            label: 'Happy Patients',
            color: '#10b981'
        },
        {
            icon: <FaHospital />,
            value: '15+',
            label: 'Years of Service',
            color: '#06b6d4'
        },
        {
            icon: <FaAward />,
            value: '100%',
            label: 'Patient Satisfaction',
            color: '#f59e0b'
        }
    ];

    return (
        <section className="medical-info-section">
            <div className="container">
                <div className="medical-info-wrapper">
                    {/* Left Content */}
                    <div className="medical-info-content">
                        <div className="info-badge">
                            <FaShieldAlt size={16} />
                            Why Choose JaanJivan?
                        </div>
                        <h2 className="info-title">Your Health, Our Responsibility</h2>

                        <p className="info-description">
                            JaanJivan is committed to providing exceptional healthcare services with a focus on
                            patient well-being. Our team of certified medical professionals uses cutting-edge
                            technology to ensure accurate diagnosis and effective treatment.
                        </p>

                        <p className="info-description">
                            We believe in creating a comfortable and trustworthy environment where patients can
                            receive the best medical care. With over 15 years of experience in the healthcare
                            industry, we have successfully treated thousands of patients.
                        </p>

                        {/* Benefits List */}
                        <div className="benefits-list">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="benefit-item">
                                    <FaCheckCircle className="benefit-icon" />
                                    <span className="benefit-text">{benefit}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <button className="btn btn-primary btn-lg" style={{ marginTop: '1.5rem' }}>
                            Schedule Your Appointment Today
                        </button>
                    </div>

                    {/* Right Stats */}
                    <div className="medical-info-visual">
                        <div className="stats-grid">
                            {stats.map((stat, index) => (
                                <div 
                                    key={index} 
                                    className="stat-box"
                                    style={{ '--stat-color': stat.color }}
                                >
                                    <div className="stat-icon-wrapper">
                                        <div className="stat-icon">{stat.icon}</div>
                                    </div>
                                    <div className="stat-content">
                                        <h3 className="stat-value">{stat.value}</h3>
                                        <p className="stat-label">{stat.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>                </div>
            </div>
        </section>
    );
};

export default MedicalInfo;