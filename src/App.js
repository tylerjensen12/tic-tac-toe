import "./App.css";
import Square from "./Square";

function App() {
  let myVar = "This is a prop";

  return (
    <div>
      <Square var={myVar}/>
    </div>
  );
}

export default App;
