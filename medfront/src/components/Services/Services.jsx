import React from 'react';
import './Services.css';
import {
    FaHeartbeat,
    FaFlask,
    FaTooth,
    FaAmbulance,
    FaVideo,
    FaMicroscope,
} from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            id: 1,
            title: 'General Care',
            description: 'Comprehensive general medical care and diagnosis by experienced healthcare professionals.',
            icon: FaHeartbeat,
            color: '#0ea5a5',
        },
        {
            id: 2,
            title: 'Pathology Lab',
            description: 'Advanced diagnostic testing with state-of-the-art laboratory equipment.',
            icon: FaFlask,
            color: '#10b981',
        },
        {
            id: 3,
            title: 'Dental Care',
            description: 'Professional dental services and oral health treatments for the entire family.',
            icon: FaTooth,
            color: '#14b8a6',
        },
        {
            id: 4,
            title: '24×7 Emergency',
            description: 'Round-the-clock emergency services with rapid response medical team.',
            icon: FaAmbulance,
            color: '#0ea5a5',
        },
        {
            id: 5,
            title: 'Online Consultation',
            description: 'Virtual doctor consultations from the comfort of your home.',
            icon: FaVideo,
            color: '#10b981',
        },
        {
            id: 6,
            title: 'Advanced Testing',
            description: 'Cutting-edge diagnostic and therapeutic procedures.',
            icon: FaMicroscope,
            color: '#14b8a6',
        },
    ];

    return (
        <section className="services-section section">
            <div className="container">
                {/* Section Header */}
                <div className="section-header">
                    <h2 className="section-title">Our Medical Facilities</h2>
                    <p className="section-subtitle">
                        Comprehensive healthcare services with certified professionals and modern technology
                    </p>
                </div>

                {/* Services Grid */}
                <div className="services-grid">
                    {services.map((service) => {
                        const IconComponent = service.icon;
                        return (
                            <div key={service.id} className="service-card card">
                                {/* Icon Container */}
                                <div
                                    className="service-icon"
                                    style={{ '--icon-color': service.color }}
                                >
                                    <IconComponent size={40} />
                                </div>

                                {/* Content */}
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>

                                {/* Learn More Link */}
                                <a href="#" className="service-link">
                                    Learn more →
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
