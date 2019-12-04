import React from "react";
import classes from "../styles/dialogs.module.css";
import { NavLink } from "react-router-dom";
const Dialogs = props => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_items}>
        <div className={classes.dialog + " " + classes.active}>
          <NavLink activeClassName={classes.activedialog} to="/dialogs/1">
            Dimich
          </NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink activeClassName={classes.activedialog} to="/dialogs/2">
            Kazel
          </NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink activeClassName={classes.activedialog} to="/dialogs/3">
            Kazel
          </NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink activeClassName={classes.activedialog} to="/dialogs/4">
            Kazel
          </NavLink>
        </div>
      </div>
      <div className={classes.messages}>
        <div className={classes.message}>Hi</div>
        <div className={classes.message}>How is Your it-kamasutra</div>
        <div className={classes.message}>You</div>
      </div>
    </div>
  );
};

export default Dialogs;
