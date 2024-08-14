import React from "react";
import Navbar from "../../components/Navbar";
import useAuth from "../../hooks/useAuth";
// import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import CreateUser from "../../components/Admin/UserModule/CreateUser";
import ViewUsers from "../../components/Admin/UserModule/ViewUsers";
import ViewCategory from "../../components/Admin/CategoryModule/ViewCategory";
import CreateCategory from "../../components/Admin/CategoryModule/CreateCategory";
import ViewSlot from "../../components/Admin/SlotModule/ViewSlot";
import CreateSlot from "../../components/Admin/SlotModule/CreateSlot";

const Dashboard = (props) => {
  const { user, logOut } = useAuth();
  // const navigate = useNavigate();
  // useEffect(() => {
  //   user.role = "user" && navigate("/dashboard");
  //   user.role = "admin" && navigate("/admin");
  //   user.role = "staff" && navigate("/staff");
  // }, [user.role, navigate, user]);
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
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 my-10">
          <div className="min-w-full shadow rounded border border-gray-400">
            <h2 className="flex items-center jus bg-slate-600 text-white p-2">
              User Module
            </h2>
            <CreateUser />
            <ViewUsers />
          </div>
          <div className="min-w-full shadow rounded border border-gray-400">
            <h2 className="flex items-center jus bg-slate-600 text-white p-2">
              Category Module
            </h2>
            <CreateCategory />
            <ViewCategory />
          </div>
          <div className="min-w-full shadow rounded border border-gray-400">
            <h2 className="flex items-center jus bg-slate-600 text-white p-2">
              Slot Module
            </h2>
            <CreateSlot />
            <ViewSlot />
          </div>
        </div>
      </div>
      <ToastContainer autoClose={2000} />
    </div>
  );
};

export default Dashboard;
