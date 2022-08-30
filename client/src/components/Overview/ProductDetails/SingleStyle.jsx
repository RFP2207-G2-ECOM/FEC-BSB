import React, { useContext } from 'react';
import { CurrentStylesContext } from '../Overview.jsx';

const SingleStyle = ({style}) => {
  const { curStyle, setCurStyle } = useContext(CurrentStylesContext);
  // console.log(curStyle);

  // figure out system to extract colors from name into selectable colors
  // let colorA = ;
  // let colorB = ;

  // const styles = {
  //   border-color: `${colorA} ${colorB} ${colorB} ${colorA}`
  // }
  if (style.name === '') {
    return (
      <div className='SingleStyleNull'></div>
    )
  } else if (curStyle.name === style.name) {
    return (
      <div className='SingleStyleSelected' onClick={(e)=>{setCurStyle(style)}}>
        {/*placeholder*/}
        <div className='style'>{style.name}</div>
      </div>
    )
   } else {
    return (
      <div className='SingleStyle' onClick={(e)=>{setCurStyle(style)}}>
        {/*placeholder*/}
        <div className='style'>{style.name}</div>
      </div>
    )
   }
}

export default SingleStyle;