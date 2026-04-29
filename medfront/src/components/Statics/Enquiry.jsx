import React, { useState } from "react";
import "./Enquiry.css";

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enquiry Data:", formData);
    // API call can be added here
  };

  return (
    <div className="enquiry-container">
      <h2 className="enquiry-title">Make an Enquiry</h2>

      <form className="enquiry-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name*"
          required
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Enter Your Phone No*"
          required
          value={formData.phone}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Your Email ID (Optional)"
          value={formData.email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Enquiry;