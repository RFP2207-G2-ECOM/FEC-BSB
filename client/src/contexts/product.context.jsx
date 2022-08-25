import React, { createContext, useState } from 'react';

export const ProductContext = createContext({
  product: null,
  setProduct: () => null,
});

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState(null); // the default should be whatever is returned the get request
  const value = { product, setProduct};

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}