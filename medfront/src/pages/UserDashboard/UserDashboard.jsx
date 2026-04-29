import React, { useEffect, useState } from "react";
import axios from "axios";
import UserSidebar from "./UserSidebar";
import Profile from "./Profile";
import MyAppointment from "./MyAppointment";

import "./userDashboard.css";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("profile");
  const navigate = useNavigate();



  const fetchUser = async () => {
  try {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser?.id) {
      console.log("User ID missing");
      return;
    }

    const { data } = await axios.get(
      `http://localhost:5000/med/getoneuser/${storedUser.id}`,
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


  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");

  };
    useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="dashboard-container">
      <UserSidebar
        user={user}
        setActiveTab={setActiveTab}
        handleLogout={handleLogout}
      />

      <div className="dashboard-content">
        {activeTab === "profile" && (
          <Profile user={user} setUser={setUser} />
        )}

        {activeTab === "appointment" && <MyAppointment />}

        {activeTab === "book" && navigate("/book-appointment")}
      </div>
    </div>
  );
};

export default UserDashboard;