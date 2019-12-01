import React, { Component } from "react";

import classes from "../styles/profile.module.css";
import Myposts from "./myposts";
const Profile = () => {
  return (
    <main className={classes.main}>
      <div>
        <img
          className={classes.profile_img}
          src="https://www.smartertravel.com/uploads/2017/08/Beach-Bag-Essentials-Cover-1400x500.jpg"
        />
      </div>
      <div>ava + descr</div>
      <Myposts />
    </main>
  );
};
export default Profile;
