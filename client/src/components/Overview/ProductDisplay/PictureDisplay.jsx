import React from 'react';

const SelectedPicture = () => {
  return (
    <div className='Layout Selected-Picture'>
      <button className='Layout Scroll-Left-Right Arrow-Left'>
        &lt;
      </button>
      <div className='Layout Main-Pic'>
      <p>Main Picture Here / Add Zoom-In Functionality</p>
      </div>
      <button className='Layout Scroll-Left-Right Arrow-Right'>
        &gt;
      </button>
    </div>
  )
};

export default SelectedPicture;
// Zoom-In/Expanded View Functionality