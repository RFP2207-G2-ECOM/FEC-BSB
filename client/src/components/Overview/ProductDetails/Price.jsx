import React, { useContext } from 'react';
import { CurrentStylesContext } from '../Overview.jsx';

const Price = () => {
  const { curStyle } = useContext(CurrentStylesContext); // obj of current style
  let basePrice = Math.round(curStyle.original_price);
  let salePrice = Math.round(curStyle.sale_price);

  if (!salePrice) {
    return (
      <div className='SalePrice'>
        <div className='BasePrice'>${basePrice}</div>
      </div>
  )
  } else {
    return (
      <div className='SalePrice'>
        <div className='SalePriceOG'>${basePrice}</div>
        <div className='PriceSpacer' ></div>
        <div className='SalePriceSale'>${salePrice}</div>
      </div>
    )
  }
};

export default Price;