import React from "react";
import logo from "../../assets/logo.png";
import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router";

const Navbar = () => {
  // Active link for CSS class function
  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-[#632EE3] border-b-2 border-[#632EE3] font-semibold pb-1"
      : "hover:text-[#632EE3] transition-colors pb-1";

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/" className={linkStyle}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/apps" className={linkStyle}>
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink to="/installation" className={linkStyle}>
                Installation
              </NavLink>
            </li>
          </ul>
        </div>

        <NavLink to="/" className="btn-ghost text-xl">
          <button className="flex ml-12 items-center">
            <img className="w-10" src={logo} alt="" />
            <span className="ml-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              HERO.IO
            </span>
          </button>
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center gap-8 text-base font-medium">
          <li>
            <NavLink to="/" className={linkStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/apps" className={linkStyle}>
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink to="/installation" className={linkStyle}>
              Installation
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end mr-12">
        <a className="btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
          <FaGithub /> Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
