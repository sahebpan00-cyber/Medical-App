import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MyAppointment.css";
const MyAppointment = () => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);

    const user = JSON.parse(localStorage.getItem("user"));
    const fetchAppointments = async () => {
        try {
            const res = await axios.get(`https://medical-app-b2ku.onrender.com/appointments/user/${user.id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,

                }
            }
            );
            console.log(res.data, "Fetched Appointments");
            setAppointments(res.data);
            setLoading(false);
        } catch (error) {
            console.log(error, "Error fetching appointments");
            setLoading(false);
        }

    };
    useEffect(() => {
        fetchAppointments();
    }, []);


    return (
        <div className="my-appointments">
            <h2>My Appointments</h2>
            {appointments.length === 0 ? (
                <p>No appointments found.</p>
            ) : (<table className="app-table">
                <thead>
                    <tr>
                        <th>Sl No</th>
                        <th>Patient Name</th>
                        <th>Doctor</th>
                        <th>Department</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((appt, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{appt.patientName}</td>
                            <td>{appt.doctor.fullname}</td>
                            <td>{appt.specialization}</td>
                            <td>{appt.appointmentDate}</td>
                            <td>{appt.appointmentTime
                            }</td>
                            <td>{appt.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>)}
        </div>
    )

};
export default MyAppointment;