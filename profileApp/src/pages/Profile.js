import React from "react";
import "../profile.css";
export class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

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
            Name:{" "}
            <span className="profile-details">
              {this.props.user ? this.props.user : "N/A"}
            </span>
          </h5>
          <h5>
            Email:{" "}
            <span className="profile-details">
              {this.props.email ? this.props.email : "N/A"}
            </span>
          </h5>
          <h5>
            Age: <span className="profile-details">N/A</span>
          </h5>
          <h5>
            Company: <span className="profile-details">N/A</span>
          </h5>
          <button
            className="logout-btn"
            type="button"
            onClick={this.props.logout}
          >
            Logout
          </button>
        </div>
      </>
    );
  }
}
