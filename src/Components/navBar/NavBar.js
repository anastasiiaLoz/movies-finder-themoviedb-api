import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../navBar/NavBar.module.css";

const NavBar = () => {
  return (
    <ul className={styles.navBar}>
      <li>
        <NavLink className={styles.navBarLinks} exact activeClassName="active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={styles.navBarLinks} exact activeClassName="active" to="/movies">
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default NavBar;
