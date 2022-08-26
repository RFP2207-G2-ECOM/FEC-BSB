import React from 'react';



const AddToCart = () => {
  return (
    <div className='AddToCart'>
      <div className='SizeAndQuanitityRow'>
        <select class='SizeSelect'>
          <option>Select Size</option>
        </select>
        <select class='SizeSelect'>
          <option>1</option>
        </select>
      </div>
      <div className='CartAndFavRow'>
        <button className='AddToCartButton'>Add To Cart!</button>
        <button className='FavToggleButton'>Favorite</button>
      </div>
    </div>
  )
}

export default AddToCart;