import React, { Component } from "react";

import classes from "./profile.module.css";
import Myposts from "../Myposts/myposts";
import ProfileInfo from "./Profileinfo/profileinfo";

const Profile = () => {
  return (
    <main className={classes.main}>
      <ProfileInfo />

      <Myposts />
    </main>
  );
};
export default Profile;
