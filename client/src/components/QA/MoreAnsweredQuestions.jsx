import React, { useState } from 'react';
import QuestionModal from '../QA/QuestionModal.jsx';

const MoreAnsweredQuestions = ({product_id, setQuestionCount, questionCount}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='buttons-container'
      styles='buttonWrapperStyles'>
      <button
        className='more-button'
        onClick={() => setQuestionCount(questionCount + 2)}
      >
        MORE QUESTIONS
      </button>

      <button
        className='add-question-button'
        onClick={() => setIsOpen(true)}
      >
        ADD A QUESTION <div id='plus'>+</div>
      </button>
      {questionCount > 4 ?
        <button
          className='collapse-question-button'
          onClick={() => setQuestionCount(4)}
          >
          COLLAPSE QUESTIONS <div id='plus'>-</div>
        </button>
        : <></>
      }
      <QuestionModal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        product_id={product_id}
      />
    </div>
  )

}

export default MoreAnsweredQuestions;