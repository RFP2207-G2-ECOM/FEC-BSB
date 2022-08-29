import React from 'react';

const Price = ({basePrice, salePrice}) => {
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