import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const data = localStorage.getItem("cart");
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const totalItems = cartItems.length;

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
