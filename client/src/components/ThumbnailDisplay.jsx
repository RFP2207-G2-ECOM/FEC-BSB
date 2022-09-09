import React, { useContext } from 'react';

const ThumbnailDisplay = ({ thumbnail, index, curPic, setCurPic }) => {
  // console.log(thumbnail);

  let changeCurPic = (e) => {
    setCurPic(index);
  }
  console.log(thumbnail)

  let style = {
    'backgroundImage': `url('${thumbnail}')`,
    'backgroundRepeat': `no-repeat`,
    'background-size': '120%',
    'backgroundPosition': `50% 50%`,
    'object-fit': 'scale-down',
    'border': 'transparent solid 1px',
    'border-radius': '6px'
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