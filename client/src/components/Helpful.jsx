import React, { useState } from 'react';
import axios from 'axios';

const Helpful = ({helpful, helpfulType, id}) => {

  helpfulType = helpfulType || 'answers';
  const [help, setHelp] = useState(helpful);

  const handleClick = (e) => {
    axios.put(`${process.env.BASE_URI}qa/${helpfulType}/${id}/helpful`, {}, {
      headers: { Authorization: process.env.GITHUB_TOKEN } }
      )
      .then(result => {
        setHelp(help + 1);
      })
  }

  return (
    <>
      <div className='helpful'>Helpful?</div>
      <div
        className='yes-count'
        onClick={handleClick}
      >Yes</div>
      <div className='helpful'>({help})</div>
      <div className='pipe'>|</div>
    </>
  )
}

export default Helpful;