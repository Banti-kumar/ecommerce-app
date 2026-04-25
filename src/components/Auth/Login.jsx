import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/Slices/loginSlice/loginSlice";

const Login = () => {
  const dispatch = useDispatch();
  const { isuserInfoLoading, userInfo } = useSelector((state) => state.login);
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
    temp_id: "hhhhh",
  });

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(values));
  };

  useEffect(() => {
    if (userInfo) navigate("/dashboard");
  }, [userInfo, navigate]);

  return (
    <form onSubmit={handleSubmit} style={container}>
      <div style={card}>
        <h1 style={title}>Glamourbook</h1>
        <p style={subtitle}>Welcome back</p>

        <div style={formGroup}>
          <input
            name="email"
            type="email"
            placeholder="Enter email"
            value={values.email}
            onChange={handleChange}
            style={inputStyle}
            onFocus={(e) =>
              (e.target.style.border = "1px solid #8b1a1a")
            }
            onBlur={(e) =>
              (e.target.style.border =
                "1px solid rgba(255,255,255,0.15)")
            }
          />

          <input
            name="password"
            type="password"
            placeholder="Enter password"
            value={values.password}
            onChange={handleChange}
            style={inputStyle}
            onFocus={(e) =>
              (e.target.style.border = "1px solid #8b1a1a")
            }
            onBlur={(e) =>
              (e.target.style.border =
                "1px solid rgba(255,255,255,0.15)")
            }
          />

          <button
            style={button}
            onMouseOver={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow =
                "0 6px 20px rgba(139,26,26,0.5)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow =
                "0 4px 15px rgba(0,0,0,0.4)";
            }}
          >
            {isuserInfoLoading ? "Logging in..." : "Login"}
          </button>

          <div style={footerText}>
            <span>Don’t have an account? </span>
            <Link to="/user/register" style={linkStyle}>
              Register
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

/* 🔥 SAME COLOR FAMILY — REFINED */

const container = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background:
    "linear-gradient(135deg, #1a0203 0%, #3a0a0b 50%, #631011 100%)", // smoother red gradient
};

const card = {
  padding: "38px",
  borderRadius: "14px",
  backgroundColor: "rgba(255,255,255,0.04)",
  backdropFilter: "blur(12px)",
  boxShadow: "0 10px 40px rgba(0,0,0,0.6)",
  width: "330px",
  color: "#fff",
  border: "1px solid rgba(255,255,255,0.08)",
};

const title = {
  textAlign: "center",
  marginBottom: "6px",
  letterSpacing: "1px",
  fontWeight: "600",
};

const subtitle = {
  textAlign: "center",
  marginBottom: "25px",
  fontSize: "13px",
  color: "#e0a4a8", // refined pink tone (already in your palette)
};

const formGroup = {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
};

const inputStyle = {
  padding: "11px",
  borderRadius: "6px",
  border: "1px solid rgba(255,255,255,0.15)",
  backgroundColor: "rgba(0,0,0,0.2)",
  color: "#fff",
  outline: "none",
  transition: "0.25s",
};

const button = {
  padding: "11px",
  borderRadius: "6px",
  border: "none",
  background: "linear-gradient(135deg, #631011, #8b1a1a)", // your original improved
  color: "#fff",
  cursor: "pointer",
  fontWeight: "600",
  transition: "0.25s",
  boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
};

const footerText = {
  textAlign: "center",
  marginTop: "12px",
  fontSize: "13px",
  color: "#e0a4a8",
};

const linkStyle = {
  color: "#ffffff",
  textDecoration: "none",
  fontWeight: "600",
};

export default Login;