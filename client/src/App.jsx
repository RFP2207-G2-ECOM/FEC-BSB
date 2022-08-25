import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import Overview from './components/Overview/Overview.jsx';
import QuestionAnswers from './components/QA/QuestionAnswers.jsx';
import RatingsReviews from './components/Reviews/RatingsReviews.jsx';

import { ProductContext } from './contexts/product.context.jsx';

const App = () => {

  useEffect(() => {
    var baseURI = process.env.BASE_URI;
    axios.get(`${baseURI}products/40344`, {
      headers: {
        'Authorization': process.env.GITHUB_TOKEN
      }
    })
      .then(result => {
        console.log('RESULT:', result.data);
      })
  }, [])

    return (
      <>
        <Overview />
        <QuestionAnswers />
        <RatingsReviews />
      </>
    )
}

export default App;