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
        <div className='SMBRow'>
          <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=example.org">
          <FaFacebookSquare />
          </a>
          <a target='_blank' href='https://www.pinterest.com/pin/create/button/'>
            <FaPinterestSquare />
          </a>
        </div>
        <div className='SMBRow'>
          <a target="_blank" href="https://twitter.com/intent/tweet">
            <FaTwitterSquare />
          </a>
          <a target='_blank' href={`https://www.reddit.com/r/test/submit?title=What%20An%20Amazing%20Deal&url=${`Insert Our Own URL Here`}`}>
            <FaRedditSquare />
          </a>
        </div>
      </div>
    </IconContext.Provider>
  )
};

export default SocialMediaButtons;