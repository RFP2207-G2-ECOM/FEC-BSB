import React, { useState } from 'react';
import AnswerModal from '../QA/AnswerModal.jsx';

const MoreAnsweredQuestions = ({product_id}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='buttons-container'
      styles='buttonWrapperStyles'>
      <button className='more-button'>
        MORE ANSWERED QUESTIONS
      </button>

      <button
        className='add-question-button'
        onClick={() => setIsOpen(true)}
      >
        ADD A QUESTION <div id='plus'>+</div>
      </button>
      <AnswerModal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        product_id={product_id}
      ></AnswerModal>
    </div>
  )

}

export default MoreAnsweredQuestions;