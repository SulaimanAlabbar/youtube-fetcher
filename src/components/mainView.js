import React from "react";
import VideoList from "./mainView/videoList";
import PageButton from "./mainView/pageButton";
import UpArrow from "../images/upArrow.png";
import DownArrow from "../images/downArrow.png";

class MainView extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "#CAD8DE" }}>
        <PageButton Image={UpArrow} Class={"pageButton-Up"} />
        <VideoList />
        <PageButton Image={DownArrow} Class={"pageButton-Down"} />
      </div>
    );
  }
}

export default MainView;
