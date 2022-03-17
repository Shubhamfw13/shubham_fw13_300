import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setcart] = useState(1);
  const handleChange = (value) => {
    setcart(cart + value);
  };

  return (
    <CartContext.Provider value={{ cart, handleChange }}>
      {children}
    </CartContext.Provider>
  );
};
