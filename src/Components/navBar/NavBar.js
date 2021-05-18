import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <ul>
      <li>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="active" to="/movies">
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default NavBar;
