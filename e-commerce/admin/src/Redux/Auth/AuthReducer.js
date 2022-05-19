// import { createSlice } from "@reduxjs/toolkit";
import { Action } from "history";
import * as types from "./types";

// const AuthRedux = createSlice({
//   name: "user",
//   initialState: {
//     current: null,
//     fetching: false,
//     error: false,
//   },
//   reducers: {
//     loginRequest: (state) => {
//       state.fetching = true;
//     },
//     loginSuccess: (state, action) => {
//       state.fetching = false;
//       state.current = action.payload;
//     },
//     loginFailed: (state) => {
//       state.fetching = false;
//       state.error = true;
//     },
//   },
// });

// export const { loginRequest, loginSuccess, loginFailed } = AuthRedux.actions;

// export default AuthRedux.reducer;

const initialState = {
  accessToken: localStorage.getItem("accessToken"),
  loading: false,
  error: "",
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {},
  register: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOGIN_REQ:
      return { ...state, loading: true, register: false };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        accessToken: payload.accessToken,
        user: payload,
      };
    case types.LOGIN_FAILED:
      return { ...state, loading: false, error: payload.message };

    case types.REGISTER_REQ:
      return { ...state, loading: true, register: false };
    case types.REGISTER_SUCCESS:
      return { ...state, loading: false, register: true, user: payload.user };
    case types.REGISTER_FAILED:
      return { ...state, loading: false, error: payload.msg, register: false };
    case types.LOGOUT:
      return { initialState, accessToken: null };
    default:
      return state;
  }
};
