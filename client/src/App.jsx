import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';

import InteractionsAPI from './InteractionsAPI.js';
import Overview from './components/Overview/Overview.jsx';
import QuestionAnswers from './components/QA/QuestionAnswers.jsx';
import RatingsReviews from './components/Reviews/RatingsReviews.jsx';
import RelatedItemsAndComp from './components/Related/RelatedItemsAndComp.jsx';

import { ProductContext } from './contexts/product-info.context.jsx';
import { ProductStylesContext } from './contexts/product-styles.context.jsx';
import { ProductRelatedContext } from './contexts/product-related.context.jsx';
import { QuestionsContext } from './contexts/question.context.jsx';
import { ProductReviewsContext } from './contexts/product-reviews.context.jsx';
import { LocalStorageContext } from './contexts/local-storage.context.jsx';

import styles from './styles/styles.css'

document.addEventListener('click', (event) => {
  event.path.forEach(path => {
    if (path.className === 'Overview' || path.className === 'modal-styles overview-modal-class') {
      InteractionsAPI(event.target.outerHTML, 'Overview');
    }
    if (path.className === 'related-items-and-comp-container' || path.className === 'modal-styles related-modal-class') {
      console.log('REl clicked!!');
      InteractionsAPI(event.target.outerHTML, 'Related Items & Comparison');
    }
    if (path.className === 'QA-Container' || path.className === 'modal-styles answer-modal-class'
      || path.className === 'modal-styles question-modal-class') {
      InteractionsAPI(event.target.outerHTML, 'Questions & Answers');
    }
    if (path.className === 'RR-Container' || path.className === 'review-modal-styles Review-Modal-Container review-modal-class') {
      InteractionsAPI(event.target.outerHTML, 'Ratings & Reviews');
    }
  })
});

const App = () => {
  // These are here for examples of how to use these
  const { product } = useContext(ProductContext); // Object type
  const { productStyles } = useContext(ProductStylesContext); // Array type, you can map over this
  const { productRelated } = useContext(ProductRelatedContext); // Array type, you can map over this
  const { productID, results } = useContext(QuestionsContext);  // ProductID is an integer type --> results is an Object type
  const { reviews, metadata } = useContext(ProductReviewsContext);
  const { outfitList } = useContext(LocalStorageContext);

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