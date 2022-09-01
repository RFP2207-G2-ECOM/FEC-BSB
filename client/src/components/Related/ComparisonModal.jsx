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
        <div>Comparing</div>
        <div className='comparison-title'>
          <div><b>Current Product Name</b></div> <div><b>This product Name</b></div>
        </div>
        <div className='columns'>
        <div className='camparison-column'>
        <ul>Fabric</ul>
        <ul>Fabric</ul>
        <ul>Fabric</ul>
        <ul>Fabric</ul>
        <ul>Fabric</ul>
        <ul>Fabric</ul>
        <ul>Fabric</ul>
        <ul>Fabric</ul>
        </div>
        <div className='camparison-column'>
        <ul>Fabric</ul>
        <ul>Fabric</ul>
        <ul>Fabric</ul>
        <ul>Fabric</ul>
        <ul>Fabric</ul>
        <ul>Fabric</ul>
        <ul>Fabric</ul>
        <ul>Fabric</ul>
        <ul>Fabric</ul>
        </div>
        <div className='camparison-column'>
        <ul>Fabric</ul>
        <ul>Fabric</ul>
        <ul>Fabric</ul>
        <ul>Fabric</ul>
        <ul>Fabric</ul>
        <ul>Fabric</ul>
        <ul>Fabric</ul>
        <ul>Fabric</ul>
        </div>
        </div>
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default ComparisonModal;