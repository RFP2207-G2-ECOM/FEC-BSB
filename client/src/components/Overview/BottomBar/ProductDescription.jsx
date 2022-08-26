import React, { useContext } from 'react';
import { ProductContext } from '../../../contexts/product-info.context.jsx';

const ProductDescription = () => {

  const { product } = useContext(ProductContext);

  return (
    <div className='Info-Container'>
      <div className='Slogan-Container'>
        <div className='Underline'>
          <p className='Slogan'>{product.slogan}</p>
        </div>
      </div>
      <div className='Description-Container'>
        <p className='Description'>{product.description}</p>
      </div>
    </div>
  )
};

export default ProductDescription;