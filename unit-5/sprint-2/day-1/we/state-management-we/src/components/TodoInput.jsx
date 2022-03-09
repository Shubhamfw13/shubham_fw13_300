import { useState } from "react";

export const TodoInput = ({ addTodo }) => {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          //   console.log("Value", e.target.value);
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          addTodo(text);
        }}
      >
        Add Task
      </button>
    </div>
  );
};
