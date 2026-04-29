import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddDoctor.css";

const AddDoctor = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    mobile: "",
    specialization: "",
    experience: "",
    degree: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/doctor/adddoctors",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setSuccess("Doctor added successfully!");
      setError("");

      setTimeout(() => {
        navigate("/admindashboard");
      }, 1500);

    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
      setSuccess("");
    }
  };

  return (
    <div className="add-doctor-container">
      <div className="add-doctor-card">
        <button className="btn" onClick={() => navigate("/admindashboard")}>← Back</button>
        <h2>Add New Doctor</h2>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            value={formData.fullname}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
          />

          <select
            name="specialization"
            value={formData.specialization}
            onChange={handleChange}
            required
          >
            <option value="">Select Specialization</option>
            <option value="General Physician">General Physician</option>
            <option value="Cardiologist">Cardiologist</option>
            <option value="Dermatologist">Dermatologist</option>
            <option value="ENT">ENT</option>
            <option value="Orthopedic">Orthopedic</option>
            <option value="Pediatrician">Pediatrician</option>
            <option value="Gynecologist">Gynecologist</option>
            <option value="Neurologist">Neurologist</option>
            <option value="Psychiatrist">Psychiatrist</option>
          </select>

          <input
            type="number"
            name="experience"
            placeholder="Experience (Years)"
            value={formData.experience}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="degree"
            placeholder="Degree"
            value={formData.degree}
            onChange={handleChange}
            required
          />

          <button type="submit">Add Doctor</button>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
