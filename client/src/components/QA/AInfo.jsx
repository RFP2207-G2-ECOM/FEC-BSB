import React, { useState, useEffect, useContext } from 'react';

import Helpful from '../Helpful.jsx';
import Report from '../Report.jsx';
import PosterTag from '../PosterTag.jsx';

const AInfo = ({answerer_name, date, helpful, id}) => {

  return (
    <div className='a-info-container'>
       <PosterTag
        username={answerer_name}
        date={date}
      />
      <div className='pipe'>|&nbsp;&nbsp;</div>
      <Helpful
        id={id}
        helpful={helpful}
      />
      <Report
        id={id}
        reportType='Questions'
      />
    </div>
  )
}

export default AInfo;