import React, { useEffect, useState } from "react";
import axios from "axios";
import "./BookAppointment.css";
import { useNavigate } from "react-router-dom";

const BookAppointment = () => {
    const [user, setUser] = useState({});
    const [specializations, setSpecializations] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [formData, setFormData] = useState({
        specialization: "",
        doctor: "",
        age: "",
        contactNumber: "",
        appointmentDate: "",
        appointmentTime: ""
    });
    const navigate = useNavigate();

    // Fetch logged in user
    const fetchUser = async () => {
        try {
            const storedUser = JSON.parse(localStorage.getItem("user"));

            if (!storedUser?.id) {
                console.log("User ID missing");
                return;
            }

            const { data } = await axios.get(
                `https://medical-app-b2ku.onrender.com/med/getoneuser/${storedUser.id}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );

            console.log(data);
            setUser(data);

        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    // Fetch specializations
    useEffect(() => {
        const fetchSpecializations = async () => {
            const { data } = await axios.get("https://medical-app-b2ku.onrender.com/doctor/specializations");
            setSpecializations(data);
        };
        fetchSpecializations();
    }, []);

    // Fetch available doctors when specialization changes
    useEffect(() => {
        if (formData.specialization) {
            axios
                .get(
                    `https://medical-app-b2ku.onrender.com/doctor/available/${formData.specialization}`
                )
                .then((res) =>

                    setDoctors(res.data));

        }
    }, [formData.specialization]);



    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post("https://medical-app-b2ku.onrender.com/appointments/create", {
            user: user._id,
            doctor: formData.doctor,
            specialization: formData.specialization,
            patientName: user.name,
            age: formData.age,
            contactNumber: formData.contactNumber,
            appointmentDate: formData.appointmentDate,
            appointmentTime: formData.appointmentTime,
        });

        alert("Appointment Booked Successfully!");
        setTimeout(() => {
            navigate("/dashboard");
        }, 1500);
    };



    useEffect(() => {
        fetchUser();
    }, []);
    const today = new Date().toISOString().split("T")[0];


    return (
        <div className="appointment-container">
            <div className="appointment-card">
                <h2>Book Appointment</h2>

                <form onSubmit={handleSubmit}>
                    {/* Name */}
                    <div className="form-group">
                        <label>Patient Name</label>
                        <input type="text" value={user.name || ""} disabled />
                    </div>

                    {/* Specialization */}
                    <div className="form-group">
                        <label>Choose Specialization</label>
                        <select
                            value={formData.specialization}
                            onChange={(e) =>
                                setFormData({ ...formData, specialization: e.target.value })
                            }
                            required
                        >
                            <option value="">Select</option>
                            {specializations.map((spec, index) => (
                                <option key={index} value={spec}>
                                    {spec}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Doctor */}
                    <div className="form-group">
                        <label>Choose Doctor</label>
                        <select
                            value={formData.doctor}
                            onChange={(e) =>
                                setFormData({ ...formData, doctor: e.target.value })
                            }
                            required
                        >
                            <option value="">Select Doctor</option>
                            {doctors.map((doc) => (
                                <option key={doc._id} value={doc._id}>
                                    Dr. {doc.fullname}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Age */}
                    <div className="form-group">
                        <label>Age</label>
                        <input
                            type="number"
                            required
                            onChange={(e) =>
                                setFormData({ ...formData, age: e.target.value })
                            }
                        />
                    </div>

                    {/* Contact */}
                    <div className="form-group">
                        <label>Contact Number</label>
                        <input
                            type="text"
                            required
                            onChange={(e) =>
                                setFormData({ ...formData, contactNumber: e.target.value })
                            }
                        />
                    </div>
                    {/* Appointment Date */}
                    <div className="form-group">
                        <label>Select Date</label>
                        <input
                            type="date"
                            min={today}
                            required
                            onChange={(e) =>
                                setFormData({ ...formData, appointmentDate: e.target.value })
                            }
                        />
                    </div>

                    {/* Appointment Time */}
                    <div className="form-group">
                        <label>Select Time</label>
                        <select
                            required
                            onChange={(e) =>
                                setFormData({ ...formData, appointmentTime: e.target.value })
                            }
                        >
                            <option value="">Select Time</option>
                            <option value="09:00 AM">09:00 AM</option>
                            <option value="10:00 AM">10:00 AM</option>
                            <option value="11:00 AM">11:00 AM</option>
                            <option value="12:00 PM">12:00 PM</option>
                            <option value="02:00 PM">02:00 PM</option>
                            <option value="03:00 PM">03:00 PM</option>
                            <option value="04:00 PM">04:00 PM</option>
                        </select>
                    </div>


                    <div className="btn-section"><div className="col-6 p-4"><button type="submit" className="book-btn">
                        Confirm
                    </button></div>
                        <div className="col-6 p-4"><button className="cancel-btn" onClick={() => navigate("/dashboard")}>Cancel</button></div></div>
                </form>
            </div>
        </div>
    );
};

export default BookAppointment;
