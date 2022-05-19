import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { GetDataFromCart } from "./Redux/Products/action";
import AllRoutes from "./Routes/Routes";


function App() {
  const { user, accessToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetDataFromCart(user._id));
  });

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <AllRoutes />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
