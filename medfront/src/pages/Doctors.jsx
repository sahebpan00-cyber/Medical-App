import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Doctors.css"

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filteredDoctors, setFilteredDoctors] = useState([]);
    const [selectedSpecialization, setSelectedSpecialization] = useState("All");

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get("https://medical-app-b2ku.onrender.com/doctor/getdoctors", {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setDoctors(response.data);
                setFilteredDoctors(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching doctors:", error);
                setLoading(false);
            }
        }
        fetchDoctors();
    }, []);

    const specializations = [
        "All",
        ...new Set(doctors.map((doc) => doc.specialization))
    ];
    const handleFilterChange = (e) => {
        const value = e.target.value;
        setSelectedSpecialization(value);

        if (value === "All") {
            setFilteredDoctors(doctors);
        } else {
            const filtered = doctors.filter(
                (doc) => doc.specialization === value
            );
            setFilteredDoctors(filtered);
        }
    };



    return (

        <div className="allDoctors-container">
            <h2>All Doctors</h2>
            <div className="filter-section">
                <select
                    value={selectedSpecialization}
                    onChange={handleFilterChange}
                >
                    {specializations.map((spec, index) => (
                        <option key={index} value={spec}>
                            {spec}
                        </option>
                    ))}
                </select>
            </div>



            <table className="doctor-table">
                <thead>
                    <tr><th>Sl.No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Specialization</th>
                        <th>Experience</th>
                        <th>Degree</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    {filteredDoctors.map((doctor, index) => (
                        <tr key={doctor._id}>
                            <td data-label="Sl.No">{index + 1}</td>
                            <td data-label="Name">{doctor.fullname}</td>
                            <td data-label="Email">{doctor.email}</td>
                            <td data-label="Mobile">{doctor.mobile}</td>
                            <td data-label="Specialization">{doctor.specialization}</td>
                            <td data-label="Experience">{doctor.experience} yrs</td>
                            <td data-label="Degree">{doctor.degree}</td>
                            <td data-label="Status">
                                {doctor.isavailable ? "Available" : "Not Available"}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
};

export default Doctors;