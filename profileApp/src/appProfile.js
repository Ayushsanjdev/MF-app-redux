import React from "react";
import { GlobalStore } from "redux-micro-frontend";
import { createStore } from "redux";
import { Profile } from "./Profile";
import { profileReducer } from "./store/reducer";

export class AppProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      globalUser: null,
      isLogged: true,
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

  userStateChange(user) {
    this.setState({
      globalUser: user.globalUser,
      isLogged: user.isLogged,
    });
  }

  render() {
    return <div>{
      this.state.isLogged ?
      <Profile user={this.state.globalUser} />
      : ''
      }</div>;
  }
}
