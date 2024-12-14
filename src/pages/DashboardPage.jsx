import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const { isAuth, isAdmin, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/login"); // Redirect to login page if not authenticated
    }
  }, [isAuth, navigate]);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard as <span className="text-red-500">{isAdmin ? "an ADMIN" : "a USER"}</span>!</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default DashboardPage;