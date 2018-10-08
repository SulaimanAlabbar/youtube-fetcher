import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import MainView from "./mainView";
import Controls from "./controls";
import ProfileInfo from "./profileInfo";
import "../css/youtubeFetcher.css";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function YoutubeFetcher(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <MainView />
        </Grid>
        <Grid item xs={3}>
          <Controls />
        </Grid>
        <Grid item xs={9}>
          <ProfileInfo />
        </Grid>
      </Grid>
    </div>
  );
}

YoutubeFetcher.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(YoutubeFetcher);
