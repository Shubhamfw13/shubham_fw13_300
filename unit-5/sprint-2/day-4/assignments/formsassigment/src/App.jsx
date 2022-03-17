import logo from "./logo.svg";
import "./App.css";
import { Employees } from "./components/Employees";
import { Display } from "./components/Display";

function App() {
  return (
    <div className="App">
      <Employees />
      <Display />
    </div>
  );
}

export default App;
