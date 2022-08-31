import React, { useContext } from 'react';

import { FaRegStar } from 'react-icons/fa';

const FavButton = () => {
    return (
      <button className='FavButton'><FaRegStar className='FavIcon'/></button>
    )
};

export default FavButton;