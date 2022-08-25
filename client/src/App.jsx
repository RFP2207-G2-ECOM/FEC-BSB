import React, { useState, useContext, useEffect } from 'react';

import RatingsReviews from './components/Reviews/RatingsReviews.jsx';
import QuestionAnswers from './components/QA/QuestionAnswers.jsx';

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