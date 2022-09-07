import React, { useContext } from 'react';
import { ProductContext } from '../../../contexts/product-info.context.jsx';


const ProductDescription = () => {

  const { product } = useContext(ProductContext);


  if (product.slogan && product.description){
    return (
      <div className='Info-Container'>
        <p className='Slogan'>{product.slogan}</p>
        <p className='Description'>{product.description}</p>
      </div>
    )
  } else if (!product.slogan && product.description) {
    return (
      <div className='Info-Container'>
        <p className='Description'>{product.description}</p>
      </div>
    )
  } else if (!product.description && product.slogan) {
    return (
      <div className='Info-Container'>
        <p className='Slogan'>{product.slogan}</p>
      </div>
    )
  } else {
    return
    <div></div>;
  }
};

export default ProductDescription;