import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../Auth/AuthReducer";
import { productReducer } from "../Products/reducer";

export const store = configureStore({
  reducer: {
    productData: productReducer,
    auth: AuthReducer,
  },
});
