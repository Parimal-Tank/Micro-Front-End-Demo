import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Counter from "./Components/Counter";

const App = () => {
  const [message, setMessage] = useState("Hello");

  return (
    <div className="container">
      <div>Name: Demo</div>
      <Counter message={message} />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
