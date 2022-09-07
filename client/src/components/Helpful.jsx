import React, { useState, useContext } from 'react';
import axios from 'axios';
import { LocalStorageContext } from '../contexts/local-storage.context.jsx';

const Helpful = ({ helpful, helpfulType, id }) => {
  const { q_helpful,
    setQ_Helpful,
    a_helpful,
    setA_Helpful,
    r_helpful,
    setR_Helpful
  } = useContext(LocalStorageContext);

  helpfulType = helpfulType || 'answers';
  const [help, setHelp] = useState(helpful);

  const handleClick = (e) => {
    var exists = false;

    if (helpfulType === 'questions') {
      exists = q_helpful.includes(id);
    }

    if (helpfulType === 'answers') {
      exists = a_helpful.includes(id);
    }

    if (helpfulType === 'review') {
      exists = r_helpful.includes(id);
    }

    if (!exists) {

      if (q_helpful.length === 0 && helpfulType === 'questions') {
        setQ_Helpful([id])
      }

      if (q_helpful.length > 0 && helpfulType === 'questions') {
        setQ_Helpful([...q_helpful, id])
      }

      if (a_helpful.length === 0 && helpfulType === 'answers') {
        setA_Helpful([id])
      }

      if (a_helpful.length > 0 && helpfulType === 'answers') {
        setA_Helpful([...a_helpful, id])
      }

      if (r_helpful.length === 0 && helpfulType === 'review') {
        setR_Helpful([id])
      }

      if (r_helpful.length > 0 && helpfulType === 'review') {
        setR_Helpful([...r_helpful, id])
      }


      var qaURL = `${process.env.BASE_URI}qa/${helpfulType}/${id}/helpful`;
      var revURL = `${process.env.BASE_URI}reviews/${id}/helpful`;
      axios.put(`${helpfulType === 'review' ? revURL : qaURL}`, {}, {
        headers: { Authorization: process.env.GITHUB_TOKEN }
      }
      )
        .then(result => {
          setHelp(help + 1);
        })
    }
  }

  return (
    <>
      <div className='helpful'>Helpful?</div>
      <div
        className='yes-count hover'
        onClick={handleClick}
      >Yes</div>
      <div className='helpful'>&nbsp;({help})</div>
      <div className='pipe'>|</div>
    </>
  )
}

export default Helpful;