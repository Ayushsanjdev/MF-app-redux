import React from "react";
import Login from "./login";
import { GlobalStore } from "redux-micro-frontend";
import { UserReducer } from "./store/userReducer";
import { LoginUser } from "./store/userActions";

export class AppLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      globalUser: null,
      userPass: null,
      isLogged: false,
    };

    this.userChange = this.userChange.bind(this);
    this.passChange = this.passChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateState = this.updateState.bind(this);

    this.globalStore = GlobalStore.Get(false);
    this.store = this.globalStore.CreateStore("LoginApp", UserReducer, []);
    this.globalStore.RegisterGlobalActions("LoginApp", ["LOG_IN", "LOG_OUT"]);
    this.globalStore.SubscribeToGlobalState("LoginApp", this.updateState);
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

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.globalUser !== null && this.state.userPass !== null) {
      this.globalStore.DispatchAction(
        "LoginApp",
        LoginUser(this.state.globalUser, this.state.isLogged)
      );
    } else {
      window.alert("error");
    }
  }

  updateState(globalState) {
    this.setState({
      globalUser: globalState.LoginApp.globalUser,
      isLogged: globalState.LoginApp.isLogged,
    });
  }

  render() {
    return (
      <div>
        {this.state.isLogged ? (
          ""
        ) : (
          <Login
            userChange={this.userChange}
            passChange={this.passChange}
            submit={this.handleSubmit}
          />
        )}
      </div>
    );
  }
}
