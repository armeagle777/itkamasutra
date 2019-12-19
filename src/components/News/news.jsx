import React, { Component } from "react";
import classes from "./news.module.css";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={classes.news}>
        <h1>I am news site</h1>
      </div>
    );
  }
}

export default News;
