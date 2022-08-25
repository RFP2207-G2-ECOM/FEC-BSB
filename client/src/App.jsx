import React, { useState, useContext, useEffect } from 'react';
import QuestionAnswers from './components/QA/QuestionAnswers.jsx';
import RatingsReviews from './components/Reviews/RatingsReviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <QuestionAnswers />
        <RatingsReviews />
      </>
    )
  }
}

export default App;