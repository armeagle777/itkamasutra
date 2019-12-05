import React, { Component } from "react";
import classes from "./myposts.module.css";
import Post from "./Post/post";

const Myposts = () => {
  return (
    <div>
      <p>My posts</p>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add post</button>
      </div>

      <div className={classes.posts}>
        <Post message="Barev" />
        <Post message="vonc es?" />
        <Post message="lav em, mersi" />
      </div>
    </div>
  );
};
export default Myposts;
