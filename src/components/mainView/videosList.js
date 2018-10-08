import React from "react";
import VideoItem from "./videoItem";
import "../../css/videosList.css";

let items = [];

function set() {
  for (let i = 0; i < 14; i++) {
    items.push(<VideoItem key={i} />);
  }
}

class VideosList extends React.Component {
  render() {
    set();
    return <div className="videosListContainer">{items}</div>;
  }
}

export default VideosList;
