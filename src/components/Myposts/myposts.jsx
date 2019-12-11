import React, { Component } from "react";
import classes from "./myposts.module.css";
import Post from "./Post/post";

const Myposts = props => {
  let postElements = props.posts.map(p => (
    <Post key={p.id} message={p.post} likesCount={p.likesCount} />
  ));
  return (
    <div>
      <p>My posts</p>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add post</button>
      </div>

      <div className={classes.posts}>{postElements}</div>
    </div>
  );
};
export default Myposts;
