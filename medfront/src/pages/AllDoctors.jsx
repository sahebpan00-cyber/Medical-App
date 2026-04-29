// src/pages/AllDoctors.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AllDoctors.css";
import { useNavigate } from "react-router-dom";

const AllDoctors = () => {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get("http://localhost:5000/doctor/getdoctors", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                }
                );
                setDoctors(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching doctors:", error);
                setLoading(false);

            }
        }
        fetchDoctors();
    }, []);


    const handleToggleAvailability = async (id) => {
        try {
            const { data } = await axios.patch(
                `https://medical-app-b2ku.onrender.com/doctor/toggle-availability/${id}`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );

            // Update UI instantly
            setDoctors((prevDoctors) =>
                prevDoctors.map((doctor) =>
                    doctor._id === id ? data.doctor : doctor
                )
            );

        } catch (error) {
            console.log("Toggle Error:", error.response?.data || error.message);
        }
    };


    const handleDelete = async (id) => {
        try {
            const { data } = await axios.delete(
                `https://medical-app-b2ku.onrender.com/doctor/deletedoctors/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );


            // ✅ Remove deleted doctor from state directly
            setDoctors((prevDoctors) =>
                prevDoctors.filter((doctor) => doctor._id !== id)
            );
        } catch (error) {
            console.log("Delete Error:", error.response?.data || error.message);
        }
    };


    return (

        <div className="allDoctors-container">
            <h2>All Doctors</h2>


            <table className="doctor-table">
                <thead>
                    <tr><th>Sl.No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Specialization</th>
                        <th>Experience</th>
                        <th>Degree</th>
                        <th>Actions</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    {doctors.map((doctor, index) => (
                        <tr key={doctor._id}>
                            <td data-label="Sl.No">{index + 1}</td>
                            <td data-label="Name">{doctor.fullname}</td>
                            <td data-label="Email">{doctor.email}</td>
                            <td data-label="Mobile">{doctor.mobile}</td>
                            <td data-label="Department">{doctor.specialization}</td>
                            <td data-label="Experience">{doctor.experience} yrs</td>
                            <td data-label="Degree">{doctor.degree}</td>
                            <td data-label="Action">
                                <button
                                    className="btn edit-btn"
                                    onClick={() => navigate(`/edit-doctor/${doctor._id}`)}
                                >
                                    Edit
                                </button>

                                <button
                                    className="btn delete-btn"
                                    onClick={() => handleDelete(doctor._id)}
                                >
                                    Delete
                                </button>

                                <button
                                    className={doctor.isavailable ? "btn available-btn" : "btn unavailable-btn"}
                                    onClick={() => handleToggleAvailability(doctor._id)}
                                >
                                    {doctor.isavailable ? "Mark Unavailable" : "Mark Available"}
                                </button>                            </td>
                            <td data-label="Status">
                                {doctor.isavailable ? "Available" : "Not Available"}
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="btn btn-danger back-btn" onClick={() => navigate("/admindashboard")}>← Back</button>
        </div>
    );
};

export default AllDoctors;
