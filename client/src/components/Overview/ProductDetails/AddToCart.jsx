import React from 'react';



const AddToCart = () => {
  return (
    <div className='AddToCart'>
      <div className='SizeAndQuanitityRow'>
        <select className='SizeSelect'>
          <option>Select Size</option>
        </select>
        <select className='QuantitySelect'>
          <option>1</option>
        </select>
      </div>
      <div className='CartAndFavRow'>
        <button className='CartButton'>Add To Cart!</button>
        <button className='FavButton'>Favorite</button>
      </div>
    </div>
  )
}

export default AddToCart;