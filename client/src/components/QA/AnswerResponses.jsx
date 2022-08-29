import React, { useContext } from 'react';

import AInfo from './AInfo.jsx';
import ResponseInfo from '../QA/AnswerResponses.jsx';
import ResponsePhotos from './ResponsePhotos.jsx';

import { ProductContext } from '../../contexts/product-info.context.jsx';


const AnswerReponses = () => {
  const { product } = useContext(ProductContext);

  return (
    <div className='response-container'>
      <div className='response'>The response to the Answer</div>
      <ResponsePhotos />
      <ResponseInfo />
    </div>
  )
}

export default AnswerReponses;