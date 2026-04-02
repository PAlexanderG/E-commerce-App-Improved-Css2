import React, { createContext, useState, useEffect } from "react";

// create context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // cart state
  const [cart, setCart] = useState([]);
  // item amount state
  const [itemAmount, setItemAmount] = useState(0);
  // total price state
  const [total, setTotal] = useState(0);

  // 🔹 calculate total price
  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);

    setTotal(total);
  }, [cart]); // ✅ FIXED (added dependency)

  // 🔹 calculate item amount
  useEffect(() => {
    const amount = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.amount;
    }, 0);

    setItemAmount(amount);
  }, [cart]);

  // 🔹 add to cart
  const addToCart = (product, id) => {
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      const newCart = cart.map((item) =>
        item.id === id
          ? { ...item, amount: item.amount + 1 }
          : item
      );
      setCart(newCart);
    } else {
      const newItem = { ...product, amount: 1 };
      setCart([...cart, newItem]);
    }
  };

  // 🔹 remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  // 🔹 clear cart
  const clearCart = () => {
    setCart([]);
  };

  // 🔹 increase amount
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      addToCart(cartItem, id);
    }
  };

  // 🔹 decrease amount
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);

    if (!cartItem) return;

    if (cartItem.amount === 1) {
      removeFromCart(id);
    } else {
      const newCart = cart.map((item) =>
        item.id === id
          ? { ...item, amount: item.amount - 1 }
          : item
      );
      setCart(newCart);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;