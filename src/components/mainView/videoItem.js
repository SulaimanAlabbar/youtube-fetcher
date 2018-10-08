import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import IMG from "../../images/avatar.jpg";
import classNames from "classnames";

const styles = {
  card: {
    maxWidth: 210
  },
  media: {
    // ⚠️ object-fit is not supported by IE11.
    objectFit: "cover"
  },
  root: {}
};

function VideoItem(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="image"
          className={classNames(classes.media, classes.root)}
          height="120"
          image={IMG}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Video Title
          </Typography>
          <Typography component="p">274,912 views</Typography>
          <Typography component="p">Published on Jan 21, 2017</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

VideoItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(VideoItem);
