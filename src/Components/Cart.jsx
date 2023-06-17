import { useContext } from "react";
import { MyContext } from "../context/MyContext";

const Cart = () => {
  const { data, cartItems } = useContext(MyContext);
  console.log(cartItems);
  return (
    <div>
      <h1>Cart</h1>
    </div>
  );
};

export default Cart;
