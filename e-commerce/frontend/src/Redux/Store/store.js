import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "../Products/reducer";

export const store = configureStore({
  reducer: {
    productData: productReducer,
  },
});
