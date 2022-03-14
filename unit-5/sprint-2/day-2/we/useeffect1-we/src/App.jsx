import { useState } from "react";
import "./App.css";
import { Groceries } from "./components/Groceries";
import { StopWatch } from "./components/Stopwatch";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <Groceries />
      {/* {show ? <StopWatch /> : ""} */}

      {/* <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Hide Timer" : "Show Timer"}{" "}
      </button> */}
    </div>
  );
}

export default App;
