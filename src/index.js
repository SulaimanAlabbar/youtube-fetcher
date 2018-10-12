import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import YoutubeFetcher from "./components";

const App = () => {
  return (
    <Provider store={store}>
      <YoutubeFetcher />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));