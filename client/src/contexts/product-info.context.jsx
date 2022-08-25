import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ProductContext = createContext({
  product: {},
});

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    var baseURI = process.env.BASE_URI;
    axios.get(`${baseURI}products/${process.env.PRODUCT_ID}`, {
      headers: {
        'Authorization': process.env.GITHUB_TOKEN
      }
    })
      .then(result => {
        setProduct(result.data);
      })
  }, [])

  const value = { product, setProduct };

  return (<ProductContext.Provider value={value}>{children}</ProductContext.Provider>)
}