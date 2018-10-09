import React from "react";
import AvatarAndBio from "./profileInfo/avatarAndBio";
import Stats from "./profileInfo/stats";
import "../css/profileInfo.css";

const joined = "May 15, 2015";
const views = "7,162,742 views";
class ProfileInfo extends React.Component {
  render() {
    return (
      <div className="profileInfoContainer">
        <div className="profileInfoLeft">
          <AvatarAndBio />
        </div>
        <div className="profileInfoMiddle">
          <Stats header={"Views"} stat={views} />
        </div>
        <div className="profileInfoRight">
          <Stats header={"Joined"} stat={joined} />
        </div>
      </div>
    );
  }
}

export default ProfileInfo;
