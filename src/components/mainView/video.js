import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

class Video extends React.Component {
  handleClose = () => {
    this.props.handleClose();
  };

  render() {
    const { title, videoId, open } = this.props;
    return (
      <Dialog
        open={open}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="1280px"
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <iframe
            title={this.props.title}
            width="1280"
            height="720"
            src={`https://www.youtube.com/embed/${videoId}?rel=0&amp;showinfo=0`}
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          />
        </DialogContent>
      </Dialog>
    );
  }
}

export default Video;
