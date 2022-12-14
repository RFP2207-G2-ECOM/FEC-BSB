import React, { useState } from 'react';

import AContainer from './AContainer.jsx';
import AInfo from './AInfo.jsx';
import ResponsePhotos from './ResponsePhotos.jsx';

const AnswerContainer = ({ data, asker_name }) => {
  const [answerCount, setAnswerCount] = useState(2);

    return (
      <div key={data.id} className='answer-container'>
        <AContainer
          body={data.body}
          key={`ans-${data.id}`}
        />
        <AInfo
          id={data.id}
          answerer_name={data.answerer_name}
          asker_name={asker_name}
          date={data.date}
          helpful={data.helpfulness}
          key={`aInfo-${data.id}`}
        />
        <ResponsePhotos
          photos={data.photos}
          key={`photo-${data.id}`}
        />
      </div>
    )
}

export default AnswerContainer;