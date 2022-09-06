import React, {useContext} from 'react';
import Price from './Price.jsx';
import { ProductContext } from '../../../contexts/product-info.context.jsx';

const NameAndCategory = () => {

  // obtain product name context here
  const { product } = useContext(ProductContext);

  return (
    <div className='NameCategoryPrice'>
      <div className='Name-And-Category'>
        <div className='Category'>
          <div className='CategoryTitle'>Category / {product.category}</div>
        </div>
        <div className='ProductName'>
          <div className='ProductTitle'>{product.name}</div>
        </div>
      </div>
      <Price />
    </div>
  )
};

export default NameAndCategory;