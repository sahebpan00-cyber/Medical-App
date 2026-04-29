// src/pages/AllDoctors.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AllUser.css";
import { useNavigate } from "react-router-dom";

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get("https://medical-app-b2ku.onrender.com/med/allusers", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
                );
                setUsers(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching users:", error);
                setLoading(false);

            }
        }
        fetchUsers();
    }, []);

    const handleDelete = async (id) => {
        try {
            const { data } = await axios.delete(
                `https://medical-app-b2ku.onrender.com/med/deleteuser/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );


            // ✅ Remove deleted user from state directly
            setUsers((prevUsers) =>
                prevUsers.filter((user) => user._id !== id)
            );
        } catch (error) {
            console.log("Delete Error:", error.response?.data || error.message);
        }
    };


    return (

        <div className="allUsers-container">
            <h2>All Users</h2>
            <button className="btn btn-danger back-btn" onClick={() => navigate("/admindashboard")}>← Back</button>


            <table className="user-table">
                <thead>
                    <tr><th>Sl.No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user, index) => (
                        <tr key={user._id}>
                            <td data-label='Sl.No'>{index + 1}</td>
                            <td data-label='Name'>{user.name}</td>
                            <td data-label='Email'>{user.email}</td>
                            <td data-label='Mobile'>{user.mobile}</td>
                            <td data-label='Role'>
                                <span className={user.isAdmin ? "admin-badge" : "user-badge"}>
                                    {user.isAdmin ? "Admin" : "User"}
                                </span>
                            </td>

                            <td data-label='Action'>
                                <button
                                    className="delete-btn"
                                    onClick={() => handleDelete(user._id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
};

export default AllUsers;
