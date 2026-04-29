import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';
import { FaUser, FaEnvelope, FaPhone, FaLock, FaEye, FaEyeSlash, FaStethoscope } from 'react-icons/fa';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobileNumber: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false,
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.mobileNumber.trim()) {
            newErrors.mobileNumber = 'Mobile number is required';
        } else if (!/^\d{10}$/.test(formData.mobileNumber.replace(/\D/g, ''))) {
            newErrors.mobileNumber = 'Please enter a valid 10-digit mobile number';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        if (!formData.agreeToTerms) {
            newErrors.agreeToTerms = 'You must agree to terms and conditions';
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
                'http://localhost:5000/med/register',
                {
                    name: formData.fullName,
                    email: formData.email,
                    mobile: formData.mobileNumber,
                    password: formData.password,
                }
            );
            console.log('REGISTER RESPONSE 👉', response.data);
            
        // Simulate API call
        navigate('/login');
        
    }
    
    catch (error) {
                setErrors({
                password:
                    error.response?.data?.message ||
                    're failed. Please try again.',
            });
            setIsLoading(false);
        }};
    return (
        <div className="auth-wrapper">
            <div className="auth-container">
                {/* Left Side - Illustration */}
                <div className="auth-illustration">
                    <div className="illustration-content">
                        <FaStethoscope className="auth-icon" />
                        <h2>Join Us Today</h2>
                        <p>Create your account and access quality healthcare</p>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="auth-form-container">
                    <div className="auth-card">
                        <div className="auth-header">
                            <h1>Create Account</h1>
                            <p>Register with JaanJivan for better healthcare</p>
                        </div>

                        <form onSubmit={handleSubmit} className="auth-form">
                            {/* Full Name Field */}
                            <div className="form-group">
                                <label htmlFor="fullName" className="form-label">
                                    {/* Full Name */}
                                </label>
                                <div className="input-wrapper">
                                    <FaUser className="input-icon" />
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        placeholder="Enter your full name"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        className={`form-input ${errors.fullName ? 'error' : ''}`}
                                    />
                                </div>
                                {errors.fullName && <span className="error-message">{errors.fullName}</span>}
                            </div>

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

                            {/* Mobile Number Field */}
                            <div className="form-group">
                                <label htmlFor="mobileNumber" className="form-label">
                                    {/* Mobile Number */}
                                </label>
                                <div className="input-wrapper">
                                    <FaPhone className="input-icon" />
                                    <input
                                        type="tel"
                                        id="mobileNumber"
                                        name="mobileNumber"
                                        placeholder="10-digit mobile number"
                                        value={formData.mobileNumber}
                                        onChange={handleInputChange}
                                        className={`form-input ${errors.mobileNumber ? 'error' : ''}`}
                                    />
                                </div>
                                {errors.mobileNumber && <span className="error-message">{errors.mobileNumber}</span>}
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
                                        placeholder="Create a password"
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

                            {/* Confirm Password Field */}
                            <div className="form-group">
                                <label htmlFor="confirmPassword" className="form-label">
                                    {/* Confirm Password */}
                                </label>
                                <div className="input-wrapper">
                                    <FaLock className="input-icon" />
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        placeholder="Confirm your password"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        className={`form-input ${errors.confirmPassword ? 'error' : ''}`}
                                    />
                                    <button
                                        type="button"
                                        className="password-toggle"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    >
                                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                    </button>
                                </div>
                                {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
                            </div>

                            {/* Terms & Conditions */}
                            <div className="form-group">
                                <label className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        name="agreeToTerms"
                                        checked={formData.agreeToTerms}
                                        onChange={handleInputChange}
                                    />
                                    <span>
                                        I agree to the{' '}
                                        <a href="#terms" className="terms-link">
                                            Terms and Conditions
                                        </a>
                                    </span>
                                </label>
                                {errors.agreeToTerms && <span className="error-message">{errors.agreeToTerms}</span>}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="btn btn-primary btn-lg auth-btn"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Creating account...' : 'Create Account'}
                            </button>
                        </form>

                        {/* Login Link */}
                        <div className="auth-switch">
                            <p>
                                Already have an account?{' '}
                                <NavLink to="/login" className="switch-link">
                                    Sign in here
                                </NavLink>
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
