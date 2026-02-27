import React, { createContext, useState, useEffect } from "react";

// create context
export const ProductContext = createContext();
// create Product provider passing as a children object and then as a
// parameter in the return
const ProductProvider = ({ children }) => {
  // products state and setProducts
  const [products, setProducts] = useState([]);
  // fetch products
  useEffect(()=> {
const fetchProducts = async ()=> {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  // console.log(data);
  setProducts(data);
};
fetchProducts();
  }, []);
  // pass the value of {{products}}
  return <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>;
};

export default ProductProvider;
