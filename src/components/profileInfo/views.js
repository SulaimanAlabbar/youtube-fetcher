import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    width: "100%",
    maxWidth: 500,
    textAlign: "center"
  }
};

function Bio(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography component="h2" variant="h1" gutterBottom>
        Views
      </Typography>
      <Typography variant="h4" gutterBottom>
        7,162,742 views
      </Typography>
    </div>
  );
}

Bio.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Bio);
