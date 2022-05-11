import * as types from "./types";

const initialState = {
  loading: "",
  error: "",
  data: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_DATA_REQ:
      return { ...state, loading: payload };
    case types.GET_DATA_SUCCESS:
      return { ...state, data: payload };
    case types.GET_DATA_FAIL:
      return { ...state, error: payload };

    default:
      return state;
  }
};
