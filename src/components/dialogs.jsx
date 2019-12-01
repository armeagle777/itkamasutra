import React from "react";
import classes from "../styles/dialogs.module.css";

const Dialogs = props => {
  return (
    <div>
      <h1>Dialogs</h1>
      <img
        src="./images/111.jpg"
        alt="profilepicture"
        className={classes.dialog_image}
      />
    </div>
  );
};

export default Dialogs;
