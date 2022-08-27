import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const QuestionsContext = createContext({
  productID: 0,
  results: []
});

export const QuestionsProvider = ({children}) => {
  const [productID, setProductID] = useState(0);
  const [results, setResults] = useState([]);

  useEffect(() => {
    var baseURI = process.env.BASE_URI;
    axios.get(`${baseURI}qa/questions/?product_id=${process.env.PRODUCT_ID}&page=1&count=10`, {
      headers: {
        'Authorization': process.env.GITHUB_TOKEN
      }
    })
      .then(result => {
        setProductID(result.data.product_id);
        setResults(result.data.results);
      })
  }, [])

  const value = { productID, setProductID, results, setResults };

  return (<QuestionsContext.Provider value={value}>{children}</QuestionsContext.Provider>)
}