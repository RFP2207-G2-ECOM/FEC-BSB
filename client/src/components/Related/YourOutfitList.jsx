import React, { useState, useEffect, createContext, useContext } from 'react';
import RelatedItemsAndComp from './RelatedItemsAndComp.jsx';
import styles from '../../styles/Related/related.css';
import Card from './Card.jsx'
import { ProductRelatedContext } from '../../contexts/product-related.context.jsx';
import { ProductContext } from '../../contexts/product-info.context.jsx';
import axios from 'axios';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { HiOutlinePlusCircle } from 'react-icons/hi';
import { LocalStorageContext } from '../../contexts/local-storage.context.jsx';

const YourOutfitList = () => {
  const { outfitList, setOutfitList } = useContext(LocalStorageContext);

  const [relatedProduct, setRelatedProduct] = useState([]);

  useEffect(()=>{
      getRelatedProducts();
  }, [outfitList])
 //^use effeect will run every time [] <-- tracks this

  const getProductInfo = async (productID) => {
    var baseURI = process.env.BASE_URI;
    return await axios.get(`${baseURI}products/${parseInt(productID)}`, {
      headers: {
        'Authorization': process.env.GITHUB_TOKEN
      }
    })
    .then(result => {
      return result.data;
    })
  }

  const getRelatedProducts = async () => {
    const productInfo = [];
    for (let i = 0; i < outfitList.length; i++) {
      productInfo.push(getProductInfo(outfitList[i]))
    }
    await axios.all(productInfo)
    .then((result)=>{
      setRelatedProduct(result)
    })
  }

  const addOutfit = () => {
    var currentProduct = process.env.PRODUCT_ID;
    if (outfitList.indexOf(currentProduct) === -1){
      setOutfitList([...outfitList, currentProduct]);
    }
  }

  const deleteOutfit = (productID) => {
    const outfits = [...outfitList]
    const index = outfits.indexOf(JSON.stringify(productID))
    if (index > -1) {
      outfits.splice(index, 1)
    }
    setOutfitList(outfits)
  }

  const slideLeft = () => {
    var slider = document.getElementById('outfit-slider');
    slider.scrollLeft = slider.scrollLeft - 250;
  };

  const slideRight = () => {
    var slider = document.getElementById('outfit-slider');
    slider.scrollLeft = slider.scrollLeft + 250;
  };

  return (
    <div className='outfit-products-list'>
      <div className='slide-container'>
      <MdChevronLeft
        className='slide'
        onClick={slideLeft}/>
      </div>
          <div id='outfit-slider'
               className='related-products-list-container snaps-inline'>
                 <div className='card-container'>
                   <HiOutlinePlusCircle
                   className='card-add-button'
                   onClick={addOutfit}
                   size={100} />
                   <div className='card-add-outfit '>
                   <b>Add to Outfit</b>
                   </div>
                 </div>
               {relatedProduct.map((relatedProduct, key) => (
                 <Card relatedProduct={relatedProduct} key={key} deleteOutfit={deleteOutfit}/>
               ))}
          </div>
          <div className='slide-container'>
      <MdChevronRight className='slide' onClick={slideRight}/>
      </div>
    </div>
  )
}

export default YourOutfitList;