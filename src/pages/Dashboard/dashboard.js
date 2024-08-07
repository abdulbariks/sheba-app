import React from "react";
import Navbar from "../../components/Navbar";
import useAuth from "../../hooks/useAuth";

const Dashboard = (props) => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar />
      <h1>Name: {user.name}</h1>
      <h1>Emaol:{user.email}</h1>
      <h1>Role: {user.role}</h1>
      <button className="bg-rose-900 p-5" onClick={() => logOut()}>
        LogOut
      </button>
    </div>
  );
};

export default Dashboard;
