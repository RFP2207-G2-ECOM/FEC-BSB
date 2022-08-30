import React, { useState } from 'react';
import axios from 'axios';

const Helpful = ({ helpful, helpfulType, id }) => {

  helpfulType = helpfulType || 'answers';
  const [help, setHelp] = useState(helpful);
  const [disable, setDisable] = useState(false);

  const handleClick = (e) => {
    if (!disable) {

      var qaURL = `${process.env.BASE_URI}qa/${helpfulType}/${id}/helpful`;
      var revURL = `${process.env.BASE_URI}reviews/${id}/helpful`;
      axios.put(`${helpfulType === 'review' ? revURL : qaURL}`, {}, {
        headers: { Authorization: process.env.GITHUB_TOKEN }
      }
      )
        .then(result => {
          setHelp(help + 1);
          setDisable(true);
        })
    }
  }

  return (
    <>
      <div className='helpful'>Helpful?</div>
      <div
        className='yes-count'
        onClick={handleClick}
      >Yes</div>
      <div className='helpful'>&nbsp;({help})</div>
      <div className='pipe'>|</div>
    </>
  )
}

export default Helpful;