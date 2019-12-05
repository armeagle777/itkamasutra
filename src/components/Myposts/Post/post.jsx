import React, { Component } from "react";
import classes from "./post.module.css";

const Post = props => {
  return (
    <div className={classes.item}>
      <img src="https://apollodesign.nl/wp-content/uploads/2015/08/avatar-casper-tekening.png" />
      {props.message}
      <div>
        <span>Like</span>
      </div>
    </div>
  );
};

export default Post;
