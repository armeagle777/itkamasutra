import React, { Component } from "react";
import classes from "./music.module.css";
class Music extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={classes.music}>
        <h2>Music site</h2>
      </div>
    );
  }
}
export default Music;
