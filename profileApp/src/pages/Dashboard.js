import React from "react";
import { connect } from "react-redux";
import { Route, Router, Switch } from "react-router";
import { Profile } from "../Profile";

const Dashboard = ({ user }) => {
  return (
    <>
      <div>
        Welcome <span className="welcome-user">{user}</span> !!
      </div>
      <Router>
        <Route path="/" component={Profile}/>
      </Router>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
export default Dashboard;
