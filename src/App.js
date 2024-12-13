import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import RegisterForm from "./Components/registrationForm/RegisterForm";
import Forgot from "./Components/Forgot/Forgot";
import LoginForm from "./Components/LoginForm/LoginForm";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import EmployeeTable from "./Components/EmployeeTable";
import DashboardInsights from "./Components/DashboardInsights";
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Default to not authenticated

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const Layout = ({ children }) => {
    const location = useLocation();
    const hideHeaderRoutes = ["/login", "/register", "/forgot-password"];

    // Hide the Header for public routes and invalid paths
    const isPublicRoute = hideHeaderRoutes.includes(location.pathname);
    const isNotFound = !["/dashboard", "/employees", "/user-dashboard","/home", ...hideHeaderRoutes, "/"].includes(
      location.pathname
    );

    return (
      <>
        {isAuthenticated && !isPublicRoute && !isNotFound && <Header onLogout={handleLogout} />}
        <div className="container mt-4">{children}</div>
      </>
    );
  };

  return (
    <Router>
      <Layout>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<LoginForm onLoginSuccess={handleLogin} />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/forgot-password" element={<Forgot />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={isAuthenticated ? <DashboardInsights /> : <Navigate to="/login" />}
          />
          <Route
            path="/employees"
            element={isAuthenticated ? <EmployeeTable /> : <Navigate to="/login" />}
          />
          <Route
            path="/user-dashboard"
            element={
              isAuthenticated ? (
                <h2>User Specific Dashboard (Coming Soon)</h2>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
           <Route
            path="/home"
            element={
              isAuthenticated ? (
                <h2>welcome to APCPDCL Dashboard</h2>
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          {/* Default Route */}
          <Route
            path="/"
            element={isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}
          />
          {/* 404 Route */}
          <Route
            path="*"
            element={isAuthenticated ? <h2>404: Page Not Found</h2> : <Navigate to="/login" />}
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
