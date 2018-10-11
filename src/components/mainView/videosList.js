import React from "react";
import VideoItem from "./videoItem";
import "../../css/videosList.css";
import { connect } from "react-redux";
import addCommas from "../../functions/addCommas";

const mapStateToProps = state => {
  return state.loaded
    ? {
        loaded: state.loaded,
        videos: state.account[state.currentAccountIndex].videos
      }
    : {
        loaded: false,
        videos: -1
      };
};

// let items = [];

// load;

// function set() {
//   for (let i = 0; i < 14; i++) {
//     items.push(<VideoItem key={i} />);
//   }
// }

class VideosList extends React.Component {
  constructor() {
    super();

    this.loadVideos = this.loadVideos.bind(this);
  }

  loadVideos(videos) {
    return videos.map((video, index) => (
      <VideoItem
        title={video.title}
        publishDate={video.publishDate}
        views={addCommas(video.views)}
        thumbnail={video.thumbnail}
        key={video.title + index} //change to uuid
      />
    ));
  }

  render() {
    const { loaded, videos } = this.props;

    if (loaded) {
      // set();
      return (
        <div className="videosListContainer">{this.loadVideos(videos)}</div>
      );
    } else {
      return <div />;
    }
  }
}

export default connect(mapStateToProps)(VideosList);
