import React, { Component } from "react";
import classes from "./app.module.css";
import Header from "./components/Header/header";
import Aside from "./components/Aside/aside";
import Profile from "./components/Profile/profile";
import News from "./components/News/news";
import Music from "./components/Music/music";
import Settings from "./components/Setting/settings";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/Footer/footer";
import Dialogs from "./components/Dialogs/dialogs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let profileComponent = props => (
      <Profile posts={this.props.state.profilePage.postData} />
    );
    let dialogsComponent = props => (
      <Dialogs
        dialogs={this.props.state.profilePage.dialogData}
        messages={this.props.state.dialogsPage.messageData}
      />
    );
    return (
      <BrowserRouter>
        <div className={classes.appwrapper}>
          <Header />
          <Aside />
          <div className={classes.app_wrapper_content}>
            <Route path="/dialogs" render={dialogsComponent} />
            <Route path="/profile" render={profileComponent} />
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
