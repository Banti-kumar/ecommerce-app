import "./App.css";
import AuthMiddleware from "./middleware/AuthMiddleware";
import Dashboard from "./pages/dashboard";
import LoginParent from "./pages/login";
import RegisterParent from "./pages/register";
import { Navigate, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/user/login" />} />

      <Route element={<AuthMiddleware type="public" />}>
        <Route path="/user/login" element={<LoginParent />} />
        <Route path="/user/register" element={<RegisterParent />} />
      </Route>

      <Route element={<AuthMiddleware type="private" />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default App;
