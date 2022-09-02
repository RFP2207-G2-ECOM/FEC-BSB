import React from 'react';
import ReactDom from 'react-dom';

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { ImCross } from 'react-icons/im';

import ThumbnailDisplay from './Overview/ProductDisplay/ThumbnailDisplay.jsx';

const ZoomInModal = ({ open, curPic, listOfPics, setCurPic, onClose}) => {
  // console.log(curPic); // integer that tracks position in listOfPics
  // console.log(listOfPics); // list of pictures that you'd want to cycle through
  // console.log(setCurPic); // method to change curPic's value.

  let handleLeftClick = (e) => {
    setCurPic(curPic - 1);
  };
  let handleRightClick = (e) => {
    setCurPic(curPic + 1);
  };

  if (!open) return null;


  if (curPic === 0){
    return ReactDom.createPortal(
      <>
        <div className='ZoomInModal' >
          <div className='ZoomInPopUp'>
            <ImCross key={0} className='CloseModalButton' onClick={onClose} />
            <div key={1} className='ZoomInDisplay'>
                <div key={0} className='ZoomInImage' >
                  <img key={1} className='ZoomedImage' src={listOfPics[curPic]} ></img>
                </div>
                <div key={1} className='ZoomInSelector'>
                  <div key={0} className='ZoomInSpacer'></div>
                  <div key={1} className='ZoomInThumbnails' >
                    {listOfPics.map((pic, index) => {
                      return(
                        <ThumbnailDisplay thumbnail={pic} key={index} index={index} curPic={curPic} setCurPic={setCurPic}/>
                      )
                    })}
                  </div>
                  <BsChevronRight className='ZoomedInArrows' key={2} onClick={handleRightClick} />
                </div>
            </div>
          </div>
        </div>
      </>,
    document.getElementById('portal')
  )
  } else if (curPic === listOfPics.length - 1) {
    return ReactDom.createPortal(
      <>
        <div className='ZoomInModal' >
          <div className='ZoomInPopUp'>
          <ImCross key={0} className='CloseModalButton' onClick={onClose} />
          <div key={1} className='ZoomInDisplay'>
                <div key={0} className='ZoomInImage' >
                  <img key={1} className='ZoomedImage' src={listOfPics[curPic]} ></img>
                </div>
                <div key={1} className='ZoomInSelector'>
                  <BsChevronLeft className='ZoomedInArrows' key={0} onClick={handleLeftClick} />
                  <div key={1} className='ZoomInThumbnails' >
                    {listOfPics.map((pic, index) => {
                      return(
                        <ThumbnailDisplay thumbnail={pic} key={index} index={index} curPic={curPic} setCurPic={setCurPic} />
                      )
                    })}
                  </div>
                  <div key={2} className='ZoomInSpacer' ></div>
                </div>
            </div>
          </div>
        </div>
      </>,
      document.getElementById('portal')
    )
  } else { // implies it's between ends
    return ReactDom.createPortal(
      <>
        <div className='ZoomInModal' >
          <div className='ZoomInPopUp'>
            <ImCross key={0} className='CloseModalButton' onClick={onClose} />
            <div key={1} className='ZoomInDisplay'>
                <div key={0} className='ZoomInImage' >
                  <img key={1} className='ZoomedImage' src={listOfPics[curPic]} ></img>
                </div>
                <div key={1} className='ZoomInSelector'>
                  <BsChevronLeft className='ZoomedInArrows' key={0} onClick={handleLeftClick} />
                  <div key={1} className='ZoomInThumbnails' >
                    {listOfPics.map((pic, index) => {
                      return(
                        <ThumbnailDisplay thumbnail={pic} key={index} index={index} curPic={curPic} setCurPic={setCurPic} />
                      )
                    })}
                  </div>
                  <BsChevronRight className='ZoomedInArrows' key={2} onClick={handleRightClick} />
                </div>
            </div>
          </div>
        </div>
      </>,
      document.getElementById('portal')
    )
  }
};

export default ZoomInModal;