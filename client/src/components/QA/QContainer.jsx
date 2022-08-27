import React, { useContext } from 'react';

import AddAnswer from './AddAnswer.jsx';
import Helpful from '../../components/Helpful.jsx'

import { QuestionsContext } from '../../contexts/question.context.jsx';

const QContainer = ({question_body, question_helpfulness}) => {
  const { productID, results } = useContext(QuestionsContext);

  return (
    <div className='q-container'>
      <div className='q-or-a'>Q:</div>
      <div className='question'>{question_body}</div>
      <Helpful helpful={question_helpfulness}/>
      <AddAnswer />
    </div>
  )
}

export default QContainer;