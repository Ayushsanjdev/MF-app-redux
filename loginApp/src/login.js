import React from "react";
import "./App.css";

export class Login extends React.Component {
  render() {
    return (
      <div className="main-container">
        <form>
          <h2>Member Login</h2>
          <div className="container">
            <label htmlFor="uname">
              <b>Username</b>
            </label>
            <input
              type="text"
              name="uname"
              required
              onChange={this.props.userChange}
            />

            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              name="psw"
              required
              onChange={this.props.passChange}
            />

            <button type="submit" onClick={this.props.submit}>
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
