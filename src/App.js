import React, { Component } from "react";
import classes from "./app.module.css";
import Header from "./components/header";
import Aside from "./components/aside";
import Profile from "./components/profile";
import News from "./components/news";
import Music from "./components/music";
import Settings from "./components/settings";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/footer";
import Dialogs from "./components/dialogs";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={classes.appwrapper}>
          <Header />
          <Aside />
          <div className={classes.app_wrapper_content}>
            <Route path="/dialogs" component={Dialogs} />
            <Route path="/profile" component={Profile} />
            <Route path="/news" component={News} />
            <Route path="/music" component={Music} />
            <Route path="/settings" component={Settings} />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
