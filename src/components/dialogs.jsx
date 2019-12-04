import React from "react";
import classes from "../styles/dialogs.module.css";

const Dialogs = props => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_items}>
        <div className={classes.item}>
          <div className={classes.messages}>
            <div className={classes.message}>Hi</div>
            <div className={classes.message}>How is Your it-kamasutra</div>
            <div className={classes.message}>You</div>
          </div>
        </div>
        <div className={classes.item}>
          <div className={classes.messages}>
            <div className={classes.message}>Hi</div>
            <div className={classes.message}>How is Your it-kamasutra</div>
            <div className={classes.message}>You</div>
          </div>
        </div>
        <div className={classes.item}>
          <div className={classes.messages}>
            <div className={classes.message}>Hi</div>
            <div className={classes.message}>How is Your it-kamasutra</div>
            <div className={classes.message}>You</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
