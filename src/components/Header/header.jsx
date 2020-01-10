import React, { Component } from "react";
import classes from "./header.module.css";
class Header extends Component {
  render() {
    return (
      <header className={classes.header}>
        <img
          className={classes.header_img}
          src="https://png.pngtree.com/element_pic/16/11/02/bd886d7ccc6f8dd8db17e841233c9656.jpg"
        />
        <p>This is a header</p>
      </header>
    );
  }
}

export default Header;
