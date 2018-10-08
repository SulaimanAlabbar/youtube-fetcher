import React from "react";
import SortBy from "./controls/sortBy";
import InputPanel from "./controls/inputPanel";
import Prune from "./controls/prune";
import "../css/controls.css";

class Controls extends React.Component {
  render() {
    return (
      <div className="controlsContainer">
        <div className="controlsLeft">
          <InputPanel className="InputPanel" />
        </div>
        <div className="controlsRight">
          <SortBy className="SortBy" />
          <Prune className="Prune" />
        </div>
      </div>
    );
  }
}

export default Controls;
