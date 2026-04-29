import React from "react";
import "../Statics/Facilities.css";
import {
    FaUserMd,
    FaFlask,
    FaTooth,
    FaAmbulance,
    FaHeartbeat,
    FaVideo,
    FaStethoscope,
    FaBriefcaseMedical,
} from "react-icons/fa";

const facilitiesData = [
    {
        id: 1,
        name: "General Care",
        icon: <FaUserMd />,
        description: "Comprehensive primary healthcare services for all ages and conditions.",
        color: "#0ea5a5"
    },
    {
        id: 2,
        name: "Specialist Doctors",
        icon: <FaStethoscope />,
        description: "Expert specialists in cardiology, orthopedics, neurology, and more.",
        color: "#10b981"
    },
    {
        id: 3,
        name: "Pathology Lab",
        icon: <FaFlask />,
        description: "Advanced diagnostic testing with quick and accurate results.",
        color: "#06b6d4"
    },
    {
        id: 4,
        name: "Dental Care",
        icon: <FaTooth />,
        description: "Complete dental solutions from routine checkups to advanced treatments.",
        color: "#f59e0b"
    },
    {
        id: 5,
        name: "Online Consultation",
        icon: <FaVideo />,
        description: "Connect with doctors from home via secure video consultation.",
        color: "#8b5cf6"
    },
    {
        id: 6,
        name: "24×7 Emergency",
        icon: <FaAmbulance />,
        description: "Round-the-clock emergency services with trained medical staff.",
        color: "#ef4444"
    },
    {
        id: 7,
        name: "Cardiology",
        icon: <FaHeartbeat />,
        description: "Complete cardiac care with latest diagnostic equipment.",
        color: "#ec4899"
    },
    {
        id: 8,
        name: "Medical Imaging",
        icon: <FaBriefcaseMedical />,
        description: "State-of-the-art imaging facilities including CT, MRI, and X-ray.",
        color: "#14b8a6"
    }
];

const Facilities = () => {
    return (
        <section className="facilities-section" id="facilities">
            <div className="facilities-container">
                <div className="section-header">
                    <h2 className="facilities-title">Our Services & Facilities</h2>
                    <p className="facilities-subtitle">
                        Comprehensive healthcare solutions tailored to your needs
                    </p>
                </div>

                <div className="facilities-grid">
                    {facilitiesData.map((facility) => (
                        <div
                            key={facility.id}
                            className="facility-card"
                            style={{
                                '--accent-color': facility.color
                            }}
                        >
                            <div className="facility-icon-wrapper">
                                <div className="facility-icon">{facility.icon}</div>
                            </div>
                            <h3 className="facility-name">{facility.name}</h3>
                            <p className="facility-description">{facility.description}</p>
                            {/* <div className="facility-hover-cta">
                                Learn More →
                            </div> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Facilities;