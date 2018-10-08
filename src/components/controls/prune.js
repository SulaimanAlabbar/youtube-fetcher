import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
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
        <Button variant="contained" className={classes.button}>
          Prune
        </Button>
      ) : (
        <Button
          variant="contained"
          color="secondary"
          disabled
          className={classes.button}
        >
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
