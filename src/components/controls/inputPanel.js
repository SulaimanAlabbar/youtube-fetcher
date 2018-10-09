import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
});

class InputPanel extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="on">
        <TextField
          id="filled-search"
          label="Channel"
          type="search"
          className={classes.textField}
          margin="normal"
          variant="filled"
        />
      </form>
    );
  }
}

InputPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InputPanel);
