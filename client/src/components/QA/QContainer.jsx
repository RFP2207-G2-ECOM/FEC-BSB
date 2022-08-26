import React, { useContext } from 'react';

import AddAnswer from './AddAnswer.jsx';
import Helpful from '../../components/Helpful.jsx'

import { QuestionsContext } from '../../contexts/question.context.jsx';

const QContainer = () => {

  const { productID, results } = useContext(QuestionsContext);  // ProductID is an integer type --> results is an Object type

  return (
    <div className='q-container'>
      <div className='q-or-a'>Q:</div>
      <div className='question'>{results.question_body}</div>
      <Helpful helpful={results.question_helpfulness}/>
      <AddAnswer />
    </div>
  )
}

export default QContainer;