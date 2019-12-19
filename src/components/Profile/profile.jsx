import React, { Component } from "react";

import classes from "./profile.module.css";
import Myposts from "../Myposts/myposts";
import ProfileInfo from "./Profileinfo/profileinfo";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <main className={classes.main}>
        <ProfileInfo />

        <Myposts posts={this.props.posts} />
      </main>
    );
  }
}

export default Profile;
