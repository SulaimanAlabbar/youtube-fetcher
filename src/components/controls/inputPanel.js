import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import * as actionCreators from "../../actions";
import * as fetchers from "../../functions/fetchers";

const mapDispatchToProps = actionCreators;

const mapStateToProps = state => {
  return {
    state: state,
    accounts: state.account
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
    if (this.state.input === "") return;

    const { accounts } = this.props;

    this.setState({
      input: ""
    });
    //=================================================
    const channel = this.state.input;
    const indexOfChannel = accounts.findIndex(
      el => el.name.toLowerCase() === channel.toLowerCase()
    );

    if (indexOfChannel === -1 || accounts.length === 0) {
      const chan = await fetchers.fetchAccount(channel);
      this.props.setAccountInfo(chan);
      //=================================================
      const tmp = this.props.state.account[this.props.state.currentAccountIndex]
        .uploadsToken;
      const vids = await fetchers.fetchVideos(tmp, "");
      this.props.addVideos(vids);
      console.log("this.props.state | INPUTPANEL :", this.props.state);
      //=================================================

      //=================================================
    } else {
      this.props.changeAccount(indexOfChannel);
      this.props.clearPageToken();
    }
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
