import React, { useContext } from 'react';
import { CurrentStylesContext } from '../Overview.jsx';

const Price = () => {
  const { curStyle } = useContext(CurrentStylesContext); // obj of current style
  let basePrice = curStyle.original_price;
  let salePrice = curStyle.sale_price;

  if (!salePrice) {
    return (
      <div className='BasePrice'>
        ${basePrice}
      </div>
  )
  } else {
    return (
      <div className='SalePrice'>
        <div key={0} className='SalePriceSpacer'></div>
        <div key={1} className='SalePriceOG'>
          ${basePrice}
        </div>
        <div key={2} className='SalePriceSpacer'></div>
        <div key={3} className='SalePriceSale'>
          ${salePrice}
        </div>
      </div>
    )
  }
};

export default Price;