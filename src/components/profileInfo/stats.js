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

function Stats(props) {
  const { classes, header, stat } = props;

  return (
    <div className={classes.root}>
      <Typography component="h1" variant="h3" gutterBottom>
        {header}
      </Typography>
      <Typography variant="h4" gutterBottom>
        {stat}
      </Typography>
    </div>
  );
}

Stats.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Stats);
