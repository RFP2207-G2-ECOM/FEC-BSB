import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';
import { ProductContext } from './product-info.context.jsx';

export const ProductStylesContext = createContext({
  productStyles: [],
});

export const ProductStylesProvider = ({children}) => {
  const { productID } = useContext(ProductContext);
  const [productStyles, setProductStyles] = useState([]);

  useEffect(() => {
    var baseURI = process.env.BASE_URI;
    axios.get(`${baseURI}products/${productID}/styles`, {
      headers: {
        'Authorization': process.env.GITHUB_TOKEN
      }
    })
      .then(result => {
        setProductStyles(result.data.results);
      })
  }, [productID])

  const value = { productStyles, setProductStyles };

  return (<ProductStylesContext.Provider value={value}>{children}</ProductStylesContext.Provider>)
}