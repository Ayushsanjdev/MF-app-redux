import React from "react";
import "./App.css";

const Login = ({ userChange, passChange }) => {
  return (
    <div className="main-container">
      <form>
        <h2>Member Login</h2>
        <div className="container">
          <label htmlFor="uname">
            <b>Username</b>
          </label>
          <input type="text" placeholder="alexnaren01" name="uname" required onChange={userChange}/>

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input type="password" placeholder="********" name="psw" required onChange={passChange} />

          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
