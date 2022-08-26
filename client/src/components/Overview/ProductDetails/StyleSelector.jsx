import React from 'react';
import SingleStyle from './SingleStyle.jsx';

const StyleSelector = () => {
  // array of styles here
  var styles = Array(7).fill('0');
  return (
      <div className='StyleSelector'>
        {/* Map the array to output Rows of 4 of styles */}
        {/* Figure out how to render rows & styles in those rows */}
        {/* User Map function to render instances of SinlgeStyle.jsx for each entry */}

        <div className='StyleOptions'>
          <button className='StyleButton'>X</button>
          <button className='StyleButton'>X</button>
          <button className='StyleButton'>X</button>
          <button className='StyleButton'>X</button>
        </div>
        <div className='StyleOptions'>
          <button className='StyleButton'>X</button>
          <button className='StyleButton'>X</button>
          <button className='StyleButton'>X</button>
          <button className='StyleButton'>X</button>
        </div>
        <div className='StyleOptions'>
          <button className='StyleButton'>X</button>
          <button className='StyleButton'>X</button>
          <button className='StyleButton'>X</button>
          <button className='StyleButton'>X</button>
        </div>
      </div>
  )
};

export default StyleSelector;

// {styles.map((style) => {
//   <SingleStyle curStyle={style}/>
// })}