import * as types from "./types";

const initialState = {
  loading: "",
  error: "",
  Action: [],
  RPG: [],
  singledata: [],
  cart:[]
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_ACTION_DATA_REQ:
      return { ...state, loading: payload };
    case types.GET_ACTION_DATA_SUCCESS:
      return { ...state, Action: payload };
    case types.GET_ACTION_DATA_FAIL:
      return { ...state, error: payload };

    case types.GET_RPG_DATA_REQ:
      return { ...state, loading: payload };
    case types.GET_RPG_DATA_SUCCESS:
      return { ...state, RPG: payload };
    case types.GET_RPG_DATA_FAIL:
      return { ...state, error: payload };

    case types.GET_SINGLE_DATA_REQ:
      return { ...state, loading: payload };
    case types.GET_SINGLE_DATA_SUCCESS:
      return { ...state, singledata: payload };
    case types.GET_SINGLE_DATA_FAIL:
      return { ...state, error: payload };


      case types.SENT_TO_CART:
        return {...state, loading:payload}


        case types.GET_DATA_FROM_CART:
          return {...state, cart:payload}

    default:
      return state;
  }
};
