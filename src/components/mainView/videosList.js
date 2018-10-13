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
        videoId={video.videoId}
        key={video.title + index} //change to uuid
      />
    ));
  }

  render() {
    const { loaded, videos } = this.props;

    return loaded ? (
      <div className="videosListContainer">{this.loadVideos(videos)}</div>
    ) : (
      <div />
    );
  }
}

export default connect(mapStateToProps)(VideosList);
