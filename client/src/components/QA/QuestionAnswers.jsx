import React from 'react';

import QAContainer from './QAContainer.jsx';
import SearchBox from './SearchBox.jsx';
import Title from './Title.jsx';

import styles from '../../styles/QA/qa.css';

const QuestionAnswers = () => {
  return (
    <div className='QA-Container'>
      <Title />
      <SearchBox />
      <QAContainer />
    </div>
  )
}

export default QuestionAnswers;