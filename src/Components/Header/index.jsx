import React from "react";
import { Link,useNavigate } from "react-router-dom";
import "./index.css"; // Corresponding CSS

const Header = ({ onLogout }) => {

    const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); // Clear authentication state
    navigate("/login"); // Redirect to the login page
  };
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
            <Link to="/home" className="nav-item">
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
            <Link to="/user-dashboard" className="nav-item">
              User Dashboard
            </Link>
          </li>
          <li>
            <Link to="/login" className="nav-item">
            <button className="btn sign-in" onnClick={handleLogout} >Log Out</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
