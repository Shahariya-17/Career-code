import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import logoImage from "../../assets/logo/logo.jpg";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [theme, setTheme] = useState("light");

  const handleSignOut = () => {
    signOutUser()
      .then(() => console.log("Signed out user"))
      .catch((error) => console.log(error));
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "btn btn-ghost bg-sky-500 text-white rounded-lg"
              : "btn btn-ghost text-base-content rounded-lg"
          }
        >
          Home
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/myApplications"
            className={({ isActive }) =>
              isActive
                ? "btn btn-ghost bg-sky-500 text-white rounded-lg"
                : "btn btn-ghost text-base-content rounded-lg"
            }
          >
            My Applications
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 transition-all duration-300 shadow-md fixed top-0 left-0 w-full z-50 px-4">
      <div className="navbar-start gap-2">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
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
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 text-base-content rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <img className="w-[60px] rounded-md" src={logoImage} alt="Logo" />
        <span className="hidden md:flex text-sky-500 text-3xl font-bold dark:text-sky-300">
          Career Code
        </span>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end gap-3">
        {/* Theme toggle */}
        <label
          className="swap swap-rotate tooltip tooltip-bottom"
          data-tip="Toggle theme"
        >
          <input
            type="checkbox"
            onChange={toggleTheme}
            checked={theme === "dark"}
          />
          <svg
            className="swap-on fill-current w-6 h-6 text-yellow-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5 12a7 7 0 1114 0 7 7 0 01-14 0zm7-9v2m0 14v2m9-9h-2M4 12H2m15.536-7.536l-1.414 1.414M6.464 17.536l-1.414 1.414m0-14.142l1.414 1.414M17.536 17.536l1.414 1.414" />
          </svg>
          <svg
            className="swap-off fill-current w-6 h-6 text-sky-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 0010.08 9.79z" />
          </svg>
        </label>

        {user ? (
          <button
            onClick={handleSignOut}
            className="btn btn-outline border-sky-500 text-sky-600 hover:bg-sky-500 hover:text-white transition-all duration-200
             dark:border-sky-400 dark:text-sky-300 dark:hover:bg-sky-500 dark:hover:text-white"
          >
            Sign Out
          </button>
        ) : (
          <>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive ? "btn bg-sky-500 text-white" : "btn btn-primary"
              }
            >
              Register
            </NavLink>
            <NavLink
              to="/signin"
              className={({ isActive }) =>
                isActive
                  ? "btn bg-sky-500 text-white"
                  : "btn btn-accent text-white"
              }
            >
              Sign In
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
