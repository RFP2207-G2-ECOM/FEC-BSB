import React, { useContext } from 'react';

const ThumbnailDisplay = ({ thumbnail, index, curPic, setCurPic }) => {
  // console.log(thumbnail);

  let changeCurPic = (e) => {
    setCurPic(index);
  }

  let style = {
    'backgroundImage': `url('${thumbnail}')`,
    'backgroundRepeat': `no-repeat`,
    'backgroundSize': '120%',
    'backgroundPosition': `50% 50%`,
    'objectFit': 'scale-down',
    'border': 'transparent solid 1px',
    'borderRadius': '6px'
  };

  if (index === curPic) {
    return (
      <div className='ThumbnailFrameSelected'>
        <div className='ThumbnailPic' style={style} onClick={changeCurPic}></div>
      </div>
    )
  } else {
    return (
      <div className='ThumbnailFrame'>
        <div className='ThumbnailPic' style={style} onClick={changeCurPic}></div>
      </div>
    )
  }
};

export default ThumbnailDisplay;