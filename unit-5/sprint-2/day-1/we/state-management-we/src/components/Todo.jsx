import { useState } from "react";
import { TodoInput } from "./TodoInput";
import { Todoitem } from "./TodoItems";
import { nanoid } from "nanoid";

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (data) => {
    const t = {
      id: nanoid(),
      title: data,
      status: false, 
    };
    setTodos([...todos, t]);
  };
  return (
    <div>
      <TodoInput handleAdd={addTodo} />

      {todos.map((e) => (
        <Todoitem todo={e} key={e.id} />
      ))}
    </div>
  );
};
