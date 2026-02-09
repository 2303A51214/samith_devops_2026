import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {

  const [data, setData] = useState({
    totalIncome: 0,
    totalExpenses: 0
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(amount);
  };

  const fetchDashboard = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await axios.get("http://localhost:5000/api/dashboard");

      setData(res.data);

    } catch (err) {
      setError("Failed to fetch data from server");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  const balance = data.totalIncome - data.totalExpenses;

  if (loading) return <h2>Loading dashboard...</h2>;
  if (error) return <h2 style={{ color: "red" }}>{error}</h2>;

  return (
    <div style={{ padding: "30px" }}>
      <h1>Finance Dashboard</h1>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>

        <div style={card}>
          <h3>Total Income</h3>
          <p style={{ color: "green" }}>{formatCurrency(data.totalIncome)}</p>
        </div>

        <div style={card}>
          <h3>Total Expenses</h3>
          <p style={{ color: "red" }}>{formatCurrency(data.totalExpenses)}</p>
        </div>

        <div style={card}>
          <h3>Balance</h3>
          <p style={{ color: balance >= 0 ? "green" : "red" }}>
            {formatCurrency(balance)}
          </p>
        </div>

      </div>

      <button
        onClick={fetchDashboard}
        style={{ marginTop: "25px", padding: "10px 20px", cursor: "pointer" }}
      >
        Refresh Dashboard
      </button>

    </div>
  );
};

const card = {
  border: "1px solid #ddd",
  padding: "20px",
  borderRadius: "10px",
  width: "200px",
  textAlign: "center",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
};

export default Dashboard;
