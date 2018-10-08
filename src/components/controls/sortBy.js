import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

class SortBy extends React.Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = choice => {
    this.setState({ anchorEl: null });
    console.log(choice);
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Button
          aria-owns={anchorEl ? "simple-menu" : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <p>Sort By</p>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={() => this.handleClose("popular")}>
            Most popular
          </MenuItem>
          <MenuItem onClick={() => this.handleClose("oldest")}>
            Date added (oldest)
          </MenuItem>
          <MenuItem onClick={() => this.handleClose("newest")}>
            Date added (newest)
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default SortBy;
