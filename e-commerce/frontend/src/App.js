import { Home } from "./Components/Homepage/home";

import React from "react";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./Routes/Routes";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
