import React from 'react';

import AInfo from './AInfo.jsx';
import LoadMoreAnswers from './LoadMoreAnswers.jsx';
import ResponseInfo from './ResponseInfo.jsx';
import ResponsePhotos from './ResponsePhotos.jsx';

const AnswerReponses = () => {

  return (
    <div className='response-container'>
      <div className='response'>The response to the Answer</div>
      <ResponsePhotos />
      <ResponseInfo />
      <LoadMoreAnswers />
    </div>
  )
}

export default AnswerReponses;