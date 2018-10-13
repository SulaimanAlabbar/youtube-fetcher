import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import Video from "./video";

const styles = {
  card: {
    // maxWidth: 210
    height: "250px",
    width: "250px"
  },
  media: {
    objectFit: "cover"
  },
  root: {}
};

class VideoItem extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const {
      classes,
      title,
      publishDate,
      views,
      thumbnail,
      videoId
    } = this.props;
    return (
      <div>
        <Card className={classes.card} onClick={this.handleClickOpen}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="image"
              className={classNames(classes.media, classes.root)}
              height="120"
              image={thumbnail}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                Published at {publishDate}
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                {views} views
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Video
          title={title}
          videoId={videoId}
          open={this.state.open}
          handleClose={this.handleClose}
        />
      </div>
    );
  }
}

VideoItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(VideoItem);
