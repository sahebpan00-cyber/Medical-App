import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AllDoctors.css";




const Allappointments = () => {

    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filteredAppointments,setFilteredAppointments]= useState([]);
    const [selectedSpecialization, setSelectedSpecialization] = useState("All");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get("https://medical-app-b2ku.onrender.com/appointments/all", {
                    headers: { Authorization: `Bearer ${token}` }
                });
                console.log(response.data);
                setAppointments(response.data);
                setFilteredAppointments(response.data);
                setLoading(false);
            } catch (error) {
                console.log("Error fetching appointments", error);
                setLoading(false);
            }
        }
        fetchAppointments();
    }, []);

    const specializations = ["All",...new Set(appointments.map((app)=>app.specialization))];

     const handleFilterChange = (e) => {
        const value = e.target.value;
        setSelectedSpecialization(value);

        if (value === "All") {
            setFilteredAppointments(appointments);
        } else {
            const filtered = appointments.filter(
                (app) => app.specialization === value
            );
            setFilteredAppointments(filtered);
        }
    };
    return (
        
        <div className="allDoctors-container">
           
            
            <h2>All Appointments</h2>
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
                    <tr>
                        <th>Sl.no</th>
                        <th>Patient Namne</th>
                        {/* <th>Gender</th> */}
                        <th>Doctor Name</th>
                        <th>Department</th>
                        <th>Booked Date</th>
                        <th>Booked Time</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredAppointments.map((app, index) => (
                        <tr key={app._id}>
                            <td data-label='Sl.No'>{index + 1}</td>
                            <td data-label='Patient Name'>{app.patientName}</td>
                            <td data-label= 'Doctor Name'>{app.doctor.fullname}</td>
                            <td data-label='Department'>{app.specialization}</td>
                            <td data-label='Date of Booking'>{app.appointmentDate}</td>
                            <td data-label='Time of Booking'>{app.appointmentTime}</td>
                            <td data-label='Status'>{app.status}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="btn btn-danger back-btn" onClick={() => navigate("/admindashboard")}>←Back</button>
        </div>
    )
}

export default Allappointments