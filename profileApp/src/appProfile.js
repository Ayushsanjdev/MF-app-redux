import React from "react";
import { GlobalStore } from "redux-micro-frontend";
import { createStore } from "redux";
import { profileReducer } from "./store/reducer";
import Navbar from "../components/navbar";
import { LogoutUser } from "./store/actions";
export class AppProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      globalUser: null,
      globalEmail: null,
      isAuthenticated: null,
    };

    this.userStateChange = this.userStateChange.bind(this);
    this.handleLogout = this.handleLogout.bind(this);

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

  handleLogout() {
    this.globalStore.DispatchAction(
      "ProfileApp",
      LogoutUser(this.props.isAuthenticated)
    );
  }

  userStateChange(global) {
    this.setState({
      globalUser: global.globalUser,
      globalEmail: global.globalEmail,
      isAuthenticated: global.isAuthenticated,
    });
  }

  render() {
    return (
      <div>
        {this.state.isAuthenticated && (
          <Navbar
            globalUser={this.state.globalUser}
            globalEmail={this.state.globalEmail}
            logout={this.handleLogout}
          />
        )}
      </div>
    );
  }
}
