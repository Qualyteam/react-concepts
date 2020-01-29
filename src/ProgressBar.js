import React from "react";

const ProgressBar = () => {
  return (
    <div>
      <div style={{ height: 15, width: 100, border: "1px solid black" }}>
        <div
          style={{
            height: "100%",
            width: "50%",
            background: "blue"
          }}
        />
      </div>
      <button onClick={() => alert("subtrair")}>-</button>
      <button onClick={() => alert("somar")}>+</button>
    </div>
  );
};
export { ProgressBar };
