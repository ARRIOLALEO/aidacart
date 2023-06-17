import { useContext } from "react";
import { MyContext } from "../context/MyContext";

const Cart = () => {
  const { cartProducts } = useContext(MyContext);
  return (
    <div>
      <h1>Cart</h1>
      <ul>
     {cartProducts.map(product=>{
      return(<li>{product.name} { product.quantity} ${product.price}</li>)
     })}
     </ul>
    </div>
  );
};

export default Cart;
