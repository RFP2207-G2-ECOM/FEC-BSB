import React from 'react';
import SingleStyle from './SingleStyle.jsx';

const StyleInfo = () => {
  // array of styles here
  var styles = Array(7).fill('0');
  return (
      <div className='StyleName'>
        <p className='BLeft'></p>
        <p className='bolded Style-Title BCenter'>STYLE > </p>
        <p className='Style-Title BRight'>SELECTED STYLE</p>
      </div>
  )
};

export default StyleInfo;