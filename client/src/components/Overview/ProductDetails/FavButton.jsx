import React, { useState } from 'react';

import { FaRegStar, FaStar } from 'react-icons/fa';

const FavButton = () => {

  // Talk to Johnny about connectng w/ cookies
  const [ favorited, setFavorited ] = useState(false);

  if (favorited) {
    return (
      <div className='FavContainer'>
        <div className='FavButton' onClick={()=>{setFavorited(!favorited)}}>
            <FaStar className='FavIcon'/>
        </div>
      </div>
    )
  } else {
    return (
      <div className='FavContainer'>
        <div className='FavButton' onClick={()=>{setFavorited(!favorited)}}>
            <FaRegStar className='FavIcon'/>
        </div>
      </div>
    )
  }
};

export default FavButton;