import { Navigate, Outlet } from "react-router-dom";

const AuthMiddleware = ({ type }) => {
  const token = localStorage.getItem("token");

  if (type === "private" && !token) {
    return <Navigate to="/user/login" />;
  }

  if (type === "public" && token) {
    return <Navigate to="/dashboard" />;
  }

  return <Outlet />;
};

export default AuthMiddleware;
