import { useEffect, useState } from "react";
import axios from "axios";

export const Groceries = () => {
  const [text, setText] = useState("");
  const [groceries, setGroceries] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("http://localhost:3004/List?_limit=7").then((res) => {
      setGroceries(res.data);
    });
  };

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          fetch("http://localhost:3004/List", {
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
        Save Grocery
      </button>
      {groceries.map((g) => (
        <div key={g.id}>{g.title}</div>
      ))}
    </div>
  );
};
