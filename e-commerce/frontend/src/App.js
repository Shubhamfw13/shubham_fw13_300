import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { GetDataFromCart } from "./Redux/Products/action";

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
