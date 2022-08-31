import React, { useContext } from 'react';
import { CurrentStylesContext } from '../Overview.jsx';

const StyleInfo = () => {
  const { curStyle } = useContext(CurrentStylesContext); // obj of current style
  // console.log('curStyle', curStyle);
  const styleName = curStyle.name;

  return (
      <div className='StyleName'>
        <p className='Style-Detail-Spacer'></p>
        <p className='StyleTitle'>STYLE > </p>
        <p className='CurStyleTitle'>{styleName}</p>
      </div>
  )
};

export default StyleInfo;