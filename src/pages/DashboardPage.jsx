import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import ProgressBar from "../components/ProgressBar";
import Button from "../components/Button";
import PlusIcon from "../assets/images/plus.svg";

const DashboardPage = () => {
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/login"); // Redirect to login page if not authenticated
    }
  }, [isAuth, navigate]);

  return (
    <div>
      <h1 className="text-4xl font-semibold text-[var(--arsenic)]">List of tasks</h1>

      <div className="mt-10">
        <time className="pl-3.5 font-inter text-base text-[#0D062D] font-medium relative before:content-[''] before:absolute before:w-2 before:h-2 before:bg-[var(--pansy-purple)] before:rounded-full before:top-1/2 before:-translate-y-1/2 before:left-0" datetime="2024-12-04">Today, 4/12/2024</time>

        <ProgressBar value={30} max={100} className="mt-4" />
      </div>

      <Button className="mt-10 ml-3.5">  
        <img src={PlusIcon} width={12} height={12} alt="" />
        Add new task
      </Button>
    </div>
  );
}

export default DashboardPage;