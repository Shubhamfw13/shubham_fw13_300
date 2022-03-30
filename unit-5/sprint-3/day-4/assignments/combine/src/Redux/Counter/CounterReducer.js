import { ADD_COUNT } from "./CounterActionType";
// const initState = {
//   count: 0,
// };
const CountReducer = (state = { count: 0 }, { type, payload }) => {
  switch (type) {
    case ADD_COUNT: {
      return {
        ...state,
        count: state.count + payload,
      };
    }
    default:
      return state;
  }
};
export { CountReducer };
