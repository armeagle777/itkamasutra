import React, { Component } from "react";
import classes from "./post.module.css";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={classes.item}>
        <img src="https://apollodesign.nl/wp-content/uploads/2015/08/avatar-casper-tekening.png" />
        {this.props.message}
        <div>
          <span>{`Likes: ${this.props.likesCount}`}</span>
        </div>
      </div>
    );
  }
}

export default Post;
