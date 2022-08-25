import React, { useState, useContext, useEffect } from 'react';
import Overview from './components/Overview/Overview.jsx';
import QuestionAnswers from './components/QA/QuestionAnswers.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Overview />
        <QuestionAnswers />
      </>
    )
  }
}

export default App;