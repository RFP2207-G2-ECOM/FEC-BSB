import React, { createContext, useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { ProductContext } from './product-info.context.jsx';

export const ProductRelatedContext = createContext({
  productRelated: [],
});

export const ProductRelatedProvider = ({ children }) => {
  const { productID } = useContext(ProductContext);
  const [productRelated, setProductRelated] = useState([]);

  useEffect(() => {
    var baseURI = process.env.BASE_URI;
    axios.get(`${baseURI}products/${productID}/related`, {
      headers: {
        'Authorization': process.env.GITHUB_TOKEN
      }
    })
      .then(result => {
        //filter duplicate IDs
        let relatedProducts = new Set();
        for (let i = 0; i < result.data.length; i++) {
          relatedProducts.add(result.data[i])
        }
        const listOfProductIDs = [...relatedProducts]
        setProductRelated(listOfProductIDs);
      })
  }, [productID])



  const value = { productRelated, setProductRelated };

  return (<ProductRelatedContext.Provider value={value}>{children}</ProductRelatedContext.Provider>)
}