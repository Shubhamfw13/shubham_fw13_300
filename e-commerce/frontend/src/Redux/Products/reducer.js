import * as types from "./types";

const initialState = {
  loading: "",
  error: "",
  men: [],
  women: [],
  womenSingleData: [],
  menSingleData: [],
  cart:[]
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

    case types.GET_WOMEN_SINGLE_DATA_REQ:
      return { ...state, loading: payload };
    case types.GET_WOMEN_SINGLE_DATA_SUCCESS:
      return { ...state, womenSingleData: payload };
    case types.GET_WOMEN_SINGLE_DATA_FAIL:
      return { ...state, error: payload };

    case types.GET_MEN_SINGLE_DATA_REQ:
      return { ...state, loading: payload };
    case types.GET_MEN_SINGLE_DATA_SUCCESS:
      return { ...state, menSingleData: payload };
    case types.GET_MEN_SINGLE_DATA_FAIL:
      return { ...state, error: payload };


      case types.SENT_TO_CART:
        return {...state, loading:payload}


        case types.GET_DATA_FROM_CART:
          return {...state, cart:payload}

    default:
      return state;
  }
};
