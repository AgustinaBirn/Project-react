import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const addToCart = (product) => {
    let exist = isInCart(product.id);
    if (exist) {
      let newArray = cart.map((element) => {
        if (element.id === product.id) {
          return { ...element, quantity: product.quantity };
        } else {
          return element;
        }
      });

      setCart(newArray);
      localStorage.setItem("cart", JSON.stringify(newArray));
    } else {
      setCart([...cart, product]);
      localStorage.setItem("cart", JSON.stringify([...cart, product]));
    }
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const isInCart = (id) => {
    let exist = cart.some((element) => element.id === id);
    return exist;
  };

  const removeById = (id) => {
    let newArray = cart.filter((element) => element.id !== id);
    setCart(newArray);
    localStorage.setItem("cart", JSON.stringify(newArray));
  };

  const getTotalItems = () => {
    let total = cart.reduce((acc, element) => {
      return acc + element.quantity;
    }, 0);
    return total;
  };

  const getTotalPrice = () => {
    let total = cart.reduce((acc, element) => {
      return acc + element.quantity * element.price;
    }, 0);
    return total;
  };

  const getTotalQuantityById = (id) => {
    let product = cart.find((element) => element.id === id);

    if (product) {
      return product.quantity;
    } else {
      return product;
    }
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    removeById,
    getTotalItems,
    getTotalPrice,
    getTotalQuantityById,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
