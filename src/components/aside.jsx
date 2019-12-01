import React, { Component } from "react";
import classes from "../styles/aside.module.css";

const Aside = () => {
  return (
    <aside className={classes.aside}>
      <nav className={classes.nav}>
        <a href="/profile">Profile</a>
        <a href="/dialogs">Messages</a>
        <a href="#">News</a>
        <a href="#">Music</a>
        <a href="#">Settings</a>
      </nav>
    </aside>
  );
};
export default Aside;
