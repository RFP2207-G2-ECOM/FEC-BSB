import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { ImCross } from 'react-icons/im';

import ThumbnailDisplay from './ThumbnailDisplay.jsx';
import ZoomToMouse from './ZoomToMouse.jsx';

const ZoomInModal = ({ open, curPic, listOfPics, setCurPic, onClose }) => {
  // console.log(curPic); // integer that tracks position in listOfPics
  // console.log(listOfPics); // list of pictures that you'd want to cycle through
  // console.log(setCurPic); // method to change curPic's value.

  const [ ultraZoom, setUltraZoom ] = useState(false);

   const slideRight = () => {
    var slider = document.getElementById('ZoomInSlider');
    slider.scrollLeft = slider.scrollLeft + 84;
  };

  const slideLeft = () => {
    var slider = document.getElementById('ZoomInSlider');
    slider.scrollLeft = slider.scrollLeft - 84;
  };

  const closeModal = (e) => {
    onClose();
    setUltraZoom(false);
  }

  if (!open) return null;
  return ReactDom.createPortal(
  <>
    <div className='ZoomInModal' onClick={closeModal} />
      <div className='ZoomInPopUp overview-modal-class' >
        <ImCross key={0} className='CloseModalButton' onClick={closeModal} />
        <div key={1} className='ZoomInDisplay'>
            { ultraZoom ?
            (
              <ZoomToMouse key={0} image={listOfPics[curPic]} setUltraZoom={setUltraZoom} />
            )
            :
            (
              <div key={0} className='ZoomInImage' onClick={()=>{setUltraZoom(true)}} >
                <img src={listOfPics[curPic]} ></img>
              </div>
            )
            }
            <div key={1} className='ZoomInSelector'>
              <BsChevronLeft className='ZoomedInArrows' key={0} onClick={slideLeft} />
              <div key={1} className='ZoomInThumbnails' id='ZoomInSlider' >
                {listOfPics.map((pic, index) => {
                  return(
                    <ThumbnailDisplay thumbnail={pic} key={index} index={index} curPic={curPic} setCurPic={setCurPic}/>
                  )
                })}
              </div>
              <BsChevronRight className='ZoomedInArrows' key={2} onClick={slideRight} />
            </div>
        </div>
      </div>
  </>,
  document.getElementById('portal')
  )


};

export default ZoomInModal;

{/* <div key={0} className='UltraZoomInImage' onClick={()=>{setUltraZoom(false)}} >
<img className='ZoomedImage' src={listOfPics[curPic]} ></img>
</div> */}