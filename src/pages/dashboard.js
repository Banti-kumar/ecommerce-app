import React from "react";

const Dashboard = () => {
  return (
    <div style={container}>
      <div style={header}>
        <h1 style={logo}>Glamourbook</h1>
        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/user/login";
          }}
          style={logoutBtn}
        >
          Logout
        </button>
      </div>

      <div style={content}>
        <div style={card}>
          <h2 style={cardTitle}>Welcome</h2>
          <p style={cardText}>
            Your dashboard is ready. Start exploring your account.
          </p>
        </div>

        <div style={card}>
          <h2 style={cardTitle}>Quick Info</h2>
          <p style={cardText}>Manage your profile and settings.</p>
        </div>
      </div>
    </div>
  );
};

const container = {
  minHeight: "100vh",
  background: "linear-gradient(135deg, #1a0203, #631011)",
  color: "#fff",
  padding: "20px",
};

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "30px",
};

const logo = {
  fontSize: "24px",
  fontWeight: "600",
  letterSpacing: "1px",
};

const logoutBtn = {
  padding: "8px 14px",
  borderRadius: "6px",
  border: "none",
  background: "rgba(255,255,255,0.1)",
  color: "#fff",
  cursor: "pointer",
};

const content = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
};

const card = {
  padding: "20px",
  borderRadius: "12px",
  backgroundColor: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(10px)",
  boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
};

const cardTitle = {
  marginBottom: "10px",
};

const cardText = {
  color: "#f1c6cb",
  fontSize: "14px",
};

export default Dashboard;
