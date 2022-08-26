import React, {useContext} from 'react';
import { ProductContext } from '../../../contexts/product-info.context.jsx';

const NameAndCategory = () => {

  // obtain product name context here
  const { product } = useContext(ProductContext);

  return (
    <div className='Name-And-Category'>
      <div className='ProductName'>
        <p className='bolded ProductTitle'>{product.name}</p>
      </div>
      <div className='Category'>
        <p>{product.category}</p>
      </div>
    </div>
  )
};

export default NameAndCategory;