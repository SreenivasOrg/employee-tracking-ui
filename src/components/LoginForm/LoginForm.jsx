import React, { useState } from 'react';
import './LoginForm.css';
import { Link } from 'react-router-dom';

import { FaUser, FaLock } from 'react-icons/fa';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => password.length >= 6;

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    const newErrors = { email: '', password: '' };

    if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address.';
      valid = false;
    }
    if (!validatePassword(password)) {
      newErrors.password = 'Password must be at least 6 characters.';
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      alert('Login successful!');
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div className={`input-box ${errors.email ? 'error' : ''}`}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email"
          />
          <FaUser className="icon" />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        <div className={`input-box ${errors.password ? 'error' : ''}`}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-label="Password"
          />
          <FaLock className="icon" />
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <Link to="/Components/Forgot/Forgot">Forgot Password?</Link>
        </div>

        <div className="button">
          <button type="submit">Login</button>
        </div>

        <div className="registration">
          <p>
            Don't have an account? <a href="#">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
