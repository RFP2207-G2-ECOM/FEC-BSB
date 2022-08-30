import React, { useState } from 'react';
import AnswerModal from '../QA/AnswerModal.jsx';

const AddAnswer = ({product_id}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className='add-answer'
        onClick={() => setIsOpen(true)}
      >Add Answer</div>
      <AnswerModal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        product_id={product_id}
        >
      </AnswerModal>
    </>
  )
}

export default AddAnswer;