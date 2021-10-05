import React from "react";
import './profile.css';

export class Profile extends React.Component {
  render() {
    return (
      <div className="profile-div">
        <img
          src="https://img.icons8.com/color-glass/96/000000/user-group-man-man.png"
          alt="profile"
          className="profile-img"
        />
        <h5>{this.props.user}</h5>
        {/* <button className="logout-btn" type="button">
          Logout
        </button> */}
      </div>
    );
  }
}
