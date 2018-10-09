import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import * as actionCreators from "../../actions";
import fetchAccount from "../../functions/fetchers";

const mapDispatchToProps = actionCreators;

const mapStateToProps = state => {
  return {
    state: state
  };
};

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
  constructor() {
    super();
    this.state = {
      input: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();
    this.setState({
      input: ""
    });
    const channel = this.state.input;
    const chan = await fetchAccount(channel);
    this.props.setAccountInfo(chan);
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  render() {
    const { classes } = this.props;
    const { input } = this.state;
    //return autoComplete, set on
    //what's no validate?
    return (
      <form
        className={classes.container}
        noValidate
        autoComplete="off"
        onSubmit={e => this.handleSubmit(e)}
      >
        <TextField
          name="Channel"
          id="filled-search"
          label="Channel"
          type="search"
          className={classes.textField}
          margin="normal"
          variant="filled"
          autoFocus={true}
          value={input}
          onChange={e => this.handleChange(e)}
        />
      </form>
    );
  }
}

InputPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(InputPanel));
