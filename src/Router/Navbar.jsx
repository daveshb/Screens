import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__end">
        <NavLink
          className={({ isActive }) => " link " + (isActive ? "active" : "")}
          to="control"
        >
          CONTROL
        </NavLink>

        <NavLink
          className={({ isActive }) => " link " + (isActive ? "active" : "")}
          to="/screen1"
        >
          SCREEN 1
        </NavLink>

        <NavLink
          className={({ isActive }) => " link " + (isActive ? "active" : "")}
          to="/screen2"
        >
          SCREEN 2
        </NavLink>
      </div>
    </div>
  );
};
