import React from 'react';

import AContainer from './AContainer.jsx';
import AddAQuestion from './AddAQuestion.jsx';
import AInfo from './AInfo.jsx';
import AnswerReponses from './AnswerResponses.jsx';
import MoreAnsweredQuestions from './MoreAnsweredQuestions.jsx';
import QContainer from './QContainer.jsx';
import SearchBox from './SearchBox.jsx';
import Title from './Title.jsx';

import styles from '../../styles/QA/qa.css';

const QuestionAnswers = () => {
  return (
    <div className='QA-Container'>
      <Title />
      <SearchBox />
      <QContainer />
      <AContainer />
      <AInfo />
      <AnswerReponses />
      <MoreAnsweredQuestions />
    </div>
  )
}

export default QuestionAnswers;