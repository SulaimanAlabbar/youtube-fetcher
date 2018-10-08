import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    width: "100%",
    maxWidth: 500
  }
};

function Bio(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A temporibus
        rerum voluptates consequatur cumque harum, dolor exercitationem pariatur
        excepturi sunt eaque officia, placeat nihil recusandae sed, quia
        dignissimos consectetur cum!
      </Typography>
    </div>
  );
}

Bio.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Bio);
