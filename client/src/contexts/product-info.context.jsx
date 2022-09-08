import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';


export const ProductContext = createContext({
  productID: '40344',
  product: {}
});

export const ProductProvider = ({ children }) => {
  const [productID, setProductID] = useState('40344');
  const [product, setProduct] = useState({});

  useEffect(() => {
    var baseURI = process.env.BASE_URI;
    axios.get(`${baseURI}products/${productID}`, {
      headers: {
        'Authorization': process.env.GITHUB_TOKEN
      }
    })
      .then(result => {
        setProduct(result.data);
      })
  }, [])

  const value = { product, setProduct, productID, setProductID };

  return (<ProductContext.Provider value={value}>{children}</ProductContext.Provider>)
}