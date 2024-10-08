import React, { Fragment, useContext } from "react";
import { Outlet, useLocation } from "react-router";
import { Link } from "react-router-dom";

import "./styles.scss";
import { ReactComponent as Cart } from "../assets/icons/icCart.svg";
import { ReactComponent as Wishlist } from "../assets/icons/icWishlist.svg";
import logo from "../assets/images/logo.png";
import { UserContext } from "../store/userContext";

const Navigation = () => {
  const { user } = useContext(UserContext);
  const location = useLocation();
  console.log("context:", user);
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
              location.pathname === "/shop" ? "active" : ""
            }`}
            to="/shop"
          >
            Shop
          </Link>
          <Link
            className={`nav-name ${
              location.pathname === "/contact" ? "active" : ""
            }`}
            to="/contact"
          >
            Contact
          </Link>

          {user ? (
            <Link
              className={`nav-name ${
                location.pathname === "/signup" ? "active" : ""
              }`}
              to="/signup"
            >
              Sign out
            </Link>
          ) : (
            <Link
              className={`nav-name ${
                location.pathname === "/signup" ? "active" : ""
              }`}
              to="/signup"
            >
              Sign Up
            </Link>
          )}
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
