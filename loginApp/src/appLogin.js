import React from "react";
import Login from "./login";
import { GlobalStore } from "redux-micro-frontend";
import { UserReducer } from "./store/userReducer";
import { LoginUser } from "./store/userActions";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "./firebase/firebase_config";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
export class AppLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      globalUser: null,
      userPass: null,
      isLogged: false,
      showProfile: false,
      isAuthenticated: null,
      globalEmail: null,
    };

    this.userChange = this.userChange.bind(this);
    this.passChange = this.passChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
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

  emailChange(e) {
    this.setState({
      globalEmail: e.target.value,
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
        LoginUser(
          this.state.globalUser,
          this.state.globalEmail,
          this.state.isAuthenticated
        )
      );
      this.setState({
        showProfile: true,
      });
      signInWithEmailAndPassword(
        getAuth(),
        this.state.globalEmail,
        this.state.userPass
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          this.setState({
            isAuthenticated: user,
          });
          console.log(user);
        })
        .catch((error) => {
          window.alert(error.code);
          console.log(error.message);
        });
    }
  }

  updateState(globalState) {
    this.setState({
      globalUser: globalState.LoginApp.globalUser,
      globalEmail: globalState.LoginApp.globalEmail,
      isAuthenticated: globalState.LoginApp.isAuthenticated,
    });
  }

  render() {
    return (
      <div>
        {!this.state.isAuthenticated ? (
          <Login
            userChange={this.userChange}
            passChange={this.passChange}
            emailChange={this.emailChange}
            submit={this.handleSubmit}
          />
        ) : (
          <div className="loader">
            <Loader
              type="Puff"
              color="#00BFFF"
              height={200}
              width={200}
              timeout={2000} //2 secs
            />
          </div>
        )}
      </div>
    );
  }
}
