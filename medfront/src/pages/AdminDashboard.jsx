import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  FaUsers,
  FaUserMd,
  FaCalendarCheck,
  FaPlusCircle,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";

import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (!storedUser?.id) return;

      const { data } = await axios.get(
        `http://localhost:5000/med/getoneuser/${storedUser.id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    navigate("/login");
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="admin-page">

      {/* TOP BAR */}
      <div className="admin-topbar">
        <h2>JaanJivan Admin</h2>

        <div className="admin-actions">
          <div className="admin-profile">
            <FaUserCircle className="profile-icon" />
            <span>{user.name}</span>
          </div>

          <button className="logout-btn" onClick={handleLogout}>
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>

      {/* MAIN DASHBOARD */}
      <div className="admin-content">

        <h1 className="welcome-text">
          Welcome, <span>{user.name}</span>
        </h1>
        {/* PROFILE CARD */}
        <div className="profile-contain">
        <div className="profile-card">

          <h2>Admin Profile</h2>

          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> Admin</p>

        </div>
        </div>

        {/* DASHBOARD CARDS */}
        <div className="dashboard-grid">

          <div className="dash-card users" onClick={() => navigate("/allusers")}>
            <FaUsers />
            <h3>All Users</h3>
          </div>

          <div className="dash-card doctors" onClick={() => navigate("/all-doctors")}>
            <FaUserMd />
            <h3>Doctors</h3>
          </div>

          <div className="dash-card appointments" onClick={() => navigate("/all-appointments")}>
            <FaCalendarCheck />
            <h3>Appointments</h3>
          </div>

          <div className="dash-card adddoctor" onClick={() => navigate("/add-doctor")}>
            <FaPlusCircle />
            <h3>Add Doctor</h3>
          </div>

        </div>

        

      </div>
    </div>
  );
};

export default AdminDashboard;