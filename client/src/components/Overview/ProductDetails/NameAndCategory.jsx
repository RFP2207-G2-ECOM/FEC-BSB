import React, {useContext} from 'react';
import { ProductContext } from '../../../contexts/product-info.context.jsx';

const NameAndCategory = () => {

  // obtain product name context here
  const { product } = useContext(ProductContext);

  return (
    <div className='Name-And-Category'>
      <div className='ProductName'>
        <div className='Style-Detail-Spacer'></div>
        <div className='ProductTitle'>{product.name}</div>
      </div>
      <div className='Category'>
        <div className='Style-Detail-Spacer'></div>
        <div className='CategoryTitle'>{product.category}</div>
      </div>
    </div>
  )
};

export default NameAndCategory;