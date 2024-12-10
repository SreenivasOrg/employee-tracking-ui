import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import "./index.css"; // New styles

const DashboardInsights = () => {
  const [insights, setInsights] = useState({
    totalEmployees: 0,
    activeEmployees: 0,
    departmentData: [],
    genderRatio: [],
  });

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/employees/insights")
      .then((response) => setInsights(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h2>Dashboard Insights</h2>
      <div className="insight-container">
        <div className="insight-box">
          <h4>Total Employees: {insights.totalEmployees}</h4>
        </div>
        <div className="insight-box">
          <h4>Active Employees: {insights.activeEmployees}</h4>
        </div>
      </div>

      <div className="chart-container">
        <div className="chart-box">
          <h5>Department-Wise Distribution</h5>
          <BarChart width={600} height={300} data={insights.departmentData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="department" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </div>

        <div className="chart-box">
          <h5>Gender Ratio</h5>
          <PieChart width={400} height={400}>
            <Pie
              data={insights.genderRatio}
              dataKey="value"
              nameKey="gender"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#82ca9d"
              label
            />
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default DashboardInsights;
