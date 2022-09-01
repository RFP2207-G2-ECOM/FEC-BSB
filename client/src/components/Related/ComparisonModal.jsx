import React, { useState } from 'react';
import ReactDom from 'react-dom';
import ComparisonFeatures from './ComparisonFeatures.jsx'
import styles from '../../styles/Related/related.css';

const ComparisonModal = ({ open, children, onClose, productInfo }) => {

  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className='overlay-styles'/>
      <div className='modal-styles'>
        <button onClick={onClose}>Close Modal</button>
        <div>Comparing</div>
        <div className='comparison-title'>
          <div><b>{productInfo.name}</b></div> <div><b>{productInfo.name}</b></div>
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
          {productInfo.features.map((feature, key) =>
            <ComparisonFeatures feature={feature} key={key}/>
          )}
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