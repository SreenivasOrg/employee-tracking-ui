import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Forgot.css';

export const Forgot = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setStep(2);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otp.length !== 6 || isNaN(otp)) {
      setError("Please enter a valid 6-digit OTP.");
      return;
    }
    setError("");
    setStep(3);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    alert("Password changed successfully!");

    navigate('/login');

    setStep(1);
    setEmail("");
    setOtp("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>

      {step === 1 && (
        <form onSubmit={handleEmailSubmit} className="forgot-password-form">
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="submit-button">
            Send OTP
          </button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleOtpSubmit} className="forgot-password-form">
          <div className="form-group">
            <label htmlFor="otp">Enter OTP:</label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter the 6-digit OTP"
              maxLength="6"
              required
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="submit-button">
            Verify OTP
          </button>
        </form>
      )}

      {step === 3 && (
        <form onSubmit={handlePasswordSubmit} className="forgot-password-form">
          <div className="form-group">
            <label htmlFor="newPassword">New Password:</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              required
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="submit-button">
            Change Password
          </button>
        </form>
      )}
    </div>
  );
};

export default Forgot;
