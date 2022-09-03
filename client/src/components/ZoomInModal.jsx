import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { ImCross } from 'react-icons/im';

import ThumbnailDisplay from './ThumbnailDisplay.jsx';
import ZoomToMouse from './ZoomToMouse.jsx';

const ZoomInModal = ({ open, curPic, listOfPics, setCurPic, onClose}) => {
  // console.log(curPic); // integer that tracks position in listOfPics
  // console.log(listOfPics); // list of pictures that you'd want to cycle through
  // console.log(setCurPic); // method to change curPic's value.

  const [ ultraZoom, setUltraZoom ] = useState(false);

  useEffect(()=>{

    if (ultraZoom === true){
      console.log('yes ultrazoom')
    } else if (ultraZoom === false) {
      console.log('no ultrazoom')
    }

  },[ultraZoom])

   const slideRight = () => {
    var slider = document.getElementById('ZoomInSlider');
    slider.scrollLeft = slider.scrollLeft + 84;
  };

  const slideLeft = () => {
    var slider = document.getElementById('ZoomInSlider');
    slider.scrollLeft = slider.scrollLeft - 84;
  };

  if (!open) return null;
  return ReactDom.createPortal(
  <>
    <div className='ZoomInModal' >
      <div className='ZoomInPopUp'>
        <ImCross key={0} className='CloseModalButton' onClick={onClose} />
        <div key={1} className='ZoomInDisplay'>
            { ultraZoom ?
            (
              <ZoomToMouse image={listOfPics[curPic]} />
            )
            :
            (
              <div key={0} className='ZoomInImage' onClick={()=>{setUltraZoom(true)}} >
                <img key={1} className='ZoomedImage' src={listOfPics[curPic]} ></img>
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
    </div>
  </>,
  document.getElementById('portal')
  )


};

export default ZoomInModal;

{/* <div key={0} className='UltraZoomInImage' onClick={()=>{setUltraZoom(false)}} >
<img className='ZoomedImage' src={listOfPics[curPic]} ></img>
</div> */}