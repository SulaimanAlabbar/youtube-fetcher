import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const styles = {
  root: {
    width: "100%",
    maxWidth: 700,
    marginTop: 20,
    marginBottom: 20
  },
  avatar: {
    float: "left",
    marginRight: 30,
    marginBottom: 20
  },
  bigAvatar: {
    width: 160,
    height: 160
  }
};

function AvatarAndBio(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Avatar
        alt="Avatar"
        src={"https://s.ytimg.com/yts/img/avatar_720-vflYJnzBZ.png"}
        className={classNames(classes.avatar, classes.bigAvatar)}
      />
      <Typography variant="subtitle2" gutterBottom>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A temporibus
        rerum voluptates consequatur cumque harum, dolor exercitationem pariatur
        excepturi sunt eaque officia, placeat nihil recusandae sed, quia
        dignissimos consectetur cum! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. A temporibus rerum voluptates consequatur cumque
        harum, dolor exercitationem pariatur excepturi sunt eaque officia,
        placeat nihil recusandae sed, quia dignissimos consectetur cum!
      </Typography>
    </div>
  );
}

AvatarAndBio.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AvatarAndBio);
