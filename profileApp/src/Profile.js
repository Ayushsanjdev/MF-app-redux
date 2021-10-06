import React from "react";
import "./profile.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { Redirect } from "react-router";

export class Profile extends React.Component {
  render() {
    return (
      <>
        <div className="profile-div">
          <img
            src="https://img.icons8.com/color-glass/96/000000/user-group-man-man.png"
            alt="profile"
            className="profile-img"
          />
          <h5>
            Name: <span className="username">{this.props.user}</span>
          </h5>
          <h5>Email: N/A</h5>
          <h5>Age: N/A</h5>
          <h5>Company: N/A</h5>
        </div>
        <Router>
          <Switch>
            <Link to="/dashboard">Go to Dashboard</Link>
            <Route path="/dashboard">
              <Dashboard user={this.props.globalUser} />
              <Redirect from="/dashboard/reload" to="/" />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}
