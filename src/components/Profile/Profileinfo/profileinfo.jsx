import React from "react";
import classes from "./profileinfo.module.css";
const ProfileInfo = () => {
  return (
    <div>
      <img
        className={classes.profile_img}
        src="https://www.smartertravel.com/uploads/2017/08/Beach-Bag-Essentials-Cover-1400x500.jpg"
      />
      <div className={classes.description_block}>ava + descr</div>
    </div>
  );
};

export default ProfileInfo;
