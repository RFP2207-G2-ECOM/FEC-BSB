import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import Overview from './components/Overview/Overview.jsx';
import QuestionAnswers from './components/QA/QuestionAnswers.jsx';
import RatingsReviews from './components/Reviews/RatingsReviews.jsx';
import RelatedItemsAndComp from './components/Related/RelatedItemsAndComp.jsx';

import { ProductContext } from './contexts/product-info.context.jsx';
import { ProductStylesContext } from './contexts/product-styles.context.jsx';
import { ProductRelatedContext } from './contexts/product-related.context.jsx';

const App = () => {
    // These are here for examples of how to use these
    const { product } = useContext(ProductContext); // Object type
    const { productStyles } = useContext(ProductStylesContext); // Array type, you can map over this
    const { productRelated } = useContext(ProductRelatedContext); // Array type, you can map over this

    return (
      <>
        <Overview />
        <RelatedItemsAndComp />
        <QuestionAnswers />
        <RatingsReviews />
      </>
    )
}

export default App;