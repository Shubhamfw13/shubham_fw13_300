// import { createSlice } from "@reduxjs/toolkit";
import { Action } from "history";
import * as types from "./types";

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
        user: payload.user,
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
