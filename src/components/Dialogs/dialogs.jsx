import React, { Component } from "react";
import classes from "./dialogs.module.css";
import { NavLink } from "react-router-dom";
import { render } from "react-dom";

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
class Dialogs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let dialogElements = this.props.dialogs.map(d => (
      <DialogItem name={d.name} id={d.id} />
    ));
    let messageElements = this.props.messages.map(m => (
      <Message message={m.message} />
    ));
    return (
      <div className={classes.dialogs}>
        <div className={classes.dialogs_items}>{dialogElements}</div>
        <div className={classes.messages}>{messageElements}</div>
      </div>
    );
  }
}

export default Dialogs;
