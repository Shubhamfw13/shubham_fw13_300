import "./App.css";
import { Timer } from "./Components/Timer";
import { useState } from "react";
function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      {show ? <Timer /> : ""}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Hide Timer Button" : "Show Timer Button"}
      </button>
    </div>
  );
}

export default App;
