import { useState, createContext, useEffect, useCallback } from "react";
import { json } from "react-router-dom";
export const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const [total, setTotal] = useState(0);
  const [amount, setAmount] = useState(0);
  useEffect(() => {
    cartItems.length ? calcTotal() : setTotal(0);
  }, [cartItems]);

  useEffect(() => {
    if (cartItems.length) {
      setAmount(cartItems.reduce((acc, item) => acc + item.amount, 0));
    } else {
      setAmount(0);
    }
  }, [cartItems]);

  const calcTotal = useCallback(() => {
    const newTotal = cartItems
      .reduce((acc, item) => acc + parseFloat(item.price * item.amount), 0)
      .toFixed(2);
    setTotal(newTotal);
  }, [cartItems]);

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };
  const increaseAmount = (id) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      })
    );
  };
  const decreaseAmount = (id) => {
    const cardItem = cartItems.find((item) => item.id === id);
    if (!cardItem) return;
    setCartItems(
      cartItems
        .map((item) =>
          item.id === cardItem.id
            ? { ...item, amount: item.amount > 1 ? item.amount - 1 : 0 }
            : item
        )
        .filter((item) => item.amount > 0)
    );
  };

  const addToCart = (item) => {
    const existingItem = cartItems.find((i) => i.id === item.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((i) =>
          i.id === item.id ? { ...i, amount: i.amount + 1 } : i
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, amount: 1 }]);
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        decreaseAmount,
        removeFromCart,
        increaseAmount,
        clearCart,
        total,
        amount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
