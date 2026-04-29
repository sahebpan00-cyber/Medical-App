import React, { useState } from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import './Auth.css';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaStethoscope } from 'react-icons/fa';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false,
    });
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: '',
            });
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsLoading(true);

        try {
            const response = await axios.post(
                'http://localhost:5000/med/login',
                {
                    email: formData.email,
                    password: formData.password,
                }
            );

            console.log('LOGIN RESPONSE 👉', response.data);

            const data = response.data;

            const token =
                data.token ||
                data?.data?.token;

            const user =
                data.user ||
                data?.data?.user;

            if (!token || !user) {
                throw new Error('Invalid login response');
            }

            // clear old session
            localStorage.clear();
            sessionStorage.clear();

            // store new session
           localStorage.setItem('token', token);
           localStorage.setItem('isAdmin', user.isAdmin.toString());
            localStorage.setItem('user', JSON.stringify(user));

            // role-based navigation
            if (user.isAdmin) {
                navigate('/admindashboard');
            } else {
                setTimeout(() => {
  navigate('/dashboard');
}, 0);
            }

        } catch (error) {
            setErrors({
                password:
                    error.response?.data?.message ||
                    'Login failed. Please try again.',
            });
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <div className="auth-wrapper">
            <div className="auth-container">
                {/* Left Side - Illustration */}
                <div className="auth-illustration">
                    <div className="illustration-content">
                        <FaStethoscope className="auth-icon" />
                        <h2>Welcome Back</h2>
                        <p>Access your medical records and book appointments easily</p>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="auth-form-container">
                    <div className="auth-card">
                        <div className="auth-header">
                            <h1>Login</h1>
                            <p>Sign in to your JaanJivan account</p>
                        </div>

                        <form onSubmit={handleSubmit} className="auth-form">
                            {/* Email Field */}
                            <div className="form-group">
                                <label htmlFor="email" className="form-label">
                                    {/* Email Address */}
                                </label>
                                <div className="input-wrapper">
                                    <FaEnvelope className="input-icon" />
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={`form-input ${errors.email ? 'error' : ''}`}
                                    />
                                </div>
                                {errors.email && <span className="error-message">{errors.email}</span>}
                            </div>

                            {/* Password Field */}
                            <div className="form-group">
                                <label htmlFor="password" className="form-label">
                                    {/* Password */}
                                </label>
                                <div className="input-wrapper">
                                    <FaLock className="input-icon" />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        id="password"
                                        name="password"
                                        placeholder="Enter your password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        className={`form-input ${errors.password ? 'error' : ''}`}
                                    />
                                    <button
                                        type="button"
                                        className="password-toggle"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </button>
                                </div>
                                {errors.password && <span className="error-message">{errors.password}</span>}
                            </div>

                            {/* Remember Me & Forgot Password */}
                            <div className="form-footer">
                                <label className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        name="rememberMe"
                                        checked={formData.rememberMe}
                                        onChange={handleInputChange}
                                    />
                                    <span>Remember me</span>
                                </label>
                                <NavLink to="#" className="forgot-link">
                                    Forgot password?
                                </NavLink>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="btn btn-primary btn-lg auth-btn"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Signing in...' : 'Sign In'}
                            </button>
                        </form>

                        {/* Register Link */}
                        <div className="auth-switch">
                            <p>
                                Don't have an account?{' '}
                                <NavLink to="/register" className="switch-link">
                                    Register here
                                </NavLink>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
