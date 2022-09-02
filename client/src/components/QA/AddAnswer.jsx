import React, { useState } from 'react';
import AnswerModal from '../QA/AnswerModal.jsx';

const AddAnswer = ({product_id, question_body}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    setIsOpen(true)
  }

  return (
    <>
      <div
        className='add-answer'
        onClick={handleClick}
      >Add Answer</div>
      <AnswerModal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        product_id={product_id}
        question_body={question_body}
        >
      </AnswerModal>
    </>
  )
}

export default AddAnswer;