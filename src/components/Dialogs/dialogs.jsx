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
  let dialogData=[
    {id:1, name: "Dima K"}
    {id:2, name: "Karina"}
    {id:3, name: "Masha"}
    {id:4, name: "Sasha"}
    {id:5, name: "Tanya"}
    {id:6, name: "Marina"}
  ]
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_items}>
        <DialogItem name={dialogData[0].name} id={dialogData[0].id} />
        <DialogItem name={dialogData[1].name} id={dialogData[1].id} />
        <DialogItem name={dialogData[2].name} id={dialogData[2].id} />
        <DialogItem name={dialogData[3].name} id={dialogData[3].id} />
        <DialogItem name={dialogData[4].name} id={dialogData[4].id} />
        <DialogItem name={dialogData[5].name} id={dialogData[5].id} />
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
