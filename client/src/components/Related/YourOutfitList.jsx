import React, { useState, useEffect, createContext, useContext } from 'react';
import RelatedItemsAndComp from './RelatedItemsAndComp.jsx';
import styles from '../../styles/Related/related.css';
import Card from './Card.jsx'
import { ProductRelatedContext } from '../../contexts/product-related.context.jsx';
import axios from 'axios';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { HiOutlinePlusCircle } from 'react-icons/hi';
import { LocalStorageContext } from '../../contexts/local-storage.context.jsx';
import { ProductContext } from '../../contexts/product-info.context.jsx';

const YourOutfitList = () => {
  const { productID: PID} = useContext(ProductContext);
  const { outfitList, setOutfitList } = useContext(LocalStorageContext);

  const [relatedProduct, setRelatedProduct] = useState([]);

  const [ currentProd, setCurrentProd ] = useState(0);

  useEffect(()=>{
      getRelatedProducts();
  }, [outfitList])

  useEffect(() => {
    var slider = document.getElementById('outfit-slider');
    slider.scrollLeft = 0;
    setCurrentProd(0);
  }, [PID])

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
    var currentProduct = PID;
    if (typeof currentProduct !== 'string') {
      var currentProduct = JSON.stringify(currentProduct);
    }
    if (outfitList.indexOf(currentProduct) === -1){
      setOutfitList([...outfitList, currentProduct]);
    }
  }

  const deleteOutfit = (ID) => {
    const outfits = [...outfitList]
    const index = outfits.indexOf(JSON.stringify(ID))
    if (index > -1) {
      outfits.splice(index, 1)
    }
    setOutfitList(outfits)
  }

  const slideLeft = () => {
    var slider = document.getElementById('outfit-slider');
    slider.scrollLeft = slider.scrollLeft - 250;
    setCurrentProd(currentProd - 1)
  };

  const slideRight = () => {
    var slider = document.getElementById('outfit-slider');
    slider.scrollLeft = slider.scrollLeft + 250;
    setCurrentProd(currentProd + 1)
  };

  return (
    <div className='products-list'>
        {currentProd !== 0 && outfitList.length > 3 &&
        <div className='slide-container'>
        <BsChevronLeft className='related-left-slide' onClick={slideLeft}/>
        </div>}
          <div id='outfit-slider'
               className='related-products-list-container snaps-inline'>
                 <div id='outfit-button' className='card-container outfit' onClick={addOutfit}>
                   <HiOutlinePlusCircle
                   className='card-add-button'
                   size={100} />
                   <div className='card-add-outfit '>
                   <b>Add to Outfit</b>
                   </div>
                 </div>
               {relatedProduct.map((relatedProduct, key) => (
                 <Card relatedProduct={relatedProduct} key={key} deleteOutfit={deleteOutfit}/>
               ))}
          </div>
          {currentProd !== outfitList.length - 3 && outfitList.length > 3 &&
          <div className='slide-container'>
          <BsChevronRight className='related-right-slide' onClick={slideRight}/>
          </div>}
    </div>
  )
}

export default YourOutfitList;