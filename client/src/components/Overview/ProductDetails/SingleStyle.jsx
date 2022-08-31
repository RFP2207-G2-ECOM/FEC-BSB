import React, { useContext } from 'react';
import { CurrentStylesContext } from '../Overview.jsx';

const SingleStyle = ({style, rowCount}) => {
  const { curStyle, setCurStyle } = useContext(CurrentStylesContext);
  // console.log(Object.keys(style.skus)[0] !== 'null');

  let heightStyling = {
    'height': `calc(110px / ${rowCount})`
  }

  if (style.name === '') { // isn't a style
    return (
      <div className='SingleStyleNull'></div>
    )
  } else if (curStyle.name === style.name && !style.photos[0].thumbnail_url) { // yes name, no photo
    return (
      <div className='SingleStyleSelected' >
        <div style={heightStyling} className='styleSelected' onClick={(e)=>{setCurStyle(style)}}>{style.name}</div>
      </div>
    )
  } else if (curStyle.name === style.name && style.photos[0].thumbnail_url) { // yes name & yes photo
    return (
      <div className='SingleStyleSelected' >
        <img src={style.photos[0].thumbnail_url} style={heightStyling} className='styleSelected' onClick={(e)=>{setCurStyle(style)}}></img>
      </div>
    )
    } else if (curStyle.name !== style.name && style.photos[0].thumbnail_url) { // no name & yes photo
    return (
      <div className='SingleStyle'>
        <img src={style.photos[0].thumbnail_url} style={heightStyling} className='style' onClick={(e)=>{setCurStyle(style)}}></img>
      </div>
    )
   } else { // no name & no photo
    return (
      <div className='SingleStyle' >
        <div style={heightStyling} className='style' onClick={(e)=>{setCurStyle(style)}}>{style.name}</div>
      </div>
    )
   }

};

export default SingleStyle;

// } else if (curStyle.name === style.name) { //yes name
//   if (style.photos[0].thumbnail_url) { // yes pic
//     if(Object.keys(style.skus)[0] !== 'null') // yes skus

//     if(!!Object.keys(style.skus)[0] === 'null) // no skus

//   } else if (!style.photos[0].thumbnail_url) { // no pic
//     if(Object.keys(style.skus)[0] !== 'null') // yes skus

//     if(!!Object.keys(style.skus)[0] === 'null) // no skus

//   }
// } else if (curStyle.name !== style.name) { // no name
//   if (style.photos[0].thumbnail_url) { // yes pic
//     if(Object.keys(style.skus)[0] !== 'null') // yes skus

//     if(!!Object.keys(style.skus)[0] === 'null) // no skus

//   } else if (!style.photos[0].thumbnail_url) { // no pic
//     if(Object.keys(style.skus)[0] !== 'null') // yes skus

//     if(!!Object.keys(style.skus)[0] === 'null) // no skus

//   }
// }