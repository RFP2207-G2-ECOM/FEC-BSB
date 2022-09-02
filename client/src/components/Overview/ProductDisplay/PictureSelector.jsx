import React, { useContext } from 'react';
import { CurrentPicContext } from '../ProductDisplay.jsx';

import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

import ThumbnailDisplay from './ThumbnailDisplay.jsx';

const PictureSelector = () => {

  const { curPic, listOfThumbnails } = useContext(CurrentPicContext);
  // console.log(curPic);
  // console.log(listOfThumbnails);

  const slideUp = () => {
    var slider = document.getElementById('SlideUpDown');
    slider.scrollTop = slider.scrollTop - 76;
  };

  const slideDown = () => {
    var slider = document.getElementById('SlideUpDown');
    slider.scrollTop = slider.scrollTop + 76;
  };

  return (
    <div className='Picture-Selector'>
      <div className='Arrow-Up' onClick={slideUp} >
        <FiChevronUp />
      </div>
      <div id='SlideUpDown' className='SelectorWheel snaps-incol'>
        {listOfThumbnails.map((thumbnail, index)=>{
            if (index === listOfThumbnails.length - 1) {
              return (
                <div key={index} className='ThumbnailSpaceContainer'>
                  <ThumbnailDisplay index={index} thumbnail={thumbnail} />
                </div>
              )
            } else {
              return (
                <div key={index} className='ThumbnailSpaceContainer'>
                  <ThumbnailDisplay key={1} index={index} thumbnail={thumbnail} />
                  <div key={2} className='ThumbnailSpace'></div>
                </div>
              )
            }
        })}
      </div>
      <div className='Arrow-Down' onClick={slideDown}>
        <FiChevronDown />
      </div>
    </div>
  )
};

export default PictureSelector;