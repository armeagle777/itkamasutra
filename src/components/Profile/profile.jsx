import React, { Component } from "react";

import classes from "./profile.module.css";
import Myposts from "../Myposts/myposts";
import ProfileInfo from "./Profileinfo/profileinfo";

const Profile = props => {
  return (
    <main className={classes.main}>
      <ProfileInfo />

      <Myposts posts={props.posts} />
    </main>
  );
};
export default Profile;
