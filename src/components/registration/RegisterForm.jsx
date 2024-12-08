import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaPhone } from 'react-icons/fa'; // Importing icons
import './RegisterForm.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    contact: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Username validation
    if (!formData.username.trim()) {
      newErrors.username = "Username is required.";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }

    // Confirm password validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    // Contact number validation
    const contactRegex = /^[0-9]{10}$/;
    if (!formData.contact) {
      newErrors.contact = "Contact number is required.";
    } else if (!contactRegex.test(formData.contact)) {
      newErrors.contact = "Contact number must be 10 digits.";
    }

    // Terms and conditions validation
    if (!formData.termsAccepted) {
      newErrors.termsAccepted = "You must accept the terms and conditions.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data Submitted:", formData);
      alert("Registration successful!");
    }
  };

  return (
    <div className="registration-container">
      <form className="registration-form" onSubmit={handleSubmit}>
        <h2>Registration</h2>

        {/* Username */}
        <div className="form-group">
          <FaUser className="form-icon" />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          {/* <i className="icon-user"></i> */}
          {errors.username && <p className="error">{errors.username}</p>}
        </div>

        {/* Email */}
        <div className="form-group">
          <FaEnvelope className="form-icon" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <i className="icon-email"></i>
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        {/* Password */}
        <div className="form-group">
          <FaLock className="form-icon" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
           <i className="icon-password"></i>
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        {/* Confirm Password */}
        <div className="form-group">
          <FaLock className="form-icon" />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
           <i className="icon-password"></i>
          {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
        </div>

        {/* Contact */}
        <div className="form-group">
          <FaPhone className="form-icon" />
          <input
            type="text"
            name="contact"
            placeholder="Contact Number"
            value={formData.contact}
            onChange={handleChange}
            required
          />
           <i className="icon-password"></i>
          {errors.contact && <p className="error">{errors.contact}</p>}
        </div>

        {/* Terms and Conditions */}
        <div className="terms">
          
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            required
          />
          <label>I agree to the terms & conditions</label>
          {errors.termsAccepted && <p className="error">{errors.termsAccepted}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="register-button">
          Register
        </button>
        <p className="login-link">
          Already have an account? <a href="#">Login</a>
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;
