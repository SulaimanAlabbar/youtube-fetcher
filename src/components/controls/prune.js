import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
    // backgroundColor: "blue"
  },
  input: {
    display: "none"
  }
});

const empty = false;

function Prune(props) {
  const { classes } = props;
  return (
    <div>
      {!empty ? (
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Prune
        </Button>
      ) : (
        <Button variant="contained" disabled className={classes.button}>
          Prune
        </Button>
      )}
    </div>
  );
}

Prune.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Prune);
