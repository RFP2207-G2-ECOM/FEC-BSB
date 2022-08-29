import React, { useContext } from 'react';
import { CurrentStylesContext } from '../Overview.jsx';

const SingleStyle = ({style}) => {
  const { curStyle, setCurStyle } = useContext(CurrentStylesContext);
  // console.log(curStyle);


  if (curStyle.name === style.name) {
    return (
      <div className='SingleStyleSelected' onClick={(e)=>{setCurStyle(style)}}>
        <p>{style.name}</p>
      </div>
    )
   } else {
    return (
      <div className='SingleStyle' onClick={(e)=>{setCurStyle(style)}}>
        <p>{style.name}</p>
      </div>
    )
   }
}

export default SingleStyle;