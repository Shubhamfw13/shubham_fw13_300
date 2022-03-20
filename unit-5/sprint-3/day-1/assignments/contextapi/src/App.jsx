import "./App.css";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { Login } from "./components/login";
import { CreateAccount } from "./components/register";

function App() {
  const { isAuth } = useContext(AuthContext);
  const { toggle } = useContext(AuthContext);

  return (
    <div className="App">
      <button
        onClick={() => {
          toggle();
        }}
      >
        {isAuth ? "Create Account" : "Login"}
      </button>
      {isAuth ? <Login /> : <CreateAccount />}
    </div>
  );
}

export default App;