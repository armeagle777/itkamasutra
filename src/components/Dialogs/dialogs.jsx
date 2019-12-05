import React from "react";
import classes from "./dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = props => {
  let path = `/dialogs/${props.id}`;
  let name = props.name;
  return (
    <div className={classes.dialog + " " + classes.active}>
      <NavLink activeClassName={classes.activedialog} to={path}>
        {name}
      </NavLink>
    </div>
  );
};
const Message = props => {
  return <div className={classes.message}>{props.message}</div>;
};
const Dialogs = props => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_items}>
        <DialogItem name="Dima K" id="1" />
        <DialogItem name="Karina" id="2" />
        <DialogItem name="Masha" id="3" />
        <DialogItem name="Sasha" id="4" />
      </div>
      <div className={classes.messages}>
        <Message message="Hi" />
        <Message message="How are You?" />
        <Message message="I am fine" />
      </div>
    </div>
  );
};

export default Dialogs;
