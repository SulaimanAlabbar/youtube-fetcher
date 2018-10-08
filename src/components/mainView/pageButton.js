import React from "react";
import "../../css/pageButton.css";

class PageButton extends React.Component {
  render() {
    const { Image, Class } = this.props;

    return (
      <div className={Class}>
        <img src={Image} alt={Class} />
      </div>
    );
  }
}

export default PageButton;
