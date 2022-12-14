import React, { useContext } from 'react';
import { ProductStylesContext } from '../../../contexts/product-styles.context.jsx';

import SingleStyle from './SingleStyle.jsx';

const StyleSelector = () => {
  const { productStyles } = useContext(ProductStylesContext);
  if (productStyles === undefined) {
    productStyles = [];
  }

  const copyOfPS = [...productStyles];

  return (
  <div className='StyleSelector'>
    {copyOfPS.map((style, index) => {
      return (
        <SingleStyle key={index} style={style}/>
      )
      })}
  </div>
  )
};

export default StyleSelector;

// // break down array into chunks of 4
  // var arrOfFours = [];
  // for (let i = 0; i < productStyles.length; i = i + 4) {
  //   let temp = productStyles.slice(i, i + 4);
  //   arrOfFours.push(temp);
  // }

  // let lastRow = arrOfFours[arrOfFours.length - 1] || [];
  // for (let j = lastRow.length; j < 4; j++) {
  //   lastRow.push({name:'',
  //     skus: {
  //       null: {
  //         quantity: null,
  //         size: null
  //       }
  //     }
  //   })
  // }
  // // arrOfFours can be mapped into each row of StyleOptions
  // return (
  //     <div className='StyleSelector'>
  //       {copyOfPS.map((row, index) => {
  //         return (
  //         <div key={index} className='StyleOptions'>
  //           {row.map((style, index) => {
  //             return (
  //               <SingleStyle key={index} style={style} rowCount={arrOfFours.length}/>
  //             )
  //           })}
  //         </div>
  //         )
  //       })}
  //     </div>
  // )