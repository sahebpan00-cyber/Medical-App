import React from "react";
import "./Contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We’re here to help you 24/7 with your healthcare needs</p>
      </section>

      <section className="contact-container">
        {/* Info */}
        <div className="contact-info">
          <h2>Get in Touch</h2>

          <div className="info-item">
            <FaPhoneAlt />
            <span>+91 7908668289</span>
          </div>

          <div className="info-item">
            <FaEnvelope />
            <span>jaanjivan@gmail.com</span>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt />
            <span>Kolkata, West Bengal, India</span>
          </div>
        </div>

        {/* Form */}
        <form className="contact-form">
          <h2>Send a Message</h2>

          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Your Message" rows="5" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
