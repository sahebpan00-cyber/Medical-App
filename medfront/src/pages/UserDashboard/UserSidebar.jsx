import React from "react";
import { 
  FaUser, 
  FaCalendarPlus, 
  FaClipboardList, 
  FaSignOutAlt 
} from "react-icons/fa";

const UserSidebar = ({ user, setActiveTab, handleLogout }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Welcome</h2>
        <p className="username">{user?.name}</p>
      </div>

      <button className="nav-btn" onClick={() => setActiveTab("profile")}>
        <FaUser className="icon" />
        <span>Profile</span>
      </button>

      <button className="nav-btn" onClick={() => setActiveTab("book")}>
        <FaCalendarPlus className="icon" />
        <span>Book Appointment</span>
      </button>

      <button className="nav-btn" onClick={() => setActiveTab("appointment")}>
        <FaClipboardList className="icon" />
        <span>My Appointments</span>
      </button>

      <button className="nav-btn lg-btn" onClick={handleLogout}>
        <FaSignOutAlt className="icon" />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default UserSidebar;