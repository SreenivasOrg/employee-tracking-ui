import React from "react";
import { Link } from "react-router-dom";
import "./index.css"; // Corresponding CSS

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img
          src="https://res.cloudinary.com/df04n89lc/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1733722958/apcpdcl_logo_qnpu3w.jpg" // Replace this with the actual path to the APCPDCL logo
          alt="APCPDCL Logo"
          className="logo-image"
        />
        <h1 className="app-title">APCPDCL Dashboard</h1>
      </div>
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-item">
              Home
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="nav-item">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/employees" className="nav-item">
              Employees
            </Link>
          </li>
          <li>
            <Link to="/reports" className="nav-item">
              Reports
            </Link>
          </li>
        </ul>
        <div className="auth-buttons">
          <button className="btn sign-in">Sign In</button>
          <button className="btn sign-up">Sign Up</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
