import React from "react";

const Dashboard = ({ user }) => {
  return (
    <>
      <h1>
        Welcome <span className="welcome-user">{user ? user : "N/A"}</span> !!
      </h1>
    </>
  );
};

export default Dashboard;
