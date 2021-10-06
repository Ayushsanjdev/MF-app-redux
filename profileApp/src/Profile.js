import React from "react";
import "./profile.css";

export class Profile extends React.Component {
  render() {
    return (
      <div className="profile-div">
        <img
          src="https://img.icons8.com/color-glass/96/000000/user-group-man-man.png"
          alt="profile"
          className="profile-img"
        />
        <h5>
          User Name: <span className="username">{this.props.user}</span>
        </h5>
        <h5>Email: N/A</h5>
        <h5>Age: N/A</h5>
        <h5>Company: N/A</h5>
      </div>
    );
  }
}
