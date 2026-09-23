import React from "react";
import logo from "../../assets/logo.png";
import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router";

const Navbar = () => {
  // Active link style function
  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-[#632EE3] border-b-2 border-[#632EE3] font-semibold pb-1"
      : "hover:text-[#632EE3] transition-colors pb-1";

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 lg:px-12">
      {/* Navbar Start */}
      <div className="navbar-start flex items-center">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden p-1 mr-2"
          >
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-4 shadow-lg flex flex-col gap-3"
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

        {/* Logo Section */}
        <NavLink to="/" className="flex items-center gap-2">
          <img className="w-8 sm:w-10" src={logo} alt="HERO.IO Logo" />
          <span className="text-lg sm:text-xl font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            HERO.IO
          </span>
        </NavLink>
      </div>

      {/* Navbar Center (Desktop Only) */}
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

      {/* Navbar End */}
      <div className="navbar-end">
        <a
          href="https://github.com/nahid5766"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sm sm:btn-md text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2] border-none flex items-center gap-2 px-3 sm:px-4"
        >
          <FaGithub className="text-base sm:text-lg" />
          <span className="text-xs sm:text-sm">Contribute</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;