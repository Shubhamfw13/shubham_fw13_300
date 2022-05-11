import * as types from "./types";

const initialState = {
  loading: "",
  error: "",
  men: [],
  women: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_MEN_DATA_REQ:
      return { ...state, loading: payload };
    case types.GET_MEN_DATA_SUCCESS:
      return { ...state, men: payload };
    case types.GET_MEN_DATA_FAIL:
      return { ...state, error: payload };
    case types.GET_WOMEN_DATA_REQ:
      return { ...state, loading: payload };
    case types.GET_WOMEN_DATA_SUCCESS:
      return { ...state, women: payload };
    case types.GET_WOMEN_DATA_FAIL:
      return { ...state, error: payload };

    default:
      return state;
  }
};
