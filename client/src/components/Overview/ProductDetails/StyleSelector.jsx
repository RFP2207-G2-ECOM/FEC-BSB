import React, { useContext } from 'react';
import { ProductStylesContext } from '../../../contexts/product-styles.context.jsx';

import SingleStyle from './SingleStyle.jsx';

const StyleSelector = () => {
  const { productStyles } = useContext(ProductStylesContext);
  console.log(productStyles);
  // break down array into chunks of 4
  var arrOfFours = [];
  for (let i = 0; i < productStyles.length; i = i + 4) {
    let temp = productStyles.slice(i,i+4);
    arrOfFours.push(temp);
  }
  // arrOfFours can be mapped into each row of StyleOptions

  return (
      <div className='StyleSelector'>
        {/* Map the array to output Rows of 4 of styles */}
        {arrOfFours.map((row, index) => {
          return (
          <div key={index} className='StyleOptions'>
            {row.map((style, index) => {
              return (
                <SingleStyle key={index} style={style}/>
              )
            })}
          </div>
          )
        })}
        {/* Figure out how to render rows & styles in those rows */}
        {/* User Map function to render instances of SinlgeStyle.jsx for each entry */}


      </div>
  )
};

export default StyleSelector;

{/* <div className='StyleOptions'>
          <button className='StyleButton'>X</button>
          <button className='StyleButton'>X</button>
          <button className='StyleButton'>X</button>
          <button className='StyleButton'>X</button>
        </div>
        <div className='StyleOptions'>
          <button className='StyleButton'>X</button>
          <button className='StyleButton'>X</button>
          <button className='StyleButton'>X</button>
          <button className='StyleButton'>X</button>
        </div>
        <div className='StyleOptions'>
          <button className='StyleButton'>X</button>
          <button className='StyleButton'>X</button>
          <button className='StyleButton'>X</button>
          <button className='StyleButton'>X</button>
        </div> */}