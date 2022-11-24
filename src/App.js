import "./App.css";
import Square from "./Square";
import React, { useState } from "react";

function App() {
  // let myVar = "This is a prop";
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState(true);

  return (
    <div>
      <Square
        squares={squares}
        setSquares={setSquares}
        player={player}
        setPlayer={setPlayer}
      />
    </div>
  );
}

export default App;
