import React, { useState, useContext } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

import { ProductContext } from '../../contexts/product-info.context.jsx';

import '../../styles/QA/QuestionModal.css';

const QuestionModal = ({ open, product_id, onClose }) => {
  const { product } = useContext(ProductContext); // Object type

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

    axios.post(`${process.env.BASE_URI}qa/questions`, data, {
      headers: {
        'Authorization': process.env.GITHUB_TOKEN
      }
    })
      .then(result => {
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
        <h1 className='ans-mod-title'>Ask Your Question</h1>
        <h3 className='ans-mod-subtitle'>{`About the ${product.name}`}</h3>
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

export default QuestionModal;