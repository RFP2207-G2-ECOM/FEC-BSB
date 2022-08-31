import React, { useState, useContext, useEffect } from 'react';
import Price from './Price.jsx';
import StyleInfo from './StyleInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';

const StyleContainer = () => {

  return (
    <div className='StyleContainer'>
      <Price />
      <StyleInfo/>
      <StyleSelector />
      <AddToCart />
    </div>
  )
}

export default StyleContainer;