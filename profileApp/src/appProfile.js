import React from "react";
import { GlobalStore } from "redux-micro-frontend";
import { createStore } from "redux";
import { Profile } from "./Profile";
import { profileReducer } from "./store/reducer";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

export class AppProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      globalUser: null,
      globalEmail: null,
      auth: null,
    };

    this.userStateChange = this.userStateChange.bind(this);

    this.globalStore = GlobalStore.Get();
    this.store = createStore(profileReducer);
    this.globalStore.RegisterStore("ProfileApp", this.store, [
      GlobalStore.AllowAll,
    ]);

    try {
      this.globalStore.SubscribeToPartnerState(
        "ProfileApp",
        "LoginApp",
        this.userStateChange
      );
    } catch (error) {
      console.log(error);
    }
  }

  userStateChange(global) {
    this.setState({
      globalUser: global.globalUser,
      globalEmail: global.globalEmail,
      auth: global.auth
    });
  }

  render() {
    return (
      <>
        {this.state.auth !== null ? (
          <div>
            <Router>
              <Switch>
                <Route path="/">
                  <Profile user={this.state.globalUser} email={this.state.globalEmail}/>
                </Route>
              </Switch>
            </Router>
          </div>
        ) : (
          ""
        )}
      </>
    );
  }
}
