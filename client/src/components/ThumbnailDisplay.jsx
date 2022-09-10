import React, { useContext } from 'react';

const ThumbnailDisplay = ({ thumbnail, index, curPic, setCurPic }) => {
  // console.log(thumbnail);

  let changeCurPic = (e) => {
    setCurPic(index);
  }

  let width = 0;
  let height = 0;
  let style = {
    'backgroundImage': `url('${thumbnail}')`,
    'backgroundRepeat': `no-repeat`,
    'backgroundSize': '155%',
    'backgroundPosition': `50% 50%`,
    'objectFit': 'scale-down',
    'border': 'transparent solid 1px',
    'borderRadius': '6px'
  };

  // Attempt to adjust background size based on img dimensions
  //
  // let img = new Image();
  // img.src = thumbnail;
  // img.onload = function() {
  //   width = this.width;
  //   height = this.height;
  //   // console.log('width', width);
  //   // console.log('height', height);
  // };

  // if (height > width) {
  //   // console.log('h > w')
  //   style = {
  //     'backgroundImage': `url('${thumbnail}')`,
  //     'backgroundRepeat': `no-repeat`,
  //     'backgroundSize': '110%',
  //     'backgroundPosition': `50% 50%`,
  //     'objectFit': 'scale-down',
  //     'border': 'transparent solid 1px',
  //     'borderRadius': '6px'
  //   };
  // } else if (width > height) {
  //   // console.log('w > h')
  //   style = {
  //     'backgroundImage': `url('${thumbnail}')`,
  //     'backgroundRepeat': `no-repeat`,
  //     'backgroundSize': '150%',
  //     'backgroundPosition': `50% 50%`,
  //     'objectFit': 'scale-down',
  //     'border': 'transparent solid 1px',
  //     'borderRadius': '6px'
  //   };
  // } else {
  //   console.log('h ~= w')
  //   style = {
  //     'backgroundImage': `url('${thumbnail}')`,
  //     'backgroundRepeat': `no-repeat`,
  //     'backgroundSize': '155%',
  //     'backgroundPosition': `50% 50%`,
  //     'objectFit': 'scale-down',
  //     'border': 'transparent solid 1px',
  //     'borderRadius': '6px'
  //   };
  // }

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