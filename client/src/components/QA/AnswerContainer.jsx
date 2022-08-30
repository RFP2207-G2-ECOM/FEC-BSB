import React, { useState } from 'react';

import AContainer from './AContainer.jsx';
import AInfo from './AInfo.jsx';
import ResponsePhotos from './ResponsePhotos.jsx';

const AnswerContainer = ({ data }) => {
  const [answerCount, setAnswerCount] = useState(1);

    return (
      <div key={data.id}>
        <AContainer
          body={data.body}
          key={`ans-${data.id}`}
        />
        <AInfo
          id={data.id}
          answerer_name={data.answerer_name}
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