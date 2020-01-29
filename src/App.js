import React from "react";
import "./styles.scss";
function App() {
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  const color = getRandomColor();
  return (
    <div className="App" style={{ backgroundColor: color }}>
      <span>{color}</span>
    </div>
  );
}

export default App;
