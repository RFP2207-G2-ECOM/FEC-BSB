import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ProductRelatedContext = createContext({
  productRelated: [],
});

export const ProductRelatedProvider = ({ children }) => {
  const [productRelated, setProductRelated] = useState([]);

  useEffect(() => {
    var baseURI = process.env.BASE_URI;
    axios.get(`${baseURI}products/${process.env.PRODUCT_ID}/related`, {
      headers: {
        'Authorization': process.env.GITHUB_TOKEN
      }
    })
      .then(result => {
        console.log('Related:', result.data);
        setProductRelated(result.data);
      })
  }, [])

  const value = { productRelated, setProductRelated };

  return (<ProductRelatedContext.Provider value={value}>{children}</ProductRelatedContext.Provider>)
}