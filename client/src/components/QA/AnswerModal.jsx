import React, { useState, useContext, useEffect } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

import { BsPlusLg } from 'react-icons/bs'
import { ProductContext } from '../../contexts/product-info.context.jsx';
import { QuestionsContext } from '../../contexts/question.context.jsx';

import '../../styles/QA/AnswerModal.css';
import { ImCross } from 'react-icons/im';

const AnswerModal = ({ open, product_id, onClose, question_body }) => {
  const { product } = useContext(ProductContext);
  const { results, setResults } = useContext(QuestionsContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const [photoCount, setPhotoCount] = useState(0);
  const [photos, setPhotos] = useState(null);

  const initState = () => {
    setPhotos(null);
    setName('');
    setEmail('');
    setBody('');
  }

  const handleEmailChange = (e) => {
    if (e.target.value.length <= 60) {
      setEmail(e.target.value)
    }
  }

  const handleBodyChange = (e) => {
    if (e.target.value.length <= 1000) {
      setBody(e.target.value)
    }
  }

  const handleNameChange = (e) => {
    if (e.target.value.length <= 60) {
      setName(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    const counter = 0;

    const data = {
      body,
      name,
      email,
      product_id: parseInt(product_id),
      photos: [],
    }

    if (photos !== null) {
      const photoLength = photos.length;
      var arrPhotos = [...photos];

      arrPhotos.map((photo, index) => {
        var formData = new FormData();
        formData.append('file', photo);
        formData.append('upload_preset', 'nfpy2dhh');

        axios.post('https://api.cloudinary.com/v1_1/ase-boogy-cloudinator/image/upload', formData)
          .then(response => {
            data.photos = [...data.photos, response.data.url];
            if (data.photos.length >= photoLength) {
              axios.post(`${process.env.BASE_URI}qa/questions/${product_id}/answers`, data, {
                headers: {
                  'Authorization': process.env.GITHUB_TOKEN
                }
              })
                .then(result => {
                  var baseURI = process.env.BASE_URI;
                  axios.get(`${baseURI}qa/questions/?product_id=${process.env.PRODUCT_ID}&page=1&count=30`, {
                    headers: {
                      'Authorization': process.env.GITHUB_TOKEN
                    }
                  })
                    .then(result => {
                      setResults(result.data.results);
                    })
                  onClose();
                })
                .catch(error => {
                  console.log('ERROR:', error);
                })
            }
          })
      })
    } else {
      axios.post(`${process.env.BASE_URI}qa/questions/${product_id}/answers`, data, {
        headers: {
          'Authorization': process.env.GITHUB_TOKEN
        }
      })
        .then(result => {
          var baseURI = process.env.BASE_URI;
          axios.get(`${baseURI}qa/questions/?product_id=${process.env.PRODUCT_ID}&page=1&count=30`, {
            headers: {
              'Authorization': process.env.GITHUB_TOKEN
            }
          })
            .then(result => {
              setResults(result.data.results);
            })
          onClose();
        })
        .catch(error => {
          console.log('ERROR:', error);
        })
    }
    initState();
    e.preventDefault();
  }

  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div className='overlay-styles' onClick={onClose} />
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
              placeholder='Example: jack@email.com'
              onChange={handleEmailChange}
            ></input>
            {email ?
              <p className='name-message'>For authentication reasons, you will not be emailed</p> :
              <></>
            }
          </label>
          <label>
            Answer:
            <textarea
              value={body}
              type='text'
              placeholder='Enter Answer'
              onChange={handleBodyChange}
            ></textarea>
          </label>

          <input
            label='Photo Upload'
            type='file'
            onChange={(e) => setPhotos(e.target.files)}
            multiple
          />
          <p className='photo-message'>Up to 5 images can be added</p>
          <div className='more-answers'>
            <ImCross key={0} className='CloseModalButton' onClick={onClose} />
            <button className='mod-sub-but'>Submit Answer</button>
          </div>
        </form>
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default AnswerModal;