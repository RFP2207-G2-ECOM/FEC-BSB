import React from 'react';

const ResponsePhotos = ({photos}) => {

  if (photos.length === 0) return null;

  return (
    <div className='photo-container'>
    {photos.map((val, index) => {
      return <img key={index} className='response-photos' src={val}></img>
    })
    }
    </div>
  )

}

export default ResponsePhotos;