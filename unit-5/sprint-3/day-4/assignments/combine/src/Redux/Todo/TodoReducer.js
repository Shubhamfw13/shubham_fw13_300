import { ADD_TODO } from "./TodoActionType";

const initState = {
  todos: [
    {
      id: 1,
      title: "Learn Redux",
      status: false,
    },
  ],
};
const TodoReducer = (state = initState, { type, payload }) => {
  switch (type) {
      case ADD_TODO : {
          return{
              ...state,
              todos : [...state.todos, payload]
          }
      }
    default:
      return state;
  }
};
export { TodoReducer };
