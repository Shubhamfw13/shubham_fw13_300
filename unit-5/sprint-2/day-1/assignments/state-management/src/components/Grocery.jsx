import { GroceryInput } from "./GroceryInput";
import { useState } from "react";
import { GroceryItem } from "./GroceryList";

export const Grocery = () => {
  const [grocery, setGrocery] = useState([]);
  const addGrocery = (data) => {
    setGrocery([...grocery, data]);
  };

  return (
    <div>
      <GroceryInput addGrocery={addGrocery} />

      {grocery.map((e) => (
        <GroceryItem grocery={e} />
      ))}
    </div>
  );
};
