import React from "react";

const LoadingScreen = () => {
  return (
    <div style={container}>
      <div style={logo}>Glamourbook</div>

      <div style={progressBarWrapper}>
        <div style={progressBar}></div>
      </div>

      <p style={text}>Preparing your experience...</p>

      <style>
        {`
          @keyframes progress {
            0% { transform: translateX(-100%); }
            50% { transform: translateX(0%); }
            100% { transform: translateX(100%); }
          }

          @keyframes fade {
            0% { opacity: 0.4; }
            50% { opacity: 1; }
            100% { opacity: 0.4; }
          }

          @keyframes subtleScale {
            0% { transform: scale(0.98); }
            50% { transform: scale(1); }
            100% { transform: scale(0.98); }
          }
        `}
      </style>
    </div>
  );
};

const container = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(135deg, #1a0203, #631011)",
  color: "#f5e6e8",
  fontFamily: "system-ui, -apple-system, sans-serif",
};

const logo = {
  fontSize: "28px",
  fontWeight: "600",
  letterSpacing: "1.5px",
  marginBottom: "35px",
  color: "#ffffff",
  animation: "subtleScale 2s ease-in-out infinite",
};

const progressBarWrapper = {
  width: "220px",
  height: "3px",
  backgroundColor: "rgba(255,255,255,0.15)",
  overflow: "hidden",
  borderRadius: "2px",
};

const progressBar = {
  width: "100%",
  height: "100%",
  background:
    "linear-gradient(90deg, transparent, #ff4d6d, #ffffff, #ff4d6d, transparent)",
  animation: "progress 1.6s ease-in-out infinite",
};

const text = {
  marginTop: "18px",
  fontSize: "13px",
  opacity: 0.8,
  color: "#f1c6cb",
  animation: "fade 2s ease-in-out infinite",
};

export default LoadingScreen;