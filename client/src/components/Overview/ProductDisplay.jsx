import React, { useState, useContext, useEffect, createContext} from 'react';

import { CurrentStylesContext } from './Overview.jsx';

import PictureSelector from './ProductDisplay/PictureSelector.jsx';
import PictureDisplay from './ProductDisplay/PictureDisplay.jsx';

export const CurrentPicContext = createContext({
  curPic: 0, // index of picture
  listOfPics: [],
  listOfThumbnails: []
});

const ProductDisplay = () => {
  // obtain curStyle and setter from Context
  const { curStyle } = useContext(CurrentStylesContext); // obj of current style

  // console.log('current Style', curStyle);

  // create curPic context for Selector & Display
  const [ curPic, setCurPic ] = useState(0); // curPic & setter
  const [ listOfPics, setListOfPics ] = useState([]);
  const [ listOfThumbnails, setListOfThumbnails ] = useState([]);

  useEffect(()=>{
    if (Object.keys(curStyle).length) {
      let allPhotos = curStyle.photos;

      let mainPics = [];
      let thumbnails = [];
      for (let i = 0; i < allPhotos.length; i++) {
        mainPics.push(allPhotos[i].url);
        thumbnails.push(allPhotos[i].thumbnail_url)
      }

      setListOfPics(mainPics);
      setListOfThumbnails(thumbnails);
      setCurPic(0);
    }
  }, [curStyle]);

  let info = { curPic, listOfPics, listOfThumbnails, setCurPic };

  return (
    <div className='Layout Product-Display'>
      <CurrentPicContext.Provider value={info}>
        <PictureSelector />
        <PictureDisplay />
      </CurrentPicContext.Provider>
    </div>
  )
};

export default ProductDisplay;