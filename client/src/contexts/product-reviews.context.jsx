import React, { createContext, useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { ProductContext } from './product-info.context.jsx';

export const ProductReviewsContext = createContext({
  productReviews: [],
  metadata: {}
});

export const ProductReviewsProvider = ({children}) => {
  const { productID } = useContext(ProductContext);
  const [reviews, setReviews] = useState([]);
  const [metadata, setMetadata] = useState({});

  useEffect(() => {
    var baseURI = process.env.BASE_URI;
    let config =  {
      headers: {
      'Authorization': process.env.GITHUB_TOKEN
      }
    }
    let reviews = axios.get(`${baseURI}reviews/?product_id=${productID}`, config)
    let metadata = axios.get(`${baseURI}reviews/meta/?product_id=${productID}`, config)

    Promise.all([reviews, metadata]).then((results) => {
      setReviews(results[0].data);
      setMetadata(results[1].data);
    })

  }, [productID])

  const value = { reviews, setReviews, metadata, setMetadata };

  return (<ProductReviewsContext.Provider value={value}>{children}</ProductReviewsContext.Provider>)

}

// {
//   "product_id": "2",
//   "ratings": {
//     2: 1,
//     3: 1,
//     4: 2,
//     // ...
//   },
//   "recommended": {
//     0: 5
//     // ...
//   },
//   "characteristics": {
//     "Size": {
//       "id": 14,
//       "value": "4.0000"
//     },
//     "Width": {
//       "id": 15,
//       "value": "3.5000"
//     },
//     "Comfort": {
//       "id": 16,
//       "value": "4.0000"
//     },
//     // ...
//   }
// }

// {
//   "product_id": "2",
//   "ratings": {
//     2: 1,
//     3: 1,
//     4: 2,
//     // ...
//   },
//   "recommended": {
//     0: 5
//     // ...
//   },
//   "characteristics": {
//     "Size": {
//       "id": 14,
//       "value": "4.0000"
//     },
//     "Width": {
//       "id": 15,
//       "value": "3.5000"
//     },
//     "Comfort": {
//       "id": 16,
//       "value": "4.0000"
//     },
//     // ...
//   }
// }
