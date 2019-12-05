import React, { Component } from "react";

import classes from "../styles/profile.module.css";
import Myposts from "./myposts";
import ProfileInfo from "./profileinfo";

const Profile = () => {
  return (
    <main className={classes.main}>
      <div>
        <ProfileInfo />
      </div>
      <div>ava + descr</div>
      <Myposts />
    </main>
  );
};
export default Profile;
