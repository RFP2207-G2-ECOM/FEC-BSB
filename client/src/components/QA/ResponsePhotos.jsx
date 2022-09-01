import React, { useState } from 'react';
import PhotoModal from './PhotoModal.jsx';

import '../../styles/QA/PhotoModal.css';

const ResponsePhotos = ({ photos }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState('');

  const handleImageClick = (e) => {
    setImage(e.target.src);
    setIsOpen(true)
  }

  if (photos.length === 0) return null;

  return (
    <div className='photo-container'>
      {photos.map((val, index) => {
        return (
          <div key={`div-${index}`}>
            <img
              key={index}
              className='response-photos'
              src={val}
              onClick={handleImageClick}
            >
            </img>
            <PhotoModal
              key={`photo-${index}`}
              open={isOpen}
              onClose={() => setIsOpen(false)}
              src={image}
            />
          </div>
        )
      })
      }
    </div>
  )
}

export default ResponsePhotos;