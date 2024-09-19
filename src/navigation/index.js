import React, { Fragment } from "react";
import { Outlet, useLocation } from "react-router";
import { Link } from "react-router-dom";

import "./styles.scss";
import { ReactComponent as Cart } from "../assets/icons/icCart.svg";
import { ReactComponent as Wishlist } from "../assets/icons/icWishlist.svg";
import logo from "../assets/images/logo.png";

const Navigation = () => {
  const location = useLocation();
  return (
    <Fragment>
      <div className="nav-container">
        <img height={100} width={100} src={logo} arc="logo" />
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
              location.pathname === "/signup" ? "active" : ""
            }`}
            to="/signup"
          >
            Sign Up
          </Link>
        </div>
        <div>
          <Wishlist height={40} width={40} />
          <Cart height={40} width={40} />
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
