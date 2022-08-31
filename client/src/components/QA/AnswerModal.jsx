import React, { useState, useContext } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

import { BsPlusLg } from 'react-icons/bs'
import { ProductContext } from '../../contexts/product-info.context.jsx';

import '../../styles/QA/AnswerModal.css';

const AnswerModal = ({ open, product_id, onClose, question_body }) => {
  const { product } = useContext(ProductContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const [photoCount, setPhotoCount] = useState(0);
  const [photoValues, setPhotoValues] = useState({});

  const handleClick = () => {
    setPhotoCount(photoCount + 1);
  };

  const handleNameChange = (e) => {
    if (e.target.value.length <= 60) {
      setName(e.target.value)
    }
  }

  const handleOnChange = (e) => {
    const abc = {};
    abc[e.target.className] = e.target.value;
    setPhotoValues({ ...photoValues, ...abc });
  };

  const handleSubmit = (e) => {
    const data = {
      body,
      name,
      email,
      product_id: parseInt(product_id),
      photos: Object.values(photoValues).map(val => val)
    }

    axios.post(`${process.env.BASE_URI}qa/questions/${product_id}/answers`, data, {
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
        <h1 className='ans-mod-title'>Submit Answer</h1>
        <h3 className='ans-mod-subtitle'>{`${product.name}: ${question_body}`}</h3>
        <hr></hr>
        <form className='modal-form' onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              value={name}
              type='text'
              placeholder='Example: jack543!'
              onChange={handleNameChange}
            ></input>
            { name ?
              <p className='name-message'>For privacy reasons, do not use your full name or email address</p> :
              <></>
            }
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
            Answer:
            <textarea
              value={body}
              type='text'
              placeholder='Enter Answer'
              onChange={e => setBody(e.target.value)}
            ></textarea>
          </label>
          <div
            onClick={handleClick}
            className='add-photo'
          >
            Click me to add a photo!
          </div>
          <br></br>
          {Array.from(Array(photoCount)).map((c, index) => {
            return (
              <input
                onChange={handleOnChange}
                key={index}
                className={index}
                type="text"
                placeholder='Enter photo URL'
              ></input>
            );
          })}

          <div className='more-answers'>
            <button onClick={e => onClose(e.preventDefault())}>Cancel</button>
            <button className='mod-sub-but'>Submit Answer</button>
          </div>
        </form>
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default AnswerModal;