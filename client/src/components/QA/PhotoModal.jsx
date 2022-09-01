import React from 'react';
import ReactDom from 'react-dom';

import { AiOutlineCloseCircle } from 'react-icons/ai';

const PhotoModal = ({ open, onClose, src }) => {
  if (!open) return null

  return ReactDom.createPortal(
    <div className='overlay-styles'>
      <div className='modal-styles'>
        <img
          className='photo-mod'
          src={src}
          >
        </img>
        <div
          className='close-button'
          onClick={() => onClose()}
        >
          <AiOutlineCloseCircle size={40}/>
        </div>
      </div>
    </div>
    ,
  document.getElementById('portal')
  )
}

export default PhotoModal;