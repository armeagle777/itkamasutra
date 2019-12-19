import React, { Component } from "react";
import classes from "./aside.module.css";
import { NavLink } from "react-router-dom";

class Aside extends Component {
  render() {
    return (
      <aside className={classes.aside}>
        <nav className={classes.nav}>
          <NavLink to="/profile" activeClassName={classes.activLink}>
            Profile
          </NavLink>
          <NavLink to="/dialogs" activeClassName={classes.activLink}>
            Messages
          </NavLink>
          <NavLink to="/news" activeClassName={classes.activLink}>
            News
          </NavLink>
          <NavLink to="/music" activeClassName={classes.activLink}>
            Music
          </NavLink>
          <NavLink to="/settings" activeClassName={classes.activLink}>
            Settings
          </NavLink>
        </nav>
      </aside>
    );
  }
}
export default Aside;
