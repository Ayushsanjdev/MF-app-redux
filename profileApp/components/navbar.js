import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Dashboard from "../src/pages/Dashboard";
import { Profile } from "../src/pages/Profile";

function Navbar({ globalEmail, globalUser }) {
  return (
    <div>
      <header>
        <Router>
          <ul className="navbar">
            <li>
              <Link to="/">Profile</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/dashboard">
              <Dashboard user={globalUser} />
            </Route>
            <Route exact path="/">
              <Profile email={globalEmail} user={globalUser} />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default Navbar;
