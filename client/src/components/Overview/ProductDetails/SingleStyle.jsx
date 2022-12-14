import React, { useContext } from 'react';
import { CurrentStylesContext } from '../Overview.jsx';

const SingleStyle = ({style}) => {
  const { curStyle, setCurStyle } = useContext(CurrentStylesContext);
  // console.log(Object.keys(style.skus)[0] !== 'null');

  if (style.name === '') { // isn't a style
    return (
      <div className='SingleStyleNull'></div>
    )
  } else if (curStyle.name === style.name && !style.photos[0].thumbnail_url) { // yes name, no photo
    return (
      <div className='SingleStyle' >
        <div className='styleSelected' onClick={(e)=>{setCurStyle(style)}}>{style.name}</div>
      </div>
    )
  } else if (curStyle.name === style.name && style.photos[0].thumbnail_url) { // yes name & yes photo
    return (
      <div className='SingleStyle' >
        <img src={style.photos[0].thumbnail_url} className='styleSelected' onClick={(e)=>{setCurStyle(style)}}></img>
      </div>
    )
    } else if (curStyle.name !== style.name && style.photos[0].thumbnail_url) { // no name & yes photo
    return (
      <div className='SingleStyle'>
        <img src={style.photos[0].thumbnail_url} className='style' onClick={(e)=>{setCurStyle(style)}}></img>
      </div>
    )
   } else { // no name & no photo
    return (
      <div className='SingleStyle' >
        <div className='style' onClick={(e)=>{setCurStyle(style)}}>{style.name}</div>
      </div>
    )
   }

};

export default SingleStyle;