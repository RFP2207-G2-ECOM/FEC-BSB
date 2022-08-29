import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ProductReviewsContext = createContext({
  productReviews: [],
  metadata: {}
});

// IMPORTANT TODO
// Ask Daniel about how he wants data to be stored & handled

export const ProductReviewsProvider = ({children}) => {
  const [reviews, setReviews] = useState([]);
  const [metadata, setMetadata] = useState({});

  useEffect(() => {
    var baseURI = process.env.BASE_URI;
    let config =  {
      headers: {
      'Authorization': process.env.GITHUB_TOKEN
      }
    }
    let reviews = axios.get(`${baseURI}reviews/?product_id=${process.env.PRODUCT_ID}`, config)
    let metadata = axios.get(`${baseURI}reviews/meta/?product_id=${process.env.PRODUCT_ID}`, config)

    Promise.all([reviews, metadata]).then((results) => {
      setReviews(results[0].data);
      setMetadata(results[1].data);
    })

  }, [])

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
