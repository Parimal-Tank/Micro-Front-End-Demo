import React, { useState } from "react";

const Counter = (props) => {
  console.log(props.message);
  const [counters, setCounters] = useState(0);

  return (
    <div style={{ backgroundColor: "blue" }}>
      <div>Count = {counters}</div>
      <button onClick={() => setCounters(counters + 1)}>+</button>
      <button onClick={() => setCounters(counters - 1)}>-</button>
    </div>
  );
};

export default Counter;
