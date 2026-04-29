import React from 'react'
import { FaPhone, FaClock, FaEnvelope, FaAmbulance } from 'react-icons/fa'
import './Topbar.css'

const Topbar = () => {
    return (
        <div className="topbar-container">
            <div className="topbar-content">
                <div className="topbar-item">
                    <FaPhone size={16} />
                    <span>Emergency: +91 7908668289</span>
                </div>
                <div className="topbar-item">
                    <FaClock size={16} />
                    <span>8:00 AM - 8:00 PM</span>
                </div>
                <div className="topbar-item">
                    <FaEnvelope size={16} />
                    <span>jaanjivan@gmail.com</span>
                </div>
                <div className="topbar-item">
                    <FaAmbulance size={16} />
                    <span>Ambulance: +91 7908668289</span>
                </div>
            </div>
        </div>
    )
}

export default Topbar
