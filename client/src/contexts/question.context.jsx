import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';
import { ProductContext } from './product-info.context.jsx';

export const QuestionsContext = createContext({
  productID: 0,
  results: []
});

export const QuestionsProvider = ({children}) => {
  const { productID: PID } = useContext(ProductContext);
  const [productID, setProductID] = useState(PID);
  const [results, setResults] = useState([]);

  useEffect(() => {
    var baseURI = process.env.BASE_URI;
    axios.get(`${baseURI}qa/questions/?product_id=${PID}&page=1&count=30`, {
      headers: {
        'Authorization': process.env.GITHUB_TOKEN
      }
    })
      .then(result => {
        setProductID(result.data.product_id);
        var tempRes = result.data.results.sort((a, b) => b.question_helpfulness - a.question_helpfulness);
        setResults(tempRes);
      })
  }, [PID])

  const value = { productID, setProductID, results, setResults };

  return (<QuestionsContext.Provider value={value}>{children}</QuestionsContext.Provider>)
}