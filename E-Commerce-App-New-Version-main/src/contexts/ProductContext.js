import React, { createContext, useState } from "react";
// Import local data
import productsData from "../data/products.json";

// Create context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // Initialize the products state with the local data immediately
  const [products] = useState(productsData);

  // We no longer need useEffect or fetch() here because the data is local
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;