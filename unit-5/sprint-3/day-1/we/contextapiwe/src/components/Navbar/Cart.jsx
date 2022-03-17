import { useContext } from "react";
import { CartContext } from "../../contexts/CartContexts";

export const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <nav>
      <h5>No. items in Cart: {cart}</h5>
    </nav>
  );
};
