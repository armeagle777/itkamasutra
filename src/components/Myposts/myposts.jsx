import React, { Component } from "react";
import classes from "./myposts.module.css";
import Post from "./Post/post";

class Myposts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let postElements = this.props.posts.map(p => (
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
  }
}

export default Myposts;
