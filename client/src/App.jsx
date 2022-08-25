import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';

import QuestionAnswers from './components/QA/QuestionAnswers.jsx';
import RatingsReviews from './components/Reviews/RatingsReviews.jsx';

import { ProductContext } from './contexts/product-info.context.jsx';
import { ProductStylesContext } from './contexts/product-styles.context.jsx';

const App = () => {
    // These are here for examples of how to use these
    const { product } = useContext(ProductContext); // Object type
    const { productStyles } = useContext(ProductStylesContext); // Array type, you can map over this

    return (
      <>
        <QuestionAnswers />
        <RatingsReviews />
      </>
    )
}

export default App;