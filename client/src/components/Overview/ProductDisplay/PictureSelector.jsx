import React, { useContext } from 'react';
import { CurrentPicContext } from '../ProductDisplay.jsx';

import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

import ThumbnailDisplay from '../../ThumbnailDisplay.jsx';

const PictureSelector = () => {

  const { curPic, listOfThumbnails, setCurPic } = useContext(CurrentPicContext);
  // console.log(curPic);
  console.log(listOfThumbnails);

  for (let i = 0; i < listOfThumbnails.length; i ++) {
    if (listOfThumbnails[i] === null) {
      listOfThumbnails[i] = 'https://i.imgflip.com/6stmrq.jpg';
    }
  }

  const slideUp = () => {
    var slider = document.getElementById('SlideUpDown');
    slider.scrollTop = slider.scrollTop - 94;
  };

  const slideDown = () => {
    var slider = document.getElementById('SlideUpDown');
    slider.scrollTop = slider.scrollTop + 94;
  };

  return (
    <div className='Picture-Selector'>
      <div className='Arrow-Up' onClick={slideUp} >
        <FiChevronUp />
      </div>
      <div id='SlideUpDown' className='SelectorWheel snaps-incol'>
        {listOfThumbnails.map((thumbnail, index)=>{
              return (
                <div key={index} className='ThumbnailSpaceContainer'>
                  <ThumbnailDisplay index={index} thumbnail={thumbnail} curPic={curPic} setCurPic={setCurPic}  />
                </div>
              )
            }
        )
        }
      </div>
      <div className='Arrow-Down' onClick={slideDown}>
        <FiChevronDown />
      </div>
    </div>
  )
};

export default PictureSelector;