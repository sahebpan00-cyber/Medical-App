import React, { useState } from "react";
import axios from "axios";
import "./Profile.css";

const Profile = ({ user, setUser }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    const res = await axios.put(`https://medical-app-b2ku.onrender.com/med/updateuser/${user._id}`, formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log(res.data);
    setUser(res.data);

    setIsEditing(false);
  };

  if (!user) return <p>Loading...</p>;
  console.log(user);
  console.log(formData);

  return (
    <div className="profile-container">
      <h2>Profile</h2>

      <div className="profile-field">
        <label>Name:</label>
        {isEditing ? (
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        ) : (
          <span>{user.name}</span>
        )}
      </div>

      <div className="profile-field">
        <label>Email:</label>
        <span>{user.email}</span>
      </div>

      <div className="profile-field">
        <label>Phone:</label>
        {isEditing ? (
          <input
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
        ) : (
          <span>{user.mobile}</span>
        )}
      </div>

      {isEditing ? (
        <button onClick={handleUpdate}>Update</button>
      ) : (
        <button onClick={() => { setFormData(user); setIsEditing(true); }}>
          Edit Profile
        </button>
      )}
    </div>
  );
};

export default Profile;