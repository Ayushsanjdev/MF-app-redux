import React from "react";
import Login from "./login";
import { GlobalStore } from "redux-micro-frontend";
import { userReducer } from "./userReducer";
import { login, logout } from "./userReducer";

export class AppLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      globalUser: null,
      userPass: null,
      isLogged: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateState = this.updateState.bind(this);
    this.userChange = this.userChange.bind(this);
    this.passChange = this.passChange.bind(this);

    this.globalStore = GlobalStore.Get(false);
    this.store = this.globalStore.CreateStore("LoginApp", userReducer, []);
    this.globalStore.RegisterGlobalActions("LoginApp", [login, logout]);
    this.globalStore.SubscribeToGlobalState("LoginApp", this.updateState);
  }

  updateState(globalState) {
    this.setState({
      globalUser: globalState.LoginApp.global,
      isLogged: globalState.LoginApp.global,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.globalUser !== null && this.state.userPass !== null) {
      this.globalStore.DispatchAction(
        "LoginApp",
        login({
          name: this.state.globalUser,
          isLogged: true,
        })
      );
    } else {
      window.alert("error");
    }
  }

  userChange(e) {
    this.setState({
      globalUser: e.target.value,
    });
  }

  passChange(e) {
    this.setState({
      userPass: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <Login
          userChange={this.userChange}
          passChange={this.passChange}
          submit={this.handleSubmit}
        />
      </div>
    );
  }
}
