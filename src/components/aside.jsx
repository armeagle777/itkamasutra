import React, { Component } from "react";
import classes from "../styles/aside.module.css";
import { NavLink } from "react-router-dom";

const Aside = () => {
  return (
    <aside className={classes.aside}>
      <nav className={classes.nav}>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/dialogs">Messages</NavLink>
        <NavLink to="/news">News</NavLink>
        <NavLink to="/music">Music</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </nav>
    </aside>
  );
};
export default Aside;
