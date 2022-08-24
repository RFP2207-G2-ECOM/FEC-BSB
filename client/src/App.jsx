import React, { useState, useContext, useEffect } from 'react';
import QuestionAnswers from './components/QA/QuestionAnswers.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <QuestionAnswers />
      </>
    )
  }
}

export default App;