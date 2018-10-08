import React from "react";
import AvatarAndBio from "./profileInfo/avatarAndBio";
import Views from "./profileInfo/views";
import Joined from "./profileInfo/joined";
import "../css/profileInfo.css";

class ProfileInfo extends React.Component {
  render() {
    return (
      <div className="profileInfoContainer">
        <div className="profileInfoLeft">
          <AvatarAndBio />
        </div>
        <div className="profileInfoMiddle">
          <Views />
        </div>
        <div className="profileInfoRight">
          <Joined />
        </div>
      </div>
    );
  }
}

export default ProfileInfo;
