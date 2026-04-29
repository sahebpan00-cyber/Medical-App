import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./EditDoctor.css";

const EditDoctor = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [doctor, setDoctor] = useState({
    fullname: "",
    email: "",
    mobile: "",
    specialization: "",
    experience: "",
    degree: "",
  });

  // Fetch doctor by ID
  const fetchDoctor = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/doctor/getonedoctors/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      // if (data.success) {
      //   setDoctor(data.doctor);
      // }
      console.log(data);
      setDoctor(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Update doctor
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.put(
        `http://localhost:5000/doctor/updatedoctors/${id}`,
        doctor,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (data) {
        alert("Doctor updated successfully");
        navigate("/all-doctors");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDoctor();
  }, []);

  return (
    <div className="editDoctor-container">
      <h2>Edit Doctor</h2>

      <form onSubmit={handleUpdate} className="editDoctor-form">
        <input
          type="text"
          placeholder="Full Name"
          value={doctor.fullname}
          onChange={(e) =>
            setDoctor({ ...doctor, fullname: e.target.value })
          }
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={doctor.email}
          onChange={(e) =>
            setDoctor({ ...doctor, email: e.target.value })
          }
          required
        />

        <input
          type="text"
          placeholder="Mobile"
          value={doctor.mobile}
          onChange={(e) =>
            setDoctor({ ...doctor, mobile: e.target.value })
          }
          required
        />

        <input
          type="text"
          placeholder="Specialization"
          value={doctor.specialization}
          onChange={(e) =>
            setDoctor({ ...doctor, specialization: e.target.value })
          }
          required
        />

        <input
          type="number"
          placeholder="Experience (Years)"
          value={doctor.experience}
          onChange={(e) =>
            setDoctor({ ...doctor, experience: e.target.value })
          }
          required
        />

        <input
          type="text"
          placeholder="Degree"
          value={doctor.degree}
          onChange={(e) =>
            setDoctor({ ...doctor, degree: e.target.value })
          }
          required
        />

        <button type="submit">Update Doctor</button>
      </form>
    </div>
  );
};

export default EditDoctor;
