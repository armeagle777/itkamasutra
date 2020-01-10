import React, { Component } from "react";
import classes from "./settings.module.css";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let date = new Date();
    return (
      <div className={classes.settings}>
        <h2 className={classes.htwo}>Date: {date.toDateString()}</h2>
        <h2>
          Time:
          <span className={classes.date}>
            {date.getHours()}:{date.getMinutes()}
          </span>
        </h2>
      </div>
    );
  }
}

export default Settings;
