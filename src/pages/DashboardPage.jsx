import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const { isAuth, isAdmin, login, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/login"); // Redirect to login page if not authenticated
    }
  }, [isAuth, navigate]);

  return 'Dashboard page'
}

export default DashboardPage;