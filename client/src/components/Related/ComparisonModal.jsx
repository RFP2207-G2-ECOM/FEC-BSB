import React, { useState, useEffect, createContext, useContext } from 'react';
import ReactDom from 'react-dom';
import ComparisonFeatures from './ComparisonFeatures.jsx'
import styles from '../../styles/Related/related.css';
import { ProductContext } from '../../contexts/product-info.context.jsx';
import { ImCross } from 'react-icons/im';

const ComparisonModal = ({ open, children, onClose, relatedProduct }) => {
  const { product } = useContext(ProductContext);
  const [productFeatures, setFeatures] = useState([]);

  useEffect(() => {
      compare();
  }, [relatedProduct, product]);

  //compares features between current product and related product/outfit
  const compare = () => {
    const currentProductFeatures = product.features;
    const relatedProductFeatures = relatedProduct.features;
    let currentFeatures = [];
    const features = new Set();

    for (let i = 0; i < currentProductFeatures.length; i++) {
      features.add(currentProductFeatures[i].feature)
    }

    for (let i = 0; i < relatedProductFeatures.length; i++) {
      features.add(relatedProductFeatures[i].feature)
    }

    for (const item of features) {
      let obj = {}
      obj.feature = item;
      obj.related = '';
      obj.current = '';
      currentFeatures.push(obj)
    }

    for (let i = 0; i < currentProductFeatures.length; i++) {
      var current = currentProductFeatures[i];
      for (let j = 0; j < currentFeatures.length; j++) {
        if (currentFeatures[j].feature === current.feature){
          currentFeatures[j].current = currentProductFeatures[i].value;
        }
      }
    }

    for (let i = 0; i < relatedProductFeatures.length; i++) {
      var current = relatedProductFeatures[i];
      for (let j = 0; j < currentFeatures.length; j++) {
        if (currentFeatures[j].feature === current.feature){
          currentFeatures[j].related = relatedProductFeatures[i].value;
        }
      }
    }
    setFeatures(currentFeatures);
  }

  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className='overlay-styles' onClick={onClose}/>
      <div className='modal-styles related-modal-class'>
        <ImCross className='CloseModalButton' onClick={onClose}/>
        <table>
          <tbody>
            <tr>
              <th className='comparison-modal-title'>{product.name}</th>
              <th className='comparison-modal-title'>Features</th>
              <th className='comparison-modal-title'>{relatedProduct.name}</th>
            </tr>
            {productFeatures.map((feature, key) =>
              <ComparisonFeatures feature={feature} key={key}/>
            )}
          </tbody>
        </table>
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default ComparisonModal;