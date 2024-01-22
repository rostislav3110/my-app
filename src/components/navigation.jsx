import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {

    function isActivePage () {
       return ({ isActive }) => (isActive ? "active-page" : "")
    }
  return (
    <>
      <NavLink
        className={isActivePage()}
        style={{ marginLeft: 20, textDecoration: "none", fontSize: 23 }}
        to="/"
      >
        Main
      </NavLink>
      <NavLink
        className={isActivePage()}
        style={{ marginLeft: 20, textDecoration: "none", fontSize: 23 }}
        to="/laptop-catalog"
      >
        Laptop
      </NavLink>
      <NavLink
        className={isActivePage()}
        style={{ marginLeft: 20, textDecoration: "none", fontSize: 23 }}
        to="/top-news"
      >
        News
      </NavLink>
    </>
  );
}

export default Navigation;
