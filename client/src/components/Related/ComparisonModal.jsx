import React, { useState } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import styles from '../../styles/Related/related.css';

const ComparisonModal = ({ open, children, onClose }) => {

  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className='overlay-styles'/>
      <div className='modal-styles'>
        <button onClick={onClose}>Close Modal</button>
        {children}
        <div>Comparing</div>
        <div>Current Product Name</div> <div>This product Name</div>
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default ComparisonModal;