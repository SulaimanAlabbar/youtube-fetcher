import React from "react";
import MainView from "./mainView";
import Controls from "./controls";
import ProfileInfo from "./profileInfo";
import "../css/youtubeFetcher.css";
const hey = 123;

const YoutubeFetcher = () => {
  return (
    <div className="youtubeFetcherContainer">
      <div className="youtubeFetcherTop">
        <MainView />
      </div>
      <div className="youtubeFetcherBottom">
        <div className="Controls">
          <Controls />
        </div>
        <div className="ProfileInfo">
          <ProfileInfo />
        </div>
      </div>
    </div>
  );
};

export default YoutubeFetcher;
