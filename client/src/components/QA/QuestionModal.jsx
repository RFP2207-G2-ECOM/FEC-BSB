import React, { useState, useContext } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

import { ProductContext } from '../../contexts/product-info.context.jsx';

import '../../styles/QA/QuestionModal.css';
import { ImCross } from 'react-icons/im';

const QuestionModal = ({ open, product_id, onClose }) => {
  const { product } = useContext(ProductContext);

  const [name, setName] = useState('Wild Jack');
  const [email, setEmail] = useState('Wild@Jack.com');
  const [body, setBody] = useState('Do these pants look nice?');

  const handleEmailChange = (e) => {
    if (e.target.value.length <= 60) {
      setEmail(e.target.value)
    }
  }

  const handleNameChange = (e) => {
    if (e.target.value.length <= 60) {
      setName(e.target.value)
    }
  }

  const handleBodyField = (e) => {
    if (e.target.value.length <= 1000) {
      setBody(e.target.value)
    }
  }

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
      <div className='overlay-styles' onClick={onClose}/>
      <div className='modal-styles question-modal-class'>
        <h1 className='ans-mod-title'>Ask Your Question</h1>
        <h3 className='ans-mod-subtitle'>{`About the ${product.name}`}</h3>
        <hr></hr>
        <form className='modal-form' onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              value={name}
              type='text'
              placeholder='Example: jackson11!'
              onChange={handleNameChange}
            ></input>
            {name ?
              <p className='name-message'>For privacy reasons, do not use your full name or email address</p> :
              <></>
            }
          </label>
          <label>
            Email:
            <input
              value={email}
              type='email'
              placeholder='Why did you like the product or not?”'
              onChange={handleEmailChange}
              ></input>
              { email ?
                <p className='name-message'>For authentication reasons, you will not be emailed</p> :
                <></>
              }
          </label>
          <label>
            Question:
            <textarea
              value={body}
              type='text'
              placeholder='Enter Question'
              onChange={handleBodyField}
            ></textarea>
          </label>
          <ImCross key={0} className='CloseModalButton' onClick={onClose} />
          <button className='mod-sub-but'>Submit Question</button>
        </form>
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default QuestionModal;