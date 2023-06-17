import { createContext, useEffect, useState } from "react";
import axios from "axios";

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  const fetchData = () => {
    const url = "https://course-api.com/javascript-store-products";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  // const getDefaultCart = () => {
  //   let cart = {};
  //   for (let i = 1; i < data.length + 1; i++) {
  //     cart[i] = 0;
  //   }
  //   return cart;
  // };

  function getProductQuantity(id) {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  }

  function addOneToCart(id) {
    const quantity = getProductQuantity(id);
    if (quantity === 0) {
      setCartProducts([
        ...cartProducts,
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      setCartProducts(
        cartProducts.map(
          (product) =>
            product.id === id // if condition
              ? { ...product, quantity: product.quantity + 1 } // if statemaent is true
              : product // if statement is false
        )
      );
    }
  }
  // const addToCart = (itemId) => {
  //   setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  // };

  const contextValue = {
    data,
    setData,
    cartProducts,
    setCartProducts,
    addOneToCart,
    getProductQuantity,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};
export { MyContextProvider, MyContext };
