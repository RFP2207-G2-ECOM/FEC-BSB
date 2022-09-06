import React, { useContext } from 'react';
import { CurrentStylesContext } from '../Overview.jsx';
import FavButton from './FavButton.jsx';

const StyleInfo = () => {
  const { curStyle } = useContext(CurrentStylesContext); // obj of current style
  // console.log('curStyle', curStyle);
  const styleName = curStyle.name;

  return (
    <div className='StyleInfoAndFav'>
      <div className='StyleName'>
        <p className='StyleTitle'>Style</p>
        <p className='CurStyleTitle'>{styleName}</p>
      </div>
      <FavButton />
    </div>
  )
};

export default StyleInfo;