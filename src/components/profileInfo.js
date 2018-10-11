import React from "react";
import AvatarAndBio from "./profileInfo/avatarAndBio";
import Stats from "./profileInfo/stats";
import "../css/profileInfo.css";
import { connect } from "react-redux";
import AccountInfo from "../functions/accountInfo";
import addCommas from "../functions/addCommas";

const mapStateToProps = state => {
  return AccountInfo(state.loaded);
};

class ProfileInfo extends React.Component {
  render() {
    const {
      loaded,
      name,
      avatarURL,
      bio,
      joined,
      subs,
      views,
      videos,
      currentAccountIndex
    } = this.props;

    return loaded ? (
      <div className="profileInfoContainer">
        <div className="profileInfoFirst">
          <AvatarAndBio name={name} avatarURL={avatarURL} bio={bio} />
        </div>
        <div className="profileInfoSecond">
          <Stats header={"Joined"} stat={joined} />
        </div>
        <div className="profileInfoThird">
          <Stats header={"Videos"} stat={addCommas(videos)} />
        </div>
        <div className="profileInfoFourth">
          <Stats header={"Subscribers"} stat={addCommas(subs)} />
        </div>
        <div className="profileInfoFifth">
          <Stats header={"Views"} stat={addCommas(views)} />
        </div>
      </div>
    ) : (
      <div className="profileInfoContainer" />
    );
  }
}

export default connect(mapStateToProps)(ProfileInfo);
