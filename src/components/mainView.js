import React from "react";
import VideosList from "./mainView/videosList";
import PageButton from "./mainView/pageButton";
import UpArrow from "../images/upArrow.png";
import DownArrow from "../images/downArrow.png";

class MainView extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "#CAD8DE" }}>
        <PageButton image={UpArrow} direction={"pageButtonUp"} />
        <VideosList />
        <PageButton image={DownArrow} direction={"pageButtonDown"} />
      </div>
    );
  }
}

export default MainView;
