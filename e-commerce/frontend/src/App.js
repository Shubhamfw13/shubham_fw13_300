

import React, { useEffect } from  "react";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { GetDataFromCart, GetMenData, GetWomenData } from "./Redux/Products/action";
import AllRoutes from "./Routes/Routes";
function App() {
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(GetDataFromCart())
    dispatch(GetMenData())
    dispatch(GetWomenData())
  },[])
  return (
    <div className="App">
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
