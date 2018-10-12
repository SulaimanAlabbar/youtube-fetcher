import React from "react";
import "../../css/pageButton.css";
import { connect } from "react-redux";
import * as actionCreators from "../../actions";
import * as fetchers from "../../functions/fetchers";

const mapDispatchToProps = actionCreators;

//handle case when buttons pushed when not loaded yet

const mapStateToProps = state => {
  return {
    state: state
  };
};

class PageButton extends React.Component {
  constructor() {
    super();

    this.changePageUp = this.changePageUp.bind(this);
    this.changePageDown = this.changePageDown.bind(this);
  }

  changePageUp() {
    console.log("UP");
  }

  async changePageDown() {
    const { state } = this.props;
    if (!state.loaded) return;
    console.log("DOWN");

    const tmp =
      state.account[this.props.state.currentAccountIndex].uploadsToken;
    const nextPageToken =
      state.account[state.currentAccountIndex].nextPageToken;

    const nextVids = await fetchers.fetchVideos(tmp, nextPageToken);

    this.props.addVideos(nextVids);

    console.log("this.props.state | PAGEDOWN:", state);

    //check if other videos available, if available don't fetch
    //if videos.length / 16 === current page, on last page, do fetch
    // modular instead as page sometimes wouldn't hold 16 videos
    //change current page, current page + 1
  }

  render() {
    const { image, direction } = this.props;
    //replace onMouseUp with an alternative that doesn't react to right or middle mouse
    return (
      <div
        className={direction}
        onMouseUp={
          direction === "pageButtonUp"
            ? () => this.changePageUp()
            : () => this.changePageDown()
        }
      >
        <img src={image} alt={direction} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageButton);
