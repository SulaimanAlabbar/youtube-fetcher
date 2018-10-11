import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";

const styles = {
  card: {
    maxWidth: 210
  },
  media: {
    objectFit: "cover"
  },
  root: {}
};

function VideoItem(props) {
  const { classes, title, publishDate, views, thumbnail } = props;
  return (
    <Card className={classes.card}>
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
  );
}

VideoItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(VideoItem);
