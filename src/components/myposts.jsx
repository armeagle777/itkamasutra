import React, { Component } from "react";
import classes from "../styles/myposts.module.css";
import Post from "./post";

const Myposts = () => {
  return (
    <div>
      MY posts
      <textarea></textarea>
      <button>Add post</button>
      <div className={classes.posts}>
        <Post message="Barev" />
        <Post message="vonc es?" />
        <Post message="lav em, mersi" />
      </div>
    </div>
  );
};
export default Myposts;
