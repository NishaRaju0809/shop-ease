import React, { Fragment } from "react";
import { Outlet, useLocation } from "react-router";
import { Link } from "react-router-dom";

import "./styles.css";

const Navigation = () => {
  const location = useLocation();
  return (
    <Fragment>
      <div className="nav-container">
        <h1>LOGO</h1>
        <div>
          <Link
            className={`nav-name ${location.pathname === "/" ? "active" : ""}`}
            to="/"
          >
            Home
          </Link>
          <Link
            className={`nav-name ${
              location.pathname === "/contact" ? "active" : ""
            }`}
            to="/contact"
          >
            Contact
          </Link>
          <Link
            className={`nav-name ${
              location.pathname === "/contact" ? "active" : ""
            }`}
            to="/about"
          >
            About
          </Link>
          <Link
            className={`nav-name ${
              location.pathname === "/contact" ? "active" : ""
            }`}
            to="/signup"
          >
            Sign Up
          </Link>
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
