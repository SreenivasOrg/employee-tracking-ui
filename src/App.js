import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import EmployeeTable from "./components/EmployeeTable";
import DashboardInsights from "./components/DashboardInsights";
import "./styles.css";

const App = () => (
  <Router>
    <Header />
    <div className="container mt-4">
      <Routes>
        <Route path="/" element={<h2>Welcome to APCPDCL</h2>} />
        <Route path="/dashboard" element={<DashboardInsights />} />
        <Route path="/employees" element={<EmployeeTable />} />
        <Route path="/user-dashboard" element={<h2>Individual User Dashboard</h2>} />
      </Routes>
    </div>
  </Router>
);

export default App;
