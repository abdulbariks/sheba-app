import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.png";

const Navbar = (props) => {
  return (
    <div className="bg-white h-20 md:h-16 sticky top-0 shadow-md z-10">
      <div className="container mx-auto flex content-between items-center p-2">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="ms-auto">
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "px-3 py-1 mx-2  text-white  border border-sky-800 bg-sky-800 rounded-md"
                : "px-3 py-1 mx-2 text-black border rounded-md hover:bg-sky-800 hover:text-white"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/staffs"
            className={({ isActive }) =>
              isActive
                ? "px-3 py-1 mx-2  text-white  border border-sky-800 bg-sky-800 rounded-md"
                : "px-3 py-1 mx-2 text-black border rounded-md hover:bg-sky-800 hover:text-white"
            }
          >
            Staffs
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "px-3 py-1 mx-2  text-white  border border-sky-800 bg-sky-800 rounded-md"
                : "px-3 py-1 mx-2 text-black border rounded-md hover:bg-sky-800 hover:text-white"
            }
          >
            Login
          </NavLink>
          {/* <NavLink to='/dasboard'>Dasboard</NavLink>
            <NavLink to='/admin'>Admin</NavLink>
            <NavLink to='/logout'>Services</NavLink> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
