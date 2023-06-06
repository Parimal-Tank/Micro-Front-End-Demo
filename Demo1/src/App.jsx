import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import Counter from "Demo/Counter";

const App = (props) => {
  return (
    <div className="container">
      <div>Name: Demo1</div>
      <Counter />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
