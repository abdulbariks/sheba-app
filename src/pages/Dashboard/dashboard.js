import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Dashboard = (props) => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    user.role = "user" && navigate("/dashboard");
    user.role = "admin" && navigate("/admin");
    user.role = "staff" && navigate("/staff");
  }, [user.role, navigate, user]);
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-2">
        <div className="">
          <h1>Dashboard</h1>
          <h1>
            Your Name:
            <span className="text-sky-600 capitalize">{user.name}</span>
          </h1>
          <h1>
            Your Email:
            <span className="text-sky-600 capitalize">{user.email}</span>
          </h1>
          <h1>
            Your Role:
            <span className="text-sky-600 capitalize">{user.role}</span>
          </h1>
          <button
            className="bg-rose-900 p-2 border rounded-md"
            onClick={() => logOut()}
          >
            LogOut
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
