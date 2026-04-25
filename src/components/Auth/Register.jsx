import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../../redux/Slices/loginSlice/registerSlice";

const Register = () => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    temp_id: "",
    password: "",
    type: "productUser",
  });

  const handleChange = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(values));
  };

  return (
    <div style={container}>
      <form onSubmit={handleSubmit} style={card}>
        <h1 style={title}>Glamourbook</h1>
        <p style={subtitle}>Create your account</p>

        <div style={formGroup}>
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={values.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            name="phone"
            type="tel"
            placeholder="Phone"
            value={values.phone}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            name="temp_id"
            type="text"
            placeholder="Temp ID (2-5 chars)"
            value={values.temp_id}
            onChange={handleChange}
            required
            minLength={2}
            maxLength={5}
            style={inputStyle}
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <button type="submit" style={button}>
            Register
          </button>

          <div style={footerText}>
            <span>Already have an account? </span>
            <Link to="/user/login" style={linkStyle}>
              Login
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

const container = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(135deg, #1a0203, #631011)",
};

const card = {
  padding: "35px",
  borderRadius: "12px",
  backgroundColor: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(10px)",
  boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
  width: "320px",
  color: "#fff",
};

const title = {
  textAlign: "center",
  marginBottom: "5px",
  letterSpacing: "1px",
};

const subtitle = {
  textAlign: "center",
  marginBottom: "25px",
  fontSize: "14px",
  color: "#f1c6cb",
};

const formGroup = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

const inputStyle = {
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid rgba(255,255,255,0.2)",
  backgroundColor: "transparent",
  color: "#fff",
  outline: "none",
};

const button = {
  padding: "10px",
  borderRadius: "6px",
  border: "none",
  background: "linear-gradient(135deg, #631011, #8b1a1a)",
  color: "#fff",
  cursor: "pointer",
  fontWeight: "600",
};

const footerText = {
  textAlign: "center",
  marginTop: "10px",
  fontSize: "13px",
  color: "#f1c6cb",
};

const linkStyle = {
  color: "#ffffff",
  textDecoration: "none",
  fontWeight: "600",
};

export default Register;