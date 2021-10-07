import React from "react";
import "./login.css";

export class Login extends React.Component {
  render() {
    return (
      <>
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

              <label htmlFor="email">
                <b>Email</b>
              </label>
              <input
                type="email"
                name="email"
                required
                onChange={this.props.emailChange}
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
        <div style={{ textAlign: "center" }}>
          <h3>User Credential</h3>
          <i>User Name: any</i><br />
          <i>Email: test123@test.com</i> <br />
          <i>Password: test123</i>
        </div>
      </>
    );
  }
}

export default Login;
