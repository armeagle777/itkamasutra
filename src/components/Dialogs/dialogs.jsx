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
  let messageData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "hi2" },
    { id: 3, message: "hi3" },
    { id: 4, message: "hi4" },
    { id: 5, message: "hi5" },
    { id: 6, message: "hi6" }
  ];
  let dialogElements = props.dialogs.map(d => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messageElements = messageData.map(m => <Message message={m.message} />);
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_items}>{dialogElements}</div>
      <div className={classes.messages}>{messageElements}</div>
    </div>
  );
};

export default Dialogs;
