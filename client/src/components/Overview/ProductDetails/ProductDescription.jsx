import React, { useContext } from 'react';
import { ProductContext } from '../../../contexts/product-info.context.jsx';


const ProductDescription = () => {

  const { product } = useContext(ProductContext);


  if (product.slogan && product.description){
    return (
      <div className='Info-Container'>
        <div className='Slogan-Container'>
          <p className='Slogan'>{product.slogan}</p>
        </div>
        <div className='Description-Container'>
          <p className='Description'>{product.description}</p>
        </div>
      </div>
    )
  } else if (!product.slogan && product.description) {
    return (
      <div className='Info-Container'>
        <div className='Description-Container'>
          <p className='Description'>{product.description}</p>
        </div>
      </div>
    )
  } else if (!product.description && product.slogan) {
    return (
      <div className='Info-Container'>
        <div className='Slogan-Container'>
          <p className='Slogan'>{product.slogan}</p>
        </div>
      </div>
    )
  } else {
    return
    <div></div>;
  }
};

export default ProductDescription;