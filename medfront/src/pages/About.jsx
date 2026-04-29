import React from "react";
import "./About.css";
import { FaUserMd, FaHospital, FaHeartbeat, FaAward } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About JaanJivan</h1>
        <p>
          Caring for life with trusted doctors, modern technology, and
          compassionate healthcare.
        </p>
      </section>

      {/* About Content */}
      <section className="about-content">
        <div className="about-text">
          <h2>Your Health, Our Priority</h2>
          <p>
            JaanJivan is a digital healthcare platform designed to connect
            patients with certified doctors, hospitals, and diagnostic services.
            Our mission is to make quality healthcare accessible, affordable,
            and simple for everyone.
          </p>
          <p>
            From booking appointments to managing medical records, JaanJivan
            ensures a seamless and secure healthcare experience.
          </p>
        </div>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3"
            alt="Medical Team"
          />
        </div>
      </section>

      {/* Features */}
      <section className="about-features">
        <div className="feature-card">
          <FaUserMd />
          <h3>Expert Doctors</h3>
          <p>500+ certified and experienced medical professionals.</p>
        </div>

        <div className="feature-card">
          <FaHospital />
          <h3>Trusted Hospitals</h3>
          <p>Partnered with top hospitals and diagnostic centers.</p>
        </div>

        <div className="feature-card">
          <FaHeartbeat />
          <h3>Patient First</h3>
          <p>Focused on patient care, safety, and comfort.</p>
        </div>

        <div className="feature-card">
          <FaAward />
          <h3>Quality Care</h3>
          <p>High standards of treatment and healthcare services.</p>
        </div>
      </section>
    </div>
  );
};

export default About;
