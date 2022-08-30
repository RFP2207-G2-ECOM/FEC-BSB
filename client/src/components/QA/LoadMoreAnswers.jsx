import React from 'react';

const LoadMoreAnswers = ({question_id, answerCount, setAnswerCount}) => {
  const handleCount = (e) => {
    var cop = {...answerCount};
    cop[question_id] += 2;
    setAnswerCount(cop);
  }

  return (
    <div
      className='load-more-answers'
      onClick={handleCount}
    >
      LOAD MORE ANSWERS
    </div>
  )
}

export default LoadMoreAnswers;