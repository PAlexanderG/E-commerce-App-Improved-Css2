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

  //
  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    setTotal(total);
  });

  // update item amount: UseEffect
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  // add to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    // check if the item is addded in the cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    // if cart item is already in the cart use in return (else statement)
    // set cart to (newCart)
    // if/else statement return item
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  // remove from the cart
  // using filter method
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    // set newCart
    setCart(newCart);
  };

  // clear cart
  const clearCart = () => {
    setCart([]);
  };

  // increase amount
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    // check the consolole using a find.item method by id
    // console.log(item);
    // console.log if increases in the console then create the param
    // console.log(`item ${id}amount increased`);
    addToCart(cartItem, id);
  };

  // decrease amount
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    // console.log(item);
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.amount < 2) {
      removeFromCart(id);
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
