import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const ProductStylesContext = createContext({
  productStyles: [],
});

export const ProductStylesProvider = ({children}) => {
  const [productStyles, setProductStyles] = useState([]);

  useEffect(() => {
    var baseURI = process.env.BASE_URI;
    axios.get(`${baseURI}products/${process.env.PRODUCT_ID}/styles`, {
      headers: {
        'Authorization': process.env.GITHUB_TOKEN
      }
    })
      .then(result => {
        setProductStyles(result.data.results);
      })
  }, [])

  const value = { productStyles, setProductStyles };

  return (<ProductStylesContext.Provider value={value}>{children}</ProductStylesContext.Provider>)
}