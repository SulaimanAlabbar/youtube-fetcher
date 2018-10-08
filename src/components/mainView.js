import React from "react";
import VideosList from "./mainView/videosList";
import PageButton from "./mainView/pageButton";
import UpArrow from "../images/upArrow.png";
import DownArrow from "../images/downArrow.png";

class MainView extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "#CAD8DE" }}>
        <PageButton Image={UpArrow} Class={"pageButton-Up"} />
        <VideosList />
        <PageButton Image={DownArrow} Class={"pageButton-Down"} />
      </div>
    );
  }
}

export default MainView;
