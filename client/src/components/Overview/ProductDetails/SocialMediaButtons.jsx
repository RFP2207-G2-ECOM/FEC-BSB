import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaPinterestSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaRedditSquare } from 'react-icons/fa';
import { IconContext} from 'react-icons';

const SocialMediaButtons = () => {
  return (
    <IconContext.Provider value={{className:'btn'}} >
      <div className='Social-Media-Buttons' >
          <a className='SMButton' target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=InsertOurURLHere.com">
            <FaFacebookSquare />
          </a>
          <a className='SMButton' target='_blank' href='https://www.pinterest.com/pin/create/button/'>
            <FaPinterestSquare />
          </a>
          <a className='SMButton' target="_blank" href="https://twitter.com/intent/tweet">
            <FaTwitterSquare />
          </a>
          <a className='SMButton' target='_blank' href={`https://www.reddit.com/r/test/submit?title=What%20An%20Amazing%20Deal&url=${`Insert Our Own URL Here`}`}>
            <FaRedditSquare />
          </a>

      </div>
    </IconContext.Provider>
  )
};

export default SocialMediaButtons;