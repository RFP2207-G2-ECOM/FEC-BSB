import React, { useState } from 'react';
import ReactDom from 'react-dom';

import axios from 'axios';

import '../../styles/QA/answerModal.css';

const AnswerModal = ({ open, product_id, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    const data = {
      body,
      name,
      email,
      product_id: parseInt(product_id)
    }

    console.log('DATA:', data);
    axios.post(`${process.env.BASE_URI}qa/questions`, data, {
      headers: {
        'Authorization': process.env.GITHUB_TOKEN
      }
    })
      .then(result => {
        console.log('POST:', result);
        onClose();
      })
      .catch(error => {
        console.log('ERROR:', error);
      })
    e.preventDefault();
  }

  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div className='overlay-styles' />
      <div className='modal-styles'>
        <div className='ans-mod-title'>Enter a Question</div>
        <hr></hr>
        <form className='modal-form' onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              value={name}
              type='text'
              placeholder='Enter Name...'
              onChange={e => setName(e.target.value)}
            ></input>
          </label>
          <label>
            Email:
            <input
              value={email}
              type='email'
              placeholder='Enter Email...'
              onChange={e => setEmail(e.target.value)}
            ></input>
          </label>
          <label>
            Question:
            <textarea
              value={body}
              type='text'
              placeholder='Enter Question'
              onChange={e => setBody(e.target.value)}
            ></textarea>
          </label>
          <button onClick={e => onClose(e.preventDefault())}>Cancel</button>
          <button className='mod-sub-but'>Submit Question</button>
        </form>
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default AnswerModal;