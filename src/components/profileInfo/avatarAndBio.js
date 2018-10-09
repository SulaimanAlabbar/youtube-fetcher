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
  const { classes, name, avatarURL, bio } = props;
  return (
    <div className={classes.root}>
      <Typography component="h1" variant="h2" gutterBottom>
        {name}
      </Typography>
      <Avatar
        alt="Avatar"
        src={avatarURL}
        className={classNames(classes.avatar, classes.bigAvatar)}
      />
      <Typography variant="subtitle2">{bio}</Typography>
    </div>
  );
}

AvatarAndBio.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AvatarAndBio);
