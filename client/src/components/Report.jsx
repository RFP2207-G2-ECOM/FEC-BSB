import React, { useState } from 'react';
import axios from 'axios';

const Report = ({reportType, id}) => {
  reportType = reportType || 'review';
  const [report, setReported] = useState('Report');

  var qaURL = `${process.env.BASE_URI}qa/answers/${id}/report`;
  var revURL = `${process.env.BASE_URI}reviews/${id}/report`;

  const handleReport = () => {
    axios.put(`${reportType === 'review' ? revURL : qaURL}`, {}, {
      headers: { Authorization: process.env.GITHUB_TOKEN } }
      )
      .then(result => {
        setReported('Reported');
      })
  }

  return (
    <div
      className='report'
      onClick={handleReport}
    >{report}</div>
  )
}

export default Report;