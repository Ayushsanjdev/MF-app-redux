import React from "react";
import { GlobalStore } from "redux-micro-frontend";
import { Profile } from "./Profile";

export class AppProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      globalUser: null,
    };

    this.userStateChange = this.userStateChange.bind(this);

    this.globalStore = GlobalStore.Get();

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
      globalUser: user.global,
    });
  }

  render() {
    return (
      <div>
        <Profile user={this.state.globalUser} />
      </div>
    );
  }
}
