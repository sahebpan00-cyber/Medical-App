import React from "react";
import "./Services.css";
import {
  FaHeartbeat,
  FaStethoscope,
  FaXRay,
  FaProcedures,
  FaUserMd,
  FaClinicMedical
} from "react-icons/fa";

const services = [
  "Audio-Tympanometry",
  "Colour Doppler",
  "Dialysis",
  "Doctor’s Consultations",
  "ECG",
  "ECHO",
  "EEG / EMG / NCV",
  "GI Procedures",
  "Health@Home",
  "Health Checkups",
  "Holter Monitoring",
  "Nasal & Throat Endoscopy",
  "Pathology",
  "Pulmonary Function Test (PFT)",
  "Physiotherapy",
  "Pharmacy",
  
  "Speech Therapy",
  "Uroflowmetry",
  "Ultrasonography (USG)",
  "X-Ray (RGU / MCU / IVP / IVU)"
];

const Services = () => {
  return (
    <div className="services-page">

      {/* Hero Section */}
      <section className="services-hero">
        <h1>Our Medical Services</h1>
        <p>
          Advanced diagnostics, expert care, and compassionate service —
          all under one trusted name.
        </p>
      </section>

      {/* Intro */}
      <section className="services-intro">
        <h2>Comprehensive Diagnostic Solutions</h2>
        <p>
          At <strong>JaanJivan</strong>, we combine modern technology with
          experienced medical professionals to deliver accurate results and
          reliable healthcare services.
        </p>
      </section>

      {/* Services Grid */}
      <section className="services-grid">
        {services.map((service, index) => (
          <div className="service-card align-items-center" key={index}>
            <FaClinicMedical className="service-icon " />
            <h4>{service}</h4>
          </div>
        ))}
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <h2>Why Choose JaanJivan?</h2>
        <div className="why-grid">
          <div>
            <FaUserMd />
            <h4>Expert Doctors</h4>
            <p>Highly qualified specialists across all departments</p>
          </div>
          <div>
            <FaHeartbeat />
            <h4>Advanced Technology</h4>
            <p>Modern equipment for accurate and fast diagnosis</p>
          </div>
          <div>
            <FaProcedures />
            <h4>All Services Under One Roof</h4>
            <p>From tests to consultations and therapy</p>
          </div>
          <div>
            <FaStethoscope />
            <h4>Patient-Centric Care</h4>
            <p>Compassionate, ethical, and transparent treatment</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <h2>Your Health, Our Responsibility</h2>
        <p>Book your appointment today and experience trusted healthcare.</p>
        <button>Book Appointment</button>
      </section>

    </div>
  );
};

export default Services;