import { useState } from "react";
import { TodoInput } from "./TodoInput";
import { Todoitem } from "./TodoItems";

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (data) => {
    setTodos([...todos, data]);
  };
  return (
    <div>
      <TodoInput addTodo={addTodo} />

      {todos.map((e) => (
        <Todoitem todo={e} />
      ))}
    </div>
  );
};
