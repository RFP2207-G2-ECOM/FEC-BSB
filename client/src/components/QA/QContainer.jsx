import React, { useContext } from 'react';
import { MdExpandLess } from 'react-icons/md';

import AddAnswer from './AddAnswer.jsx';
import Helpful from '../../components/Helpful.jsx'

const QContainer = ({
    question_body,
    question_helpfulness,
    id,
    answerCount,
    setAnswerCount,
  }) => {

  const handleExpandLess = () => {
    var cop = {...answerCount};
    cop[id] = 1;
    setAnswerCount(cop);

  }

  return (
    <div className='q-container'>
      <div className='q-or-a'>Q:</div>
      <div className='question'>{question_body}</div>

      <Helpful
        helpfulType='questions'
        id={id}
        helpful={question_helpfulness}
      />
      <AddAnswer
        product_id={id}
      />
      <div
        className='expand-icon'
        onClick={handleExpandLess}
      >
        <MdExpandLess />
      </div>
    </div>
  )
}

export default QContainer;