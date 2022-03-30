import { combineReducers, createStore } from "redux";
import { CountReducer } from "./Counter/CounterReducer";
import { TodoReducer } from "./Todo/TodoReducer";
const variable = combineReducers({
  todos: TodoReducer,
  count: CountReducer,
});
export const store = createStore(variable);
