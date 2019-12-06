import React, { Component } from "react";
import classes from "./myposts.module.css";
import Post from "./Post/post";

const Myposts = () => {
  let postData = [
    { id: 1, post: "very good picture", likesCount: 17 },
    { id: 2, post: "very good picture2", likesCount: 11 },
    { id: 3, post: "very good picture3", likesCount: 27 }
  ];
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
        <Post message={postData[0].post} likesCount={postData[0].likesCount} />
        <Post message={postData[1].post} likesCount={postData[0].likesCount} />
        <Post message={postData[2].post} likesCount={postData[0].likesCount} />
      </div>
    </div>
  );
};
export default Myposts;
