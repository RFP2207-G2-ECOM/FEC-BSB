import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';

import QuestionAnswers from './components/QA/QuestionAnswers.jsx';

import { ProductContext } from './contexts/product.context.jsx';

const App = () => {

  useEffect(() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40344', {
      headers: {
        'Authorization': process.env.GITHUB_TOKEN
      }
    })
      .then(result => {
        console.log('RESULT:', result.data);
      }
        )
  }, [])
    return (
      <>
        <QuestionAnswers />
      </>
    )
}

export default App;