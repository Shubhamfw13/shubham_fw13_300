import { useEffect, useState } from "react";
import axios from "axios";

export const Todos = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getData();
  }, [page]);

  const getData = () => {
    axios
      .get(`http://localhost:3001/Todo?_limit=3&_page=${page}`)
      .then((res) => {
        setTodos(res.data);
      });
  };

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          fetch("http://localhost:3001/Todo", {
            method: "POST",
            body: JSON.stringify({ title: text, purchased: false }),
            headers: {
              "content-type": "application/json",
            },
          }).then(() => {
            getData();
          });
        }}
      >
        Save Todo
      </button>
      {todos.map((t) => (
        <div key={t.id}>{t.title}</div>
      ))}

      <button
        onClick={() => {
          setPage(page - 1);
        }}
      >
        Previous
      </button>
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Next
      </button>
    </div>
  );
};
